import Joi from "joi";
import { getCurrentUser } from "../services/auth";
import Form from "./common/Form";
import Container from "./styles/Profile.styled";

export default class Profile extends Form {
	state = {
		data: {
			name: "",
			email: "",
		},
		errors: {},
	};

	schema = {
		email: Joi.string()
			.email({ tlds: { allow: ["com"] } })
			.min(8)
			.max(50)
			.required()
			.label("Email"),
		name: Joi.string().trim().min(5).max(50).required().label("Name"),
	};

	componentDidMount() {
		const user = getCurrentUser();
		if (user && user._id) {
			const data = { name: user?.name, email: user?.email };
			this.setState({ data });
		}
	}

	submitToServer(): void {
		console.log(this.state.data);
	}

	render() {
		return (
			<Container>
				<div className="wrapper">
					<div className="avatar">
						<div className="user-avatar flex">
							<p className="img">T</p>
						</div>
						<div className="user-info">
							<p className="name">takanome_dev</p>
							<p className="email">takanomedev221@gmail.com</p>
						</div>
					</div>
					<form onSubmit={this.handleSubmit}>
						{this.renderInput("name", "Name", "")}
						{this.renderInput("email", "Email", "")}
						{this.renderButton("Save changes")}
					</form>
				</div>
			</Container>
		);
	}
}
