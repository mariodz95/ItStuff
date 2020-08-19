import { authHeader } from "../helpers/authHeader";
import { handleResponse } from "./handleResponse";
import { url } from "./url";
import { categories } from "../shared/Categories";
import axios from "axios";

export const productService = {
  createProduct,
};

function createProduct(product, images) {
  let formData = new FormData();
  formData.append("title", JSON.stringify(product.title));
  formData.append("description", JSON.stringify(product.description));
  formData.append("price", JSON.stringify(product.price));

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
    .then(handleResponse);

  // const requestOptions = {
  //   method: "POST",
  //   headers: {
  //     "content-type": "multipart/form-data",
  //     Authorization: "Bearer " + user.token,
  //   },
  // };
  // return fetch(`${url}product/create?formData`, formData, requestOptions).then(
  //   handleResponse
  // );
}
