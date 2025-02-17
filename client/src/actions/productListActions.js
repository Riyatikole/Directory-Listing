// actions/productListActions.js
import axios from "axios";
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "../constants/productListConstants";

export const listProducts = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const { data } = await axios.get("http://localhost:8000/api/products");
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAILURE,
        payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      });
    }
  };
  
  export const updateProduct = (productId, updatedProductData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PRODUCT_REQUEST });
      const { data } = await axios.put(`http://localhost:8000/api/products/update/${productId}`, updatedProductData);
     
      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data.product });

      

    
    } catch (error) {
      dispatch({
        type: UPDATE_PRODUCT_FAILURE,
        payload: error.message,
      });
    }
  };
  