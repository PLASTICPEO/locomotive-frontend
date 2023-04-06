import style from "./SideBarButtons.module.css";
import { AUTH_TOKEN } from "../../assets/services/constants/constants";
import { useNavigate, Link } from "react-router-dom";

const SideBarButtons = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem(AUTH_TOKEN);
  };

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
          <Link to="/">
            <li className={style.btn} onClick={() => logOut()}>
              Log out
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBarButtons;
