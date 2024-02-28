const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

//Import the Router

const productRouter = require("./API/routes/product");
const orderRouter = require("./API/routes/order");
const { error } = require("console");

app.use(morgan("dev")); //Log every request to the console
app.use(bodyParser.urlencoded({ extended: false })); //Parse URL encoded data
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-control-Allow-Origin", "*");
  res.header("Access-control-Allow-Origin", "Origin, Accept, Auth");
  if (req.method === "OPTIONS") {
    res.header("Allow-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
});
app.use(express.json()); //
app.use("/product", productRouter);
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
module.exports = app;
