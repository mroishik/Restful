// For Creating the Routes

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome to our API",
  });
});
router.post("/", (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price,
  };
  res.status(200).json({
    message: "Handling POST request to /products",
    createdProject: product,
  });
});

router.get(":/productID", (req, res, next) => {
  // EXCTART THE ID
  const id = req.params.productID;
  if (id === "Speial") {
    res.status(200).json({
      message: "You discovered the ID",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "You Countered an ID",
    });
  }
});

router.patch(":/productID", (req, res, next) => {
  res.status(200).json({
    message: " The Product have been updated",
  });
});

router.delete(":/productID", (req, res, next) => {
  res.status(200).json({
    message: " The Product have been deleted",
  });
});
module.exports = router;
