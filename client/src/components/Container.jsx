import Wrapper from "../assets/wrappers/Container";
import CommentInput from "./comment_input/CommentInput";
import CommentsDisplay from "./comments_display/CommentsDisplay";

const Container = () => {
	return (
		<Wrapper>
			<CommentsDisplay></CommentsDisplay>
			<CommentInput></CommentInput>
		</Wrapper>
	);
};

export default Container;
