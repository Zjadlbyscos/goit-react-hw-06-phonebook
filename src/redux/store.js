import { configureStore } from "@reduxjs/toolkit";

import { sliceContact } from "./redux/sliceContact";
import { sliceFilter } from "./redux/sliceFilter";

const store = configureStore({
  reducer: sliceContact.reducer
});

export default store;
