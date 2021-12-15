import "./newfeed.css"
import Share from './../share/Share';
import Post from "../post/Post";

export default function Newfeed() {
	return (
		<div className="newfeed">
			<div className="content">
				<Share/>
				<Post/>
			</div>
		</div>
	)
}
