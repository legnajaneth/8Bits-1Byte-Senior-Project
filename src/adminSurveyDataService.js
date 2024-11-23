import { getFirestore, collection, getDocs, query, where, doc, updateDoc } from "firebase/firestore";


class adminSurveysDataService {
  constructor() {
    this.firestore = getFirestore(); // Get the Firestore database
    this.surveyResponsesColRef = collection(this.firestore, 'surveyData'); // Reference to the 'info' collection in Firestore
    this.surveyCompletionCallback = null;
  }
  setSurveyCompletionCallback(callback) {
    this.surveyCompletionCallback = callback;
  }

  async getAllSurveys() {
    try {
      // Create a query to fetch surveys with status = 'pending'
      const pendingSurveysQuery = query(
        this.surveyResponsesColRef,
        where('status', '==', 'pending') // Filter for pending status
      );
      const surveySnapshot = await getDocs(pendingSurveysQuery);
      
      const surveyList = surveySnapshot.docs.map((doc, index) => ({
        id: doc.id,
        title: `Survey ${index + 1}`, // Set title dynamically
        ...doc.data()
      }));
      console.log(surveyList)
      return surveyList;
    } catch (error) {
      console.error("Error fetching surveys: ", error);
      throw new Error("Unable to fetch surveys");
    }
  };

  async updateSurveyStatus(id, status) {
    try {
      const surveyDocRef = doc(this.firestore, 'surveyData', id); // Reference the specific document
      await updateDoc(surveyDocRef, { status }); // Update the status field
      console.log(`Survey is ${status}`);
    } catch (error) {
      console.error(`Error updating survey ${id} status: `, error);
      throw new Error("Unable to update survey status");
    }
  }
}
export default adminSurveysDataService;
