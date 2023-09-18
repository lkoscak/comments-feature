import styled from "styled-components";

const Wrapper = styled.div`
	flex: 1 1;
	min-height: 300px;
	overflow-y: scroll;
	margin-top: 40px;
	padding: 0px 0px 10px 5%;
	scroll-behavior: smooth;
	background-color: var(--color-bg-primaryLight);
	margin-right: 10px;

	&:-webkit-scrollbar-track {
		background-color: transparent;
	}

	&::-webkit-scrollbar {
		width: 12px;
		background-color: var(--color-bg-primaryLight);
		height: 128px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 8px;
		border-right: none;
		border-left: none;
		background-color: #c7cdd8;
	}
`;

export default Wrapper;
