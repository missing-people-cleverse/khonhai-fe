import { ComponentType } from "react";
import { useAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const WithGuard = (Component: ComponentType): ComponentType => {
  return function ComponentWithGuard(props) {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) return <Navigate to="/login" />;
    return <Component {...props} />;
  };
};

export default WithGuard;
