type Props = {
	color: string;
};

const Fire: React.FC<Props> = ({ color }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.63366 24C2.71646 21.2287 1.42186 18.6056 2.16202 15.023C2.70844 12.3775 4.49765 10.2252 4.66921 7.5849C5.43351 8.97578 5.75287 9.97872 5.83827 11.4322C8.26912 8.4539 9.87548 4.33092 9.9706 0C9.9706 0 16.3021 3.7202 16.7175 9.3396C17.2626 8.18134 17.537 6.34176 16.9919 5.14952C18.6271 6.34182 28.1978 16.9263 15.6956 24C18.0461 19.4232 16.302 13.2478 12.2208 10.3956C12.4934 11.622 12.0155 16.1961 10.21 18.2059C10.7102 14.8476 9.73396 13.4276 9.73396 13.4276C9.73396 13.4276 9.39888 15.3087 8.0988 17.2089C6.91161 18.9441 6.08901 20.7858 7.63366 24V24Z"
				fill={color}
			/>
		</svg>
	);
};

export default Fire;