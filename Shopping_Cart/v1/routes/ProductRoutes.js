const express = require("express");
const router = express.Router();
const Product = require("../models/Product")

// show the products 
router.get("/products", async (req, res) => {
    const productsArray = await Product.find({});
    res.render("products/index", { productsArray })
})


// create a product
router.get("/product/new", (req, res) => {
    res.render("products/new");
})

// add product
router.post("/products", async (req, res) => {
    const { name, price, img, desc } = req.body;
    await Product.create({ name, price, img, desc });
    res.redirect("/products")

})

router.get("/products/:productId", async (req, res) => {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res.render('products/show', { product })

})
module.exports = router;