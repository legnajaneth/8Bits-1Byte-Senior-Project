import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Removed Form import
import "./App.css";
import Home from "./home";
import LogIn from "./login";
import SignUp from "./signup";
import ResultPage from "./pages/ResultPage";
import ChangePasswordPage from "./pages/ChangePasswordPage.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import SurveyPlanPage from "./components/SurveyPlanPage.jsx";
import SubmittedSurveys from "./components/SubmittedSurvey.jsx";
import SubscriptionServiceInfoPage from "./components/SubscriptionServiceInfoPage.jsx";
import PaypalCheckoutButton from "./components/PaypalCheckoutButton.jsx";
import PasswordResetForm from "./components/PasswordResetForm"; // Make sure to import this
import AdminDashboard from "./components/Dashboard.jsx";
import SettingsPage from "./components/UserSettings.jsx";
import SurveyList from "./components/SurveyList.jsx";
import DeleteAccount from "./components/DeleteAccount.jsx";
import AccountDeletedMsg from "./components/AccountDeletedMsg.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import FaqPage from "./components/FaqPage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/resultpage" element={<ResultPage />} />
            <Route path="/change-password" element={<ChangePasswordPage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/surveyplanpage" element={<SurveyPlanPage />} />
            <Route
              path="/pay-pal-checkout"
              element={<PaypalCheckoutButton />}
            />
            <Route path="/reset-password" element={<PasswordResetForm />} />

            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/surveys" element={<SubmittedSurveys />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/survey-list" element={<SurveyList />} />

            <Route path="/delete-account" element={<DeleteAccount />} />
            <Route path="/account-deleted" element={<AccountDeletedMsg />} />
            {/* ... any other routes */}
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
