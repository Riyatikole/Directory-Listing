import { PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productListConstants"


export const listProducts = () => async (dispatch) =>{
 try{
    dispatch({type: PRODUCT_LIST_REQUEST})
    const {data} = await fetch('/dummydata/Allproducts.json');

    dispatch({
        type:PRODUCT_LIST_SUCCESS,
        payload:data
    })
    
 }catch(error){
    dispatch({type: PRODUCT_LIST_FAILURE,
        payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
 }
}

