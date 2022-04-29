import { Link, useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './login.css'
import Register from '../register/Register';
import { useState } from 'react';
import loginApi from '../../api/loginApi';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../reducers/loginReducer';
import axios from 'axios';
export default function Login() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [infoLogin, setInfoLogin] = useState({ email: "", password: "" })
	const handleLogin = async (e) => {
		e.preventDefault()
		try {
			const data = {
				email: infoLogin.email,
				password: infoLogin.password
			}
			const response = await loginApi.postLogin(data)
			console.log('login success', response)

			dispatch(loginSuccess({
				type: "email",
				email: infoLogin.email,
				name: "",
			}))
			navigate('/')
		} catch (error) {
			console.log('login failed', error)
		}
	}
	return (
		<div className="loginContainer">
			<div className="leftContain">
				<h1>fakebook</h1>
				<p>Fakebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</p>
			</div>
			<div className="rightContain">
				<form className='formLogin'>
					<input type="email" className="nameInput" placeholder="Email hoặc số điện thoại" onChange={(e) => setInfoLogin({ ...infoLogin, email: e.target.value })} />
					<input type="password" className="passInput" placeholder="Mật khẩu" onChange={(e) => setInfoLogin({ ...infoLogin, password: e.target.value })} />
					<button className='loginBtn' onClick={(e) => { handleLogin(e) }}>Login</button>
					<Link to="/forgotPassword" style={{ textDecoration: 'none', color: '#1877f2', fontWeight: 400 }}>Fogotten password?</Link>
					<hr className='horizontal' />
					<Popup trigger={<div className='registerBtn'> <p>Đăng ký tài khoản mới</p></div>}
						modal
						nested
						position="right center">
						{
							close => <Register close={close} />
						}
					</Popup>
				</form>
			</div>
		</div>
	)
}
