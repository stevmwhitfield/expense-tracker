import express from "express";
import controller from "../controllers/ExpenseController";

const router = express.Router();

// Set routes for all 'expense' CRUD operations
router.post("/", controller.createExpense);
router.get("/", controller.readAllExpenses);
router.get("/:id", controller.readExpense);
router.put("/:id", controller.updateExpense);
router.delete("/:id", controller.deleteExpense);

export default router;
