import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/authContext";
import React, { useContext } from "react";
import ProtectedRoute from "./components/ProtectedRoute/index.jsx";
import DoctorsPageContent from "./components/DoctorPage/DoctorsPageContent";
import LoginPage from "./components/LoginPage/LoginPage";
import PlayersPageContent from "./components/PlayersPage/PlayersPageContent";
import SideBarButtons from "./components/Sidebarbuttons/SideBarButtons";
import style from "./App.module.css";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className={style.AppContainer}>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/doctors" /> : <LoginPage />}
        />
        <Route
          path="/players"
          element={
            <ProtectedRoute>
              <PlayersPageContent />
              <SideBarButtons />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctors"
          element={
            <ProtectedRoute>
              <DoctorsPageContent />
              <SideBarButtons />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
