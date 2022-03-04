import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles, Header, Sidebar } from "../components";
import ErrorBoundary from "../components/ErrorBoundary";
import Provider from "../context/GlobalContext";
import Routes from "./Routes";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY as string);

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 650) {
				setIsOpen(false);
				setOpenModal(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});

	isOpen
		? document.body.classList.add("open")
		: document.body.classList.remove("open");

	return (
		<ErrorBoundary>
			<Provider>
				<GlobalStyles />
				<ToastContainer />
				<Header handleOpen={() => setIsOpen(true)} />
				<Sidebar
					open={isOpen}
					setIsOpen={setIsOpen}
					openModal={openModal}
					setOpenModal={setOpenModal}
				/>
				<Elements stripe={stripePromise}>
					<Routes />
				</Elements>
			</Provider>
		</ErrorBoundary>
	);
};

export default App;
