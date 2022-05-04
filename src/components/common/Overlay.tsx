import React from "react";
import styled from "styled-components";

const Container = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ bgColor }: { bgColor: string }) => bgColor};
`;

type Props = {
	handleClose: () => void;
	zIndex: number;
	bgColor: string;
};

const Overlay: React.FC<Props> = ({ handleClose, zIndex, bgColor }) => {
	return (
		<Container
			style={{ zIndex }}
			bgColor={bgColor}
			onClick={handleClose}
		></Container>
	);
};

export default Overlay;
