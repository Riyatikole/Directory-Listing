// models/Product.js
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true,
    },
    priceInUnit: {
      type: Number,
      required: true,
    },
    length: {
      type: String,
      default: '',
    },
    material: {
      type: String,
      default: '',
    },
    shape: {
      type: String,
      default: '',
    },
    thickness: {
      type: String,
      default: '',
    },
    surfaceFinish: {
      type: String,
      default: '',
    },
    outerDiameter: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);


const Products = mongoose.model('Product', productSchema);

module.exports = Products;
