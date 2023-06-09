// Import database connection
import pool from "../postgres/db-conn";

class Expense {
  // Insert new expense
  static create = async (
    date: string,
    amount: number,
    description: string,
    categoryId: number
  ) => {
    return await pool.query(
      "insert into expenses(date, amount, description, category_id) values($1, $2, $3, $4) returning *;",
      [date, amount, description, categoryId]
    );
  };

  // Get a specific expense
  static read = async (id: number) => {
    return await pool.query("select * from expenses where expense_id = $1", [
      id,
    ]);
  };

  // Get all expenses
  static readAll = async () => {
    return await pool.query("select * from expenses;");
  };

  // Edit one or more properties of a specific expense
  static update = async (
    id: number,
    date: string,
    amount: number,
    description: string,
    categoryId: number
  ) => {
    return await pool.query(
      "update expenses set date=$2, amount=$3, description=$4, category_id=$5 where expense_id=$1",
      [id, date, amount, description, categoryId]
    );
  };

  // Delete a specific expense
  static delete = async (id: number) => {
    return await pool.query("delete from expenses where expense_id = $1", [id]);
  };
}

export default Expense;
