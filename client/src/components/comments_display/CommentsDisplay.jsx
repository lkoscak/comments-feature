import Wrapper from "../../assets/wrappers/CommentsDisplay";
import Comment from "./Comment";
import { useMemo, useRef, useEffect } from "react";
import moment from "moment";
import useAppContext from "../../hooks/useAppContext";

const CommentsDisplay = () => {
	const { comments, replyingToComment, replyToComment, latestReplyId } =
		useAppContext();

	const commentsRef = useRef(null);

	useEffect(() => {
		if (replyingToComment) {
			commentsRef.current
				?.querySelector(`#comment_${latestReplyId}`)
				?.scrollIntoView({
					behavior: "smooth",
					block: "center",
					inline: "center",
				});
			replyToComment(null);
			return;
		}
		commentsRef.current?.lastElementChild?.scrollIntoView({
			behavior: "smooth",
		});
	}, [comments]);

	const transformComments = (comments) => {
		// Flatten comment replies to one level
		const getRepliesToComment = (comment) => {
			let repliesToComment = [];
			if (comment.replies) {
				comment.replies.forEach((replie) => {
					repliesToComment.push(replie);
					const replies = getRepliesToComment(replie);
					delete replie.replies;
					repliesToComment = repliesToComment.concat(replies);
				});
			}

			return repliesToComment;
		};

		const sortComments = (comments) => {
			return comments.sort((a, b) => a.timestamp - b.timestamp);
		};

		// sort comments by timestamp
		comments = sortComments(comments);

		// Create a map of comments using their IDs as keys for efficient lookup.
		const commentMap = new Map();
		comments.forEach((comment) => {
			comment.replies = [];
			commentMap.set(comment.id, comment);
		});

		// Build the hierarchical structure.
		const topLevelComments = [];
		comments.forEach((comment) => {
			if (comment.parent_id) {
				const parentComment = commentMap.get(comment.parent_id);
				if (parentComment) {
					parentComment.replies.push(comment);
				}
			} else {
				topLevelComments.push(comment);
			}
		});

		/* topLevelComments.forEach((comment) => {
			comment.replies = getRepliesToComment(comment);
		}) */

		return topLevelComments;
	};

	const transformedComments = useMemo(
		() => transformComments(comments),
		[comments]
	);

	console.log(transformedComments);

	return (
		<Wrapper ref={commentsRef}>
			{transformedComments.map((comment, index) => {
				return (
					<Comment
						key={comment.id}
						comment={comment}
						shouldDisplayTimeHeader={
							index === 0 ||
							!moment
								.unix(comment.timestamp)
								.isSame(moment.unix(comments[index - 1].timestamp), "day")
						}
					></Comment>
				);
			})}
		</Wrapper>
	);
};

export default CommentsDisplay;
