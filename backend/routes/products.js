const router = require("express").Router();
const productController = require("../controllers/productsControllers");

router.get("/", productController.getAllProducts);
router.post("/", productController.createdProduct);
router.get("/:id", productController.getProduct);
router.get("/search/:key", productController.searchProduct);
router.patch("/:id", productController.modifyProduct);

module.exports = router;
