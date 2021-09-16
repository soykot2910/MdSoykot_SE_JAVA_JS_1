import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  getTopProducts,
} from "../controllers/productController.js";
import upload from "../middleware/fileUploadMiddleware.js";

router.post("/new", upload.single("image"), createProduct);
router.get("/", getProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(deleteProduct)
  .put(updateProduct);
export default router;
