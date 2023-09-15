import Wrapper from "../../assets/wrappers/CommentInput";
import Button from "../UI/Button";
import plusIcon from "../../assets/images/icons/plus.png";
import sendMessageIcon from "../../assets/images/icons/send_message.png";

const CommentInput = () => {
	return (
		<Wrapper>
			<div className="input">
				<Button>
					<img src={plusIcon} alt="Plus button"></img>
				</Button>
				<input type="text" placeholder="Write your message..."></input>
				<Button>
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
