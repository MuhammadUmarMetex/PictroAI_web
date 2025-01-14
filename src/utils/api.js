import axios from "axios";
import { toast } from "react-toastify";

// Add request interceptor

// Add response interceptor
axios.interceptors.response.use(
  (response) => {
    // You can handle and modify the response data here if needed
    return response;
  },
  (error) => {
    // You can handle errors here, e.g., show a toast message, logout on certain errors, etc.
    const errorMessage = error?.response?.data?.message || error?.message;
    toast.error(errorMessage);
    return Promise.reject(error);
  }
);

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosWrapper = async (method, url, data, token, isFormData = false) => {
  try {
    const config = {
      method,
      url: `https://api.pictroai.com/api/v1${url}`,
      // url: `http://127.0.0.1:8000/api/v1${url}`,

      ...axiosConfig,
    };

    if (token) config.headers["Authorization"] = `Bearer ${token}`;

    if (isFormData) {
      config.headers["Content-Type"] = "multipart/form-data";
      config.data = data; // Use FormData directly for FormData requests
    } else {
      if (data) config.data = data;
    }

    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error?.response?.data?.message || error?.message;
  }
};

export default axiosWrapper;
