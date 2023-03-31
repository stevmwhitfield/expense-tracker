const express = require("express");
const router = express.Router();

const controller = require("../controllers/CategoryController");

// Set routes for all 'category' CRUD operations
router.post("/", controller.createCategory);
router.get("/", controller.readAllCategories);
router.get("/:id", controller.readCategory);
router.put("/:id", controller.updateCategory);
router.delete("/:id", controller.deleteCategory);

module.exports = router;
