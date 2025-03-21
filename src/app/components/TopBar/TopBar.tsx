"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import { useTheme } from "@/app/context/ThemeContext";

const TopBar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="mb-12 flex w-full flex-wrap pb-3 text-sm sm:flex-nowrap sm:justify-start">
      <nav className="relative mx-auto flex w-full items-center justify-between sm:flex sm:items-center">
        <p className="font-monserrat font-semibold text-xl">.cored</p>
        <div className="flex flex-row items-center justify-center gap-x-5 sm:gap-x-7 text-xl ">
          <Link className="font-monserrat font-semibold" href="/">
            Tools
          </Link>
          <ThemeButton
            onClick={toggleTheme}
            svg={
              theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="size-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              )
            }
          />
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
