import { productConstant } from "./productConstants";
import { productService } from "../../services/productService";
import { displayError, displaySuccess } from "../../store/alertActions";
import { history } from "../../helpers/history";

export const createProduct = (product, images) => (dispatch) => {
  dispatch(request({ product }));

  productService.createProduct(product, images).then(
    (product) => {
      dispatch(success(product));
      history.push("/");
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
