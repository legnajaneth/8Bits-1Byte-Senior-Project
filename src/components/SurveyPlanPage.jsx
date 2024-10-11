import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import NavigationBar from "./navigationBar";
import imgHolder from "../images/SurveyPage.jpg";
import { db, auth } from "../firebase/config.js";

const SurveyPlanPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [alertShown, setAlertShown] = useState(false); // Add state for tracking alert

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userRef = doc(getFirestore(), "users", currentUser.uid);
        const userSnap = await getDoc(userRef);
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe(); // Clean up subscription
  }, [navigate, alertShown]); // Add alertShown to dependency array

  function checkSubscription() {
    const user = auth.currentUser;
    const checkUserSubscription = async () => {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();
      if (userData.subscriber == true) {
        alert("You are already subscribed.")
      } else {
        navigate("/pay-pal-checkout");
      }
    };
    checkUserSubscription();
  }

  const handleGetStarted = () => {
    if (user) {
      checkSubscription();
    } else {
      navigate("/login");
    }
  };

  return (
    <div style={pageStyle}>
      <NavigationBar />
      <div style={surveyPlanPageStyle}>
        <img src={imgHolder} alt="Image Holder" style={imgHolderStyle} />
        <h2 style={headingStyle1}>
          <span>Join Our Audiology</span>
          <span>Survey Community</span>
        </h2>
        <h2 style={headingStyle2}>Audiology Membership Plan</h2>
        <h3 style={headingStyle5}>Unlock the Power of Externship Reviews</h3>
        <h2 style={headingStyle3}>
          $1 <span style={slashMStyle}>/ Week</span>
        </h2>
        <div style={lineStyle} />
        <h3 style={includedTextStyle}>Why Subscribe?</h3>
        <p style={listStyle1}>
          Enjoy the freedom to access an unlimited number of reviews, receiving
          continuous and comprehensive feedback from users to stay informed.
          Plus, take control of your subscription with the flexibility to pause
          or cancel anytime, allowing unlimited users to benefit from this
          exceptional service.
        </p>
        <button style={buttonStyle} onClick={handleGetStarted}>
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

const pageStyle = {
  height: "100vh",
  overflow: "hidden",
  backgroundColor: "#f0fef0",
};

const surveyPlanPageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem",
  isolation: "isolate",
  position: "absolute",
  width: "89.875rem",
  left: "0.125rem",
  top: "12.5rem",
};

const imgHolderStyle = {
  position: "absolute",
  width: "31.25rem",
  height: "25rem",
  top: "-35px",
  left: "22%",
  transform: "translateX(-50%)",
  objectFit: "cover",
  borderRadius: "25px",
};

const headingStyle1 = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  width: "541px",
  height: "156px",
  left: "60px",
  top: "400px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "48px",
  lineHeight: "120%",
  color: "#060606",
};

const headingStyle2 = {
  position: "absolute",
  width: "50vw",
  height: "200px",
  left: "766px",
  top: "-45px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "48px",
  lineHeight: "120%",
  color: "#060606",
};

const headingStyle3 = {
  position: "absolute",
  left: "766px",
  top: "100px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "40px",
  lineHeight: "120%",
  color: "#060606",
};

const headingStyle5 = {
  position: "absolute",
  left: "766px",
  top: "30px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "1.5rem",
  lineHeight: "120%",
  color: "#060606",
  letterSpacing: "-0.2px",
};

const slashMStyle = {
  fontSize: "35px",
  marginBottom: "40px",
};

const lineStyle = {
  position: "absolute",
  width: "636px",
  height: "0px",
  left: "766px",
  top: "220px",
  border: "1px solid #000000",
  transform: "rotate(0.23deg)",
};

const buttonStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px 50px",
  fontSize: "1.2rem",
  gap: "8px",
  position: "absolute",
  width: "20rem",
  height: "3rem",
  left: "770px",
  top: "450px",
  background: "#68986F",
  color: "#FFFFFF",
  borderRadius: "18px",
  cursor: "pointer",
  Transition: "background-color 0.3s ease",
};

const includedTextStyle = {
  position: "absolute",
  width: "auto",
  height: "auto",
  left: "766px",
  top: "240px",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "1.5rem",
  lineHeight: "120%",
  color: "#060606",
};

const listStyle1 = {
  position: "absolute",
  left: "47.875rem",
  top: "18.125rem",
  fontFamily: "'Roboto'",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "1.2rem",
  lineHeight: "120%",
  color: "#060606",
  marginBottom: "0.625rem",
  listStyle: "none",
  marginRight: "55px",
};

export default SurveyPlanPage;
