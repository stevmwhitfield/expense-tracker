DROP TABLE IF EXISTS expense_tracker;

CREATE DATABASE expense_tracker;

CREATE TABLE categories(
  category_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category_name VARCHAR(255) NOT NULL
);

CREATE TABLE expenses(
  expense_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  date DATE NOT NULL,
  amount NUMERIC NOT NULL,
  description VARCHAR(255),
  category_id INT NOT NULL,
  CONSTRAINT category_fk FOREIGN KEY(category_id) REFERENCES categories(category_id)
);

-- INSERT INTO categories(category_name) values('Housing');
-- INSERT INTO categories(category_name) values('Transportation');
-- INSERT INTO categories(category_name) values('Food');
-- INSERT INTO categories(category_name) values('Utilities');
-- INSERT INTO categories(category_name) values('Medical');
-- INSERT INTO categories(category_name) values('Insurance');
-- INSERT INTO categories(category_name) values('Clothing');
-- INSERT INTO categories(category_name) values('Household items');
-- INSERT INTO categories(category_name) values('Debt');
-- INSERT INTO categories(category_name) values('Investment');
-- INSERT INTO categories(category_name) values('Education');
-- INSERT INTO categories(category_name) values('Gifts');
-- INSERT INTO categories(category_name) values('Entertainment');
-- INSERT INTO categories(category_name) values('Personal');