import { Link } from "react-router-dom";
import Syllabus from "../components/Syllabus";

const Dashboard = () => {
  return (
    <div class="dashboard">
      <h1>Dashboard</h1>
      <Syllabus />
      <Link to="/course">Continue learning</Link>
    </div>
  );
};

export default Dashboard;
