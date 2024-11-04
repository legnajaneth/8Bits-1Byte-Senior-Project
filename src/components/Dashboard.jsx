import React from "react";
import "./Dashboard.css"; 
import NavigationBar from "./navigationBar";
import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa"; //Importing React Icon instead of creating one

function AdminDashboard() {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };
    const surveyData = [
        { title: "Survey 1", quantity: 10, date: new Date("2024-10-30T09:41:00") },
        { title: "Survey 2", quantity: 20, date: new Date("2024-10-29T08:30:00") },
        { title: "Survey 3", quantity: 15, date: new Date("2024-10-28T07:15:00") },
    ];
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
                                <p>{survey.title} - {survey.date.toLocaleDateString()}</p>
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
            


            
            

           { /*<div className="survey-container">
                {surveyData.map((survey, index) => (
                    <div className="survey-item" key={index}>
                        <div className="survey card">
                            <span className="survey-title">{survey.title}</span>
                            <p className="survey-description">
                                This is the body text where you will see information on survey submitted.
                            </p>
                            <div className="survey-actions">
                                <div className="action-buttons">
                                    <button className="approve-button">Approve</button>
                                    <button className="decline-button">Decline</button>
                                </div>
                                <span className="survey-date">
                                    {survey.date.toLocaleString()} date submitted
                                </span>
                            </div>
                        </div>
                    </div>
                ))}     //possibly use this for survey box information that admin can check and accept
                        //useful in the survey page on dashboard 
            </div> */}
        </div>
    );
}

export default AdminDashboard;
