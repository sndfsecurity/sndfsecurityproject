import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Optional: basic validation
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const isExpired = payload.exp * 1000 < Date.now();

    if (isExpired) {
      localStorage.removeItem("token");
      return <Navigate to="/admin/login" replace />;
    }
  } catch (err) {
    localStorage.removeItem("token");
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;