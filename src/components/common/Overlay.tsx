type Props = {
	handleClose: () => void;
};

const Overlay: React.FC<Props> = ({ handleClose }) => {
	return <div className="overlay" onClick={handleClose}></div>;
};

export default Overlay;
