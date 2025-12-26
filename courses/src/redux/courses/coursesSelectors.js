import { createSelector } from "@reduxjs/toolkit";
import { selectCoursesLevel } from "../filters/filtersSelectors";

export const selectCourses = state => state.courses.items;

export const selectCoursesByLevel = createSelector(
    [selectCoursesLevel], level => {
        return couses.filter(course => {
            const levelMatch = level === "all" || course.level === level;
            return levelMatch;
        })
    }
)