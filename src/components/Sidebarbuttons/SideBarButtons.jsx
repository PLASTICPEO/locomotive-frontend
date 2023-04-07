import style from "./SideBarButtons.module.css";
import { AUTH_TOKEN } from "../../assets/services/constants/constants";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const SideBarButtons = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className={style.sideBarContainer}>
      <div className={style.sideBar}>
        <img
          src={"http://localhost:3002/icons/loco-logo.png"}
          width={"290px"}
        />
        <ul className={style.btnContainer}>
          <Link to="/players">
            <li className={style.btn}>Players</li>
          </Link>
          <Link to="/doctors">
            <li className={style.btn}>Doctors</li>
          </Link>
          <li className={style.btn} onClick={() => logout()}>
            Log out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarButtons;
