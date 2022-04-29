import './share.css'
import { BsFillCameraReelsFill } from "react-icons/bs"
import { AiFillPicture } from 'react-icons/ai'
import { FaRegSmileWink } from 'react-icons/fa'

import ImageUploading from 'react-images-uploading'
import { useState } from 'react'
export default function Share() {
	const [images, setImages] = useState([])
	const maxNumber = 1
	const onChange = (imageList, addUpdateIndex) => {
		// data for submit, up to serve, ;....
		console.log(imageList, addUpdateIndex)
		setImages(imageList)
	}
	const handleOnKeyDown =(e)=>{
		e.target.style.height = 'inherit';
    // e.target.style.height = `${e.target.scrollHeight}px`; 
		e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
	}
	return (
		<div className='shareContain'>
			<div className="shareBox">
				<div className="inputShare">
					<img src="assets/person/avt-01.jpg" alt="avate user" className="avt-user" />
					{/* <input type="text" placeholder='Đạt ơi, bạn đang nghĩ gì thế?' className="textShare" /> */}
					<textarea style={{resize: "none"}} type="text" onKeyUp={(e)=>handleOnKeyDown(e)} placeholder='Đạt ơi, bạn đang nghĩ gì thế?' className="textShare" />
				</div>

				<ImageUploading
					onChange={onChange}
				>
					{
						({ onImageRemove }) =>
						(images.map((image, index) => (
							<div key={index} className="image-item">
								<img src={image['data_url']} alt="" width="100%"/>
								<button className='btnDelImg' onClick={() => onImageRemove(index)}>&times;</button>
							</div>
						))
						)}
				</ImageUploading>





				< div className="mediaShare">
					<div className="wrapIcon">
						<BsFillCameraReelsFill className='liveIcon' />
						< span > Video trực tiếp</span>
					</div>
					<ImageUploading
						multiple
						value={images}
						onChange={onChange}
						maxNumber={maxNumber}
						dataURLKey="data_url"
					>
						{({
							onImageUpload,
							isDragging,
							dragProps,
						}) => (
							// write your building UI
							<div className="upload__image-wrapper">



								<div className="wrapIcon"
									style={isDragging ? { color: 'red' } : undefined}
									onClick={onImageUpload}
									{...dragProps}
								>
									<AiFillPicture className='mediaIcon' />
									<span>Ảnh/Video</span>
								</div>

							</div>
						)}
					</ImageUploading>

					<div className="wrapIcon">
						<FaRegSmileWink className='flingIcon' />
						<span>Cảm xúc</span>
					</div>
					<div className="wrapIcon">
						<FaRegSmileWink className='flingIcon' />
						<span>Đăng bài</span>
					</div>
				</div>
			</div >
		</div >
	)
}
