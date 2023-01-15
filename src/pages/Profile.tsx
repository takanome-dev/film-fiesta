import useCurrentUser from "@/hooks/useCurrentUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditPassword } from "../components";
import Wrapper from "../components/common/Wrapper";
import EditProfile from "../components/EditProfile";
import Container from "../components/styles/Profile.styled";

const Profile = () => {
	const [editProfile, setEditProfile] = useState(false);
	const [editPassword, setEditPassword] = useState(false);
	const navigate  = useNavigate()
	const user = useCurrentUser()

	if (!user?._id) navigate('/login')

	return (
		<>
			<EditProfile
				editProfile={editProfile}
				setEditProfile={setEditProfile}
				// dispatch={dispatch}
			/>
			{editPassword && (
				<EditPassword
					editPassword={editPassword}
					setEditPassword={setEditPassword}
				/>
			)}
			<Container>
				<Wrapper width="100%">
					<div className="profile-wrapper">
						<div className="avatar-container">
							<div className="avatar">
								<div className="user-avatar flex">
									<img src={user?.imageUrl} alt="User avatar" />
								</div>
								<div className="user-info">
									<p className="name">{user?.name}</p>
									<p className="email">{user?.email}</p>
								</div>
							</div>
							<button
								className="btn secondary btn-1"
								onClick={() => setEditProfile(true)}
							>
								Edit profile
							</button>
						</div>
						<fieldset disabled aria-label="User information">
							<div className="input-container">
								<label htmlFor="name">Name</label>
								<input readOnly id="name" type="text" value={user?.name} />
							</div>
							<div className="input-container">
								<label htmlFor="email">Email</label>
								<input readOnly id="email" type="email" value={user?.email} />
							</div>
						</fieldset>
						<button
							className="btn secondary btn-2"
							onClick={() => setEditProfile(true)}
						>
							Edit profile
						</button>
					</div>
					<div className="password-wrapper">
						<div className="password-label">
							<p>Password</p>
							<button
								className="btn secondary btn-1"
								onClick={() => setEditPassword(true)}
							>
								Update password
							</button>
						</div>
						<input
							id="name"
							type="text"
							value="********************"
							aria-label="Password input"
							readOnly
							disabled
						/>
						<button
							className="btn secondary btn-2"
							onClick={() => setEditPassword(true)}
						>
							Update password
						</button>
					</div>
				</Wrapper>
			</Container>
		</>
	);
};

export default Profile;
