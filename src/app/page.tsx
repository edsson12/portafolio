import TopBar from "./components/TopBar/TopBar";
import { BackgroundBeams } from "./components/BackgroundBeam/BackgroundBeam";
import TopSection from "./components/TopSection/TopSection";
import AboutSection from "./components/AboutSection/AboutSection";
import { englishExperiences } from "@/utils/experiences";
import Cards from "./components/Experiences/Experiences";
import { englishEducation } from "@/utils/educatoin";

export default function Home() {
  return (
    <>
      <BackgroundBeams className="-z-10" />
      <div className="flex min-h-screen w-screen max-w-[60rem] flex-col items-center px-6 pb-10 pt-7 text-[0.92rem] leading-relaxed sm:px-10 lg:px-10 gap-6">
        <TopBar />
        <TopSection className="mt-30" />
        <AboutSection />
        <Cards title={"Experience"} cardContent={englishExperiences} />
        <Cards title={"Education"} cardContent={englishEducation} />
      </div>
    </>
  );
}
