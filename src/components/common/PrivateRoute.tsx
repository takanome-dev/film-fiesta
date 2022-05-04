import { Redirect, Route } from "react-router-dom";
import { getCurrentUser } from "../../services/auth";
import { PrivateRouteInt } from "../types";

const PrivateRoute: React.FC<PrivateRouteInt> = ({
	component: Component,
	render,
	...rest
}) => {
	const user = getCurrentUser();

	return (
		<Route
			{...rest}
			render={(props) => {
				if (!user?._id)
					return (
						<Redirect
							to={{ pathname: "/login", state: { from: props.location } }}
						/>
					);
				return Component ? <Component {...props} /> : render?.(props);
			}}
		/>
	);
};

export default PrivateRoute;
