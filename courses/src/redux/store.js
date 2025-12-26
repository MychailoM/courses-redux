import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        courses: coursesReducer,
        stats: statsReducer,
        filters: filtersReducer,
    }
})