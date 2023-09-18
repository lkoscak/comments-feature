import Wrapper from "../../assets/wrappers/Comment";
import moment from "moment/moment";
import useAppContext from "../../hooks/useAppContext";

const Comment = ({
	comment,
	replyLevel = 0,
	isFirstReply,
	shouldDisplayTimeHeader = false,
	isSameDateAsParent = true,
}) => {
	const { replyToComment } = useAppContext();

	const getFormatedTimeInfo = (timestamp) => {
		if (moment.unix(timestamp).isSame(moment(), "day")) return "Today";
		if (moment.unix(timestamp).isSame(moment().subtract(1, "day"), "day"))
			return "Yesterday";
		if (
			moment
				.unix(timestamp)
				.isAfter(moment().subtract(7, "days").startOf("day"))
		)
			return moment.unix(timestamp).format("dddd");
		return moment.unix(timestamp).format("dddd, DD.MM.yyyy.");
	};
	const commentDateTime = comment.timestamp
		? isSameDateAsParent
			? moment.unix(comment.timestamp).format("LT")
			: `${getFormatedTimeInfo(comment.timestamp)}, ${moment
					.unix(comment.timestamp)
					.format("LT")}`
		: "";

	return (
		<>
			<Wrapper replyLevel={replyLevel} id={`comment_${comment.id}`}>
				{!comment.parent_id && shouldDisplayTimeHeader && (
					<div className="time-header">
						{getFormatedTimeInfo(comment.timestamp)}
					</div>
				)}
				<div className="container">
					<div className="avatar-container">
						{isFirstReply && <div className="reply-connector"></div>}
						{comment.author.picture ? (
							<img
								className="avatar"
								src={`src/assets/images/${comment.author.picture}`}
							/>
						) : (
							<div className="avatar no-img">
								{comment.author.name
									? comment.author.name.charAt(0).toUpperCase()
									: ""}
							</div>
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
								<span
									className="action-reply"
									onClick={() => {
										replyToComment(comment.id);
									}}
								>{`Reply${
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
				comment.replies.map((reply, index) => {
					return (
						<Comment
							key={reply.id}
							comment={reply}
							replyLevel={(replyLevel || 0) + 1}
							isFirstReply={index === 0}
							isSameDateAsParent={moment
								.unix(comment.timestamp)
								.isSame(moment.unix(reply.timestamp), "day")}
						></Comment>
					);
				})}
		</>
	);
};

export default Comment;
