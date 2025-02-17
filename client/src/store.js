import { configureStore } from '@reduxjs/toolkit';  
import { productListReducer, updateProductReducer } from './Reducers/ProductReducers';

const store = configureStore({
  reducer: {
    productList: productListReducer,
    updateProduct: updateProductReducer,
  },
 
});

export default store;
