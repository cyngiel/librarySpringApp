import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "../features/books/bookSlice";
import { searchSlice } from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    search: searchSlice.reducer,
  }
})