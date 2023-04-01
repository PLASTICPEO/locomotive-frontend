import { useEffect, useState } from "react";
import style from "./DoctorsPageContent.module.css";
import instance from "../../../assets/services/api";

const DoctorsPageContent = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    instance
      .get("/api/doctor")
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={style.contentContainer}>
      <h1 className={style.title}>Doctors</h1>
      <button className={style.addUserBtn}>Add User</button>
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

              <button className={style.removeUserBtn}>Remove User</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorsPageContent;
