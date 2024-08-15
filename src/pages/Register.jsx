import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import Swal from "sweetalert2";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async () => {
    // e.preventDefault();
    console.log(AuthService.register());
    try {
      const register = await AuthService.register(
        user.email,
        user.username,
        user.password
      );
      if (register.status === 200) {
        Swal.fire({
          title: "User Registration",
          text: register.data.message,
          icon: "success",
        });
        setUser({  email: "",username: "", password: "" });
        navigate("/login");
      }
    } catch (error) {
      Swal.fire({
        title: "User Registered error",
        text: error.response ? error.response.data.message : "Unknown error",
        icon: "error",
        timer: 1500,
      });
    }
  };
  const handleCancel = () => {
    setUser({
      email: "",
      username: "",
      password: "",
    });
    navigate("/");
  };
  return (
    <div className="container mx-auto max-w-lg my-20 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Register
      </h1>
      <label className="space-y-6">
        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Email</label>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="absolute left-2 top-2 h-5 w-5 text-gray-400"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Username</label>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="absolute left-2 top-2 h-5 w-5 text-gray-400"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Username"
              onChange={handleChange}
              name="username"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-gray-600">Password</label>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="absolute left-2 top-2 h-5 w-5 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="Password"
              onChange={handleChange}
              name="password"
            />
          </div>
        </div>

        <div className="flex justify-between">
          {" "}
          <button
            onClick={handleSubmit}
            className="w-full md:w-auto bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none"
          >
            Register
          </button>
          <button
            onClick={handleCancel}
            className="w-full md:w-auto ml-2 bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </label>
    </div>
  );
};

export default Register;
