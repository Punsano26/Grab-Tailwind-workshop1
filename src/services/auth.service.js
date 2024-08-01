import api from "./api";
import TokenService from "./token.service";
const API_URL = "/api/v1/auth";
const register = async (username, password, email) => {
   return await api.post(API_URL+"/signup", {username, password, email})
};

const AuthService = {
    register,
};

export default AuthService;