
const express = require('express');
const router = express.Router();
const {
  getAllProducts, updateProduct
} = require('../controllers/ProductListingController');

router.get('/', getAllProducts);
router.put('/update/:productId', updateProduct); 



module.exports = { productRoutes: router };
