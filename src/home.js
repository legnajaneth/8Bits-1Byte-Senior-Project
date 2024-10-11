import React from "react";
import NavigationBar from "./components/navigationBar";
import HeroSection from "./components/HeroSection";
import AboutSiteSection from "./components/AboutSiteSection";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/config";
import { colors } from "./colors";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <AboutSiteSection />
    </div>
  );
}

const divStyle = {
  color: colors.background,
};

export default Home;
