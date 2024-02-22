import Dashboard from "@/components/Dashboard";
import AboutHeroPage from "@/components/aboutUs/AboutHeroPage";
import AboutOurTeam from "@/components/aboutUs/AboutOurTeam";
import AboutQuestions from "@/components/aboutUs/AboutQuestions";
import AboutUsWords from "@/components/aboutUs/AboutUsWords";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[90%] flex-col justify-center">
        <AboutHeroPage />
        <AboutUsWords />
        <AboutOurTeam />
        <Dashboard title="Our Statistics" />
        <AboutQuestions />
      </div>
    </div>
  );
}
