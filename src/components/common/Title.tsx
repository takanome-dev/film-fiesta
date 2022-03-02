import styled from "styled-components";
import { MoreHorizontalIcon } from "../svg";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	/* h2 {
		color: var(--color-gray);
	} */
`;

type Props = {
	name: string;
};

const Title: React.FC<Props> = ({ name }) => (
	<Container>
		<h2>{name}</h2>
		<MoreHorizontalIcon name={name} />
	</Container>
);

export default Title;
