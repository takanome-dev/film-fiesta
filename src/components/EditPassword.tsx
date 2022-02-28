import Joi from "joi";
import { toast } from "react-toastify";
import styled from "styled-components";
import { getCurrentUser } from "../services/auth";
import { updatePassword } from "../services/user";
import Form from "./common/Form";
import Overlay from "./common/Overlay";
import Wrapper from "./common/Wrapper";
import { slideIn } from "./styles/Global.styled";

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	animation-name: ${slideIn};
	animation-duration: 300ms;

	.wrapper {
		z-index: 4;
		width: 30rem;
		animation-name: ${slideIn};
		animation-duration: 500ms;
	}
`;

export default class EditPassword extends Form {
	state = {
		data: {
			currentPassword: "",
			newPassword: "",
		},
		errors: {},
	};

	schema = {
		currentPassword: Joi.string()
			.min(8)
			.max(50)
			.required()
			.label("Current Password"),
		newPassword: Joi.string().min(8).max(50).required().label("New Password"),
	};

	keydownHandler = (e: KeyboardEvent) => {
		switch (e.code) {
			case "Escape":
				this.props.setEditPassword?.(false);
				break;
			case "Enter":
				this.handleSubmit;
				break;
			default:
		}
	};

	componentDidMount() {
		document.addEventListener("keydown", this.keydownHandler);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.keydownHandler);
	}

	async submitToServer() {
		const user = getCurrentUser();
		try {
			const data = await updatePassword(this.state.data, user!._id!);
			this.props.setEditPassword?.(false);
			toast.success(data);
		} catch (err: any) {
			toast.error(err.data);
		}
	}

	render() {
		if (this.props.editPassword) document.body.style.overflow = "hidden";
		return (
			<Container>
				<Overlay
					zIndex={4}
					bgColor="rgba(0,0,0,0.2)"
					handleClose={() => this.props.setEditPassword?.(false)}
				/>
				<div className="wrapper">
					<Wrapper width="100%">
						<form onSubmit={this.handleSubmit}>
							{this.renderInput("currentPassword", "Current Password", "")}
							{this.renderInput("newPassword", "New Password", "")}
							{this.renderButton("Update password")}
						</form>
					</Wrapper>
				</div>
			</Container>
		);
	}
}
