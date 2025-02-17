import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE } from "../constants/productListConstants"

export const productListReducer = (state = { items: [] }, action) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, items: [] };
  
      case PRODUCT_LIST_SUCCESS:
        return { loading: false, items: action.payload };
  
      case PRODUCT_LIST_FAILURE:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export const updateProductReducer = (state = { items: [] }, action) => {
 

    switch (action.type) {
      case UPDATE_PRODUCT_SUCCESS:
        const updatedProduct = action.payload.product;
       

        // 
        if (!Array.isArray(state.items)) {
          console.error("Expected items to be an array, but found:", state.items);
          return state; 
        }

        return {
          ...state,
          items: state.items.map((product) =>
            product._id === updatedProduct._id ? { ...product, ...updatedProduct } : product
          ),
          loading: false,  
        };

      case UPDATE_PRODUCT_FAILURE:
        return {
          ...state,
          error: action.payload, 
          loading: false,         
        };

      default:
        return state;
    }
};

  
  