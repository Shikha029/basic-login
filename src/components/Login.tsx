import React, { useEffect } from "react";
import { UserLoginProps } from "../App.tsx";
import logo from "../assets/logo.png";
import "./Login.css";
import LoginSignupForm from "./sections/LoginSignupForm.tsx";

const Login: React.FC<UserLoginProps> = ({
  isUserLoggingIn,
  setIsUserLoggingIn,
}) => {
  useEffect(() => {
    setIsUserLoggingIn(true);
  }, []);
  return (
    <div className="login-container">
      <img className="logo" width={30} src={logo} alt="logo" />
      <LoginSignupForm
        setIsUserLoggingIn={setIsUserLoggingIn}
        isUserLoggingIn={isUserLoggingIn}
      />
    </div>
  );
};

export default Login;
