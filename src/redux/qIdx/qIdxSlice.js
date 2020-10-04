import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "qIdx",
  initialState: 0,
  reducers: {
    nextQuestion: (state) => state + 1,
  },
});
