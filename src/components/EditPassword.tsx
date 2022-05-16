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
			.label("Your Password"),
		newPassword: Joi.string().min(8).max(50).required().label("Your Password"),
	};

	keydownHandler = (e: KeyboardEvent) => {
		switch (e.code) {
			case "Escape":
				return this.props.setEditPassword?.(false);
			case "Enter":
				return this.handleSubmit;
			default:
		}
	};

	componentDidMount(): void  {
		document.addEventListener("keydown", this.keydownHandler);
	}

	componentWillUnmount(): void  {
		document.removeEventListener("keydown", this.keydownHandler);
	}

	async submitToServer() {
		const user = getCurrentUser();
		try {
			const data = await updatePassword(this.state.data, user!._id!);
			this.props.setEditPassword?.(false);
			toast.success(data);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
				<div className="modal-wrapper">
					<Wrapper width="100%">
						<div className="modal-header">
							<p>Edit password</p>
							<span onClick={() => this.props.setEditPassword?.(false)}>
								&times;
							</span>
						</div>
						<form onSubmit={this.handleSubmit}>
							{this.renderInput(
								"currentPassword",
								"Current Password",
								"",
								"password"
							)}
							{this.renderInput("newPassword", "New Password", "", "password")}
							{this.renderButton("Update password")}
						</form>
					</Wrapper>
				</div>
			</Container>
		);
	}
}
