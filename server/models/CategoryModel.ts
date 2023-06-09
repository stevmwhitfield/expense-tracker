// Import database connection
import pool from "../postgres/db-conn";

class Category {
  // Insert new category
  static create = async (name: string) => {
    return await pool.query(
      "insert into categories(category_name) values($1) returning *;",
      [name]
    );
  };

  // Get a specific category
  static read = async (id: number) => {
    return await pool.query(
      "select * from categories where category_id = $1;",
      [id]
    );
  };

  // Get all categories
  static readAll = async () => {
    return await pool.query("select * from categories;");
  };

  // Edit the name of a specific category
  static update = async (id: number, name: string) => {
    return await pool.query(
      "update categories set category_name=$2 where category_id = $1;",
      [id, name]
    );
  };

  // Delete a specific category
  static delete = async (id: number) => {
    return await pool.query("delete from categories where category_id = $1", [
      id,
    ]);
  };
}

export default Category;
