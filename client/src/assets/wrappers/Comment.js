import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	.time-header {
		font-size: 13px;
		color: var(--color-text-primaryLight);
		align-self: center;
		padding: 30px 0px;
	}
	.container {
		max-width: 80%;
		display: flex;
		justify-content: flex-start;
		gap: 10px;
		margin-left: ${({ replyLevel }) => `${replyLevel * 20}px`};

		.reply-connector {
			position: absolute;
			border-bottom: 1px solid #d8dee7;
			height: 50px;
			border-left: 1px solid #d8dee7;
			width: 20px;
			top: -65px;
			left: 0px;
			border-radius: 4px;
		}

		.avatar-container {
			align-self: flex-start;
			height: 100%;
			position: relative;

			.avatar {
				height: 48px;
				width: 48px;
				border-radius: 50%;
				border: 0.5px solid var(--color-bg-secondaryLight);
			}

			.avatar.no-img {
				background-color: var(--color-bg-primaryDark);
				color: #ffffff;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 18px;
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
				min-width: 200px;

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
