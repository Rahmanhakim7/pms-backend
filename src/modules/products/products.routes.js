const express =  require("express");
const router = express.Router();

const productController = require("./products.controller");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProducts);
router.put("/:id", productController.updateProducts);
router.delete("/:id", productController.deleteProduct);
module.exports = router;