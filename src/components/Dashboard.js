import { Link } from "react-router-dom";
import Syllabus from "./Syllabus";
import Profile from "./Profile";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Syllabus />
      <Profile />
    </div>
  );
};

export default Dashboard;
