import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
// import Add from "../pages/Add.jsx";
const Add = lazy(() => import("../pages/Add.jsx"));
// import Home from "../pages/Home.jsx";
const Home = lazy(() => import("../pages/Home.jsx"));
// import Edit from "../pages/Edit.jsx";
const Edit = lazy(() => import("../pages/Edit.jsx"));
// import Login from "../pages/Login.jsx";
const Login = lazy(() => import("../pages/Login.jsx"));
// import Register from "../pages/Register.jsx";
const Register = lazy(() => import("../pages/Register.jsx"));

import NotAllowed from "../pages/NotAllowed.jsx";
import Layout from "../Components/Layout.jsx";
import AdminLayout from "../Components/AdminLayout.jsx";
import ModOrAdminPage from "../pages/ModOrAdminPage.jsx";
import UserPage from "../pages/UserPage.jsx";
import AdminPage from "../pages/AdminPage.jsx";
// import ProfileUser from './../pages/ProfileUser';
const ProfileUser = lazy(() => import("../pages/ProfileUser.jsx"));

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
        element: (
          <AdminPage>
            <Add />
          </AdminPage>
        ),
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
        path: "profileuser",
        element: (
          <UserPage>
            <ProfileUser />
          </UserPage>
        ),
      },
      {
        path: "notallowed",
        element: <NotAllowed />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "user",
        element: <div>Dashboard User</div>,
      },
    ],
  },
]);
export default Router;
