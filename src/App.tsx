import { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppStateType } from "./components/types";
import { getCurrentUser } from "./services/authService";
import {
  NotFound,
  Customers,
  MovieForm,
  Movies,
  NavBar,
  Rentals,
  LoginForm,
  RegisterForm,
  Logout,
  PrivateRoute,
} from "./components";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./components/ErrorBoundary";
export default class App extends Component {
  state: AppStateType = {};

  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <>
        <ToastContainer />
        <NavBar user={user} />
        <ErrorBoundary>
          <main className="container">
            <Switch>
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/customers" component={Customers} />
              <Route path="/rentals" component={Rentals} />
              <PrivateRoute path="/movies/:id" component={MovieForm} />
              <Route
                path="/movies"
                render={(props) => <Movies {...props} user={user} />}
              />
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/movies" />
              <Redirect to="not-found" />
            </Switch>
          </main>
        </ErrorBoundary>
      </>
    );
  }
}
