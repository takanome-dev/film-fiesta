import { useElements, useStripe } from "@stripe/react-stripe-js";
import { lazy, Suspense, useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../components";
import ErrorBoundary from "../components/ErrorBoundary";
import { Loader } from "../components/svg";
import { Context } from "../context/GlobalContext";
import { Logout, Movies } from "../pages";

const Login = lazy(() => import("../pages/Login"));
const NotFound = lazy(() => import("../pages/404"));
const Rentals = lazy(() => import("../pages/Rentals"));
const Popular = lazy(() => import("../pages/Popular"));
const Profile = lazy(() => import("../pages/Profile"));
const Register = lazy(() => import("../pages/Register"));
const Trending = lazy(() => import("../pages/Trending"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Bookmark = lazy(() => import("../pages/Bookmark"));
const Favorites = lazy(() => import("../pages/Favorites"));
const Feedbacks = lazy(() => import("../pages/Feedbacks"));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));

const Routes = () => {
	const [movieId, setMovieId] = useState("");
	const elements = useElements();
	const stripe = useStripe();
	const { onRefetchRentals } = useContext(Context);

	return (
		<ErrorBoundary>
			<Suspense
				fallback={
					<div className="loading">
						<Loader size={40} />
					</div>
				}
			>
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
						<Route path="/login" component={Login} />
						<Route path="/logout" component={Logout} />
						<Route path="/register" component={Register} />
						<PrivateRoute path="/bookmarks" component={Bookmark} />
						<PrivateRoute path="/favorites" component={Favorites} />
						<PrivateRoute path="/profile" component={Profile} />
						<PrivateRoute path="/rentals" component={Rentals} />
						<PrivateRoute path="/feedbacks" component={Feedbacks} />
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
			</Suspense>
		</ErrorBoundary>
	);
};

export default Routes;
