import Wrapper from "../../assets/wrappers/CommentsDisplay";
import commentsData from "../../assets/data/comments.json";
import Comment from "./Comment";
import { useState, useMemo } from "react";

const CommentsDisplay = () => {
	const [comments, setComments] = useState(
		() => commentsData?.data.comments || []
	);

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
			comments.forEach((comment) => {
				if (comment.replies && comment.replies.length > 0) {
					comment.replies = comment.replies.sort(
						(a, b) => a.timestamp - b.timestamp
					);
				}
			});
			return comments.sort((a, b) => a.timestamp - b.timestamp);
		};

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

		topLevelComments.forEach((comment) => {
			comment.replies = getRepliesToComment(comment);
		});

		return sortComments(topLevelComments);
	};

	const transformedComments = useMemo(
		() => transformComments(comments),
		[comments]
	);

	console.log(transformedComments);

	return (
		<Wrapper>
			{transformedComments.map((comment) => {
				return <Comment key={comment.id} comment={comment}></Comment>;
			})}
		</Wrapper>
	);
};

export default CommentsDisplay;
