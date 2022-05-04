import { FaEllipsisH } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`;

type Props = {
	name: string;
};

const Title: React.FC<Props> = ({ name }) => (
	<Container>
		<h2>{name}</h2>
		<FaEllipsisH color="var(--gray)" size={20} />
	</Container>
);

export default Title;
