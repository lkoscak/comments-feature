import styled from "styled-components";

const Wrapper = styled.div`
	flex: 0 0 90px;
	width: 100%;
	background-color: var(--color-bg-primary);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	.input {
		background-color: var(--color-bg-primary);
		height: 72px;
		width: 90%;
		margin-bottom: 10px;
		border: 1px solid #eceef1;
		border-radius: 8px;
		box-shadow: 2px 4px 24px 0px #0000001a;
	}
`;

export default Wrapper;
