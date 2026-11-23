import axios from "axios";

const apiRoot = String(import.meta.env.VITE_API_BASE_URL || "").replace(
  /\/$/,
  "",
);
const studentsBaseUrl = apiRoot.endsWith("/students")
  ? apiRoot
  : `${apiRoot}/students`;

const apiClient = axios.create({
  baseURL: studentsBaseUrl,
  headers: {
    "Content-Type": "application/json",
    "API-Key": import.meta.env.VITE_API_KEY,
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      error.customMessage =
        "Unable to connect to the server. Please check your connection.";
    } else {
      error.customMessage =
        error.response.data?.message ||
        "Something went wrong. Please try again.";
    }

    return Promise.reject(error);
  },
);

export default apiClient;
