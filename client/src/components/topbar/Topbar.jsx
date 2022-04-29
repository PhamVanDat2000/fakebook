import "./topbar.css"
import { AiFillHome, AiOutlineSearch } from "react-icons/ai"
import { FaUserFriends } from 'react-icons/fa'
import { TiGroup } from "react-icons/ti"
import { IoMdNotifications } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import { BsFillChatDotsFill, BsFillCaretDownFill } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { GoogleLogout } from 'react-google-login';
import { logoutSuccess } from "../../reducers/loginReducer";

import { useGoogleLogout } from 'react-google-login'
import { useEffect, useState } from "react";
import userApi from "../../api/userApi";


export default function Topbar() {

	const onLogoutSuccess = () => {
		console.log('logout');
		navigate('/login')
	};
	const onFailure = () => {
		console.log('logout fail');
	};
	const { signOut } = useGoogleLogout({
		clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
		onLogoutSuccess: onLogoutSuccess,
		onFailure: onFailure,
	});

	const navigate = useNavigate()
	const userInfo = useSelector(state => state.login)

	const [userList, setUserList] = useState([])
	// useEffect(() => {
	// 	const fetchUserList = async () => {
	// 		try {
	// 			const id = "626a93715dd76e1152ef9731"
	// 			const response = await userApi.getAll({}, id)
	// 			console.log('success to fetch api user', response)
	// 			setUserList(response.data)
	// 		} catch (error) {
	// 			console.log('failed to fetch api user', error)
	// 		}
	// 	}
	// 	fetchUserList()
	// }, [])

	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">Fakebook</span>
				<span className="searchbar">
					<AiOutlineSearch className="searchIcon" />
					<input type="text" className="searchInput" placeholder="Tìm kiếm trên Fakebook" />
				</span>
			</div>
			<div className="topbarCenter">
				<div className="topbarLink">
					<span className={true ? "activeLink" : "noactiveLink"}><AiFillHome className="topbarIcon-1" />Trang Chủ</span>
					<span className="noactiveLink"><FaUserFriends className="topbarIcon-1" />Bạn Bè</span>
					<span className="noactiveLink"><TiGroup className="topbarIcon-1" />Nhóm</span>
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarAvata" onClick={() => { navigate('/profile') }}>
					<img src={userInfo.imageUrl} alt="avata user" className="avt-topbar" />
					<span className="name-user">{userInfo.name}</span>
				</div>
				<div className="topbarIconItem">
					<IoPersonAdd className="topbarIcon-2" />
					<span className="iconBadge">10</span>
				</div>
				<div className="topbarIconItem">
					<BsFillChatDotsFill className="topbarIcon-2" />
					<span className="iconBadge">1</span>
				</div>
				<div className="topbarIconItem">
					<IoMdNotifications className="topbarIcon-2" />
					<span className="iconBadge">1</span>
				</div>

				<div className="topbarIconItem" onClick={() => { signOut() }}>
					<RiLogoutBoxRFill className="topbarIcon-2" />
					{/* <span className="iconBadge">1</span> */}
				</div>
				{/* <GoogleLogout
					clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
					// clientId="626107235060-kp3ehse3dseiprr0fpd13qi0dkh1gdfk.apps.googleusercontent.com"
					buttonText=""
					onLogoutSuccess={logout}
				>
				</GoogleLogout> */}
			</div>
		</div>
	)
}

