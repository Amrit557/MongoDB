const mongoose = require('mongoose');
const Product = require('./models/productModel');

mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const products = [
  {
    name: 'T-Shirt',
    price: 499,
    category: 'Clothing',
    variants: [
      { color: 'Red', size: 'M', stock: 25 },
      { color: 'Blue', size: 'L', stock: 10 }
    ]
  },
  {
    name: 'Running Shoes',
    price: 2999,
    category: 'Footwear',
    variants: [
      { color: 'Black', size: '8', stock: 15 },
      { color: 'White', size: '9', stock: 5 }
    ]
  }
];

Product.insertMany(products)
  .then(() => console.log('Products inserted successfully'))
  .finally(() => mongoose.connection.close());


