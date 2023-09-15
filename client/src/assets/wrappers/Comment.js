import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	margin-bottom: 30px;

	.container {
		max-width: 80%;
		display: flex;
		justify-content: flex-start;
		gap: 10px;
		margin-left: ${({ isReply }) => (isReply ? "60px" : "0px")};
		.avatar-container {
			align-self: flex-start;
			height: 100%;

			.avatar {
				height: 48px;
				width: 48px;
				border-radius: 50%;
				border: 0.5px solid var(--color-bg-secondaryLight);
			}

			.avatar.no-img {
				background-color: var(--color-bg-primaryDark);
			}
		}

		.comment {
			flex: 0 1 auto;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			gap: 5px;

			.content {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				border-radius: 8px;
				border: 1px solid #d8dee7;
				background-color: var(--color-bg-secondaryLight);
				gap: 10px;
				padding: 20px;

				h3,
				p {
					margin: 0;
				}

				.title {
					font-weight: 600;
					font-size: 18px;
					color: var(--color-text-primaryDark);
				}

				.text {
					font-weight: 500;
					font-size: 18pxpx;
					color: var(--color-text-primaryLight);
				}
			}

			.actions {
				display: flex;
				align-items: center;
				gap: 10px;
				font-size: 16px;
				font-weight: 500;

				.timestamp {
					color: var(--color-text-primaryLight);
				}
				.action-reply {
					cursor: pointer;
					color: var(--color-bg-primaryDark);
					font-weight: 600;
				}
			}
		}
	}
`;

export default Wrapper;
