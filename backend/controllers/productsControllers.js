const Product = require("../models/Products");

module.exports = {
  createdProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res
        .status(200)
        .json({ status: "success", message: "Product Added Successfully" });
    } catch (err) {
      return res
        .status(500)
        .json({ status: "fail", messge: "Failed to Add Product" });
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json({ length: products.length, products: { products } });
    } catch (err) {
      return res.status(500).json({ message: "Failed to Get The Products" });
    }
  },
  getProduct: async (req, res) => {
    const id = req.params.id * 1;
    try {
      const product = await Product.findById(id);
      return res.status(200).json({ message: "success", product: { product } });
    } catch (err) {
      return res.status(500).json({ message: "Failed to Get Product" });
    }
  },
  searchProduct: async (req, res) => {
    try {
      const result = await Product.aggregate([
        {
          $search: {
            index: "furniture",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      return res.status(200).json({ products: result });
    } catch (err) {
      return res.status(500).json({ message: "Failed to Get the Products" });
    }
  },
};
