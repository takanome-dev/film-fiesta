import useCurrentUser from "@/hooks/useCurrentUser";
import { Redirect, Route } from "react-router-dom";
import { PrivateRouteInt } from "../types";

const PrivateRoute: React.FC<PrivateRouteInt> = ({
	component: Component,
	render,
	...rest
}) => {
	const user = useCurrentUser();

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
