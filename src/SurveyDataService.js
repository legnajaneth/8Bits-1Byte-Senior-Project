import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

class SurveyDataService {
  constructor() {
    this.firestore = getFirestore(); // Get the Firestore database
    this.surveyResponsesColRef = collection(this.firestore, 'info'); // Reference to the 'info' collection in Firestore
    this.surveyMetadata = collection(this.firestore, 'surveyData')
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
      
      // Add the docId (as surveyId) and date to the 'SurveyData' collection
      await this.saveSurveyMetadata(docRef.id);

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

  async saveSurveyMetadata(docId) {
    try {
      const metadata = {
        surveyId: docId, // Use the Firestore document ID as surveyId
        statue: 'pending',
        date: Timestamp.now(), // Add the current date in ISO format
      };

      // Add the metadata to the 'SurveyData' collection
      await addDoc(this.surveyMetadata, metadata);
      console.log("Survey metadata saved: ", metadata);
    } catch (error) {
      console.error("Error saving survey metadata: ", error);
      throw error; // Rethrow the error if saving metadata fails
    }
  }

  // No need for listenForSurveyResponse() in the context of Firestore unless real-time updates are required
}

export default SurveyDataService;
