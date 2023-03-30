const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.DB_HOST,
  password: process.env.DB_PASS,
  host: "localhost",
  port: 5432,
  database: "expense_tracker",
});

module.exports = pool;
