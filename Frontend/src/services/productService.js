import { handleResponse } from "./handleResponse";
import { url } from "./url";
import axios from "axios";

export const productService = {
  createProduct,
  getProduct,
  getAll,
  getUserProducts,
};

function createProduct(product, images) {
  let formData = new FormData();
  formData.append("title", JSON.stringify(product.title));
  formData.append("description", JSON.stringify(product.description));
  formData.append("price", JSON.stringify(product.price));
  formData.append("category", JSON.stringify(product.category));

  images.forEach((element) => {
    formData.append("body", element);
  });
  let user = JSON.parse(localStorage.getItem("user"));

  const config = {
    headers: {
      "content-type": "multipart/form-data",
      Authorization: "Bearer " + user.token,
    },
  };
  return axios
    .post(`${url}product/create?formData`, formData, config)
    .then((response) => response.data);
}

function getProduct(productId) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${url}product/getproduct/${productId}`, requestOptions).then(
    handleResponse
  );
}

function getAll(pageNumber, pageSize, search, fromPrice, toPrice) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(
    `${url}product/getall/${pageNumber}&${pageSize}/${search}/${fromPrice}/${toPrice}`,
    requestOptions
  ).then(handleResponse);
}

function getUserProducts(userId, pageNumber, pageSize) {
  let user = JSON.parse(localStorage.getItem("user"));

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.token,
    },
  };

  return fetch(
    `${url}product/getuserproducts/${userId}&${pageNumber}&${pageSize}`,
    requestOptions
  ).then(handleResponse);
}
