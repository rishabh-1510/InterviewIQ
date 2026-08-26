import axios from "axios";
const API = axios.create({
    baseURL:"http://127.0.0.1:8000",
});

interface SignupData{
    name:string,
    email:string,
    password:string
}

interface LoginData {
  email: string;
  password: string;
}

interface UserResponse {
  id: number;
  name: string;
  email: string;
}

interface LoginResponse {
  message: string;
  user: UserResponse;
}

export const signup =async (userData:SignupData)=>{
    const response = await API.post<UserResponse>("/signup",userData);
    return response.data;
}

export const login = async (userData: LoginData) => {
  const response = await API.post<LoginResponse>("/login", userData);
  return response.data;
};
