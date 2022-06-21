import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userStatus: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		addUserStatus: (state, action) => {
			console.log('user', action.payload);
			state.userStatus = action.payload;
		},
		removeUserStatus: (state, action) => {state.userStatus = action.payload},
	},
});

export const { addUserStatus, removeUserStatus } = userSlice.actions;
