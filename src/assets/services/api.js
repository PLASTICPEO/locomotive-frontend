import axios from "axios";

const base_url = "http://localhost:3002";

const instance = axios.create({
  baseURL: base_url,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("authToken"),
  },
});

export default instance;
