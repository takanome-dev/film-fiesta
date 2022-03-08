import { Component } from "react";
import styled from "styled-components";
import Wrapper from "./common/Wrapper";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 5rem;

	h2 {
		text-align: center;
		margin-bottom: 1rem;
	}

	h3 {
		margin-bottom: 0.5rem;
		color: var(--color-primary);
	}

	p {
		color: var(--color-primary);
		margin-top: 1rem;
	}

	details {
		summary {
			cursor: pointer;
		}
	}

	@media (max-width: 650px) {
		margin: auto 1rem;
	}
`;
export default class ErrorBoundary extends Component {
	state = {
		hasError: false,
		errorMessage: "",
		stack: "",
	};

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error) {
		this.setState({ errorMessage: error.message, stack: error.stack });
	}

	render() {
		const { hasError, errorMessage, stack } = this.state;
		return hasError ? (
			<Container>
				<Wrapper width="33rem">
					<h2>Oops!! Something went wrong 😟</h2>
					<h3>❌ Error: {errorMessage}</h3>
					<details>
						<summary>Stack Trace</summary>
						<p>{stack}</p>
					</details>
				</Wrapper>
			</Container>
		) : (
			this.props.children
		);
	}
}
