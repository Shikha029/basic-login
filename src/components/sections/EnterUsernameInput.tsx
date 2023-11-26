import React from "react";
import "./LoginSignupForm.css";

interface EnterUsernameInputProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const EnterUsernameInput: React.FC<EnterUsernameInputProps> = ({
  username,
  setUsername,
}) => {
  return (
    <div className="inputContainer">
      <label className="form-label">Username</label>
      <input
        value={username}
        placeholder="Choose a preferred username"
        onChange={ev => setUsername(ev.target.value)}
      />
      <br />
    </div>
  );
};

export default EnterUsernameInput;
