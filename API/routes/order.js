const express = require("express");
const router = express.Router();
const morgan = require("morgan");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome to our API",
  });
});
router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(200).json({
    message: "Order was Craeted",
    order: order,
  });
});
router.delete("/:orderID", (req, res, next) => {
  res.status(200).json({
    message: "Order was Deleted",
    orderId: req.params.orderID,
  });
});

module.exports = router;
