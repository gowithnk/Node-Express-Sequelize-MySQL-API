import { Router } from "express";

import {
  createProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
  getProductById,
} from "../controllers";

const router = Router();

router.post("/", createProduct);

router.get("/", getAllProduct);

router.get("/:id", getProductById);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;