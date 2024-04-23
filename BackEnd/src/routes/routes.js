import express from "express";
import { createFoodItem, deleteFoodItem, getFoodList, updateFoodItem} from "../controllers/foodController.js";

const router = express.Router();

router.get("/api/get", getFoodList);
router.post("/api/create", createFoodItem);
router.put("/api/update/:id", updateFoodItem);
router.delete("/api/delete/:id", deleteFoodItem);

export default router;
