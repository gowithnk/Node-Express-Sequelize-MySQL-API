import {Router} from "express";
import  productRoutes  from "./products";
import  todoRoutes  from "./todos";

const router = Router();
router.use("/products", productRoutes);
router.use("/todos", todoRoutes);



export default router;

