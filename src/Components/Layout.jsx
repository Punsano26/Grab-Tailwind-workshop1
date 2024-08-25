import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <AuthProvider> 
      <Nav />
      <div className="my-9">
        
        <Outlet />
      </div>
      <Footer />
    </AuthProvider>
  );
};

export default Layout;
