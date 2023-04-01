import axios from "axios";
import { BrowserRouter as useNavigate } from "react-router-dom";

const base_url = "http://localhost:3002";

const authToken = localStorage.getItem("authToken");

// Make a POST request with the token in the header
export const create = (loginInfo) =>
  axios.post(`${base_url}/api/auth/login`, loginInfo, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
