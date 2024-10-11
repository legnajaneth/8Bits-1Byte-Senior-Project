import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import styles from "./SignInForm.module.css";
import logo from "../images/AudiologyLogo.png";
import { colors } from "../colors";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem("accessToken", userCredential.user.accessToken);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/"); // Redirect to home page
    } catch (error) {
      setErrorMessage("Incorrect email or password.");
    }
  };
  

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: colors.background,
      }}
    >
      <form
        style={{
          width: "100%",
          maxWidth: "320px",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          background: "#fff",
          textAlign: "center",
        }}
        onSubmit={handleSignIn}
      >
        <img src={logo} alt="Audiology Externship" className={styles.logo} />
        <h1 className={styles.heading}>Login</h1>
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className="forgot-password-container">
          <Link to="/forgotpassword" className="forgot-password-link">
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className={styles.button}>
          Login
        </button>
        <button className={styles.homeButton} onClick={handleGoHome}>
          Home
        </button>
        <div className={styles.text}>
          Don't have an account?{" "}
          <span className={styles.link} onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </div>
      </form>
    </div>
  );
}
