import axiosClient from "./axiosClient"

class UserApi {
	getAll = (params, id) => {
		const url = '/user/'+id
		return axiosClient.get(url, { params })
	}
}

const userApi = new UserApi()
export default userApi