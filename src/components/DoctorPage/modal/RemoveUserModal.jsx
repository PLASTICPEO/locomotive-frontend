import api from "../../../assets/services/api";
import style from "./RemoveUserModal.module.css";

const RemoveUserModal = ({ toggleRemoveUserModal, userId }) => {
  const confirm = (user) => {
    api.post(`/api/doctor/delete/${user}`).then(() => toggleRemoveUserModal());
  };

  return (
    <div className={style.removeUserContainer}>
      <h1>Are you sure you want to delete ?</h1>
      <button onClick={() => confirm(userId)} className={style.yesBtn}>
        Yes
      </button>
      <button onClick={toggleRemoveUserModal} className={style.noBtn}>
        No
      </button>
    </div>
  );
};

export default RemoveUserModal;
