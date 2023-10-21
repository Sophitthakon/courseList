import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseListPage from "../pages/CourseListPage";
import CourseInfoPage from "../pages/CourseInfoPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/courses" element={<CourseListPage />} />
        <Route path="/courses/:id" element={<CourseInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
