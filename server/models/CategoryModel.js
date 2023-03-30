// Import database connection
const pool = require("../postgres/db-conn");

class Category {
  // Return a query to create a new category with the given name
  static create = async (name) => {
    return await pool.query(
      "insert into categories(category_name) values($1) returning *;",
      [name]
    );
  };

  // Return a query to get a specific category
  static read = async (id) => {
    return await pool.query(
      "select * from categories where category_id = $1;",
      [id]
    );
  };

  // Return a query to get all categories
  static readAll = async () => {
    return await pool.query("select * from categories;");
  };

  // Return a query to update the name of a specific category
  static update = async (id, name) => {
    return await pool.query(
      "update categories set category_name=$2 where category_id = $1;",
      [id, name]
    );
  };

  // Return a query to delete a specific category
  static delete = async (id) => {
    return await pool.query("delete from categories where category_id = $1", [
      id,
    ]);
  };
}

module.exports = Category;
