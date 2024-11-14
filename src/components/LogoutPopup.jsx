// LogoutPopup.jsx
import React, { useEffect, useRef } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config.js";
import { colors } from "../colors";

  const LogoutPopup = ({ onSignOut, onClose, show, navigate }) => {
    const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      } //Closes the popup if it detects a click outside.
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSignOut = () => {
    signOut(auth).then(onSignOut).catch((error) => {
      console.error("Error signing out:", error);
    });
  };
  
  const handleNavigateSettings = () => {
    navigate("/settings");
  };

  const popupStyle = {
    position: "absolute",
    top: "100%", // Position directly below the username
    left: "50%", // Start from the center of the parent element
    transform: "translateX(-50%)", // Adjust horizontally to center the popup
    padding: "4px 8px", // Reduced padding for a more minimalist design
    borderRadius: "4px",
    background: colors.primary, // Use primary color from your color scheme
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    zIndex: 1000,
    color: "white",
    fontSize: "0.8rem", // Smaller font size for minimalist design
    display: show ? "flex" : "none", // Flex to use justifyContent and alignItems
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
  };

  const buttonStyle = {
    padding: "4px 6px", // Smaller padding for buttons
    background: "none",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginRight: "4px", // Spacing between buttons
  };

  return (
    <div ref={popupRef} style={popupStyle}>
      <button style={buttonStyle} onClick={handleSignOut}>Logout</button>
      <button style={buttonStyle} onClick={handleNavigateSettings}>Settings</button>
    </div>
  );
}

export default LogoutPopup;