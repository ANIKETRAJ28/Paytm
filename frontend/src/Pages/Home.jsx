import { Navigate, Outlet } from "react-router-dom";

export default function Home() {
    const auth = false;
    return (
        auth ? <Outlet/> : <Navigate to="/signin"/>
    );
}