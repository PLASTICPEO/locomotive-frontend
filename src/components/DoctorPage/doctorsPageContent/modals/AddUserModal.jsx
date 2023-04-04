import style from "./AddUserModal.module.css";
import { useState } from "react";
import api from "../../../../assets/services/api";

const AddUserModal = ({ toggleModal }) => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photo: null,
  });

  const addNewUser = () => {
    const formData = new FormData();
    formData.append("firstname", newUser.firstName);
    formData.append("lastname", newUser.lastName);
    formData.append("email", newUser.email);
    formData.append("password", newUser.password);
    formData.append("photo", newUser.photo);

    api
      .post("/api/doctor/create", newUser, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = () => {
    e.preventDefault();
  };

  return (
    <div className={style.AddUserModal}>
      <div className={style.addUserModal}>
        <button className={style.closeModal} onClick={toggleModal}>
          X
        </button>
        <div className={style.inputsContainer}>
          <form>
            Add Picture
            <input
              type="file"
              accept="image/*"
              className={style.uploadFileInput}
              onChange={(e) =>
                setNewUser({ ...newUser, photo: e.target.files[0] })
              }
            />
            First Name
            <input
              type="text"
              onChange={(e) =>
                setNewUser({ ...newUser, firstName: e.target.value })
              }
            />
            Last Name
            <input
              type="text"
              onChange={(e) =>
                setNewUser({ ...newUser, lastName: e.target.value })
              }
            />
            Email
            <input
              type="email"
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
            Password
            <input
              type="password"
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
            <div className={style.submitBtnContainer}>
              <button
                type="submit"
                className={style.submitBtn}
                onClick={() => addNewUser()}
              >
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
