import { useContext } from "react";
import { Context } from "../context/GlobalContext";
import Container from "./styles/Profile.styled";

const Profile = () => {
	const { user } = useContext(Context);

	return (
		<Container>
			<div className="profile-wrapper">
				<div className="avatar-container">
					<div className="avatar">
						<div className="user-avatar flex">
							<p className="img">T</p>
						</div>
						<div className="user-info">
							<p className="name">{user.name}</p>
							<p className="email">{user.email}</p>
						</div>
					</div>
					<button className="btn secondary btn-1">Edit profile</button>
				</div>
				<fieldset disabled>
					<div className="input-container">
						<label htmlFor="name">Name</label>
						<input readOnly id="name" type="text" value={user.name} />
					</div>
					<div className="input-container">
						<label htmlFor="email">Email</label>
						<input readOnly id="email" type="email" value={user.email} />
					</div>
				</fieldset>
				<button className="btn secondary btn-2">Edit profile</button>
			</div>
			<div className="password-wrapper">
				<div className="password-label">
					<p>Password</p>
					<button className="btn secondary btn-1">Update password</button>
				</div>
				<input
					id="name"
					type="text"
					value="********************"
					readOnly
					disabled
				/>
				<button className="btn secondary btn-2">Update password</button>
			</div>
		</Container>
	);
};

export default Profile;
