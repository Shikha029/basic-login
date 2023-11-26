import React from "react";
import "./LoginSignupForm.css";

interface EnterPasswordInputProps {
  isUserLoggingIn: boolean;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const EnterPasswordInput: React.FC<EnterPasswordInputProps> = ({
  isUserLoggingIn,
  password,
  setPassword,
}) => {
  return (
    <div className="inputContainer">
      <div className="justify-flex">
        <label className="form-label">Password</label>
        {isUserLoggingIn ? (
          <label className="forgot-password">Forgot Password?</label>
        ) : null}
      </div>
      <input
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={ev => setPassword(ev.target.value)}
        className="password-box"
      />
      <br />
    </div>
  );
};

export default EnterPasswordInput;
