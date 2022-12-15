import axios from "axios";

const BASE_URL = "http://157.230.30.157";

const register = async (userData: any) => {
    const response = await axios.post(`${BASE_URL}/register`, userData);

    if(response.status === 201){
        localStorage.setItem("user", JSON.stringify(response.data.token));
    }
    
    return response.data;

}

const login = async (userData: any) => {
    const response = await axios.post(`${BASE_URL}/login`, userData)

    // console.log("response", response);

    if(response.status === 200){
        localStorage.setItem("user", JSON.stringify(response.data.token));
    }

    return response.data;
}

const logout = () => {
    localStorage.removeItem("user");
}

const authService = {
    register,
    login,
    logout
}

export default authService;