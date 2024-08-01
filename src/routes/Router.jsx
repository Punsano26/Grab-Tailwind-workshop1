import { createBrowserRouter } from "react-router-dom";
import Add from "../pages/Add.jsx";
import Home from "../pages/Home.jsx";
import Edit from "../pages/Edit.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/add",
        element: <Add />
    },
    {
        path: "/Edit/:id",
        element: <Edit />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]);
export default Router;
