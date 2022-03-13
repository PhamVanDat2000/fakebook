import './login.css'
import {Link} from 'react-router-dom'
export default function Login() {
	return (
		<div className="loginContainer">
			<div className="loginLeft">
				<h1>fakebook</h1>
				<p>Fakebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</p>
			</div>
			<div className="loginRight">
				<form className='formLogin'>
					<input type="text" className="nameInput" placeholder="Email hoặc số điện thoại" />
					<input type="password" className="passInput" placeholder="Mật khẩu" />
					<button className='loginBtn'>Login</button>
					<Link to="/forgotPassword" style={{ textDecoration: 'none', color: '#1877f2', fontWeight:400}}>Fogotten password?</Link>
					<hr className='horizontal' />
					<button className='registerBtn'>Đăng ký tài khoản mới</button>
				</form>
			</div>
		</div>
	)
}
