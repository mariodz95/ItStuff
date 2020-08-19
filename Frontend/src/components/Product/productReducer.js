import { productConstant } from "./productConstants";

const initialState = {
  newProduct: {},
  loading: false,
  error: {},
};

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
    default:
      return state;
  }
}
