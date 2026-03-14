import axios from "axios";

const BASE_URL = "http://localhost:8081/api/auth";

// If you want session/cookie-based auth
axios.defaults.withCredentials = true;

// Register


export const registerUser = async ({ userName, userOfficialEmail, password, role }) => {

  return axios.post(
    `${BASE_URL}/register`,
    { userName, userOfficialEmail, password, role },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true
    }
  );
};



export const loginUser = async ({ userOfficialEmail, password }) => {

  const response = await axios.post(

  `${BASE_URL}/login`,
  { userOfficialEmail, password },
  { 
    headers: { "Content-Type": "application/json" }, 
    withCredentials: true 
  }


  );

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }

  return response;
  
};

// Logout
export const logoutUser = async () => {
  return axios.post(`${BASE_URL}/logOut`);
};

// Forgot password
export const forgotPassword = async (data) => {
  return axios.post(`${BASE_URL}/forgotPassword`, data);
};

//Backend endpoint for resetting password
export const resetPassword = async (data) => {
  return axios.post(`${BASE_URL}/resetPassword`, data);
};



export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const updateProfile = async (data) => {

  const token = localStorage.getItem("token");

  return axios.put(
    "http://localhost:8081/api/users/update_profile",
    data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }
  );

};

