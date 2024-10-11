import React, { useRef, useState, useEffect } from "react";
import styles from "./HeroSectionStyle";
import heroImage from "../images/markPaton1.jpg";
import { Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { colors } from "../colors";
import { auth, db } from "../firebase/config";
import { collection, onSnapshot, doc, updateDoc, getDoc } from "firebase/firestore";
import Cookies from 'js-cookie';

function HeroSection() {
  const navigate = useNavigate(); // Initialize useNavigate hook
 
  const checkUserSubscription = async () => {
    const user = auth.currentUser;
    if (!user) {
      // If user is not signed in, redirect to sign-in page
      navigate("/login"); // Redirect to sign-in page
      return;
    }

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data();
    console.log("User Data from Firestore:", userData);

    // Check if user is a subscriber
    if (userData.subscriber) {
      console.log("User is a subscriber. Redirecting to resultpage.");
      Cookies.set('subscriber', userData.subscriber);
      Cookies.set('expirationDate', userData.expirationDate.toDate());
      navigate("/resultpage"); // Redirect to resultpage
      return;
    } else {
      console.log("User is not a subscriber. Redirecting to surveyplanpage.");
      navigate("/surveyplanpage"); // Redirect to surveyplanpage
      return;
    }

    const expirationDate = userData.expirationDate.toDate();
    const currentDate = new Date();
    console.log("Current Date:", currentDate);
    console.log("Expiration Date:", expirationDate);

    // Check if subscription has expired
    if (currentDate > expirationDate) {
      console.log("User's subscription has expired.");
      // Update Firestore and redirect
      await updateDoc(userRef, {
        subscriber: false
      });
      Cookies.set('subscriber', false);
      console.log("User's subscription status updated in Firestore.");
      navigate("/surveyplanpage"); // Redirect to surveyplanpage
    } else {
      console.log("User's subscription is still active.");
    }
  };
  

  return (
    <div style={styles.container}>
      <div style={styles.textBox}>
        <h1 style={styles.heading}>
          Find & Share Your <br />
          Audiology Externships
        </h1>
        <p style={styles.paragraph}>
          Discover what your peers feel about their externship experience and{" "}
          <br />
          share your experiences with others.
        </p>
        <div style={styles.buttonContainerStyle}>
          {/* Call checkUserSubscription when the button is clicked */}
          <Button bg={colors.primary} _hover={{ bg: colors.accent }} size="lg" onClick={checkUserSubscription}>
            Get Started
          </Button>
        </div>
      </div>

      <div style={styles.container}>
        <img src={heroImage} style={styles.heroImage} alt="Mark Paton" />
      </div>
    </div>
  );
}

export default HeroSection;
