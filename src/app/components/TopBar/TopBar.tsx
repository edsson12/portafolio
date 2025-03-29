"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import { useTheme } from "@/app/context/ThemeContext";
import Moon from "../icons/Moon";
import Sun from "../icons/Sun";

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
    <div className="mb-12 flex w-full h-16 flex-wrap pb-3 text-sm sm:flex-nowrap sm:justify-start fixed backdrop-blur-sm top-0">
      <nav className="relative mx-auto flex w-full items-center justify-around sm:flex sm:items-center">
        <p className="font-monserrat font-semibold text-xl">.cored</p>
        <div className="flex flex-row items-center justify-center gap-x-5 sm:gap-x-7 text-xl ">
          <Link className="font-monserrat " href="/">
            Tools
          </Link>
          <ThemeButton
            onClick={toggleTheme}
            svg={
              theme === "dark" ? (
                <Moon />
              ) : (
               <Sun/>
              )
            }
          />
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
