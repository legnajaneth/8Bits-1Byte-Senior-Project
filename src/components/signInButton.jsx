import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import SignUpButton from "./signUpButton.jsx";
import LogoutPopup from "./LogoutPopup";
import { Button } from "@chakra-ui/react";
import { colors } from "../colors";

function SignInButton() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe;
  }, []);

  const toggleLogoutPopup = () => {
    setShowLogoutPopup(!showLogoutPopup);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem 1.25rem",
    gap: "0.5rem",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "150%",
    background: colors.secondary,
    color: colors.text,
    _hover: {
      bg: colors.primary,
    },
  };

  return (
    <>
      {user ? (
        <div style={{ position: "relative" }}>
          <span style={{ cursor: "pointer" }} onClick={toggleLogoutPopup}>
            {user.email}
          </span>
          <LogoutPopup
            onSignOut={handleSignOut}
            onClose={toggleLogoutPopup}
            show={showLogoutPopup}
          />
        </div>
      ) : (
        <>
          <Link to="/login">
            <Button sx={buttonStyle} size="sm">
              Sign in
            </Button>
          </Link>
          <SignUpButton />
        </>
      )}
    </>
  );
}

export default SignInButton;
