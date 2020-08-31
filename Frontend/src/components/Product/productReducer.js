import { productConstant } from "./productConstants";

let newProduct = JSON.parse(localStorage.getItem("newProduct"));
const initialState = newProduct
  ? { loading: false, newProduct, product: null, error: {} }
  : {};

export default function products(state = initialState, action) {
  switch (action.type) {
    case productConstant.CREATE_REQUEST: {
      return { ...state, loading: true };
    }
    case productConstant.CREATE_SUCCESS: {
      return {
        ...state,
        newProduct: action.product,
      };
    }
    case productConstant.CREATE_FAILURE: {
      return { ...state, error: action.error };
    }
    case productConstant.GET_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case productConstant.GET_SUCCESS: {
      return { ...state, product: action.product };
    }
    case productConstant.GET_FAILURE: {
      return { ...state, error: action.error };
    }
    default:
      return state;
  }
}
