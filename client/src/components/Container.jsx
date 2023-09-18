import Wrapper from "../assets/wrappers/Container";
import CommentInput from "./comment_input/CommentInput";
import CommentsDisplay from "./comments_display/CommentsDisplay";
import { AppProvider } from "../context/appContext";

const Container = () => {
	return (
		<Wrapper>
			<AppProvider>
				<CommentsDisplay></CommentsDisplay>
				<CommentInput></CommentInput>
			</AppProvider>
		</Wrapper>
	);
};

export default Container;
