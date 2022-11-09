import Statuses from "constants/statuses";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  ids: [],
  entities: {},
  status: null,
};
export default createSlice({
  name: "last_reviews",
  initialState,
  reducers: {
    startLoading(state) {
      state.status = Statuses.loading;
    },
    successLoading(state, action) {
      const reviews = action.payload;
      for (const review of reviews) {
        const id = review.bookId;

        if (!state.ids.some((v) => v === id)) {
          state.ids.push(id);
          state.entities[id] = { ...review };
        }
      }
      state.status = Statuses.success;
    },
    failLoading(state) {
      state.status = Statuses.fail;
    },
  },
});
