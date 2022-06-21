import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "../features/books/bookSlice";
import { searchSlice } from "../features/search/searchSlice";
import { userSlice } from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    search: searchSlice.reducer,
    user: userSlice.reducer,
  }
})