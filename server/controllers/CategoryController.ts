import { Request, Response } from "express";
import Category from "../models/CategoryModel";

// Insert new category
const createCategory = async (req: Request, res: Response) => {
  try {
    const { name }: { name: string } = req.body;
    const category = await Category.create(name);
    res.json({ message: "Created new category.", category: category.rows[0] });
  } catch (err: any) {
    console.error(err.message);
    res.json({ status: res.statusCode, message: "Failed to create category." });
  }
};

// Get a specific category
const readCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.read(Number(id));
    if (category.rowCount > 0) {
      res.json(category.rows[0]);
    } else {
      res.status(404).json({
        status: res.statusCode,
        errorMessage: "Category does not exist.",
      });
    }
  } catch (err: any) {
    console.error(err.message);
    res.json({ status: res.statusCode, message: "Failed to read category." });
  }
};

// Get all categories, if any exist
const readAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.readAll();
    if (categories.rows.length > 0) {
      res.json(categories.rows);
    } else {
      res.json({ message: "No categories found." });
    }
  } catch (err: any) {
    console.error(err.message);
    res.json({
      status: res.statusCode,
      message: "Failed to read all categories.",
    });
  }
};

// Edit the name of a specific category
const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name }: { name: string } = req.body;
    const category = await Category.update(Number(id), name);
    res.json({ message: "Updated category.", category: category.rows[0] });
  } catch (err: any) {
    console.error(err.message);
    res.json({ status: res.statusCode, message: "Failed to update category." });
  }
};

// Delete a specific category
const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.delete(Number(id));
    res.json({ message: "Deleted category." });
  } catch (err: any) {
    console.error(err.message);
    res.json({ status: res.statusCode, message: "Failed to delete category." });
  }
};

export default {
  createCategory,
  readCategory,
  readAllCategories,
  updateCategory,
  deleteCategory,
};
