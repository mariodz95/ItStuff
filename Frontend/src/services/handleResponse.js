export const handleResponse = (response) => {
  console.log("response", response);
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}
