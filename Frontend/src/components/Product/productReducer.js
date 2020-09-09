import { productConstant } from "./productConstants";

let newProduct = JSON.parse(localStorage.getItem("newProduct"));
const initialState = newProduct
  ? {
      loading: false,
      newProduct,
      product: null,
      error: {},
      productList: [],
      pageCount: 1,
      pageSize: 10,
      totalPages: 1,
    }
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
    case productConstant.GET_ALL_REQUEST: {
      return { ...state, loading: true };
    }
    case productConstant.GET_ALL_SUCCESS: {
      return { ...state, productList: action.products };
    }
    case productConstant.GET_ALL_FAILURE: {
      return { ...state, error: action.error };
    }
    case productConstant.GET_TOTAL_PAGES: {
      return { ...state, totalPages: action.totalPages };
    }
    default:
      return state;
  }
}
