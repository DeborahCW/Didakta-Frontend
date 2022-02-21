import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/" element={<Login />}></Route>
                <Route path="/" element={<Register />}></Route>

            </Routes>



        </div>
    )
}


export default AppRouter;