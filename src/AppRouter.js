import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Lesson from "./pages/Lesson";

const AppRouter = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/course" element={<Lesson />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
