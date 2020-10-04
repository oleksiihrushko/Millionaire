import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import pageSlice from "./page/pageSlice";

import qIdxSlice from "./qIdx/qIdxSlice";
import wrongAnswerSlice from "./wrongAnswer/wrongAnswerSlice";

export const store = configureStore({
  reducer: {
    qIdx: qIdxSlice.reducer,
    wrongAnswer: wrongAnswerSlice.reducer,
    page: pageSlice.reducer,
  },
  middleware: [thunk],
});
