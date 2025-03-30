"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import { useTheme } from "@/app/context/ThemeContext";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import { useLanguage } from "@/app/context/LanguageContext";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="mb-12 flex w-full h-16 flex-wrap pb-3 text-sm sm:flex-nowrap sm:justify-start fixed backdrop-blur-sm top-0">
      <nav className="relative mx-auto flex w-full items-center justify-around sm:flex sm:items-center">
        <p className="font-monserrat font-semibold text-xl">.cored</p>
        <div className="flex flex-row items-center justify-center gap-x-5 sm:gap-x-7 text-xl ">
          <Link className="font-monserrat " href="/">
            Tools
          </Link>
          <ThemeButton
            onClick={toggleTheme}
            svg={theme === "dark" ? <Moon /> : <Sun />}
          />
          <ThemeButton
            onClick={toggleLanguage}
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={theme === "dark" ? "white" : "black"}
                className="size-3.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                />
              </svg>
            }
          />
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
