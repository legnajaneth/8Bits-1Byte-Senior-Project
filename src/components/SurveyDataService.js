// SurveyDataService.js
import { db, auth } from './firebaseConfig'; //Adjust Path when needed
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

class SurveyDataService {
  async saveSurveyResponse(surveyData) {
    try {
      const userId = auth.currentUser ? auth.currentUser.uid : 'anonymous';
      const docRef = await addDoc(collection(db, 'pending_surveys'), {
        userId: userId,
        surveyData: surveyData,
        createdAt: serverTimestamp(),
      });
      return docRef.id;
    } catch (error) {
      console.error('Error saving survey response:', error);
      throw error;
    }
  }
}

export default SurveyDataService;