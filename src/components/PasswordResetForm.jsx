import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { confirmPasswordReset } from 'firebase/auth';
import { auth } from '../firebase/config';
import styles from './PasswordResetForm.module.css'; 
import logo from '../images/AudiologyLogo.png'; 
import { colors } from '../colors';

export default function PasswordResetForm() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const oobCode = params.get('oobCode');
    if (!oobCode) {
      setError('Error retrieving the password reset code.');
      navigate('/login'); // Redirect to login if oobCode is missing
    }
  }, [navigate]);

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handlePasswordReset = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    const oobCode = new URLSearchParams(window.location.search).get('oobCode');
    if (!oobCode) {
      setError('Password reset code is invalid or expired.');
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      alert('Your password has been reset successfully.');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.passwordResetContainer}>
      <form className={styles.passwordResetForm} onSubmit={handlePasswordReset}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <h1 className={styles.heading}>Reset Your Password</h1>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={handlePasswordChange}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Reset Password
        </button>
        <Link to="/login" className={styles.link}>
          Back to Login
        </Link>
      </form>
    </div>
  );
}
