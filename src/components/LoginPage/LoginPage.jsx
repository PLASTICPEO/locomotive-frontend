import { useContext, useState } from "react";
import style from "./LoginPage.module.css";
import api from "../../assets/services/api";
import { setToken } from "../../assets/services/api";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });
  const [notification, setNotification] = useState();

  const { login } = useContext(AuthContext);

  const handleSumbimt = () => {
    login(newUser);
  };

  return (
    <>
      <div className={style.formContainer}>
        <img
          className={style.LogoInLoginPage}
          src="http://localhost:3002/icons/loco-logo.png"
        />
        {notification ? (
          <div className={style.errNotification}>User not found . . .</div>
        ) : (
          ""
        )}
        <div className={style.loginForm}>
          Email
          <input
            type={"email"}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          Password
          <input
            type={"password"}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
          <button className={style.loginBtn} onClick={handleSumbimt}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
