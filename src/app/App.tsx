// import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilteredGenre, GlobalStyles, Header } from "../components";
// import { AppStateType } from "../components/types";
import Provider from "../context/GlobalContext";
// import { getCurrentUser } from "../services/authService";
import Routes from "./Routes";

const App = () => (
	<Provider>
		<GlobalStyles />
		<ToastContainer />
		{/* <NavBar user={user} /> */}
		<Header />
		<FilteredGenre />
		<Routes />
	</Provider>
);

export default App;