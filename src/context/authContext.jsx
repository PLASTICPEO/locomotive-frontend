import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../assets/services/api";
import { setToken } from "../assets/services/api";
import { AUTH_TOKEN } from "../assets/services/constants/constants";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  console.log(children);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN);

    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (data) => {
    api
      .post("/api/auth/login", data)
      .then((response) => {
        setToken("Bearer", response.data.accessToken);
        navigate("/doctors");
        setIsAuthenticated(true);
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
