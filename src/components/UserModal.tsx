import styled from "styled-components";

const Container = styled.div`
	background-color: #fff;
	max-width: 8rem;
	width: 100%;
	position: absolute;
	right: 5%;
	top: 75%;
	padding: 1rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	border-radius: 0.5rem;
	box-shadow: 0 0 0.9rem rgba(0, 0, 0, 0.1);

	p + p {
		margin-top: 0.5rem;
	}
`;

const UserModal = () => {
	return (
		<Container>
			<p>Profile</p>
			<p>Settings</p>
			<p>Profile</p>
			<p>Profile</p>
		</Container>
	);
};

export default UserModal;
