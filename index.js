const express = require("express");
var bodyParser = require('body-parser')
const product = require('./src/routes/product')
const category = require('./src/routes/category')
const transaction = require('./src/routes/transaction')
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use('/product', product)
app.use('/category', category)
app.use('/transaction', transaction)


app.listen (port, () =>{
  console.log(`Example app Listening on port ${port}`)
})
