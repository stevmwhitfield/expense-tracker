import { Request, Response } from "express";
import Expense from "../models/ExpenseModel";

// Insert new expense
const createExpense = async (req: Request, res: Response) => {
  try {
    const {
      date,
      amount,
      description,
      categoryId,
    }: {
      date: string;
      amount: number;
      description: string;
      categoryId: number;
    } = req.body;
    const expense = await Expense.create(date, amount, description, categoryId);
    res.json({
      message: "Created new expense.",
      expense: expense.rows[0],
    });
  } catch (err: any) {
    console.error(err.message);
    res.json({ status: res.statusCode, message: "Failed to create expense." });
  }
};

// Get a specific expense
const readExpense = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const expense = await Expense.read(Number(id));
    if (expense.rowCount > 0) {
      res.json(expense.rows[0]);
    } else {
      res.status(404).json({
        status: res.statusCode,
        errorMessage: "Expense does not exist.",
      });
    }
  } catch (err: any) {
    console.error(err.message);
    res.json({ status: res.statusCode, message: "Failed to read expense." });
  }
};

// Get all expenses
const readAllExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await Expense.readAll();
    if (expenses.rowCount > 0) {
      res.json(expenses.rows);
    } else {
      res.json({ message: "No expenses found." });
    }
  } catch (err: any) {
    console.error(err.message);
    res.json({
      status: res.statusCode,
      message: "Failed to read all expenses.",
    });
  }
};

// Edit a one or more properties of a specific expense
const updateExpense = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      date,
      amount,
      description,
      categoryId,
    }: {
      date: string;
      amount: number;
      description: string;
      categoryId: number;
    } = req.body;
    const expense = await Expense.update(
      Number(id),
      date,
      amount,
      description,
      categoryId
    );
    res.json({
      message: "Updated expense.",
      expense: expense.rows[0],
    });
  } catch (err: any) {
    console.error(err.message);
    res.json({ status: res.statusCode, message: "Failed to update expense." });
  }
};

// Delete a specific expense
const deleteExpense = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const expense = await Expense.delete(Number(id));
    res.json({ message: "Deleted expense." });
  } catch (err: any) {
    console.error(err.message);
    res.json({ status: res.statusCode, message: "Failed to delete expense." });
  }
};

export default {
  createExpense,
  readExpense,
  readAllExpenses,
  updateExpense,
  deleteExpense,
};
