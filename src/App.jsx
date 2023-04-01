import LoginPage from "./components/LoginPage/LoginPage";
import style from "./App.module.css";
import DoctorPage from "./components/DoctorPage/DoctorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className={style.AppContainer}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/doctors" element={<DoctorPage />} />
      </Routes>
    </div>
  );
};

export default App;
