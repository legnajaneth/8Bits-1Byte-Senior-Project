//Dylan Dumitru - TODO QVDM-65 
//This function is still a work in progress

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendNotification = functions.https.onCall(async (data, context) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
      user: 'test8bits1byte@gmail.com',
      pass: 'Csc190team', // Consider using environment variables instead
    },
  });

  const mailOptions = {
    from: 'test8bits1byte@gmail.com',
    to: data.email,
    subject: 'New Survey Submission',
    text: data.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new functions.https.HttpsError('internal', 'Unable to send email.');
  }
});
