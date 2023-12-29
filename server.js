const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const app = express();

//connection to mandodb
mongoose
  .connect("mongodb+srv://root:0000@cluster0.jovcvx2.mongodb.net/NodeApi") // use env for this kind of secret urls
  .then(() => {
    console.log("connected to mangodb");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());

//routes
app.get("/healthcheck", (req, res) => {
  res.send("server is working successfully.");
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const products = await Product.create(req.body);
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    //we cannot find any product by given id
    if (!product) {
      return res
        .status(404)
        .json({ message: "cannot find any product with ID" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    //we cannot find any product by given id
    if (!product) {
      return res
        .status(404)
        .json({ message: "cannot find any product with ID" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(4000, () => {
  console.log("Node api is running on port 4000");
});
