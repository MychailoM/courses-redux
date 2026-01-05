import { createSelector } from "@reduxjs/toolkit";
import { selectCoursesLevel } from "../filters/filtersSelectors";

export const selectCourses = state => state.courses.items;

export const selectCoursesByLevel = createSelector(
  [selectCourses, selectCoursesLevel],
  (courses, level) => {
    return courses.filter(course =>
      level === "all" || course.level === level
    );
  }
);

export const selectCoursesStats = createSelector(
  [selectCourses],
  (courses) => {
    console.log("Обчислення статистики курсів");

    return {
      totalCourses: courses.length,
      totalStudents: courses.reduce(
        (total, course) => total + course.students,
        0
      ),
    };
  }
);