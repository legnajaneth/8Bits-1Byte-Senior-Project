import React, { useState, useEffect } from "react";
import { db } from "../firebase/config"; // Ensure this is properly set up
import { collection, getDocs, doc, deleteDoc, updateDoc, addDoc } from "firebase/firestore";

//Matthew Bernardino-Junio
//Creates a component where admin has access to pendingSurvey collection where they have the 
//ability to approve of surveys or reject thus deleting from collection.
function AdminSurveyApproval() {
  const [pendingSurveys, setPendingSurveys] = useState([]);

  //Retrieve all documents from pendingSurveys collection and stores into pendingSurveys state
  useEffect(() => {
    const fetchPendingSurveys = async () => {
      const querySnapshot = await getDocs(collection(db, "pendingSurveys"));
      setPendingSurveys(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchPendingSurveys();
  }, []);

  const approveSurvey = async (survey) => {
    try {
      // Move survey to 'surveys' collection
      await addDoc(collection(db, "surveys"), {
        ...survey,
        isApproved: true, // Mark as approved
      });
      // Delete from 'pendingSurveys' collection
      await deleteDoc(doc(db, "pendingSurveys", survey.id));
      setPendingSurveys(pendingSurveys.filter((s) => s.id !== survey.id));
      console.log("Survey approved successfully!");
    } catch (error) {
      console.error("Error approving survey:", error);
    }
  };

  const rejectSurvey = async (surveyId) => {
    try {
      // Delete survey from 'pendingSurveys' collection
      await deleteDoc(doc(db, "pendingSurveys", surveyId));
      setPendingSurveys(pendingSurveys.filter((s) => s.id !== surveyId));
      console.log("Survey rejected successfully!");
    } catch (error) {
      console.error("Error rejecting survey:", error);
    }
  };

  return (
    <div>
      <h2>Pending Surveys for Approval</h2>
      {pendingSurveys.length === 0 ? (
        <p>No surveys awaiting approval.</p>
      ) : (
        pendingSurveys.map(survey => (
          <div key={survey.id} className="survey-item">
            <h3>{survey.title}</h3>
            <p>{survey.description}</p>
            <button onClick={() => approveSurvey(survey)}>Approve</button>
            <button onClick={() => rejectSurvey(survey.id)}>Reject</button>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminSurveyApproval;
