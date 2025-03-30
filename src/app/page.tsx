"use client";
import TopBar from "./components/TopBar/TopBar";
import { BackgroundBeams } from "./components/BackgroundBeam/BackgroundBeam";
import TopSection from "./components/TopSection/TopSection";
import AboutSection from "./components/AboutSection/AboutSection";
import { englishExperiences, experiences } from "@/utils/experiences";
import Cards from "./components/Experiences/Experiences";
import { education, englishEducation } from "@/utils/educatoin";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  return (
    <>
      <BackgroundBeams className="-z-10 " />
      <div className="flex min-h-screen w-screen max-w-[60rem] flex-col items-center px-6 pb-10 pt-7 text-[0.92rem] leading-relaxed sm:px-10 lg:px-10 gap-6">
        <ScrollProgress />
        <TopBar />
        <TopSection className="mt-30" />
        <AboutSection />
        <Cards
          title={"Experience"}
          cardContent={language === "en" ? englishExperiences : experiences}
        />
        <Cards
          title={"Education"}
          cardContent={language === "en" ? englishEducation : education}
        />
      </div>
    </>
  );
}
