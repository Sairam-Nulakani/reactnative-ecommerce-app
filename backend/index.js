const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

mongoose
  .connect(
    `mongodb+srv://sairamnulakani4:${process.env.MONGO_PASSWORD}@cluster0.bzwhuop.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

app.listen(8090, () => {
  console.log("Server Running");
});
