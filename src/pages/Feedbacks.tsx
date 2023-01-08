/* eslint-disable @typescript-eslint/no-non-null-assertion */
import useCurrentUser from "@/hooks/useCurrentUser";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";
import { Context } from "../context/GlobalContext";

const Container = styled.div`
	.feedback-container {
		border: 1px solid var(--gray-20);
		border-radius: 0.8rem;
		margin-bottom: 1rem;
		padding: 1rem;

		span {
			align-items: center;
			display: flex;
			margin-bottom: 0.5rem;

			em {
				font-weight: 500;
				font-size: 1.1rem;
			}

			p {
				margin-left: 1rem;
				font-size: 1.1rem;
			}

			@media (max-width: 360px) {
				align-items: flex-start;
				flex-direction: column;

				p {
					margin: 0.3rem 0rem;
				}
			}
		}

		.msg {
			align-items: flex-start;
			flex-direction: column;

			p {
				margin-top: 0.5rem;
				margin-left: 0;
				line-height: 1.5rem;
			}
		}
	}

	.info {
		font-size: 1.3rem;
		text-align: center;
	}
`;

const Feedbacks = () => {
	const { feedbacks, onRefetchFeedbacks } = useContext(Context);
	const user = useCurrentUser()

	useEffect(() => {
		onRefetchFeedbacks?.();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container className="flex">
			{user?.isAdmin ? (
				<Wrapper width="100%">
					{feedbacks!.length > 0 ? (
						feedbacks?.map((f) => (
							<div className="feedback-container" key={f._id}>
								{f.username && (
									<div className="feedback-author">
										<span>
											<em>Username :</em> <p>{f.username}</p>
										</span>
										<span>
											<em>Email :</em> <p>{f.email}</p>
										</span>
									</div>
								)}
								<div className="feedback-subject">
									<span>
										<em>Subject :</em> <p>{f.subject}</p>
									</span>
								</div>
								<div className="feedback-message">
									<span className="msg">
										<em>Message :</em>
										<p>{f.message}</p>
									</span>
								</div>
							</div>
						))
					) : (
						<div className="flex">
							<p>You don't have any feedback yet</p>
						</div>
					)}
				</Wrapper>
			) : (
				<Wrapper width="30rem">
					<p className="info">
						Only the admin can see the information about this page.
					</p>
				</Wrapper>
			)}
		</Container>
	);
};

export default Feedbacks;
