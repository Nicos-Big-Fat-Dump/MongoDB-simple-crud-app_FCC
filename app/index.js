
//  !!We're using CommonJS, not ES Modules, so having these kinds of imports would throw errors, even for small stuff like a string!!
// import password from './mongopw.js'
// import mongoose from 'mongoose';

// console.log("hello world");
const express = require('express');
const mongoose = require('mongoose');
// const password = require('./mongopw.js');
require('dotenv').config();
const password = process.env.MONGO_PW;

const Product = require('./models/product.model.js')

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello from Node API Server');
});

app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message: error.message})
    console.error("Error!!")
  };
});

mongoose.connect(`mongodb+srv://tails:${password}@backenddb.8lkktpq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`)
.then(() => {
  console.log('Connected to Database');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  
  });
})
.catch(() => {
  console.log('Connection failed!');
});

