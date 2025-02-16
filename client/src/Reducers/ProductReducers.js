import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productListConstants"
export const productListReducer = (state = {products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading:true, products: []}

        case PRODUCT_LIST_SUCCESS:
            return {loading:true, products: action.payload}

        case PRODUCT_LIST_FAILURE:
            return {loading:false, error: action.paylaod}

        default:
            return state
    }
}

