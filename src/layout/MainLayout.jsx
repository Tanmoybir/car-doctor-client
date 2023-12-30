import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;