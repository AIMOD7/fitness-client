// api.js
import axios from 'axios';

// Use the environment variable, fall back to localhost for local development
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const addUser = async (data) => {
  try {
    // Assuming your backend endpoint is /add
    return await axios.post(`${API_BASE_URL}/add`, data);
  } catch (error) {
    console.error("Error While Calling Add User API", error);
    throw error; // It's good practice to re-throw errors for calling components to handle
  }
};

export const addAdmin = async (data) => {
  try {
    // Assuming your backend endpoint is /add-admin
    const res = await axios.post(`${API_BASE_URL}/add-admin`, data);
    return res;
  } catch (error) {
    console.error('Error While Calling Add Admin API', error);
    throw error; // Re-throw error
  }
};

export const getUsers = async () => {
  try {
    // Assuming your backend endpoint is /all
    return await axios.get(`${API_BASE_URL}/all`);
  } catch (error) {
    console.error("Error While Fetching Users Data", error);
    throw error; // Re-throw error
  }
};

export const getAdmins = async () => {
  try {
    // Assuming your backend endpoint is /all-admins
    return await axios.get(`${API_BASE_URL}/all-admins`);
  } catch (error) {
    console.error("Error While Fetching Admin Data", error);
    throw error; // Re-throw error
  }
};

export const loginAdmin = async (data) => {
  try {
    // Assuming your backend endpoint is /login-admin
    return await axios.post(`${API_BASE_URL}/login-admin`, data);
  } catch (error) {
    console.error("Error While Logging In Admin", error);
    throw error; // Re-throw error
  }
};

export const logoutAdmin = async (data) => {
  try {
    // Assuming your backend endpoint is /logout-admin
    return await axios.post(`${API_BASE_URL}/logout-admin`, data);
  } catch (error) {
    console.error("Error While Logging Out Admin", error);
    throw error; // Re-throw error
  }
};