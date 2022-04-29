import axiosClient from "./axiosClient";

class LoginApi{
	postLogin = (data)=>{
		const url = 'auth/login'
		return axiosClient.post(url,data)
	}
}
const loginApi = new LoginApi()
export default loginApi