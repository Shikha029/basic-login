import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserLoginProps } from "../../App.tsx";
import cross from "../../assets/cross.png";
import EnterEmailInput from "./EnterEmailInput.tsx";
import EnterPasswordInput from "./EnterPasswordInput.tsx";
import EnterUsernameInput from "./EnterUsernameInput.tsx";
import "./LoginSignupForm.css";

interface LoginSignupFormProps extends UserLoginProps {
  onClose?: () => void;
}

const LoginSignupForm: React.FC<LoginSignupFormProps> = ({
  setIsUserLoggingIn,
  isUserLoggingIn,
  onClose,
}) => {
  const navigation = useNavigate();
  const [emailUserName, setEmailUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const onButtonClick = () => {
    if (isUserLoggingIn) {
      navigation("/home");
    }
    onLoginRegisterClick();
  };

  const onLoginRegisterClick = () => {
    setIsUserLoggingIn(!isUserLoggingIn);
  };

  const renderLoginHeader = () => {
    const welcomeText = isUserLoggingIn ? "WELCOME BACK" : "SIGN UP";
    const welcomeSubText = isUserLoggingIn
      ? "Log into your account"
      : "Create an account to continue";
    return (
      <div>
        <div className="welcome-text">{welcomeText}</div>
        <div className="login-account-text">{welcomeSubText}</div>
        <br />
      </div>
    );
  };

  const renderCta = () => (
    <div className="inputContainer">
      <input
        type="button"
        onClick={onButtonClick}
        value={isUserLoggingIn ? "Login now" : "Continue"}
      />
    </div>
  );

  const renderMoreActions = () => {
    const bottomText = isUserLoggingIn
      ? "Not registered yet?"
      : "Already have an account?";
    const actionText = isUserLoggingIn ? "Register →" : "Login →";
    return (
      <div className="start-flex">
        <div className="not-registered">{bottomText}</div>
        <div onClick={onLoginRegisterClick} className="forgot-password">
          {actionText}
        </div>
      </div>
    );
  };

  const renderLoginForm = () => (
    <div className="login-form">
      <EnterEmailInput
        emailUserName={emailUserName}
        setEmailUserName={setEmailUserName}
        isUserLoggingIn={isUserLoggingIn}
      />
      {isUserLoggingIn ? null : (
        <EnterUsernameInput username={username} setUsername={setUsername} />
      )}
      <EnterPasswordInput
        password={password}
        setPassword={setPassword}
        isUserLoggingIn={isUserLoggingIn}
      />
      {renderCta()}
      {renderMoreActions()}
    </div>
  );

  const renderCross = () =>
    onClose ? (
      <button onClick={onClose} className="close-cta">
        <img className="cross-img" width={15} src={cross} alt="cross" />
      </button>
    ) : null;

  return (
    <div className="login-box">
      {renderCross()}
      {renderLoginHeader()}
      {renderLoginForm()}
    </div>
  );
};

export default LoginSignupForm;
