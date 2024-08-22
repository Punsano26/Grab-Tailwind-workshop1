import { createBrowserRouter } from "react-router-dom";
import Add from "../pages/Add.jsx";
import Home from "../pages/Home.jsx";
import Edit from "../pages/Edit.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import NotAllowed from "../pages/NotAllowed.jsx";
import UserProfile from "../Components/UserProfile.jsx";
import Layout from "../Components/Layout.jsx";
import ModOrAdminPage from "../pages/ModOrAdminPage.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "Edit/:id",
        element: (
          <ModOrAdminPage>
            <Edit />
          </ModOrAdminPage>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "notallowed",
        element: <NotAllowed />,
      },
      {
        path: "userprofile",
        element: <UserProfile />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <div>Admin</div>,
    children: [
      {
        path: "Admin",
        element: <div>Dashboard User</div>,
      },
    ],
  },
]);
export default Router;
