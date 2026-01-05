import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/coursesSlice";
import filtersReducer from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    filters: filtersReducer,
  },
});
