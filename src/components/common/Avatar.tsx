import styled from "styled-components";

const Container = styled.div`
	background-color: var(--color-primary-40);
	min-width: 2.5rem;
	/* width: 100%; */
	min-height: 2.5rem;
	/* height: 100%; */
	border-radius: 50%;
	cursor: pointer;

	@media (max-width: 650px) {
		margin-right: 1rem;
	}
`;

type Props = {
	handleOpenModal: () => void;
};

const Avatar: React.FC<Props> = ({ handleOpenModal }) => {
	return (
		<Container className="flex" onClick={handleOpenModal}>
			<p>T</p>
		</Container>
	);
};

export default Avatar;
