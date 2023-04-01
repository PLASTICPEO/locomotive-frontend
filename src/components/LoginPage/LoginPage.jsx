import { useState } from "react";
import style from "./LoginPage.module.css";
import { create } from "../../assets/services/requests";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [notification, setNotification] = useState();

  const handleSumbimt = (event) => {
    event.preventDefault();

    create(loginInfo)
      .then((response) => {
        if (response.data.accessToken) {
          navigate("/doctors");
          localStorage.setItem("authToken", response.data.accessToken);
        }
      })
      .catch((error) => {
        setNotification(error);
        const time = setTimeout(() => {
          setNotification("");
        }, 4000);
        return () => clearTimeout(time);
      });
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
        <form className={style.loginForm} onSubmit={handleSumbimt}>
          Email
          <input
            type={"email"}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
          />
          Password
          <input
            type={"password"}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
          <button className={style.loginBtn}>Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
