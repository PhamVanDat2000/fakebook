import "./sidebar.css"
import { TiGroup } from "react-icons/ti";
import { FaGamepad, FaSave, FaUserFriends } from "react-icons/fa";
import { AiOutlineFieldTime, AiTwotoneShop } from "react-icons/ai";
import { BsFillCaretDownFill, BsFillCaretUpFill, BsFillChatDotsFill, BsFillFlagFill } from "react-icons/bs";
import { useState } from "react";
export default function Sidebar() {
	const groupFullArray = [
		{ url: "/assets/person/avt-01.jpg", nameGroup: "Hội sinh viên KTX khu B" },
		{ url: "/assets/person/avt-01.jpg", nameGroup: "HCMUT 18" },
		{ url: "/assets/person/avt-01.jpg", nameGroup: "Confession" },
		{ url: "/assets/person/avt-01.jpg", nameGroup: "Lập trình web" },
		{ url: "/assets/person/avt-01.jpg", nameGroup: "Hội sinh viên KTX khu B" },
		{ url: "/assets/person/avt-01.jpg", nameGroup: "HCMUT 18" },
		{ url: "/assets/person/avt-01.jpg", nameGroup: "Confession" },
		{ url: "/assets/person/avt-01.jpg", nameGroup: "Lập trình web" },
		{ url: "/assets/person/avt-01.jpg", nameGroup: "Hội sinh viên KTX khu B" },
		{ url: "/assets/person/avt-01.jpg", nameGroup: "HCMUT 18" },
		{ url: "/assets/person/avt-01.jpg", nameGroup: "Confession" },
		{ url: "/assets/person/avt-01.jpg", nameGroup: "Lập trình web" },
	]
	const [extendTop, setExtendTop] = useState(false)
	const [extendBot, setExtendBot] = useState(false)
	const handleExtend = (extend, setExtend) => {
		setExtend(!extend)
	}
	const groupCompactArray = groupFullArray.slice(0, 6)
	const showCompact = (groupArray) => {
		return groupArray.map((group, idx) => {
			return <li className="sidebarItem" key={idx}>
				<img src={group.url} alt="avata group" className="avt-group" />
				<span>{group.nameGroup}</span>
			</li>
		})
	}

	return (
		<div className="sidebar">
			<div className="wrapsidebarList">
				<ul className="sidebarList">
					<li className="sidebarItem">
						<img src="/assets/person/avt-01.jpg" alt="avata user" className="avt-sidebar" />
						<span className="name-user">Phạm Văn Đạt</span>
					</li>
					<li className="sidebarItem">
						<FaUserFriends className="sidebarIcon" />
						<span>Bạn bè</span>
					</li>
					<li className="sidebarItem">
						<TiGroup className="sidebarIcon" />
						<span>Nhóm</span>
					</li>
					<li className="sidebarItem">
						<AiTwotoneShop className="sidebarIcon" />
						<span>Marketplace</span>
					</li>
					<li className="sidebarItem">
						<AiOutlineFieldTime className="sidebarIcon" />
						<span>Kỷ niệm</span>
					</li>
					<li className="sidebarItem">
						<FaGamepad className="sidebarIcon" />
						<span>Game</span>
					</li>
					{
						extendTop ?
							<>
								<li className="sidebarItem">
									<FaSave className="sidebarIcon" />
									<span>Lưu trữ</span>
								</li>
								<li className="sidebarItem">
									<BsFillChatDotsFill className="sidebarIcon" />
									<span>Message</span>
								</li>
								<li className="sidebarItem">
									<BsFillFlagFill className="sidebarIcon" />
									<span>Trang</span>
								</li>
								<li className="sidebarItem" onClick={() => { handleExtend(extendTop, setExtendTop) }}>
									<BsFillCaretUpFill style={{ color: '#000' }} className="sidebarIcon" />
									<span>Thu gọn</span>
								</li>
							</>
							:
							<li className="sidebarItem" onClick={() => { handleExtend(extendTop, setExtendTop) }}>
								<BsFillCaretDownFill style={{ color: '#000' }} className="sidebarIcon" />
								<span>Xem thêm</span>
							</li>

					}
					<hr className="sidebarHr" />
					<p className="sidebarText">Lối tắt của bạn</p>
					{
						!extendBot ?
							showCompact(groupCompactArray)
							:
							showCompact(groupFullArray)
					}
					<li className="sidebarItem" onClick={() => { handleExtend(extendBot, setExtendBot) }}>
						{
							!extendBot ?
								<>
									<BsFillCaretDownFill style={{ color: '#000' }} className="sidebarIcon" />
									<span>Xem thêm</span>
								</> :
								<>
									<BsFillCaretUpFill style={{ color: '#000' }} className="sidebarIcon" />
									<span>Thu gọn</span>
								</>
						}
					</li>
					<hr className="sidebarHr" />
				</ul>

			</div>
		</div>
	)
}
