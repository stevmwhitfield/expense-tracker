const express = require("express");
const router = express.Router();

const controller = require("../controllers/ExpenseController");

// Set routes for all 'expense' CRUD operations
router.post("/", controller.createExpense);
router.get("/", controller.readAllExpenses);
router.get("/:id", controller.readExpense);
router.put("/:id", controller.updateExpense);
router.delete("/:id", controller.deleteExpense);

module.exports = router;
