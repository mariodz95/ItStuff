import { productConstant } from "./productConstants";
import { productService } from "../../services/productService";
import { displayError } from "../../store/alertActions";
import { history } from "../../helpers/history";

export const createProduct = (product, images, category) => (dispatch) => {
  dispatch(request({ product, images, category }));

  productService.createProduct(product, images, category).then(
    (product) => {
      localStorage.setItem("newProduct", JSON.stringify(product));
      dispatch(success(product));
      history.push("/productdetail");
    },
    (error) => {
      dispatch(failure(error));
      dispatch(displayError(error));
    }
  );

  function request(product) {
    return { type: productConstant.CREATE_REQUEST, product };
  }
  function success(product) {
    return { type: productConstant.CREATE_SUCCESS, product };
  }
  function failure(error) {
    return { type: productConstant.CREATE_FAILURE, error };
  }
};

export const getProduct = (id) => (dispatch) => {
  dispatch(request({ id }));

  productService.getProduct(id).then(
    (product) => {
      dispatch(success(product));
    },
    (error) => {
      dispatch(failure(error));
      dispatch(displayError(error));
    }
  );

  function request(product) {
    return { type: productConstant.GET_REQUEST, product };
  }
  function success(product) {
    return { type: productConstant.GET_SUCCESS, product };
  }
  function failure(error) {
    return { type: productConstant.GET_FAILURE, error };
  }
};
