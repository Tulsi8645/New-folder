const express = require('express');
const router = express.Router();
const { getProducts } = require('./controllers/productController');

router.get("/", (req, res) => {
  res.send("Hello Node api,whats up");
});

router.get("/products", getProducts);

module.exports = router;