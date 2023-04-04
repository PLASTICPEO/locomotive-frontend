import style from "./SideBarButtons.module.css";
import { AUTH_TOKEN } from "../../assets/services/constants/constants";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

const SideBarButtons = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem(AUTH_TOKEN);
    navigate("/");
  };

  const playersPage = () => {
    navigate("/players");
  };

  const doctorsPage = () => {
    navigate("/doctors");
  };

  return (
    <div className={style.sideBarContainer}>
      <div className={style.sideBar}>
        <img
          src={"http://localhost:3002/icons/loco-logo.png"}
          width={"290px"}
        />
        <ul className={style.btnContainer}>
          <li className={style.btn} onClick={() => playersPage()}>
            Players
          </li>
          <li className={style.btn} onClick={() => doctorsPage()}>
            Doctors
          </li>
          <li className={style.btn} onClick={() => logOut()}>
            Log out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarButtons;
