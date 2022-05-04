import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles, Header } from "../components";
import Main from "../components/Main";
import Provider from "../context/GlobalContext";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
		const sidebar = document.querySelector("[data-sidebar]");
		const mainContainer = document.querySelector("[data-main]");
		const sliderContainer = document.querySelector("[data-slider]");

		sidebar?.classList.toggle("open");
		mainContainer?.classList.toggle("open");
		sliderContainer?.classList.toggle("open");
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 650) {
				setIsOpen(false);
			} else {
				document.querySelector("[data-sidebar]")?.classList.remove("open");
				document.querySelector("[data-main]")?.classList.remove("open");
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});

	return (
		<Provider>
			<GlobalStyles />
			<ToastContainer />
			<Header onClick={handleClick} />
			<Main isOpen={isOpen} setIsOpen={setIsOpen} />
		</Provider>
	);
};

export default App;
