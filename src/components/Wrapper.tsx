import styled from "styled-components";

type Props = {
	children: React.ReactNode;
};

const Container = styled.div``;

const Wrapper: React.FC<Props> = ({ children }) => {
	return <Container>{children}</Container>;
};

export default Wrapper;
