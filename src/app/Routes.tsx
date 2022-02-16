import { Redirect, Route, Switch } from "react-router-dom";
import {
	Customers,
	LoginForm,
	Logout,
	MovieDetails,
	// MovieForm,
	Movies,
	NotFound,
	Popular,
	PrivateRoute,
	RegisterForm,
	Rentals,
	Trending,
} from "../components";
import ErrorBoundary from "../components/ErrorBoundary";

const Routes = () => {
	return (
		<ErrorBoundary>
			<main className="main">
				<Switch>
					<PrivateRoute path="/movies/:id" component={MovieDetails} />
					<Route path="/movies" component={Movies} />
					<Route path="/popular" component={Popular} />
					<Route path="/trending" component={Trending} />
					{/* <PrivateRoute path="/movies/:id" component={MovieForm} /> */}
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
