import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reviewsSlice from './reviews'
import cartSlice from "./cart";
import booksSlice from "./books";
export default configureStore({
  reducer: combineReducers({
     books: booksSlice.reducer, cart: cartSlice.reducer,reviews:reviewsSlice.reducer
  }),
});
