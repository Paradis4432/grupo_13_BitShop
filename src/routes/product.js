const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const product = require("../controllers/product");

const upload = multer({storage: storage})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      /* cb(null, path.extname(file.originalname).indexOf("jpg") != -1 ? path.resolve(__dirname, "../../public/uploads", "products") : path.resolve(__dirname, "../../public/uploads", "users") ) */
      cb(null, path.resolve('../../uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })

  path.resolve('../../uploads/products')

router.get("/", product.index);      
router.get("/create", product.create);
router.get("/edit", product.edit);
router.get("/:id", product.detail);
router.get("/edit/:id", product.detail);
router.get("/cart", product.cart);

router.put("/update/:id", product.update);
router.post("/save",/* [upload.single("image")] */ product.save);
router.delete("/id", product.delete);


module.exports = router;



   
  