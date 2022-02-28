/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Joi from "joi";
import { toast } from "react-toastify";
import { getCurrentUser } from "../services/auth";
import { updatePassword } from "../services/user";
import Form from "./common/Form";
import Overlay from "./common/Overlay";
import Wrapper from "./common/Wrapper";
import Container from "./styles/EditPassword.styled";

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
