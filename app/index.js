
//  !!We're using CommonJS, not ES Modules, so having these kinds of imports would throw errors, even for small stuff like a string!!
// import password from './mongopw.js'
// import mongoose from 'mongoose';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const url = process.env.MONGO_URL;

// const Product = require('./models/product.model.js'); // seperated to routes and controllers folder
const productRoutes = require('./routes/product.route.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// happi happi
app.get('/', (req, res) => {
  res.send('Hello from Node API Server');
});

// routes
app.use("/api/products", productRoutes);

// ;3 all previous async functions moved to product controller and route files 

mongoose.connect(`${url}`)
.then(() => {
  console.log('Connected to Database');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  
  });
})
.catch(() => {
  console.log('Connection failed!');
});

