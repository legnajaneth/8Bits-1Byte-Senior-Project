import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import logo from "../images/AudiologyLogo.png";
import SignInButton from "./signInButton";
import AddExternship from "./AddExternship";
import "./navigationBar.css";
import LogoutPopup from "./LogoutPopup";

function NavigationBar() {
  const [addExternshipButton, setButtonAddExternship] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser && localStorage.getItem("triggerAddExternship")) {
        setButtonAddExternship(true);
        localStorage.removeItem("triggerAddExternship");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleAddExternshipClick = () => {
    if (user) {
      setButtonAddExternship(true);
    } else {
      localStorage.setItem("triggerAddExternship", "true");
      navigate("/login");
    }
  };

  const toggleLogoutVisibility = () => {
    setShowLogout(!showLogout);
  };

  const onSignOut = () => {
    signOut(auth);
    setUser(null);
    setShowLogout(false);
    navigate("/");
  };

  if (loading) {
    return <div></div>;
  }

  return (
    <>
      <div className="navigationStyle">
        <div className="innerContainerStyle">
          <img src={logo} alt="Logo" className="imageStyle" />
          <div className="clickableComponentsStyle">
            <ol className="navbar-menu">
              <li>
                <Link className="home" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="home" to="/SurveyPlanPage">
                  Pricing
                </Link>
              </li>
              <button className="home" onClick={handleAddExternshipClick}>
                Fill Out Survey
              </button>
            </ol>
            {user ? (
              <div className="user-container" style={{ position: "relative" }}>
                <span
                  onClick={toggleLogoutVisibility}
                  style={{ cursor: "pointer" }}
                >
                  {user.email}
                </span>
                {showLogout && (
                  <LogoutPopup
                    onSignOut={onSignOut}
                    onClose={toggleLogoutVisibility}
                    show={showLogout}
                  />
                )}
              </div>
            ) : (
              <SignInButton />
            )}
          </div>
        </div>
      </div>
      {addExternshipButton && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "5px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              maxWidth: "600px",
              width: "90%",
              zIndex: 1001,
              position: "relative",
            }}
          >
            <AddExternship
              trigger={addExternshipButton}
              setTrigger={setButtonAddExternship}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default NavigationBar;
