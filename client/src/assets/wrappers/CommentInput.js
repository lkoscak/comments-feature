import styled from "styled-components";

const Wrapper = styled.div`
	flex: 0 0 90px;
	width: 100%;
	background-color: var(--color-bg-primaryLight);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	.input {
		background-color: var(--color-bg-secondaryLight);
		height: 72px;
		width: 90%;
		padding: 6px;
		margin-bottom: 10px;
		border: 1px solid #eceef1;
		border-radius: 8px;
		box-shadow: 2px 4px 24px 0px #0000001a;
		display: flex;
		align-items: center;
		justify-content: space-between;

		button {
			background-color: var(--color-bg-primaryDark);
			padding: 16px;
			color: #ffffff;
			height: 56px;
			border-radius: 6px;
			font-size: 18px;
			cursor: pointer;
		}

		input {
			color: var(--color_text_primaryDark);
			padding: 20px;
			font-size: 18px;
			font-weight: 500;
			border: none;
			flex: 1 0;
		}
		input:focus {
			box-shadow: none;
			outline: none;
		}
		input::placeholder {
			color: var(--color_text_primaryLight);
			opacity: 0.7;
		}

		@media (max-width: 850px) {
			.button-text {
				display: none;
			}
		}
	}
`;

export default Wrapper;
