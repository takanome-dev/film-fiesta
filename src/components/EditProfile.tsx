/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Joi from "joi";
import { toast } from "react-toastify";
import { getCurrentUser } from "../services/auth";
import { updateProfile } from "../services/profile";
import { updateUser } from "../services/user";
import Form from "./common/Form";
import Overlay from "./common/Overlay";
import Wrapper from "./common/Wrapper";
import Container from "./styles/EditProfile.styled";
import { Loader } from "./svg";

export default class EditProfile extends Form {
	state = {
		data: {
			name: "",
			email: "",
		},
		errors: {},
		isLoading: false,
		url: "",
	};

	schema = {
		email: Joi.string()
			.email({ tlds: { allow: ["com"] } })
			.lowercase()
			.min(8)
			.max(50)
			.required()
			.label("Email"),
		name: Joi.string().trim().min(5).max(50).required().label("Name"),
	};

	keydownHandler = (e: KeyboardEvent) => {
		switch (e.code) {
			case "Escape":
				this.props.setEditProfile?.(false);
				break;
			case "Enter":
				this.handleSubmit;
				break;
			default:
		}
	};

	componentDidMount() {
		document.addEventListener("keydown", this.keydownHandler);

		const user = getCurrentUser();
		if (user?._id) {
			const data = { name: user.name!, email: user.email! };
			this.setState({ data, url: user.imageUrl });
		}
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.keydownHandler);
	}

	handleInputFile = async (e: React.FormEvent<HTMLInputElement>) => {
		const file = e.currentTarget.files?.[0];
		if (file) this.setState({ isLoading: true });
		const data = new FormData();
		data.append("image", file!);
		try {
			const url = await updateProfile(data);
			if (url) this.setState({ isLoading: false });
			this.setState({ url });
		} catch (err: any) {
			if (err.request?.status === 400) {
				toast.error(err.data);
			}
		}
	};

	handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { name, email } = this.state.data;
		const user = getCurrentUser();

		try {
			await updateUser({ name, email }, user!._id!);
			window.location.pathname = "/profile";
		} catch (err: any) {
			toast.error(err.data);
		}
	};

	render() {
		const { url } = this.state;

		return (
			this.props.editProfile && (
				<Container>
					<Overlay
						zIndex={4}
						bgColor="rgba(0,0,0,0.2)"
						handleClose={() => this.props.setEditProfile?.(false)}
					/>
					<div className="modal-wrapper">
						<Wrapper width="100%">
							<div className="modal-header">
								<p>Edit profile</p>
								<span onClick={() => this.props.setEditProfile?.(false)}>
									&times;
								</span>
							</div>
							<form onSubmit={this.handleSubmit}>
								<div className="modal-profile">
									<label htmlFor="image" className="profile-label flex">
										<div className="profile-img">
											{this.state.isLoading ? (
												<Loader size={40} />
											) : (
												<img src={url} alt="User avatar" />
											)}
										</div>
										<input
											type="file"
											id="image"
											name="image"
											className="profile-input"
											onChange={this.handleInputFile}
										/>
										<p className="tooltip">Click to upload an image</p>
									</label>
								</div>
								{this.renderInput("name", "Name", "")}
								{this.renderInput("email", "Email", "")}
								{this.renderButton("Save changes")}
							</form>
						</Wrapper>
					</div>
				</Container>
			)
		);
	}
}
