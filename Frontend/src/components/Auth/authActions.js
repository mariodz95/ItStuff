import { userConstants } from "./userConstants";
import { userService } from "../../services/userService";
import { displayError, displaySuccess } from "../../store/alertActions";
import { history } from "../../helpers/history";

export const login = (user) => (dispatch) => {
  dispatch(request({ user }));

  userService.login(user).then(
    (user) => {
      dispatch(success(user));
      history.push("/");
    },
    (error) => {
      dispatch(failure(error));
      dispatch(displayError(error));
    }
  );

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
};

export const register = (user) => (dispatch) => {
  dispatch(request(user));

  userService.register(user).then(
    (user) => {
      dispatch(success());
      history.push("/login");
      dispatch(displaySuccess("Registration successful"));
    },
    (error) => {
      dispatch(failure(error.toString()));
      dispatch(displayError(error.toString()));
    }
  );

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
};
