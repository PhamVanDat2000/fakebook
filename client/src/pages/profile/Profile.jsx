import Topbar from "../../components/topbar/Topbar";
import Newfeed from "../../components/newfeed/Newfeed"
import "./profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import { useSelector } from "react-redux";

export default function Profile() {
	const userInfo = useSelector(state => state.login)
	return (
		<div className="container">
			<Topbar />
			<div className="profile">
				<div className="topProfile">
					<div className="subTopProflie">
						<div className="containCoverImg">
							<img src={userInfo.imageUrl} alt="cover Img" className="coverImg" />
						</div>
						<div className="bottomCoverImg">
							<div className="avataProfile">
								<img src={userInfo.imageUrl} alt="cover Img" className="avataProfileImg" />
							</div>
							<p>Phạm Văn Đạt</p>
						</div>
						<hr className="rightbarHr" />
						<div className="controlProfile">
							<div className={true ? "itemActive" : "itemcontrol"}>Bài viết</div>
							<div className="itemcontrol">Giới thiệu</div>
							<div className="itemcontrol">Bạn bè</div>
						</div>
					</div>
				</div>
				<div className="downProfile">
					<div className="contentProfile">
						<div className="inforprofile">
							<div className="aboutProfile">
								<h1>Giới thiệu</h1>
								<p>Học Học Khoa học máy tính tại Trường Đại học Bách khoa - ĐH Quốc gia TP.HCM</p>
								<p>Sống tại Thành Phố Hồ Chí Minh</p>
								<p>Đến từ Hà Tĩnh</p>
							</div>
							<Rightbar user="true" />
						</div>
						<div className="profileNewfeed">
							<Newfeed />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
