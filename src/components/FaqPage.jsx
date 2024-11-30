import React from "react";
import "./FaqPage.css"; // Optional: Include a CSS file for styling
import NavigationBar from "./navigationBar";

const FaqPage = () => {
    
  const faqs = [
    {
      question: "What is Audiology App?",
      answer: "The Audiology App is a platform designed to help audiologists manage externships and provide valuable resources for students and professionals."
    },
    {
      question: "How do I fill out the survey?",
      answer: "To fill out the survey, navigate to the 'Fill Out Survey' button in the navigation bar and follow the provided instructions."
    },
    {
      question: "What should I do if I forget my password?",
      answer: "If you forget your password, click on the 'Forgot Password' link on the login page and follow the instructions to reset it."
    },
    {
      question: "How do I contact support?",
      answer: "You can contact support by sending an email to support@audiologyapp.com or using the 'Contact Us' form available on the website."
    },
    {
      question: "Can I update my survey responses later?",
      answer: "Yes, you can update your survey responses by logging into your account and accessing your survey history."
    }
  ];

  return (
    <>
    <NavigationBar /> {/* Integrate the navigation bar */}
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3 className="faq-question">{faq.question}</h3>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </>
);
};

export default FaqPage;