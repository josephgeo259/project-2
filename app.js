require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const hbs = require('hbs');
app.set('view engine', 'hbs');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const gmsController = require("./controllers/gmsController.js");
app.use('/', gmsController);


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection

db.on('open',() => {
  console.log('successfully connected to the db')
})
db.on('error',(error)=> {
  console.log(error)
})

module.exports= app;

