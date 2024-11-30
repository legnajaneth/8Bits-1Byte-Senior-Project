import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./navigationBar";
import "./DeleteAccount.css";  // Correct way to import the CSS file

function AccountDeletedMsg() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Navigate to homepage or login page
  };

  return (
    <div>
      <NavigationBar />
      <div className="deletePage">
        <p className="pageTitle">Your Account Has Been Deleted</p>
        <p className="warningText">
          We're sorry to see you go. Your account and associated data have been permanently deleted.
        </p>
        <div className="buttonContainer">
          <button className="confirmButton" onClick={handleGoHome}>Go to Home</button>
        </div>
      </div>
    </div>
  );
}

export default AccountDeletedMsg;