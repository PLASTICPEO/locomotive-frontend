import style from "./SideBarButtons.module.css";

import { BrowserRouter as Router, useNavigate } from "react-router-dom";

const SideBarButtons = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className={style.sideBarContainer}>
      <div className={style.sideBar}>
        <img
          src={"http://localhost:3002/icons/loco-logo.png"}
          width={"290px"}
        />
        <ul className={style.btnContainer}>
          <li className={style.btn}>Players</li>
          <li className={style.btn}>Doctors</li>
          <li className={style.btn} onClick={() => logOut()}>
            Log out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarButtons;
