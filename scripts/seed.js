const fs = require('fs');
const {Pool} = require('pg');
const {
    invoices,
    jemaat,
    revenue,
    users,
} = require('../app/lib/placeholder-data.js');
const dotenv = require('dotenv');

dotenv.config();

const bcrypt = require('bcrypt');
const {db} = require("@vercel/postgres");

async function seedUsers(client) {
    try {
        const createTable = await client.query(
            `
                CREATE TABLE IF NOT EXISTS users
                (
                    id       UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                    name     VARCHAR(255) NOT NULL,
                    email    TEXT         NOT NULL UNIQUE,
                    password TEXT         NOT NULL
                );
            `
        )

        console.log(`Created "users" table`);

        const seedUsers = users.map(
            async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);

                return client.query(
                    `
                        INSERT INTO users (id, name, email, password)
                        VALUES ($1, $2, $3, $4)
                        ON CONFLICT (id) DO NOTHING;
                    `,
                    [user.id, user.name, user.email, hashedPassword]
                );
            }
        )

        console.log(`Seeded ${seedUsers.length} users`);

        client.release();
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function seedJemaat(client) {
    try {
        const createTable = await client.query(
            `
                CREATE TABLE IF NOT EXISTS jemaat
                (
                    id            UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                    name          VARCHAR(255) NOT NULL,
                    member_number TEXT         NOT NULL UNIQUE,
                    nik           TEXT         NOT NULL,
                    birthdate     DATE         NOT NULL,
                    religion      TEXT         NOT NULL,
                    image_url     TEXT         NOT NULL
                )
            `
        )

        console.log(`Created "jemaat" table`);

        const seedJemaat = jemaat.map(
            async (jemaat) => {
                return client.query(
                    `
                        INSERT INTO jemaat (id, name, member_number, nik, birthdate, religion, image_url)
                        VALUES ($1, $2, $3, $4, $5, $6, $7)
                        ON CONFLICT (id) DO NOTHING;
                    `,
                    [jemaat.id, jemaat.name, jemaat.member_number, jemaat.nik, jemaat.birthdate,
                        jemaat.religion, jemaat.image_url]
                );
            }
        )

        console.log(`Seeded ${seedJemaat.length} users`);

    } catch (error) {
        console.error('Error seeding jemaat:', error);
        throw error;
    }
}

async function main() {
    const pool = await new Pool({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        ssl: {
            rejectUnauthorized: false,
            ca: fs.readFileSync(process.env.POSTGRES_SSL)
        },
        port: 5432,
        max: 5,
        idleTimeoutMillis: 10000,
    });

    const client = await pool.connect();

    await seedUsers(client);
    await seedJemaat(client);
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
