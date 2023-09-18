import Wrapper from "../../assets/wrappers/CommentInput";
import Button from "../UI/Button";
import plusIcon from "../../assets/images/icons/plus.png";
import sendMessageIcon from "../../assets/images/icons/send_message.png";
import { useState, useEffect, useRef } from "react";
import useAppContext from "../../hooks/useAppContext";

const CommentInput = () => {
	const [message, setMessage] = useState("");

	const inputRef = useRef(null);

	const { addComment, replyingToComment } = useAppContext();

	useEffect(() => {
		if (!replyingToComment) return;
		inputRef.current.focus();
	}, [replyingToComment]);

	const sendMessageHandler = () => {
		if ((message || "").trim() === "") return;
		addComment(message);
		setMessage("");
	};

	return (
		<Wrapper>
			<div className="input">
				<Button>
					<img src={plusIcon} alt="Plus button"></img>
				</Button>
				<input
					type="text"
					placeholder="Write your message..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") sendMessageHandler(message);
					}}
					ref={inputRef}
				></input>
				<Button onClick={() => sendMessageHandler()}>
					<div style={{ display: "flex", gap: "12px" }}>
						<img src={sendMessageIcon} alt="Plus button"></img>
						<span className="button-text">Send Mesage</span>
					</div>
				</Button>
			</div>
		</Wrapper>
	);
};

export default CommentInput;
