import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seatchWord: ''
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    enterSearchWord: (state, action) => {
      state.seatchWord = action.payload
    }
  }
})

export const { enterSearchWord } = searchSlice.actions;