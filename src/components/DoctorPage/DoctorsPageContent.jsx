import { useEffect, useState } from "react";
import style from "./DoctorsPageContent.module.css";
import api from "../../assets/services/api";
import AddUserModal from "./modal/AddUserModal";
import RemoveUserModal from "./modal/RemoveUserModal";

const DoctorsPageContent = () => {
  const [doctors, setDoctors] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    api.get("/api/doctor").then((response) => {
      setDoctors(response.data);
    });
  }, [removeModal, modalOpen]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleRemoveUserModal = () => {
    setRemoveModal(!removeModal);
  };

  return (
    <div className={style.contentContainer}>
      {modalOpen ? <AddUserModal toggleModal={toggleModal} /> : ""}
      {removeModal ? (
        <RemoveUserModal
          toggleRemoveUserModal={toggleRemoveUserModal}
          userId={userId}
        />
      ) : (
        ""
      )}
      <h1 className={style.title}>Doctors</h1>
      <button className={style.addUserBtn} onClick={() => toggleModal()}>
        + Add User
      </button>
      <h1 className={style.title}>Doctors List</h1>
      <div className={style.userContainer}>
        {doctors.map((dr) => {
          return (
            <div key={dr.id} className={style.doctorContainer}>
              <img
                className={style.userPhoto}
                src={`http://localhost:3002/${dr.photo}`}
              />
              <div className={style.doctorData}>
                <div className={style.name}>
                  <p className={style.fullName}>
                    {dr.firstName} {dr.lastName}
                  </p>
                </div>

                <p className={style.userEmail}>{dr.email}</p>

                <button
                  className={style.removeUserBtn}
                  onClick={() => {
                    toggleRemoveUserModal();
                    setUserId(dr.id);
                  }}
                >
                  Remove User
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorsPageContent;
