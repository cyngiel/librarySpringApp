import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "../features/books/bookSlice";

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  }
})