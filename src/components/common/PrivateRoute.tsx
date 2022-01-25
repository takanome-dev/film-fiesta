import { Redirect, Route } from "react-router-dom";
import { getCurrentUser } from "../../services/authService";
import { PrivateRouteProps } from "../types";

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  render,
  ...rest
}) => {
  const user = getCurrentUser();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user)
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        return Component ? <Component {...props} /> : render!(props);
      }}
    />
  );
};

export default PrivateRoute;
