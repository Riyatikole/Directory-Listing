import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk }from 'redux-thunk';  
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './Reducers/ProductReducers';


const reducer = combineReducers({
  productList: productListReducer
});

const initialState = {};  


const middleware = [thunk];

// Create store
const store = createStore(
  reducer, 
  initialState, 
  composeWithDevTools(
    // applyMiddleware(...middleware)  // Apply the middleware with devTools support
  )
);

export default store;
