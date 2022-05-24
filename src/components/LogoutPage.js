import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const LogoutPage = (props) => {
  useEffect(() => {
    window.sessionStorage.setItem("is_logged", false);
    window.sessionStorage.clear();
    props.onLogout();
  });

  return <Redirect to="/login" />;
};

export default LogoutPage;
