import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "wrongAnswer",
  initialState: 0,
  reducers: {
    setWrongAnswer: () => 1,
  },
});
