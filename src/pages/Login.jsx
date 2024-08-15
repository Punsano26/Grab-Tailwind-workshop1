import { useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  
  const { login, user: loggedInUser } = useAuthContext();
  useEffect(() => {
    if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const currentUser = await AuthService.login(user.username, user.password);
      console;
      setUser({
        username: "",
        password: "",
      });
      if (currentUser.status === 200) {
        login(currentUser.data);
        Swal.fire({
          title: "User Registration",
          text: "Login successfully",
          icon: "success",
        });
        setUser({ username: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        title: "User Registered error",
        text: error?.response?.data?.message,
        icon: "error",
      });
    }
  };

  const handleCancel = () => {
    setUser({
      username: "",
      email: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h1>
        <label className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 text-gray-400 mr-2"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                name="username"
                type="text"
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                value={user.username}
                placeholder="Username"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 text-gray-400 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                name="password"
                onChange={handleChange}
                value={user.password}
                type="password"
                className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Password"
              />
            </label>
          </div>

          <button
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={handleSubmit}
          >
            Login
          </button>

          <button
            onClick={handleCancel}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Cancel
          </button>
        </label>
      </div>
    </div>
  );
};

export default Login;
