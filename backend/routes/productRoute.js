const express=require("express");
const { getAllProducts, createProdcut, updateProduct, deleteProduct, getProduct } = require("../controllers/ProductController");

const router=express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(createProdcut);

router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProduct);

module.exports=router