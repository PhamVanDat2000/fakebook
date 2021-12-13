import "./rightbar.css"
import { FaUserFriends } from 'react-icons/fa';

export default function Rightbar() {
    const friendsArray = [
        { name: "Nguyễn Thảo", url: "/assets/person/avt-06.jpg" },
        { name: "Thúy Ngân", url: "/assets/person/avt-05.jpg" },
        { name: "Ngọc Diễm", url: "/assets/person/avt-04.jpg" },
        { name: "Hoàng Đức", url: "/assets/person/avt-03.jpg" },
        { name: "Trương Thủy", url: "/assets/person/avt-02.jpg" },
        { name: "Minh Thư", url: "/assets/person/avt-01.jpg" },
        { name: "Nguyễn Thảo", url: "/assets/person/avt-06.jpg" },
        { name: "Thúy Ngân", url: "/assets/person/avt-05.jpg" },
        { name: "Ngọc Diễm", url: "/assets/person/avt-04.jpg" },
        { name: "Hoàng Đức", url: "/assets/person/avt-03.jpg" },
        { name: "Trương Thủy", url: "/assets/person/avt-02.jpg" },
        { name: "Minh Thư", url: "/assets/person/avt-01.jpg" },
        { name: "Nguyễn Thảo", url: "/assets/person/avt-06.jpg" },
        { name: "Thúy Ngân", url: "/assets/person/avt-05.jpg" },
        { name: "Ngọc Diễm", url: "/assets/person/avt-04.jpg" },
        { name: "Hoàng Đức", url: "/assets/person/avt-03.jpg" },
        { name: "Trương Thủy", url: "/assets/person/avt-02.jpg" },
        { name: "Minh Thư", url: "/assets/person/avt-01.jpg" },
        { name: "Nguyễn Thảo", url: "/assets/person/avt-06.jpg" },
        { name: "Thúy Ngân", url: "/assets/person/avt-05.jpg" },
        { name: "Ngọc Diễm", url: "/assets/person/avt-04.jpg" },
        { name: "Hoàng Đức", url: "/assets/person/avt-03.jpg" },
        { name: "Trương Thủy", url: "/assets/person/avt-02.jpg" },
        { name: "Minh Thư", url: "/assets/person/avt-01.jpg" },
        { name: "Nguyễn Thảo", url: "/assets/person/avt-06.jpg" },
        { name: "Thúy Ngân", url: "/assets/person/avt-05.jpg" },
        { name: "Ngọc Diễm", url: "/assets/person/avt-04.jpg" },
        { name: "Hoàng Đức", url: "/assets/person/avt-03.jpg" },
        { name: "Trương Thủy", url: "/assets/person/avt-02.jpg" },
        { name: "Minh Thư", url: "/assets/person/avt-01.jpg" },
    ]
    return (
        <div className="rightbar">
            <div className="wrapRightbar">
                <div className="friendReqList">
                    <FaUserFriends className="friendReqIcon" />
                    <span className="friendRedText">Lời mời kết bạn</span>
                    <div className="friendReq">
                        <img src="/assets/person/avt-04.jpg" alt="avt-user" className="avt-user" />
                        <div>
                            <p className="friend-name">Thúy Ngân</p>
                            <div className="btnCtrl">
                                <button className="acceptBtn">Xác nhận</button>
                                <button className="cancelBtn">Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="rightbarHr" />
                <p className="rightbarText">Người liên hệ</p>
                <ul className="listFriends">
                    {
                        friendsArray.map((friend, idx) => {
                            return (
                                <li li className="friendsItem" key={idx}>
                                    <img src={friend.url} alt="avt-frd" className="avt-friend" />
                                    <div className="onlStatus"></div>
                                    <span>{friend.name}</span>
                                </li>
                            )
                        })
                    }
                </ul>

                <hr className="rightbarHr" />
            </div>
        </div >
    )
}
