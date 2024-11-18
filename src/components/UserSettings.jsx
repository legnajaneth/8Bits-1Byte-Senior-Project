//UserSettings.jsx
import React, { useEffect, useState } from "react";
import "./UserSettings.css";
import NavigationBar from "./navigationBar";
import { useNavigate } from "react-router-dom";

function SettingsPage(){
   const navigate = useNavigate();

   const handleDelete = () => {
      navigate("/delete-account");
   };
   
   return(
      <div>
         <NavigationBar/>
         <div className="settingsPage">
            <p className="pageTitle">Settings</p>

            <div className="settingsComponent">
               <p className="title">New email address</p>
               <input className="textBox" type="text" id="email" placeholder="Enter your new email address" />
            </div>
            <div className="settingsComponent">
               <p className="title">New password</p>
               <input className="textBox" type="text" id="password" placeholder="Enter your new password" />
            </div>
            {/* still working */}
            <button className="clickableText">Manage Email</button>
            <button className="clickableText">Manage Password</button>
            <button className="deleteButton">Delete Account</button>
            <button className="deleteButton" onClick={handleDelete}>
               Delete Account
            </button>

         </div>
      </div>
   );
}
export default SettingsPage;