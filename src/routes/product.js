const express = require("express");
const router = express.Router();
const product = require("../controllers/product");

router.get("/", product.index);      
router.get("/create", product.create);
router.get("/edit", product.edit);
router.get("/cart", product.cart);
router.get("/id", product.detail);


module.exports = router;