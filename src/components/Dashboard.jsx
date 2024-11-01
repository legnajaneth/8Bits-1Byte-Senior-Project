import React from "react";
import "./Dashboard.css"; 
import NavigationBar from "./navigationBar";
import { useNavigate } from "react-router-dom";

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
            <NavigationBar />

            <div className="dashboard-links">
                <a onClick={() => handleNavigation("/")} className="link-button">Dashboard</a>
                <a onClick={() => handleNavigation("/account")} className="link-button">Account</a>
                <a onClick={() => handleNavigation("/surveys")} className="link-button">Surveys</a>
            </div>

            <section> {/* sections for overviews of information at a quick glance for admin*/}
              
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
            

           {/* <div className="survey-container">
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
