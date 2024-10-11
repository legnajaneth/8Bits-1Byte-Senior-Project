import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecoveryCodePage = () => {
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const verifyCode = async (email, code) => {
    event.preventDefault();
    setError("");
    // Placeholder for API
    
    try {
      const response = await fetch("/api/verify-recovery-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, code }),
      });

      if(!response.ok) {
        throw new Error("Verification failed. Please try again.");
      }

      const data = await response.json();
      if (data.verified) {
        navigate("/password-reset");
      } else {
        setError("Invalid recovery code or email.");
      }
    } catch (error) {
        setError(err.message || "An error occurred.");   
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Reset error message
    verifyCode(email, code);
  };

  return (
    <div>
      <h2>Recovery Code Verification</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Recovery Code:
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </label>
        <button type="submit">Verify</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default RecoveryCodePage;
