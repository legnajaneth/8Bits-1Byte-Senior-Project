import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import "./SubmittedSurveys.css";

function SubmittedSurveys() {
  const [surveys, setSurveys] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const surveysSnapshot = await getDocs(collection(db, "info"));
        const surveysList = surveysSnapshot.docs.map(doc => ({
          id: doc.id,  
          ...doc.data(), 
          date: doc.data.submittedAt ? doc.data.submittedAt.toDate() : null,
        }));
        setSurveys(surveysList);
      } catch (error) {
        console.error("Error fetching surveys:", error);
      }
    };

    fetchSurveys();
  }, []); 

  const handleSurveyClick = (survey) => {
    setSelectedSurvey(survey);
  };

  
  const renderSurveyAnswers = (field) => {
    if (Array.isArray(field)) {
      return field.map((item, index) => (
        <p key={index}><strong>Answer {index + 1}: </strong>{item}</p>
      ));
    } else {
      return <p><strong>Answer: </strong>{field}</p>;
    }
  };

  return (
    <div>
      {selectedSurvey ? (
        <div className="survey-details">
          <h2>Survey Number: {selectedSurvey.id}</h2> 
          <p>{selectedSurvey.title}</p>
          <p>{selectedSurvey.description}</p> 
          <p>{selectedSurvey.submittedAt?.toLocaleDateString()}</p> 

          
          {Object.keys(selectedSurvey).map((key, index) => {
           
            if (key === 'id' || key === 'title' || key === 'description' || key === 'submittedAt' || key === 'status') {
              return null;
            }
            return (
              <div key={index}>
                <p><strong>{key}: </strong></p>
                {renderSurveyAnswers(selectedSurvey[key])}
              </div>
            );
          })}

          <button onClick={() => setSelectedSurvey(null)}>Back to Surveys</button>
        </div>
      ) : (
        <div className="survey-list">
          <h2>Submitted Surveys</h2>
          {surveys.map((survey) => (
            <div
              key={survey.id}
              className="survey-item"
              onClick={() => handleSurveyClick(survey)} 
            >
              <h3>Survey ID: {survey.id}</h3>  
              <p>{survey.title}</p>  
              <p>Status: {survey.status}</p>  
              <p>Submitted on: {survey.submittedAt?.toLocaleDateString()}</p>  
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SubmittedSurveys;
