import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../components";
import Loader from "../components/common/Loader";
import ErrorBoundary from "../components/ErrorBoundary";
import { Movies } from "../pages";
import MovieDetails from "@/pages/MovieDetails";

const Feedbacks = lazy(() => import("../pages/Feedbacks"));
const Login = lazy(() => import("../pages/Login"));
const Logout = lazy(() => import("../pages/Logout"));
// const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const NotFound = lazy(() => import("../pages/404"));
const Popular = lazy(() => import("../pages/Popular"));
const Profile = lazy(() => import("../pages/Profile"));
const Register = lazy(() => import("../pages/Register"));
const Search = lazy(() => import("../pages/Search"));
const Trending = lazy(() => import("../pages/Trending"));

export default function Routes() {
	return (
		<ErrorBoundary>
			<Suspense
				fallback={
					<div className="loading">
						<Loader size={40} />
					</div>
				}
			>
				<div className="main">
					<Switch>
						<Route path="/movies/:id" component={MovieDetails} />
						<Route path="/search" component={Search} />
						<Route path="/movies" component={Movies} />
						<Route path="/popular" component={Popular} />
						<Route path="/trending" component={Trending} />
						<Route path="/login" component={Login} />
						<Route path="/logout" component={Logout} />
						<Route path="/register" component={Register} />
						<PrivateRoute path="/profile" component={Profile} />
						<PrivateRoute path="/feedbacks" component={Feedbacks} />
						<Route path="/not-found" component={NotFound} />
						<Redirect from="/" exact to="/movies" />
						<Redirect to="not-found" />
					</Switch>
				</div>
			</Suspense>
		</ErrorBoundary>
	);
}
