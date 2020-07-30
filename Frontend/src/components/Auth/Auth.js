import React, { Component } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

export class Auth extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.location.pathname === "/login" ? <Login /> : <Register />}
      </React.Fragment>
    );
  }
}

export default Auth;
