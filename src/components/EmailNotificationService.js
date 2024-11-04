//Dylan Dumitru - TODO QVDM-65 
//This function is still a work in progress

import { httpsCallable } from "firebase/functions"; // Import Firebase Functions

class EmailNotificationService {
  constructor() {
    this.sendNotification = null;
  }

  // Set the callable function reference for sending notifications
  setSendNotificationFunction(functionRef) {
    this.sendNotification = functionRef;
  }

  async sendEmailNotification(email, message) {
    if (!this.sendNotification) {
      throw new Error("Notification function not set.");
    }

    try {
      const result = await this.sendNotification({ email, message });
      console.log("Notification sent successfully:", result);
    } catch (error) {
      console.error("Error sending notification:", error);
      throw error; // Rethrow the error for handling
    }
  }
}

export default EmailNotificationService;
