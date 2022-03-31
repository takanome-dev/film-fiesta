import styled from "styled-components";
import { skeletonLoading } from "../styles/Global.styled";

const Container = styled.div`
	overflow: hidden;
	padding: 1rem;

	.filter {
		display: flex;
		justify-content: center;
		height: 2rem;

		span + span {
			margin-left: 1rem;
		}

		span {
			padding: 1rem 2rem;
			border-radius: 0.8rem;
		}
	}

	.card {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
		gap: 1rem;

		.card-content {
			border-radius: 0.8rem;
			height: 15rem;
			width: 15rem;
			margin-top: 2rem;
		}
	}

	.skeleton {
		opacity: 0.7;
		animation: ${skeletonLoading} 1s linear infinite alternate;
	}
`;

const Skeleton = () => {
	return (
		<Container>
			<div className="filter">
				<span className="skeleton">&nbsp;</span>
				<span className="skeleton">&nbsp;</span>
				<span className="skeleton">&nbsp;</span>
				<span className="skeleton">&nbsp;</span>
				<span className="skeleton">&nbsp;</span>
				<span className="skeleton">&nbsp;</span>
				<span className="skeleton">&nbsp;</span>
			</div>
			<div className="card">
				<div className="card-content skeleton"></div>
				<div className="card-content skeleton"></div>
				<div className="card-content skeleton"></div>
				<div className="card-content skeleton"></div>
				<div className="card-content skeleton"></div>
				<div className="card-content skeleton"></div>
				<div className="card-content skeleton"></div>
				<div className="card-content skeleton"></div>
			</div>
		</Container>
	);
};

export default Skeleton;
