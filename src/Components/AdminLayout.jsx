import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/auth.context";
import Nav from "./Nav";
import Footer from "./Footer";

const AdminLayout = () => {
  return (
    <AuthProvider>
      <Nav />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
};

export default AdminLayout;
