import { authHeader } from "../helpers/authHeader";
import { handleResponse } from "./handleResponse";
import { url } from "./url";

export const userService = {
  login,
  register,
};

function login(model) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(model),
  };

  return fetch(`${url}user/authenticate`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("user", JSON.stringify(user));

      return user;
    });
}

function register(model) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(model),
  };

  return fetch(`${url}user/register`, requestOptions).then(handleResponse);
}
