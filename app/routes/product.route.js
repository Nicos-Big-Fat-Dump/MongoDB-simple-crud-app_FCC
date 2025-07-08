const express = require("express");
// const Product = require("../models/product.model.js");
const router = express.Router();

// controllers
const { postProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');


router.post('/', postProduct);
router.get('/', getProducts);
router.get('/:id', getProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router;