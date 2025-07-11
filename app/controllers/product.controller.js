const Product = require('../models/product.model')

// post
const postProduct = async (rez, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
    console.error("Error!!")
  };
};

// get
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

// update
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({message: "Product not found"})
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error){
    res.status(500).json({message: error.message});
  }
};

// delete
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({message: "Product not found"})
    }
    await Product.findByIdAndDelete(id);
    res.status(200).json({message:`${product.name} deleted successfully`});
  } catch (error){
    res.status(500).json({message: error.message});
  }
};

module.exports = {
  postProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
}