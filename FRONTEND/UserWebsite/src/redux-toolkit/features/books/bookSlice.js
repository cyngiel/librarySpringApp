import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	bookList: []
};

export const booksSlice = createSlice({
	name: 'books',
	initialState: initialState,
	reducers: {
		addBook: (state, action) => {
			// console.log(action.payload);
			state.bookList.push(action.payload);
		},
		removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
	},
});

export const { addBook, removeBook } = booksSlice.actions;
