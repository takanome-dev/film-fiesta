import { Redirect, Route, Switch } from "react-router-dom";
import {
	Customers,
	LoginForm,
	Logout,
	MovieForm,
	Movies,
	NotFound,
	PrivateRoute,
	RegisterForm,
	Rentals,
} from "../components";
import ErrorBoundary from "../components/ErrorBoundary";

const Routes = () => {
	return (
		<ErrorBoundary>
			<main className="main">
				<Switch>
					<Route path="/movies" component={Movies} />
					<PrivateRoute path="/movies/:id" component={MovieForm} />
					<Route path="/login" component={LoginForm} />
					<Route path="/logout" component={Logout} />
					<Route path="/register" component={RegisterForm} />
					<Route path="/customers" component={Customers} />
					<Route path="/rentals" component={Rentals} />
					<Route path="/not-found" component={NotFound} />
					<Redirect from="/" exact to="/movies" />
					<Redirect to="not-found" />
				</Switch>
			</main>
		</ErrorBoundary>
	);
};

export default Routes;
