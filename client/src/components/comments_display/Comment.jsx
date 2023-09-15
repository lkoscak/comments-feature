import Wrapper from "../../assets/wrappers/Comment";
import moment from "moment/moment";

const Comment = ({ comment }) => {
	return (
		<Wrapper>
			<div>{comment.text}</div>
			{comment.replies &&
				comment.replies.map((reply) => {
					return <Comment key={reply.id} comment={reply}></Comment>;
				})}
		</Wrapper>
	);
};

export default Comment;
