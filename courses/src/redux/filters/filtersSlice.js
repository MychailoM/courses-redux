import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    level: 'all',
}

const filtersSlice = createSlice({initialState, name: 'filters', reducers: {
    setFilter(state, action){
        state.level = action.payload;
    }
}})

export const {setFilter} = filtersSlice.actions;
export default filtersSlice.reducer;