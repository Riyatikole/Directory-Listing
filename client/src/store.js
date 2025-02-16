import { configureStore } from '@reduxjs/toolkit';  
import { productListReducer } from './Reducers/ProductReducers';

const store = configureStore({
  reducer: {
    productList: productListReducer,
  },
 
});

export default store;
