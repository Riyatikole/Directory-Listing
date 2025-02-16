const Products = require('../models/ProductListingModels');

module.exports.getAllProducts = async (req, res) => {
  try {
  
    const products = await Products.find(); 
    
    res.status(200).json(products); 
  } catch (err) {
   
    res.status(500).json({ message: err.message });
  }
};
