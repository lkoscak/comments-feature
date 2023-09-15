import Wrapper from "../../assets/wrappers/Comment";
import moment from "moment/moment";

const Comment = ({ comment }) => {
	const commentDateTime = comment.timestamp
		? moment.unix(comment.timestamp).format("LT")
		: "";
	return (
		<>
			<Wrapper isReply={!comment.replies}>
				<div className="container">
					<div className="avatar-container">
						{comment.author.picture ? (
							<img
								className="avatar"
								src={`src/assets/images/${comment.author.picture}`}
							/>
						) : (
							<div className="avatar no-img"></div>
						)}
					</div>
					<div className="comment">
						<div className="content">
							<h3 className="title">{comment.author.name}</h3>
							<p className="text">{comment.text}</p>
						</div>
						<div className="actions">
							<span className="timestamp">{commentDateTime}</span>
							<span>&#183;</span>
							<div className="actions">
								<span className="action-reply">{`Reply${
									comment.replies && comment.replies.length > 0
										? `(${comment.replies.length})`
										: ""
								}`}</span>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
			{comment.replies &&
				comment.replies.map((reply) => {
					return <Comment key={reply.id} comment={reply}></Comment>;
				})}
		</>
	);
};

export default Comment;
