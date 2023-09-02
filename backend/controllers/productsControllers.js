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
      res.status(200).json(products);
    } catch (err) {
      return res.status(500).json({ message: "Failed to Get The Products" });
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      return res.status(200).json({ message: "success", product: product });
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
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ message: "Failed to Get the Products" });
    }
  },
  modifyProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      return res.status(200).json({ product });
    } catch (err) {
      return res.status(500).json("Failed to Update");
    }
  },
};
