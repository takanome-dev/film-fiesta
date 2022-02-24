import Overlay from "./common/Overlay";
import Wrapper from "./common/Wrapper";
import Container from "./styles/Feedback.styled";

type Props = {
	openFeedback: boolean;
	setOpenFeedback: React.Dispatch<React.SetStateAction<boolean>>;
};

const FeedBack: React.FC<Props> = ({ openFeedback, setOpenFeedback }) => {
	if (openFeedback) {
		document.body.style.overflow = "hidden";
		// document.getElementById("wrapper")?.classList.add("open");
	}

	return (
		<Container>
			<Overlay
				zIndex={4}
				bgColor="rgba(0,0,0,0.2)"
				handleClose={() => setOpenFeedback(false)}
			/>
			<div className="wrapper" id="wrapper">
				<Wrapper width="30rem">
					<h1>Give Us Feedback</h1>
					<fieldset>
						<label htmlFor="subject">Subject</label>
						<input className="input" id="subject" type="text" required />
						<label htmlFor="textarea">Comments</label>
						<textarea id="textarea" className="input" required />
					</fieldset>
					<button className="btn" type="submit">
						Send my feedback
					</button>
				</Wrapper>
			</div>
		</Container>
	);
};

export default FeedBack;
