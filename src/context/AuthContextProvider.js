import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);
export const API = "http://34.125.130.11/api/v1";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleRegister(formData) {
    try {
      await axios.post(`${API}/account/register`, formData);
      navigate("/");
    } catch (error) {
      setError(Object.values(error.response.data));
    }
  }

  async function handleLogin(formData, email) {
    try {
      const res = await axios.post(`${API}/account/token`, formData);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/");
    } catch (error) {
      setError(Object.values(error.response.data));
    }
  }

  async function checkAuth() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const res = await axios.post(`${API}/account/logout/`, {
        refresh: tokens.refresh,
      });
      localStorage.setItem(
        "tokens",
        JSON.stringify({ access: res.data.access, refresh: tokens.refresh })
      );
      const email = localStorage.getItem("email");
      setCurrentUser(email);
    } catch (error) {
      console.log(error);
      handleLogout();
    }
  }

  function handleLogout() {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(null);
    navigate("/register");
  }

  const values = {
    handleRegister,
    loading,
    error,
    setError,
    currentUser,
    handleLogin,
    handleLogout,
    checkAuth,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
