import React, { useState } from "react";
import commentsData from "../assets/data/comments.json";
import { v4 as uuid } from "uuid";
import moment from "moment";

const initialState = {
	comments: null,
	addComment: () => {},
	replyingToComment: null,
	replyToComment: () => {},
	latestReplyId: null,
};
const AppContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
	const [comments, setComments] = useState(
		() => commentsData?.data.comments || []
	);
	const [replyingToComment, setReplyingToComment] = useState(null);
	const [latestReplyId, setLatestReplyId] = useState(null);

	const addCommentHandler = (message) => {
		const id = uuid();
		const comment = {
			id,
			parent_id: replyingToComment || null,
			author: {
				name: "Luka K",
				picture: null,
			},
			text: message,
			timestamp: moment().unix(),
		};
		setComments((state) => {
			return [...state, comment];
		});
		setLatestReplyId(id);
	};
	const replyToCommentHandler = (id) => {
		setReplyingToComment(id);
	};
	return (
		<AppContext.Provider
			value={{
				comments,
				addComment: addCommentHandler,
				replyingToComment,
				replyToComment: replyToCommentHandler,
				latestReplyId,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
