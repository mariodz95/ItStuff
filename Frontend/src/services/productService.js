import { authHeader } from "../helpers/authHeader";
import { handleResponse } from "./handleResponse";
import { url } from "./url";
import { categories } from "../shared/Categories";
import axios from "axios";

export const productService = {
  createProduct,
  getProduct,
};

function createProduct(product, images, category) {
  let formData = new FormData();
  formData.append("title", JSON.stringify(product.title));
  formData.append("description", JSON.stringify(product.description));
  formData.append("price", JSON.stringify(product.price));
  formData.append("category", JSON.stringify(category));

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
  console.log("id u servisu", productId);
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${url}product/getproduct/${productId}`, requestOptions).then(
    handleResponse
  );
}
