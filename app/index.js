
//  !!We're using CommonJS, not ES Modules, so having these kinds of imports would throw errors, even for small stuff like a string!!
// import password from './mongopw.js'
// import mongoose from 'mongoose';

// console.log("hello world");
const express = require('express');
const mongoose = require('mongoose');
// const password = require('./mongopw.js');
require('dotenv').config();
const password = process.env.MONGO_PW;

const app = express();


app.get('/', (req, res) => {
  res.send('Hello from Node API Server');
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

