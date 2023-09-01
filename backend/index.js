const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRouter = require("../backend/routes/products");
const app = express();
dotenv.config();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
mongoose
  .connect(
    `mongodb+srv://sairamnulakani4:${process.env.MONGO_PASSWORD}@cluster0.bzwhuop.mongodb.net/furniture?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

app.use("/api/products", productRouter);
app.listen(8090, () => {
  console.log("Server Running");
});
