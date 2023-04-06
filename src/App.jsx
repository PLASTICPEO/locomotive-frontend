import style from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import ProtectedRoute from "./components/ProtectedRoute/index.jsx";
import DoctorPage from "./components/DoctorPage/DoctorPage";
import LoginPage from "./components/LoginPage/LoginPage";
import PlayersPage from "./components/PlayersPage/PlayersPage";
import SideBarButtons from "./components/Sidebarbuttons/SideBarButtons";

const App = () => {
  return (
    <div className={style.AppContainer}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/players"
          element={
            <ProtectedRoute >
              <PlayersPage />
              <SideBarButtons />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctors"
          element={
            <ProtectedRoute >
              <DoctorPage />
              <SideBarButtons />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
