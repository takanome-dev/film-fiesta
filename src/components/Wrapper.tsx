import styled from "styled-components";

type Props = {
	children: React.ReactNode;
	width: string;
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: ${({ width }: { width: string }) => width};
	width: 100%;
	background-color: #fff;
	border-radius: 0.8rem;
	box-shadow: 0 0 0.9rem rgba(0, 0, 0, 0.1);
	margin: 2rem auto;
	padding: 2rem;
	@media (max-width: 580px) {
		padding: 1rem;
	}
`;

const Wrapper: React.FC<Props> = ({ children, width }) => {
	return <Container width={width}>{children}</Container>;
};

export default Wrapper;
