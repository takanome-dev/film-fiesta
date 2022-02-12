import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles, Header, Sidebar } from "../components";
import Provider from "../context/GlobalContext";
import Routes from "./Routes";

const App = () => (
	<Provider>
		<GlobalStyles />
		<ToastContainer />
		<Header />
		<Sidebar />
		<Routes />
	</Provider>
);

export default App;
