const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());


mongoose.connect(
  'mongodb+srv://mendes:<030501>@mendes.dg8ce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => console.log('Database connected'),
);
const Product = require('./models/product');
const Category = require('./models/category');
const User = require('./models/user');

const indexRoutes = require('./routes');
const productRoutes = require('./routes/product');
const categoryRoutes = require('./routes/category');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

app.use((req, res) => {
  res.status(404).send('Route not found');
});

module.exports = app;