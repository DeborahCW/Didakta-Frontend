import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./pages/Header";

const AppRouter = () => {
    return (
        <div>
           
            <Routes>
                <Route path="/header" element={<Header />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
              
            </Routes>



        </div>
    )
}


export default AppRouter;