import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <AuthProvider>
      <div className="h-screen">
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </AuthProvider>
  );
};

export default Layout;
