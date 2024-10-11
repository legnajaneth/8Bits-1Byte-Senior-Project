import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, getAuth } from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc, getFirestore } from "firebase/firestore"; 
import { auth } from "../firebase/config.js";
import styles from "./SignUpForm.module.css";
import logo from "../images/AudiologyLogo.png";
import { colors } from "../colors";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputData, setInputData] = useState({id: "", email: "", subscriber: false, savedSurveys: {}})
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  /*function handleSubmit(event) {
    event.preventDefault()

    axios.create('http://localhost:8080/api/v1/createUser', inputData)
    .then(res =>  {
      alert("Successfully Created Account!");
      navigate('/');
    }).catch(err => console.log(err));
  }*/

  useEffect(() => {
    const authInstance = getAuth();

    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      if (user) {
        // User logged in
        if (user.emailVerified) {
          // Update the emailVerified in Firestore
          const userDocRef = doc(getFirestore(), "users", user.uid);
          updateDoc(userDocRef, { emailVerified: true })
            .then(() => {
              console.log("Firestore updated with email verification");
            })
            .catch((error) => {
              console.error(
                "Error updating email verification in Firestore:",
                error
              );
            });
        }
      }
    });

    return () => unsubscribe();
  }, []);

  async function getExternshipData(userId) {
    const docRef = doc(getFirestore(), "externships", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Externship data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such externship document for userId:", userId);
      return null;
    }
  }

  function handleCredentialsChange(e) {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
    setInputData({...inputData, [name]: value});
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    if (!passwordRegex.test(userCredentials.password)) {
      setError("Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.");
      return;
    }
    if (userCredentials.password !== userCredentials.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userCredentials.email,
        userCredentials.password
      );
      const externshipData = await getExternshipData(userCredential.user.uid); // Fetch externship data after user creation

      setInputData({...inputData, id: userCredential.user.uid})

      // Set user data including externship details
      await setDoc(doc(getFirestore(), "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        subscriber: false,
        savedSurveys: externshipData || {}, // Include fetched externship details
      });

      sendEmailVerification(userCredential.user)
        .then(() => {
          alert(
            "Verification email sent. Please check your email to verify your account."
          );
        })
        .catch((verificationError) => setError(verificationError.message));
    } catch (signupError) {
      setError(signupError.message);
    } finally {
      setIsLoading(false);
    }
    axios.post('http://localhost:8080/api/v1/createUser', inputData)
    .then(res =>  {
      alert("Successfully Created Account!");
    }).catch(err => console.log(err));
    navigate('/');
  };

  const handleGoHome = () => {
    // Now 'handleGoHome' is defined
    navigate("/"); // This navigates to the home route when invoked
  };

  return (
    <div
      className={styles["signUpForm-container"]}
      style={{ backgroundColor: colors.background }}
    >
      <form className={styles.signUpForm} onSubmit={handleSignup}>
        <img
          src={logo}
          alt="Logo"
          className={styles.logo}
          style={{ maxWidth: "200px" }}
        />
        <h2 className={styles.heading}>Sign Up</h2>
        {error && <div className={styles.error}>{error}</div>}
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.input}
          value={userCredentials.email}
          onChange={handleCredentialsChange}
          required
        />
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={styles.input}
          value={userCredentials.password}
          onChange={handleCredentialsChange}
          required
        />
        <label htmlFor="confirmPassword" className={styles.label}>
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className={styles.input}
          value={userCredentials.confirmPassword}
          onChange={handleCredentialsChange}
          required
        />
        <button type="submit" className={styles.button} disabled={isLoading}>
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
        {/* <button className={styles.googleSignUp}>Sign Up with Google</button> */}
        <button className={styles.homeButton} onClick={handleGoHome}>
          Home
        </button>
        <p className={styles.text}>
          Already have an account?{" "}
          <a href="/login" className={styles.link}>
            Log in
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
