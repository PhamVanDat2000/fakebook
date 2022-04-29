import axiosClient from "./axiosClient"

class RegisterApi {
	postRegister = (data)=>{
		const url = '/auth/register'
		return axiosClient.post(url, data)
	}
}
const registerApi = new RegisterApi()
export default registerApi