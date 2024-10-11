import { getFirestore, collection, addDoc } from "firebase/firestore";

class SurveyDataService {
  constructor() {
    this.firestore = getFirestore(); // Get the Firestore database
    this.surveyResponsesColRef = collection(this.firestore, 'info'); // Reference to the 'info' collection in Firestore
    this.surveyCompletionCallback = null;
  }

  setSurveyCompletionCallback(callback) {
    this.surveyCompletionCallback = callback;
  }

  async saveSurveyResponse(responseData) {
    try {
      // Add a new document to the 'info' collection in Firestore
      const docRef = await addDoc(this.surveyResponsesColRef, responseData);
      console.log("Document written with ID: ", docRef.id); // Log the document ID
      
      // If a survey completion callback has been set, call it with the success status and the new document's ID
      if (this.surveyCompletionCallback) {
        this.surveyCompletionCallback(true, docRef.id);
      }
      return docRef.id; // Return the new document ID
    } catch (error) {
      console.error("Error adding document: ", error); // Log the error
      
      // If a survey completion callback has been set, call it with the failure status
      if (this.surveyCompletionCallback) {
        this.surveyCompletionCallback(false, null);
      }
      throw error; // Rethrow the error
    }
  }

  // No need for listenForSurveyResponse() in the context of Firestore unless real-time updates are required
}

export default SurveyDataService;
