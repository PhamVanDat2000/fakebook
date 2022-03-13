import "./register.css"
export default function Register() {
	return (
		<div className="loginContainer">
			<div className="loginLogo">
				<h1>Fakebook</h1>
				<p>Fakebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</p>
			</div>
			<form>
				<input type="text" className="nameInput" placeholder="Email hoặc số điện thoại"/>
				<input type="password" className="passInput" placeholder="Mật khẩu"/>
			</form>
		</div>
	)
}
