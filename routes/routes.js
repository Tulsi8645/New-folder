const express = require('express');
const router = express.Router();

const { 
  healthCheck,
  getProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct
 } = require('../controller/controller');

router.get("/healthcheck", healthCheck);
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);


module.exports = router;