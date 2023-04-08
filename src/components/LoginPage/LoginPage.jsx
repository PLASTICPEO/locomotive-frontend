import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import style from "./LoginPage.module.css";
import locomotiveLogo from "../../../public/logo/loco-logo.png";

const LoginPage = () => {
  const { login, notification } = useContext(AuthContext);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const handleSumbimt = () => {
    login(newUser);
  };

  return (
    <>
      <div className={style.formContainer}>
        <a href="https://en.wikipedia.org/wiki/FC_Locomotive_Tbilisi">
          <img className={style.LoginPageLogo} src={locomotiveLogo} />
        </a>
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
