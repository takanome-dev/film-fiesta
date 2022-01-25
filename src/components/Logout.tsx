import { Component } from "react";
import { removeToken } from "../services/authService";

export default class Logout extends Component {
  componentDidMount() {
    removeToken();
    window.location.pathname = "/";
  }

  render() {
    return null;
  }
}
