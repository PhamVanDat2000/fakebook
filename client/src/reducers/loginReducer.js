import { createSlice } from "@reduxjs/toolkit";

export const loginReducer = createSlice({
	name: 'login',
	initialState:{
		status:false,
		type: "",
		email: "",
		name: "",
		imageUrl: "",
	},
	reducers:{
		loginSuccess: (state, action)=>{
			state.status = true
			state.type = action.payload.type
			state.email = action.payload.email
			state.name = action.payload.name
			state.imageUrl = action.payload.imageUrl
		},
		loginFailure:(state, action)=>{
			state.status = false
			state.type = 0
			state.email = ""
			state.name = ""
			state.avt = ""
		}
	}
})
export const {loginSuccess, loginFailure} = loginReducer.actions

export default loginReducer.reducer