import './share.css'
import { BsFillCameraReelsFill } from "react-icons/bs"
import { AiFillPicture } from 'react-icons/ai'
import { FaRegSmileWink } from 'react-icons/fa'
export default function Share() {
	return (
		<div className='shareContain'>
			<div className="shareBox">
				<div className="inputShare">
					<img src="assets/person/avt-01.jpg" alt="avate user" className="avt-user" />
					<input type="text" placeholder='Đạt ơi, bạn đang nghĩ gì thế?' className="textShare" />
				</div>
				<div className="mediaShare">
					<div className="wrapIcon">
						<BsFillCameraReelsFill className='liveIcon' />
						< span > Video trực tiếp</span>
					</div>
					<div className="wrapIcon">
						<AiFillPicture className='mediaIcon' />
						<span>Ảnh/Video</span>
					</div>
					<div className="wrapIcon">
						<FaRegSmileWink className='flingIcon'/>
						<span>Cảm xúc</span>
					</div>
				</div>
			</div>
		</div >
	)
}
