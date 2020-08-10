import { alertConstants } from "./alertConstants";

export const displaySuccess = (message) => ({
  type: alertConstants.SUCCESS,
  message,
});

export const displayError = (message) => ({
  type: alertConstants.ERROR,
  message,
});

export const clear = () => ({
  type: alertConstants.CLEAR,
});
