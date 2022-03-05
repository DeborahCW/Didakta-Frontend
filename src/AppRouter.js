import { Routes, Route } from "react-router-dom";
import { ApiController } from "./LessonsContext";
import Login from "./components/Login";
import Register from "./components/Register";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Course from "./components/Course";
import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";
import QuizResult from "./components/QuizResult";

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
          <Route path="/about" element={<About />} />
          <Route path="/quiz/:lessonId/:questionId" element={<Quiz />} />
          <Route path="/quiz/result" element={<QuizResult />} />
        </Routes>
        <Footer />
      </ApiController>
    </div>
  );
};

export default AppRouter;
