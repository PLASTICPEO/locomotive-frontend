import { AUTH_TOKEN } from "../../assets/services/constants/constants";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem(AUTH_TOKEN);

  if (!token) {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
