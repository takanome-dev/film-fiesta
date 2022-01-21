import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
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

const App = () => {
  return (
    <>
      <ToastContainer />
      <NavBar />
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
};

export default App;
