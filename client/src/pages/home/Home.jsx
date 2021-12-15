import "./home.css"
import Topbar from '../../components/topbar/Topbar';
import Sidebar from "../../components/sidebar/Sidebar";
import Newfeed from './../../components/newfeed/Newfeed';
import Rightbar from "../../components/rightbar/Rightbar";
export default function Home() {
    return (
        <div style={{
            backgroundColor: "#f0f2f5"
        }}>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Newfeed />
                <Rightbar />
            </div>
        </div>
    )
}
