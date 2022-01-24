import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwt_decode from "jwt-decode";
import {
  NotFound,
  Customers,
  MovieForm,
  Movies,
  NavBar,
  Rentals,
  LoginForm,
  RegisterForm,
} from "./components";
import "react-toastify/dist/ReactToastify.css";
import { AppStateType } from "./components/types";
// import { RegisterUserType } from "./components/types";
export default class App extends Component {
  state: AppStateType = {};

  componentDidMount() {
    try {
      const token = localStorage.getItem("token");
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const user = jwt_decode(token!);
      this.setState({ user });
    } catch (err) {
      // console.log(err);
    }
  }

  render() {
    return (
      <>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="not-found" />
          </Switch>
        </main>
      </>
    );
  }
}
