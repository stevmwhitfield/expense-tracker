import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_HOST,
  password: process.env.DB_PASS,
  host: "localhost",
  port: 5432,
  database: "expense_tracker",
});

export default pool;
