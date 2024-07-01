import { createBrowserRouter } from "react-router-dom";
import Add from "../pages/Add.jsx";
import Home from "../pages/Home.jsx";
import Edit from "../pages/Edit.jsx";


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
]);
export default Router;
