import { useSelector } from "react-redux";
import { selectCoursesStats } from "../redux/courses/coursesSelectors";
import "../styles/CoursesStats.css";

export const CoursesStats = () => {
  const stats = useSelector(selectCoursesStats);

  return (
    <div className="stats">
      <div className="stats__item">
        <span className="stats__label">Total courses</span>
        <span className="stats__value">{stats.totalCourses}</span>
      </div>

      <div className="stats__item">
        <span className="stats__label">Total students</span>
        <span className="stats__value">{stats.totalStudents}</span>
      </div>
    </div>
  );
};
