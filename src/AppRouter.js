import { Routes, Route } from "react-router-dom";
import { ApiController } from "./Context";
import Login from "./components/Login";
import Register from "./components/Register";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Course from "./components/Course";
import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";

const AppRouter = () => {
  return (
    <div>
      <ApiController>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course/:lessonId/:chapterId" element={<Course />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz/:lessonId/:quizId" element={<Quiz />} />
        </Routes>
        <Footer />
      </ApiController>
    </div>
  );
};

export default AppRouter;
