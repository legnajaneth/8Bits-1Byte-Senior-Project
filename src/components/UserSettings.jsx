//UserSettings.jsx
import React, { useEffect, useState } from "react";
import "./UserSettings.css";
import NavigationBar from "./navigationBar";


function SettingsPage(){
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
            <button className="deleteButton">Delete Account</button>
            {/* still working */}
            <button className="clickableText">Manage Email</button>
            <button className="clickableText">Manage Password</button>
         </div>
      </div>
   );
}
export default SettingsPage;