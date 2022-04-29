import { createSlice } from "@reduxjs/toolkit";

export const loginReducer = createSlice({
	name: 'login',
	initialState: {
		status: false,
		type: "",
		email: "",
		name: "",
		imageUrl: "",
	},
	reducers: {
		loginSuccess: (state, action) => {
			state.status = true
			state.type = action.payload.type
			state.email = action.payload.email
			state.name = action.payload.name
			state.imageUrl = action.payload.imageUrl
		},
		logoutSuccess: (state, action) => {
			state.status = false
			state.type = 0
			state.email = ""
			state.name = ""
			state.avt = ""
		},
		loginFailure: (state, action) => {
			state.status = false
			state.type = 0
			state.email = ""
			state.name = ""
			state.avt = ""
		}
	}
})
export const { loginSuccess, logoutSuccess, loginFailure } = loginReducer.actions

export default loginReducer.reducer