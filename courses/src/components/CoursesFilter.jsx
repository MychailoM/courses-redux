import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filters/filtersSlice";
import { selectCoursesLevel } from "../redux/filters/filtersSelectors";
import "../styles/CoursesFilter.css"

export const CoursesFilter = () => {
  const dispatch = useDispatch();
  const level = useSelector(selectCoursesLevel);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="filter">
      <label className="filter__label">
        Filter by level:
        <select
          className="filter__select"
          value={level}
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="basic">Basic</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>
    </div>
  );
};
