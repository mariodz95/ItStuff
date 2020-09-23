import { productConstant } from "./productConstants";
import { productService } from "../../services/productService";
import { displayError } from "../../store/alertActions";
import { history } from "../../helpers/history";

export const createProduct = (product, images) => (dispatch) => {
  dispatch(request({ product, images }));

  productService.createProduct(product, images).then(
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

export const getAll = (pageCount, pageSize, search, fromPrice, toPrice) => (
  dispatch
) => {
  dispatch(request());
  productService.getAll(pageCount, pageSize, search, fromPrice, toPrice).then(
    (data) => {
      dispatch(success(data.products));
      dispatch(getPageCount(data.totalPages));
    },
    (error) => {
      dispatch(failure(error));
      dispatch(displayError(error));
    }
  );

  function request() {
    return { type: productConstant.GET_ALL_REQUEST };
  }
  function success(products) {
    return { type: productConstant.GET_ALL_SUCCESS, products };
  }
  function failure(error) {
    return { type: productConstant.GET_ALL_FAILURE, error };
  }
  function getPageCount(totalPages) {
    return { type: productConstant.GET_TOTAL_PAGES, totalPages };
  }
};

export const getUserProducts = (userId, pageCount, pageSize) => (dispatch) => {
  dispatch(request());
  productService.getUserProducts(userId, pageCount, pageSize).then(
    (data) => {
      dispatch(success(data.userProducts));
      dispatch(getPageCount(data.totalPages));
    },
    (error) => {
      dispatch(failure(error));
      dispatch(displayError(error));
    }
  );

  function request() {
    return { type: productConstant.GET_ALL_USER_PRODUCTS_REQUEST };
  }
  function success(userProducts) {
    return {
      type: productConstant.GET_ALL_USER_PRODUCTS_SUCCESS,
      userProducts,
    };
  }
  function failure(error) {
    return { type: productConstant.GET_ALL_USER_PRODUCTS_FAILURE, error };
  }
  function getPageCount(totalPages) {
    return { type: productConstant.GET_TOTAL_PAGES, totalPages };
  }
};
