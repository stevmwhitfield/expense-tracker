import express from "express";
import controller from "../controllers/CategoryController";

const router = express.Router();

// Set routes for all 'category' CRUD operations
router.post("/", controller.createCategory);
router.get("/", controller.readAllCategories);
router.get("/:id", controller.readCategory);
router.put("/:id", controller.updateCategory);
router.delete("/:id", controller.deleteCategory);

export default router;
