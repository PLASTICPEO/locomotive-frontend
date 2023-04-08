import style from "./AddPlayerModal.module.css";
import { useState } from "react";

const AddPlayerModal = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photo: null,
  });

  const addNewUser = () => {};

  const handleFormSubmit = (e) => {};

  return (
    <div className={style.AddUserModal}>
      <div className={style.addUserModal}>
        <button className={style.closeModal}>X</button>
        <div className={style.inputsContainer}>
          <form>
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
              <button
                type="submit"
                className={style.submitBtn}
                onClick={handleFormSubmit}
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

export default AddPlayerModal;
