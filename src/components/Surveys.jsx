import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./navigationBar";
import "../styles/SurveysPage.css";

function SurveysPage({ surveyData, onReject, onApprove }) {
    const navigate = useNavigate();

    const handleRejection = (id) => {
        onReject(id);
    };

    const handleApproval = (id) => {
        onApprove(id);
    };

    return (
        <>
            <NavigationBar />
            <div className="page-container">

                {/* Survey Cards Container */}
                <div className="survey-container">
                    <div className="page-header">
                        <h1>{surveyData.length} Surveys Pending Approval</h1>
                        <p className="subtitle">Review and take action on submitted surveys.</p>
                    </div>
                    {surveyData.map((survey) => (
                        <div className="survey-item" key={survey.id}>
                            <div className="survey-card">
                                <h3 className="survey-title">{survey.title}</h3>
                                {/* <p className="survey-description">
                                    Quantity: {survey.quantity} responses
                                </p> */}
                                <p className="survey-date">
                                    Submitted on: {new Date(survey.date.seconds * 1000).toLocaleString()}
                                </p>

                                <div className="survey-actions">
                                    <button className="approve-button"
                                        onClick={() => handleApproval(survey.id)}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="decline-button"
                                        onClick={() => handleRejection(survey.id)}
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SurveysPage;
