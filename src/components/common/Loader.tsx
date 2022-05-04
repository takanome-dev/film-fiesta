import styled, { keyframes } from "styled-components";

type Props = {
	size: number;
};

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
   0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const Svg = styled.svg`
	animation: ${rotate} 2s linear infinite;
	circle {
		animation: ${dash} 1.5s ease-in-out infinite;
	}
`;

const Loader: React.FC<Props> = ({ size }) => {
	return (
		<Svg
			className="loader"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
		</Svg>
	);
};

export default Loader;
