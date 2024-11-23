// import React, { useState } from "react";
// import AdminDashboard from "./Dashboard";
// import SurveysPage from "./Surveys";
// import { Routes, Route, Navigate } from "react-router-dom";

// function AdminContainer() {
//     const [surveyData, setSurveyData] = useState([
//         { id: 1, title: "Survey 1", quantity: 10, date: new Date("2024-10-30T09:41:00") },
//         { id: 2, title: "Survey 2", quantity: 20, date: new Date("2024-10-29T08:30:00") },
//         { id: 3, title: "Survey 3", quantity: 15, date: new Date("2024-10-28T07:15:00") },
//     ]);
//     const [approvedSurveys, setApprovedSurveys] = useState([]);
//     const [rejectedSurveys, setRejectedSurveys] = useState([]);

//     // Handle approval: move the survey to the approved array
//     const handleApproval = (id) => {
//         const approvedSurvey = surveyData.find(survey => survey.id === id);
//         setApprovedSurveys(prev => [...prev, approvedSurvey]);
//         setSurveyData(prevData => prevData.filter(survey => survey.id !== id));
//     };

//     // Handle rejection: move the survey to the rejected array
//     const handleRejection = (id) => {
//         const rejectedSurvey = surveyData.find(survey => survey.id === id);
//         setRejectedSurveys(prev => [...prev, rejectedSurvey]);
//         setSurveyData(prevData => prevData.filter(survey => survey.id !== id));
//     };

//     return (
//         <Routes>
//             <Route path="/" element={<AdminDashboard surveyData={surveyData} />} />
//             <Route path="/surveys" element={<SurveysPage surveyData={surveyData} onReject={handleRejection} onApprove={handleApproval} />} />
//             {/* Redirect to dashboard if no sub-route is matched */}
//             <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//     );
// }

// export default AdminContainer;




import React, { useState, useEffect } from "react";
import AdminDashboard from "./Dashboard";
import SurveysPage from "./Surveys";
import { Routes, Route, Navigate } from "react-router-dom";
import adminSurveysDataService from "../adminSurveyDataService.js"; // Import the Firebase service

function AdminContainer() {
  const [surveyData, setSurveyData] = useState([]);
  const [approvedSurveys, setApprovedSurveys] = useState([]);
  const [rejectedSurveys, setRejectedSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const adminSurveyData = new adminSurveysDataService();

  // Fetch surveys data from Firebase
  useEffect(() => {
    const fetchSurveyData = async () => {
      try {
        const data = await adminSurveyData.getAllSurveys();
        setSurveyData(data);
      } catch (err) {
        setError("Failed to fetch surveys data");
      } finally {
        setLoading(false);
      }
    };

    fetchSurveyData();
  }, []);

  // Handle approval: move the survey to the approved array and save it
  const handleApproval = async (id) => {
    // Update status in Firebase
    await adminSurveyData.updateSurveyStatus(id, "accepted");

    const approvedSurvey = surveyData.find((survey) => survey.id === id);
    const newApprovedSurveys = [...approvedSurveys, approvedSurvey];
    setApprovedSurveys(newApprovedSurveys);

    const newSurveyData = surveyData.filter((survey) => survey.id !== id);
    setSurveyData(newSurveyData);

    // Save the updated survey data back to Firebase if needed
  };

  // Handle rejection: move the survey to the rejected array and save it
  const handleRejection = async (id) => {
    // Update status in Firebase
    await adminSurveyData.updateSurveyStatus(id, "rejected");

    const rejectedSurvey = surveyData.find((survey) => survey.id === id);
    const newRejectedSurveys = [...rejectedSurveys, rejectedSurvey];
    setRejectedSurveys(newRejectedSurveys);

    const newSurveyData = surveyData.filter((survey) => survey.id !== id);
    setSurveyData(newSurveyData);

    // Save the updated survey data back to Firebase if needed
  };

  // Render loading or error states
  if (loading) return <div>Loading surveys...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Routes>
      <Route
        path="/"
        element={<AdminDashboard surveyData={surveyData} />}
      />
      <Route
        path="/surveys"
        element={
          <SurveysPage
            surveyData={surveyData}
            onReject={handleRejection}
            onApprove={handleApproval}
          />
        }
      />
      {/* Redirect to dashboard if no sub-route is matched */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AdminContainer;
