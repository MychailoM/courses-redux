import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
      { id: 1, title: "JavaScript", level: "basic", students: 120 },
      { id: 2, title: "React", level: "advanced", students: 80 },
      { id: 3, title: "Redux", level: "advanced", students: 60 }
    ],
    isLoading: false,
    error: null,
}

const coursesSlice = createSlice({initialState, name: 'courses', reducers: {}});

export default coursesSlice.reducer;
