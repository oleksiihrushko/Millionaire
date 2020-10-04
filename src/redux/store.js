import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import qIdxSlice from "./qIdx/qIdxSlice";
import wrongAnswerSlice from "./wrongAnswer/wrongAnswerSlice";

export const store = configureStore({
  reducer: {
    qIdx: qIdxSlice.reducer,
    wrongAnswer: wrongAnswerSlice.reducer,
  },
  middleware: [thunk],
});
