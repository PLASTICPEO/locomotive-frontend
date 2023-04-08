import { useEffect, useState } from "react";
import style from "./AddUserModal.module.css";
import api from "../../../assets/services/api";

const AddUserModal = ({ toggleModal }) => {
  const [fieldsNotification, setFieldsNotification] = useState("");
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photo: null,
  });

  useEffect(() => {
    const fieldNotificationTimer = setTimeout(() => {
      setFieldsNotification("");
    }, 3000);

    return () => clearTimeout(fieldNotificationTimer);
  }, [fieldsNotification]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const addNewUser = () => {
    const formData = new FormData();
    const entries = Object.entries(newUser);
    for (const [key, value] of entries) {
      formData.append(key, value);
    }

    api
      .post("/api/doctor/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        toggleModal();
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, photo } = newUser;
    if (!firstName || !lastName || !email || !password) {
      setFieldsNotification("Please fill in all fields");
      return;
    }

    if (!photo) {
      console.log("check");
      setFieldsNotification("Please upload photo");
      return;
    }

    if (!validateEmail(email)) {
      setFieldsNotification("Please enter a valid email address");
      return;
    }

    // Form data is valid
    addNewUser();
  };

  return (
    <div className={style.AddUserModal}>
      <div className={style.addUserModal}>
        {fieldsNotification ? (
          <p className={style.fieldsAlert}>{fieldsNotification}</p>
        ) : (
          ""
        )}
        <button className={style.closeModal} onClick={toggleModal}>
          X
        </button>
        <div className={style.inputsContainer}>
          <form onSubmit={handleFormSubmit}>
            <label>
              Add Picture
              <input
                type="file"
                accept="image/*"
                className={style.uploadFileInput}
                onChange={(e) =>
                  setNewUser({ ...newUser, photo: e.target.files[0] })
                }
              />
            </label>
            <label>
              First Name
              <input
                type="text"
                value={newUser.firstName}
                onChange={(e) =>
                  setNewUser({ ...newUser, firstName: e.target.value })
                }
              />
            </label>
            <label>
              Last Name
              <input
                type="text"
                value={newUser.lastName}
                onChange={(e) =>
                  setNewUser({ ...newUser, lastName: e.target.value })
                }
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
            </label>
            <label>
              Password
              <input
                type="password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
            </label>
            <div className={style.submitBtnContainer}>
              <button type="submit" className={style.submitBtn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
