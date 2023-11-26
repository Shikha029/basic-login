import React from "react";
import "./LoginSignupForm.css";

interface EnterEmailInputProps {
  isUserLoggingIn: boolean;
  emailUserName: string;
  setEmailUserName: React.Dispatch<React.SetStateAction<string>>;
}

const EnterEmailInput: React.FC<EnterEmailInputProps> = ({
  isUserLoggingIn,
  emailUserName,
  setEmailUserName,
}) => {
  const labelText = isUserLoggingIn ? "Email or Username" : "Email";
  const placeholderText = isUserLoggingIn
    ? "Enter your email or username"
    : "Enter your email";
  return (
    <div className="inputContainer">
      <label className="form-label">{labelText}</label>
      <input
        value={emailUserName}
        placeholder={placeholderText}
        onChange={ev => setEmailUserName(ev.target.value)}
      />
      <br />
    </div>
  );
};

export default EnterEmailInput;
