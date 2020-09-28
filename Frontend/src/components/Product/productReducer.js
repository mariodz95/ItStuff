import { productConstant } from "./productConstants";

let newProduct = JSON.parse(localStorage.getItem("newProduct"));
const initialState = newProduct
  ? {
      loading: false,
      newProduct,
      product: null,
      error: {},
      productList: [],
      userProductList: [],
      pageCount: 1,
      pageSize: 10,
      totalPages: 1,
      deleting: true,
      deleteError: null,
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
      return { ...state, loading: false, productList: action.products };
    }
    case productConstant.GET_ALL_FAILURE: {
      return { ...state, error: action.error };
    }
    case productConstant.GET_TOTAL_PAGES: {
      return { ...state, totalPages: action.totalPages };
    }
    case productConstant.GET_ALL_USER_PRODUCTS_REQUEST: {
      return { ...state, loading: true };
    }
    case productConstant.GET_ALL_USER_PRODUCTS_SUCCESS: {
      return { ...state, loading: false, userProductList: action.userProducts };
    }
    case productConstant.GET_ALL_USER_PRODUCTS_FAILURE: {
      return { ...state, error: action.error };
    }
    case productConstant.DELETE_REQUEST:
      return {
        ...state,
        deleting: true,
      };
    case productConstant.DELETE_SUCCESS: {
      return {
        ...state,
        userProductList: state.userProductList.filter(
          (item) => item.id !== action.productId
        ),
      };
    }
    case productConstant.DELETE_FAILURE:
      return {
        ...state,
        userProductList: state.userProductList.map((product) => {
          if (product.id === action.productId) {
            return { deleteError: action.error };
          }
          return product;
        }),
      };
    default:
      return state;
  }
}
