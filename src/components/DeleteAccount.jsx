import React from "react";
import "./DeleteAccount.css";
import { useNavigate } from "react-router-dom";
import { getAuth, deleteUser } from "firebase/auth";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import NavigationBar from "./navigationBar";

function DeleteAccount() {
    const navigate = useNavigate(); // Initialize the navigation hook

   const handleCancel = () => {
      navigate("/settings"); 
   };

   const handleDelete = async () => {
    const auth = getAuth();
    const user = auth.currentUser; // Get the currently authenticated user

    if (user) {
        try {
        // Delete the user's Firestore data (if applicable)
        const userDocRef = doc(getFirestore(), "users", user.uid);
        await deleteDoc(userDocRef);

        // Delete the user's Firebase account
        await deleteUser(user);

        // Navigate to the home page after deletion (or login page)
        navigate("/account-deleted"); // Redirect to home or another page
        } catch (error) {
        console.error("Error deleting account:", error);
        alert("Error deleting account. Please logout and log back in to your account, and then try again.");
        }
    }
    };

   return (
    <div>
    <NavigationBar/>
      <div className="deletePage">
         <p className="pageTitle">Delete Account</p>
         <p className="warningText">
            Are you sure you want to delete your account? This action cannot be undone.
         </p>
         <div className="buttonContainer">
            <button className="confirmButton" onClick={handleDelete}> Confirm </button>
            <button className="cancelButton" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
   );
}

export default DeleteAccount;
