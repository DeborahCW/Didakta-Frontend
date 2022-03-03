import { Routes, Route } from "react-router-dom";
import { ApiController } from "./Context";
import Login from "./pages/Login";
import Register from "./pages/Register";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Course from "./pages/Course";
import Dashboard from "./pages/Dashboard";
import Home from "./components/Home";
import About from "./components/About";

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
        </Routes>
        <Footer />
      </ApiController>
    </div>
  );
};

export default AppRouter;
