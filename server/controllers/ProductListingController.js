const Products = require('../models/ProductListingModels');

module.exports.getAllProducts = async (req, res) => {
  try {
  
    const products = await Products.find(); 
    
    res.status(200).json(products); 
  } catch (err) {
   
    res.status(500).json({ message: err.message });
  }
};

module.exports.updateProduct = async (req, res) => {
  
  
  const { productId } = req.params;
  const updatedData = req.body; 


  try {
   
    const product = await Products.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

   
    for (let key in updatedData) {
      if (updatedData.hasOwnProperty(key)) {
        product[key] = updatedData[key]; 
      }
    }

    await product.save();

    return res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};