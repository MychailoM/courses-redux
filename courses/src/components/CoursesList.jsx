import { useSelector } from "react-redux";
import { selectCoursesByLevel } from "../redux/courses/coursesSelectors";
import "../styles/CoursesList.css";

export const CoursesList = () => {
  const courses = useSelector(selectCoursesByLevel);

  return (
    <ul className="courses-list">
      {courses.map((course) => (
        <li key={course.id} className="course-card">
          <h2 className="course-card__title">{course.title}</h2>
          <p className="course-card__level">
            Level: <span>{course.level}</span>
          </p>
          <p className="course-card__students">
            Students: <span>{course.students}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};
