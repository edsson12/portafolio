"use client";
import React, { useEffect } from "react";
import Section from "../Section/Section";

import { useTheme } from "@/app/context/ThemeContext";
import MainIcon from "../icons/MainIcon";

interface CardContent {
  title: string;
  company?: string;
  date?: string;
  description?: string[];
  institution?: string;
  link?: string;
}

interface CardsProps {
  cardContent: CardContent[];
  title: string;
}

const Cards = ({ cardContent, title }: CardsProps) => {
  const { theme } = useTheme();
  const [themeClass, setThemeClass] = React.useState("");
  const darkStyle = "border-foreground card-dark";
  const lightStyle = "border-light";

  useEffect(() => {
    if (theme) {
      const themeClass = theme === "dark" ? darkStyle : lightStyle;
      setThemeClass(themeClass);
    }
  }, [theme]);
  return (
    <Section className="mt-20">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1 font-bold text-xl">
          <h2>{title}</h2>
        </div>
        <div className="flex-2 flex-col font-extralight text-justify p-2 -z-10">
          {cardContent.map((experience, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${themeClass} px-5 py-3 mb-4`}
            >
              <MainIcon className="mb-3 md:absolute md:mb-0 h-12 w-auto md:-left-16" />

              <h3 className="text-xl font-bold">{experience.title}</h3>
              <p className="text-sm ">{experience.company}</p>
              <p className="text-sm">{experience.date}</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {experience?.description?.map((desc, i) => (
                  <li className="font-light text-sm " key={i}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Cards;
