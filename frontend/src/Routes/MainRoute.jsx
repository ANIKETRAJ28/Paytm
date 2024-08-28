import { Routes, Route } from "react-router-dom";
import Signup from "../Pages/Auth/Signup";
import SignIn from "../Pages/Auth/Signin";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";

export default function MainRoute() {
    return (
        <Routes>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/" element={<Home/>}>
                <Route path="dashboard" element={<Dashboard/>}/>
            </Route>
        </Routes>
    );
}