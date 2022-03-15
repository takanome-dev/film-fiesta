import Joi from "joi";
import { toast } from "react-toastify";
import { sendFeedback } from "../services/feedback";
import Form from "./common/Form";
import Overlay from "./common/Overlay";
import Wrapper from "./common/Wrapper";
import Container from "./styles/Feedback.styled";

export default class FeedBack extends Form {
	state = {
		data: {
			subject: "",
			message: "",
		},
		errors: {},
	};

	schema = {
		subject: Joi.string().trim().max(300).required(),
		message: Joi.string().trim().max(500).required(),
	};

	async submitToServer(): Promise<void> {
		const res = await sendFeedback(this.state.data);
		this.props.setOpenFeedback?.(false);
		toast.success(res);
	}

	render() {
		return (
			<Container>
				<Overlay
					zIndex={4}
					bgColor="rgba(0,0,0,0.2)"
					handleClose={() => this.props.setOpenFeedback?.(false)}
				/>
				<div className="wrapper">
					<Wrapper width="100%">
						<h1>Give Us Feedback</h1>
						<form onSubmit={this.handleSubmit}>
							{this.renderInput("subject", "Subject", "UI component")}
							{this.renderTextArea("message", "Comments", "Your comments...")}
							{this.renderButton("Send my feedback")}
						</form>
					</Wrapper>
				</div>
			</Container>
		);
	}
}
