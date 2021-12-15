import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { GoSmiley } from 'react-icons/go'
import { RiShareForwardLine } from 'react-icons/ri'
import { BiCommentDetail } from 'react-icons/bi'
import './post.css'
export default function Post() {
	return (
		<div className='postContain'>
			<div className="postBox">
				<div className="topPost">
					<img src="assets/person/avt-05.jpg" alt="avt user" className='avt-user' />
					<span className='nameUser'>
						<span className='textName'>Thúy diễm</span>
						<span className='textTime'>4 giờ</span>
					</span>
				</div>
				<p className="statusText">Khoan, dừng khoảng chừng là 2 giây...</p>
				<img src="assets/post-01.jpg" alt="" className='postImg' />
				<div className="bottomPost">
					<div className='inforReact'>

						<div className="numberLikeShare">
							<AiFillLike className='smLikeIcon' />
							<GoSmiley className='smHaHaIcon' />
							<span className='numberReact'>480</span>
						</div>
						<span className="numberComment">21 bình luận</span>
					</div>
					<hr className='postHr' />
					<div className='boxControl'>
						<div className='btnPost'>
							<AiOutlineLike className='iconBtn' />
							<span>Thích</span>
						</div>
						<div className="btnPost">
							<BiCommentDetail className='iconBtn' />
							<span>Bình luận</span>
						</div>
						<div className="btnPost">
							<RiShareForwardLine className='iconBtn' />
							<span>Chia sẻ</span>
						</div>
					</div>
					{
						false &&
						<hr className='postHr' />
					}
				</div>
			</div>
		</div >
	)
}
