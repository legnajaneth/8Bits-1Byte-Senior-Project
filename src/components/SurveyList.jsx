// Necessary Imports for this Component
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config.js";
import "./SurveyList.css";
import { MdPersonOutline } from "react-icons/md";
import NavigationBar from "./navigationBar";


function SurveyList() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Variable(s) to hold the Firebase survey data
    const [surveys, surveyData] = useState([]);

    // Retrieving the survey data from the website backend
    useEffect(() => {

        // Logic for fetching surveys w/ Firebase here

        const fetchSurveyData = async() => {
            try{
                // Retriveing the data from Firebase
                const surveySnapshot = await getDocs(collection(db, "info"));

                // Storing the survey data into an array
                const surveyList = surveySnapshot.docs.map(doc => {
                    const data = doc.data();

                    // Extracting specific survey fields from Firebase to later display on the page
                    return{
                    id: doc.id,
                    question1: data.question1,
                    question2: data.question2,
                    question6: data.question6,
                    question7: data.question7,
                    ...doc.data(),

                    // Convert the date to readable JS format if 
                    // 'date' attribute is present
                    date: doc.data().date ? doc.data().date.toDate() : null,

                    // Provide default String for Q6 if answer is not available
                    question6: doc.data().question6 ? doc.data().question6.toString() : "State unavailable"
                };
            });

            // Testing, displaying the fetched data into the browser console
            console.log("Fetched survey data:", surveyList);

            // Updating the component state
            surveyData(surveyList);
            } catch(e) {
                console.error("Failed to fetch survey data:", e);
            }
        };


        fetchSurveyData();
    }, []);

    // Function logic to redirect to other website pages
    function handleNavigation(page)
    {
        navigate(page);
    }

    return(

        // The main Survey Approval page itself
        <div  className = "survey-list-page">

        <NavigationBar/>

        {/* Links to redirect to separate pages of the website*/}
        <div className = "page-links">

            <button onClick = {() => handleNavigation("/")} className = "survey-list-link">
                Dashboard
            </button>

            <button onClick = {() => handleNavigation("/account")} className = "survey-list-link">
                Account
            </button>

            <button onClick = {() => handleNavigation("/")} className = "survey-list-link">
                PlaceHolder 1
            </button>

            <button onClick = {() => handleNavigation("/")} className = "survey-list-link">
                PlaceHolder 2
            </button>

        </div>
        
        {/* Main content of the page */}
        <div className = "survey-list-container">
            
            <h1>
                Admin Survey
            </h1>

            {/* Section of the page containing the user surveys */}
            <div className = "parent-box">

            <div className = "survey-list-grid">
                {surveys.map((survey, index) => (
                    <div className = "survey-card" key = {index}>

                        <div className = "user-icon-container">
                        <MdPersonOutline className = "user-icon"/>
                        </div>

                        {/* Displaying the survey info. extracted from Firebase */}
                        <div className = "survey-box-info">

                            <p className = "survey-box-title">
                                {survey.question1}
                            </p>

                            <p>
                                {survey.question2}, {survey.question6}
                            </p>

                            <p>
                                {survey.question7}
                            </p>

                            {survey.date ? survey.date.toLocaleDateString() : "No submission date available for this user survey"}
                            
                        </div>

                        {/* Buttons to Approve and Decline a survey, not functional */}
                        <div className = "survey-box-btns">
                            
                            <button className = "approve-btn">
                                Approve
                            </button>

                            <button className = "decline-btn">
                                Decline
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            </div>

            

        </div>
        
        </div>
    );

}

// Exporting the component to be used elsewhere in the project
export default SurveyList;