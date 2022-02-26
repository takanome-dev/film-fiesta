import { Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../components";
import ErrorBoundary from "../components/ErrorBoundary";
import {
	Bookmark,
	Customers,
	Favorites,
	Login,
	Logout,
	MovieDetails,
	Movies,
	NotFound,
	Popular,
	Profile,
	Register,
	Rentals,
	Settings,
	Trending,
} from "../pages";

const Routes = () => {
	return (
		<ErrorBoundary>
			<main className="main">
				<Switch>
					<PrivateRoute path="/movies/:id" component={MovieDetails} />
					<Route path="/movies" component={Movies} />
					<Route path="/popular" component={Popular} />
					<Route path="/trending" component={Trending} />
					<PrivateRoute path="/bookmarks" component={Bookmark} />
					<PrivateRoute path="/favorites" component={Favorites} />
					<Route path="/settings" component={Settings} />
					<PrivateRoute path="/profile" component={Profile} />
					<Route path="/login" component={Login} />
					<Route path="/logout" component={Logout} />
					<Route path="/register" component={Register} />
					<PrivateRoute path="/customers" component={Customers} />
					<PrivateRoute path="/rentals" component={Rentals} />
					<Route path="/not-found" component={NotFound} />
					<Redirect from="/" exact to="/movies" />
					<Redirect to="not-found" />
				</Switch>
			</main>
		</ErrorBoundary>
	);
};

export default Routes;
