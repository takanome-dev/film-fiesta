// import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles, Header } from "../components";
import ErrorBoundary from "../components/ErrorBoundary";
// import { AppStateType } from "../components/types";
import Provider from "../context/GlobalContext";
// import { getCurrentUser } from "../services/authService";
import Routes from "./Routes";

const App = () => (
	<ErrorBoundary>
		<Provider>
			<GlobalStyles />
			<ToastContainer />
			<Header />
			<Routes />
		</Provider>
	</ErrorBoundary>
);

export default App;
