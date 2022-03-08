import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../components";
import ErrorBoundary from "../components/ErrorBoundary";
import { Context } from "../context/GlobalContext";
import {
	Bookmark,
	Checkout,
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
	const [movieId, setMovieId] = useState("");
	const elements = useElements();
	const stripe = useStripe();
	const { onRefetchRentals } = useContext(Context);

	return (
		<ErrorBoundary>
			<main className="main">
				<Switch>
					<PrivateRoute
						path="/movies/:id"
						render={({ match }) => (
							<MovieDetails match={match} setMovieId={setMovieId} />
						)}
					/>
					<Route path="/movies" component={Movies} />
					<Route path="/popular" component={Popular} />
					<Route path="/trending" component={Trending} />
					<Route path="/settings" component={Settings} />
					<Route path="/login" component={Login} />
					<Route path="/logout" component={Logout} />
					<Route path="/register" component={Register} />
					<PrivateRoute path="/bookmarks" component={Bookmark} />
					<PrivateRoute path="/favorites" component={Favorites} />
					<PrivateRoute path="/profile" component={Profile} />
					<PrivateRoute path="/customers" component={Customers} />
					<PrivateRoute path="/rentals" component={Rentals} />
					<PrivateRoute
						path="/checkout"
						render={({ history }) => (
							<Checkout
								movieId={movieId}
								elements={elements}
								stripe={stripe}
								onRefetchRentals={onRefetchRentals}
								history={history}
							/>
						)}
					/>

					<Route path="/not-found" component={NotFound} />
					<Redirect from="/" exact to="/movies" />
					<Redirect to="not-found" />
				</Switch>
			</main>
		</ErrorBoundary>
	);
};

export default Routes;
