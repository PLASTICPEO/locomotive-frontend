import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import logo from "../../../public/logo/loco-logo.png";
import playerIcon from "../../../public/icons/playerr-icon.png";
import doctorIcon from "../../../public/icons/doctor-icon.png";
import logOut from "../../../public/icons/logout.png";
import style from "./SideBarButtons.module.css";

const SideBarButtons = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className={style.sideBarContainer}>
      <div className={style.sideBar}>
        <img src={logo} width={"290px"} />
        <ul className={style.btnContainer}>
          <Link to="/players">
            <li className={style.btn}>
              <img src={playerIcon} width={"30px"} />
              Players
            </li>
          </Link>
          <Link to="/doctors">
            <li className={style.btn}>
              {" "}
              <img src={doctorIcon} width={"30px"} />
              Doctors
            </li>
          </Link>
          <li className={style.logOutBtn} onClick={() => logout()}>
            <img src={logOut} width={"30px"} />
            Log out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarButtons;
