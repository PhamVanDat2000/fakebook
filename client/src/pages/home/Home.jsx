import "./home.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from "../../components/sidebar/Sidebar";
import Newfeed from './../../components/newfeed/Newfeed';
import Rightbar from "../../components/rightbar/Rightbar";
export default function Home() {
	return (
		<div className="container">
			<Topbar />
			<div className="homeContainer">
				<Sidebar />
				<div className="homeNewfeed">
					<Newfeed />
				</div>
				<Rightbar />
			</div>
		</div>
	)
}
