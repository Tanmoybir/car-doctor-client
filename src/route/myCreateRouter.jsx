import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const myCreateRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:([
            {
               path: '/' ,
               element: <Home/>
            },
            {
                path: '/about' ,
                element: <About/>
             },
             {
                path: '/login' ,
                element: <Login/>
             },
             {
                path: '/register' ,
                element: <Register/>
             },
             {
                path: '/' ,
                element: <Home/>
             },
        ])
    }
])

export default myCreateRouter;