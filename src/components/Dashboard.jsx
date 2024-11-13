import React, { useState, useEffect } from "react";
import "./Dashboard.css"; 
import { useNavigate } from "react-router-dom";
import NavigationBar from "./navigationBar";
import { FaBell } from "react-icons/fa"; //Importing React Icon instead of creating one
import { db } from "../firebase/config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

function AdminDashboard() {
    const handleNavigation = useNavigate();
    const [surveyData, setSurveyData] = useState([]);

    // Polling or real-time listener example (stubbed for now)
    useEffect(() => {
        const interval = setInterval(() => {
            // Fetch latest survey data here
            // Example: setSurveyData(fetchSurveysFromAPI());
        }, 30000); // Poll every 30 seconds
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fetchSurveyData = async () => {
            try {
                const surveyCollection = collection(db, "info");
                const surveySnapshot = await getDocs(surveyCollection);
                const surveys = surveySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    date: doc.data().submittedAt ? doc.data().submittedAt.toDate() : null,
                }));
                setSurveyData(surveys);
            } catch (error) {
                console.error("Error fetching surveys:", error);
            }
        };

        fetchSurveyData();
    }, []);

    const handleApprove = (id) => {
        console.log("Approving survey with ID:", id);
  };

    const handleDecline = (id) => {
        console.log("Declining survey with ID:", id);
  };

    const handleDeleteSurvey = async (surveyId) => {
        
        try {
            await deleteDoc(doc(db, "info", surveyId));
            setSurveyData(surveyData.filter(survey => survey.id !== surveyId)); // Update state after deletion
        } catch (error) {
            console.error("Error deleting survey:", error);
        }
    };
  return (
   
    <div>
            <div className="admin-dashboard-nav"> {/* Different nav bar placed next to the existing bar made before. */}
                <div className="notification-icon-container">
                    <FaBell className="notification-bell" size={24}/>
                    <div className="notification-bell-count">{surveyData.length}</div> 
                    <div className="dropdown">
                        {/* Limit the number of surveys seen with slice. Only 5 will show up*/}
                        {surveyData.slice(0,5).map((survey, index) => (
                            <div key={index} className="dropdown-item">
                                <p>{survey.title} - {survey.date ? survey.date.toLocaleDateString() : "No date available" }</p>
                            </div>
                        ))}
                        <a onClick={() => handleNavigation("/surveys")} className ="dropdown-item">See more...</a>
                    </div>
                </div>
                <NavigationBar />
            </div>    

            <div className = "admin-panel">

                <div className="dashboard-links">
                    <a onClick={() => handleNavigation("/")} className="link-button">Dashboard</a>
                    <a onClick={() => handleNavigation("/account")} className="link-button">Account</a>
                    <a onClick={() => handleNavigation("/surveys")} className="link-button">Surveys</a>
                </div>

                                                            {/* Added new div to correct misalignment between the section boxes*/}
                <section className = "section-layout"> {/* sections for overviews of information at a quick glance for admin*/}
                
                <div className="section-box">
                    <div className="box" onClick={() => handleNavigation("/surveys")}>
                        <div className="Survey-info">
                            <h1> There are {surveyData.length} new surveys</h1> 
                        </div>
                    </div>
                    <div className="box" onClick={() => handleNavigation("/Analytics")}>
                        <div className="User-analytic">
                            <h1>Analytics </h1>
                        </div>
                    </div>
                    <div className="box" onClick={() => handleNavigation("/")}>
                        <div className="info">
                            <h1>Info </h1>
                        </div>
                    </div>
                    <div className="box" onClick={() => handleNavigation("/")}>
                        <div className="info">    
                            <h1>Info </h1>
                        </div>
                    </div>
                </div>
            </section>
                
            </div>
            


            
            

           <div className="survey-container">
                {surveyData.map((survey) => (
                    <div className="survey-item" key={survey.id}>
                        <div className="survey card">
                            <span className="survey-title">{survey.surveyData?.title}</span>
                            <p className="survey-description">
                                {survey.surveyData?.description || "No description available."}
                            </p>
                            <div className="survey-actions">
                                <div className="action-buttons">
                                    <button className="approve-button"
                                    onClick={() => handleApprove(survey.id)} >Approve</button>
                                    
                                    <button className="decline-button"
                                    onClick={() => handleDecline(survey.id)}>Decline</button>
                                    
                                    <button className="delete-button"
                                    onClick={() => handleDeleteSurvey(survey.id)}>Delete</button>
                                </div>
                                <span className="survey-date">
                                {survey.date ? survey.date.toLocaleDateString() : "No date available"}- Date submitted
                                </span>
                            </div>
                        </div>
                    </div>
                ))}     
            </div> 
        </div>
    );
}

export default AdminDashboard;
