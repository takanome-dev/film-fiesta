import styled from "styled-components";
import { appear } from "./Global.styled";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
	gap: 1rem;
	/* display: flex;
	flex-wrap: wrap; */

	.card {
		text-decoration: none;
		width: 100%;
		height: 100%;
		border-radius: 0.8rem;
		cursor: pointer;
		overflow: hidden;
		position: relative;
		transition: box-shadow var(--animation-duration)
			var(--animation-timing-curve);
		&:focus {
			outline: 0.35rem solid var(--secondary-60);
		}

		.rate {
			display: flex;
			padding: 0.5rem;
			border-radius: 0 0 0.8rem 0;
			background: var(--secondary);
			color: var(--yellow);
			position: absolute;
			top: 0;
			left: 0;
			p {
				font-weight: bold;
				margin-left: 0.5rem;
			}
		}

		.card-hover {
			align-items: center;
			bottom: 0;
			background: linear-gradient(rgba(0, 0, 0, 0.5), rgb(0, 0, 0));
			display: flex;
			height: 4rem;
			justify-content: space-between;
			left: 0;
			overflow: hidden;
			opacity: 0;
			position: absolute;
			width: 100%;
			transition: opacity var(--animation-duration)
				var(--animation-timing-curve);

			p {
				color: #fff;
				font-size: 1.2rem;
				font-weight: 500;
				margin-left: 0.6rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.icons {
				.icon {
					background-color: var(--gray-80);
					border-radius: 0.3rem;
					border: none;
					cursor: pointer;
					margin-right: 0.6rem;
					padding: 0.6rem;
					transition: all var(--animation-duration)
						var(--animation-timing-curve);
					&:hover {
						background-color: var(--gray);
					}
					&:active {
						transform: scale(0.95);
					}
				}

				.icon.liked {
					background-color: var(--primary-60);
				}
			}
		}

		&:hover {
			box-shadow: 0 2px 15px rgba(0, 0, 0, 0.6);
			.card-hover {
				opacity: 1;
			}
		}

		img {
			animation: ${appear} 1s;
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
`;

export default Container;
