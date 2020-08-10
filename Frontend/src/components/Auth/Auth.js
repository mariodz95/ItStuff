import React, { Component } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login, register } from "./authActions";

class Auth extends Component {
  login = (values) => {
    this.props.login(values);
  };

  register = (values) => {
    this.props.register(values);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.location.pathname === "/login" ? (
          <Login login={this.login} />
        ) : (
          <Register register={this.register} />
        )}
      </React.Fragment>
    );
  }
}

Auth.propTypes = {
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loggingIn: state.authentication.user,
});

const connectedAuth = connect(mapStateToProps, { login, register })(Auth);
export { connectedAuth as Auth };
