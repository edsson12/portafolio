"use client";
import React from "react";
import Section from "../Section/Section";
import { useLanguage } from "@/app/context/LanguageContext";
import { aboutText } from "@/utils/about";

const AboutSection = () => {
  const { language } = useLanguage();
  return (
    <Section className="mt-20">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1 font-bold text-xl">
          <h2>About me</h2>
        </div>
        <div className="flex-2 font-extralight text-justify">
          {language === "en" ? (
            <p>{aboutText.englishText}</p>
          ) : (
            <p>{aboutText.spanishText}</p>
          )}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
