import React, { useState } from "react";
import {
  BrowserRouter as AppRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home.tsx";
import Login from "./components/Login.tsx";

export interface UserLoginProps {
  isUserLoggingIn: boolean;
  setIsUserLoggingIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const App: React.FC = () => {
  const [isUserLoggingIn, setIsUserLoggingIn] = useState<boolean>(true);
  return (
    <AppRouter>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                isUserLoggingIn={isUserLoggingIn}
                setIsUserLoggingIn={setIsUserLoggingIn}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                isUserLoggingIn={isUserLoggingIn}
                setIsUserLoggingIn={setIsUserLoggingIn}
              />
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </AppRouter>
  );
};

export default App;
