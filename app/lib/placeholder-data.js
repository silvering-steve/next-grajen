// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Yeni Lestari',
    email: 'yeni@grajen.com',
    password: '123456',
  },
];

const jemaat = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Cik Yeni",
    member_number: "GRJN1",
    nik: "1234567890112345",
    birthdate: "2000-01-01",
    religion: "Islam",
    image_url: "/customers/delba-de-oliveira.png"
  },
  {
    id: "c32f345a-fd6a-4a0a-b879-04588f04bd2c",
    name: "John Doe",
    member_number: "JD123",
    nik: "9876543210987654",
    birthdate: "1995-05-15",
    religion: "Christianity",
    image_url: "/customers/delba-de-oliveira.png"
  },
  {
    id: "8bb8f149-8313-4c09-8b82-7b61d0e62c8f",
    name: "Maria Rodriguez",
    member_number: "MR567",
    nik: "5678901234567890",
    birthdate: "1988-09-20",
    religion: "Catholicism",
    image_url: "/customers/delba-de-oliveira.png"
  },
  {
    id: "f428be35-7a49-4cb8-9d85-6c7912d303ec",
    name: "Ahmad Ali",
    member_number: "AA789",
    nik: "4567890123456789",
    birthdate: "1992-04-08",
    religion: "Islam",
    image_url: "/customers/delba-de-oliveira.png"
  },
  {
    id: "e7a04912-7317-4c0c-8e16-85bc3e9b6d0d",
    name: "Lily Johnson",
    member_number: "LJ456",
    nik: "2345678901234567",
    birthdate: "1985-12-03",
    religion: "Christianity",
    image_url: "/customers/delba-de-oliveira.png"
  },
  {
    id: "d4d24b60-5eab-4d6d-8773-d149c2d8bc1c",
    name: "Fatima Ahmed",
    member_number: "FA321",
    nik: "3456789012345678",
    birthdate: "1998-07-18",
    religion: "Islam",
    image_url: "/customers/delba-de-oliveira.png"
  },
  {
    id: "7f8b2df2-46b7-4c63-bc3f-18ef556aa51e",
    name: "Christopher Lee",
    member_number: "CL654",
    nik: "6789012345678901",
    birthdate: "1980-03-25",
    religion: "Buddhism",
    image_url: "/customers/delba-de-oliveira.png"
  },
  {
    id: "a72454a3-3ab8-4f27-9cb4-909b0b8e3b5d",
    name: "Isabella Santos",
    member_number: "IS987",
    nik: "8901234567890123",
    birthdate: "1993-11-11",
    religion: "Catholicism",
    image_url: "/customers/delba-de-oliveira.png"
  },
  {
    id: "b09f82b7-ec16-4a4a-b3a2-6e1c62d2fb4f",
    name: "Raj Patel",
    member_number: "RP234",
    nik: "0123456789012345",
    birthdate: "1987-06-29",
    religion: "Hinduism",
    image_url: "/customers/delba-de-oliveira.png"
  },
  {
    id: "6c92c146-af71-42d5-8109-7e81d2d4eac1",
    name: "Sophia Kim",
    member_number: "SK789",
    nik: "7654321098765432",
    birthdate: "1996-08-14",
    religion: "Christianity",
    image_url: "/customers/delba-de-oliveira.png"
  }
]

const invoices = [
  {
    customer_id: jemaat[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: jemaat[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: jemaat[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: jemaat[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: jemaat[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: jemaat[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: jemaat[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: jemaat[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: jemaat[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: jemaat[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: jemaat[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: jemaat[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: jemaat[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: jemaat[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: jemaat[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  jemaat,
  invoices,
  revenue,
};
