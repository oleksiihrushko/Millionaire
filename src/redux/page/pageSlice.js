import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "page",
  initialState: "home",
  reducers: {
    setPage: (state, { payload }) => payload,
  },
});
