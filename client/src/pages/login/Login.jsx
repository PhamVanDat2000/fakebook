import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './login.css'
import Register from '../register/Register';
export default function Login() {
	return (
		<div className="loginContainer">
			<div className="leftContain">
				<h1>fakebook</h1>
				<p>Fakebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</p>
			</div>
			<div className="rightContain">
				<form className='formLogin'>
					<input type="text" className="nameInput" placeholder="Email hoặc số điện thoại" />
					<input type="password" className="passInput" placeholder="Mật khẩu" />
					<button className='loginBtn'>Login</button>
					<Link to="/forgotPassword" style={{ textDecoration: 'none', color: '#1877f2', fontWeight: 400 }}>Fogotten password?</Link>
					<hr className='horizontal' />
					<Popup trigger={<div className='registerBtn'> <p>Đăng ký tài khoản mới</p></div>}
						modal
						nested
						position="right center">
							{
								close=> <Register close={close}/>
							}
					</Popup>
				</form>
			</div>
		</div>
	)
}
