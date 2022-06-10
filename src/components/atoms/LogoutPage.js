import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const LogoutPage = ({ onLogout }) => {
  useEffect(() => {
    window.sessionStorage.setItem("is_logged", false);
    window.sessionStorage.clear();
    onLogout();
  });

  return <Redirect to="/login" />;
};

export default LogoutPage;
