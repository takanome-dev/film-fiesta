/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component } from "react";
import { toast } from "react-toastify";
import { getCurrentUser } from "../services/auth";
import { updateProfile } from "../services/profile";
import { updateUser } from "../services/user";
import Button from "./common/Button";
import Input from "./common/Input";
import Overlay from "./common/Overlay";
import Wrapper from "./common/Wrapper";
import Container from "./styles/EditProfile.styled";
import { EditProfileProps, EditProfileState } from "./types";

export default class EditProfile extends Component<
	EditProfileProps,
	EditProfileState
> {
	state = {
		data: {
			url: "",
			name: "",
			email: "",
		},
	};

	keydownHandler = (e: KeyboardEvent) => {
		switch (e.code) {
			case "Escape":
				this.props.setEditProfile(false);
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
			const data = { url: user.imageUrl, name: user.name!, email: user.email! };
			this.setState({ data });
		}
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.keydownHandler);
	}

	handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
		currentTarget,
	}) => {
		const data: any = { ...this.state.data };

		data[currentTarget.name] = currentTarget.value;

		this.setState({ data });
	};

	handleInputFile = async (e: React.FormEvent<HTMLInputElement>) => {
		const file = e.currentTarget.files?.[0];
		const data = new FormData();
		data.append("image", file!);
		const user = getCurrentUser();
		try {
			const url = await updateProfile(data, user!._id!);
			this.setState({ data: { url } });
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
			toast.success("Profile successfully updated");
		} catch (err: any) {
			toast(err.data);
		}
	};

	render() {
		const { url, name, email } = this.state.data;

		return (
			this.props.editProfile && (
				<Container>
					<Overlay
						zIndex={4}
						bgColor="rgba(0,0,0,0.2)"
						handleClose={() => this.props.setEditProfile?.(false)}
					/>
					<div className="wrapper">
						<Wrapper width="100%">
							<form onSubmit={this.handleSubmit}>
								<label htmlFor="image" className="profile-label flex">
									<div className="profile-img">
										<img src={url} alt="User avatar" />
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
								<Input
									name="name"
									type="text"
									label="Name"
									error=""
									onChange={this.handleChange}
									value={name}
								/>
								<Input
									name="email"
									type="email"
									label="Email"
									error=""
									onChange={this.handleChange}
									value={email}
								/>
								<Button classes="btn" isDisabled={false}>
									Save changes
								</Button>
							</form>
						</Wrapper>
					</div>
				</Container>
			)
		);
	}
}
