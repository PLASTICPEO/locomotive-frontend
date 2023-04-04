import LoginPage from './components/LoginPage/LoginPage';
import style from './App.module.css';
import DoctorPage from './components/DoctorPage/DoctorPage';
import { Routes, Route } from 'react-router-dom';
import PlayersPage from './components/PlayersPage/PlayersPage';

const App = () => {
  return (
    <div className={style.AppContainer}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/doctors" element={<DoctorPage />} />
      </Routes>
    </div>
  );
};

export default App;
