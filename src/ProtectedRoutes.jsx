import { ReactNode } from "react";
import { useNavigate } from "react-router";
import { useGetUsers } from "./hooks/useGetUsers";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // const { data, isLoading } = useGetUsers();
  const data = false;


  if (!data) {
    navigate("/auth");
    return <h1>Redirecting...</h1>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;