import { useEffect, useState } from "react";
import style from "./DoctorsPageContent.module.css";
import api from "../../../assets/services/api";
import AddUserModal from "./modals/AddUserModal";
import RemoveUserModal from "./modals/RemoveUserModal";

const DoctorsPageContent = () => {
  const [doctors, setDoctors] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    api
      .get("/api/doctor")
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => console.log(error));
  }, [removeModal]);

  useEffect(() => {
    console.log(doctors);
  }, [doctors]);

  const toggleModal = () => setModalOpen(!modalOpen);
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
              <p className={style.fullName}>
                {dr.firstName} {dr.lastName}
              </p>

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
          );
        })}
      </div>
    </div>
  );
};

export default DoctorsPageContent;
