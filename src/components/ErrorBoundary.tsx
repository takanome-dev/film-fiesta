import { Component } from "react";
import styled from "styled-components";
import Wrapper from "./common/Wrapper";

const Container = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;
	margin-left: 5rem;

	h2 {
		margin-bottom: 1rem;
		text-align: center;
	}

	h3 {
		color: var(--primary);
		margin-bottom: 0.5rem;
	}

	p {
		color: var(--primary);
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

	static getDerivedStateFromError(): {hasError: boolean;
}  {
		return { hasError: true };
	}

	componentDidCatch(error: Error): void  {
		this.setState({ errorMessage: error.message, stack: error.stack });
	}

	render() {
		const { hasError, errorMessage, stack } = this.state;
		return hasError ? (
			<Container>
				<Wrapper width="100%">
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
