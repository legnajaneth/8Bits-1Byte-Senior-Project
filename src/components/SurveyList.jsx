import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import "./SurveyList.css";
import { MdPersonOutline } from "react-icons/md";
import NavigationBar from "./navigationBar";

function SurveyList() {
  const navigate = useNavigate();
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    const fetchSurveyData = async () => {
      try {
        const surveySnapshot = await getDocs(collection(db, "info"));
        const surveyList = surveySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          submittedAt: doc.data().submittedAt ? doc.data().submittedAt.toDate() : null,
        }));
        setSurveys(surveyList);
      } catch (e) {
        console.error("Failed to fetch survey data:", e);
      }
    };

    fetchSurveyData();
  }, []);

  function handleNavigation(page) {
    navigate(page);
  }

  return (
    <div className="survey-list-page">
      <NavigationBar />
      <div className="page-links">
        <button onClick={() => handleNavigation("/")} className="survey-list-link">Dashboard</button>
        <button onClick={() => handleNavigation("/account")} className="survey-list-link">Account</button>
      </div>
      <div className="survey-list-container">
        <h1>Admin Survey</h1>
        <div className="parent-box">
          <div className="survey-list-grid">
            {surveys.map(survey => (
              <div className="survey-card" key={survey.id}>
                <div className="user-icon-container">
                  <MdPersonOutline className="user-icon" />
                </div>
                <div className="survey-box-info">
                  <p className="survey-box-title">{survey.title || "No title available"}</p>
                  <p>{survey.description || "No description available"}</p>
                  <p>{survey.submittedAt?.toLocaleDateString() || "No submission date available"}</p>
                </div>
                <div className="survey-box-btns">
                  <button className="approve-btn">Approve</button>
                  <button className="decline-btn">Decline</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveyList;
