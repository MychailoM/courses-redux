import { CoursesList } from "./components/CoursesList";
import { CoursesStats } from "./components/CoursesStats";
import { CoursesFilter } from "./components/CoursesFilter";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title">Courses Dashboard</h1>
      <CoursesFilter />
      <CoursesStats />
      <CoursesList />
    </div>
  );
};

export default App;
