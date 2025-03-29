"use client";
import { useTheme } from "@/app/context/ThemeContext";
import React, { useEffect } from "react";
interface MainIconProps {
  className?: string;
}
const MainIcon = ({ className }: MainIconProps) => {
  const { theme } = useTheme();
  const [themeClass, setThemeClass] = React.useState("");

  const darkStyle = "white";
  const lightStyle = "black";
  useEffect(() => {
    if (theme) {
      const themeClass = theme === "dark" ? darkStyle : lightStyle;
      setThemeClass(themeClass);
    }
  }, [theme]);
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      //   xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 575.47 486.53"
      //   style="enable-background:new 0 0 575.47 486.53;"
      //   xml:space="preserve"
      fill={themeClass}
      className={className }
    >
      <g id="Capa_1"></g>
      <g id="Capa_2">
        <path
          d="M227.13,298.89c-0.68-0.72-1.8-0.77-2.54-0.11l-9.48,8.53c-3.36,3.02-4.35,7.97-2.19,11.94
            c0.03,0.06,0.07,0.12,0.1,0.18c3.41,6.07,30.98,26.55,52.53,32.88c0,0,42.79,12.64,85.15-13.4c44.63-27.44,48.35-61.84,50.8-78.37
            c0.61-4.13-0.63-8.31-3.4-11.43l-0.72-0.81c-1.39-1.56-3.38-2.45-5.47-2.45h-14.47c-0.53,0-0.98,0.4-1.02,0.93
            c-0.49,6.25-4.82,42.38-35.97,66.2c-26.04,19.91-57.87,16.11-63.06,15.14c-0.48-0.09-5.07-1.31-5.53-1.47
            C267.37,325.11,244.08,316.66,227.13,298.89z"
        />
        <g>
          <path
            d="M244.5,287.57c4.62,4.21,9.82,7.63,15.28,10.35c5.24,3.1,10.92,5.46,16.83,6.89
                c5.9,1.49,12.02,1.95,18.1,1.66c6.08-0.38,12.1-1.58,17.92-3.47c1.47-0.42,2.89-1.01,4.32-1.53c1.45-0.5,2.81-1.17,4.21-1.76
                c2.72-1.33,5.42-2.75,7.89-4.51c5.02-3.4,9.4-7.71,13.03-12.57c3.6-4.89,6.44-10.34,8.52-16.07c2.49-5.58,4.36-11.52,5.41-17.68
                c0.15,6.27-0.87,12.58-2.59,18.71c-2.17,5.98-5.14,11.69-8.93,16.83c-3.82,5.12-8.45,9.66-13.75,13.26
                c-2.61,1.85-5.45,3.35-8.32,4.75c-1.46,0.63-2.91,1.33-4.4,1.84c-1.49,0.55-2.95,1.15-4.48,1.59c-6.03,1.96-12.31,3.22-18.67,3.61
                c-6.36,0.31-12.79-0.18-18.98-1.74c-6.21-1.48-12.14-4-17.65-7.19C253.01,296.9,248.21,292.64,244.5,287.57z"
          />
        </g>
        <path
          d="M508.11,174.54c0,0-59.93,17.45-81.17,20.86c-21.24,3.41-31.86-9.48-31.86-9.48s-23.29-23.64-29.65-28.6
            c-6.35-4.96-23.64-15.96-33.69-19.19c-13.61-4.37-44-9.1-61.82-4.17s-33.76,11.38-51.58,24.27c-17.83,12.9-30.53,40.08-33.38,49.69
            c-2.66,8.98-3.79,24.27-8.72,53.48c-3.7,21.92-31.48,33-31.48,33l-81.93,34.14l72.82-20.48c0,0,117.2-33.38,195.33-60.69
            s193.44-77.38,193.44-77.38L508.11,174.54z M367.77,219.3c0,0-116.73,44.19-152.28,52.72c0,0-11.95,4.55-11.95-4.17
            c0,0-2.66-58.22,29.58-84.96c31.65-26.25,58.41-23.71,58.41-23.71s26.17-2.09,49.39,14.41c14.54,10.33,32.54,26.74,36.71,34.71
            C381.8,216.26,367.77,219.3,367.77,219.3z"
        />
        <g>
          <path
            d="M231.13,268.92c-1.19-4.03-1.93-8.17-2.38-12.34c-0.45-4.17-0.6-8.38-0.39-12.58
                c0.4-8.39,2.2-16.78,5.65-24.51c3.47-7.71,8.47-14.76,14.77-20.48c3.15-2.85,6.62-5.36,10.3-7.49c3.68-2.13,7.6-3.84,11.62-5.23
                c8.06-2.72,16.56-4.07,25.1-4c2.12,0.01,4.36,0.23,6.45,0.6c2.11,0.35,4.2,0.79,6.26,1.35c4.12,1.13,8.14,2.6,12,4.42
                c3.86,1.83,7.53,4.09,10.9,6.72c1.73,1.27,3.26,2.77,4.84,4.21c1.45,1.56,2.97,3.11,4.24,4.77c2.65,3.28,5.16,6.68,7.35,10.29
                c1.08,1.81,2.07,3.69,2.91,5.63c0.82,1.95,1.58,3.95,1.65,6.13c0,0.08-0.06,0.15-0.14,0.15c-0.08,0-0.14-0.05-0.15-0.13l0-0.03
                c-0.28-2.01-1.2-3.93-2.13-5.75c-0.96-1.83-2.07-3.58-3.27-5.26c-2.35-3.4-5-6.6-7.79-9.67c-0.69-0.78-1.39-1.54-2.13-2.24
                c-0.73-0.71-1.44-1.45-2.17-2.16c-1.57-1.31-3.08-2.69-4.77-3.83c-3.3-2.39-6.84-4.47-10.58-6.12c-3.71-1.71-7.58-3.08-11.54-4.12
                c-1.97-0.53-3.97-1-5.97-1.35c-2.02-0.38-3.95-0.59-6.01-0.64c-8.17-0.25-16.44,0.86-24.28,3.31
                c-7.82,2.49-15.19,6.47-21.37,11.89c-6.18,5.41-11.19,12.19-14.7,19.65c-3.55,7.46-5.53,15.66-6.12,23.94
                c-0.31,4.14-0.26,8.32,0.08,12.47c0.35,4.14,0.99,8.29,2.07,12.3l0,0.01c0.02,0.08-0.03,0.16-0.11,0.18
                C231.24,269.05,231.16,269,231.13,268.92z"
          />
        </g>
      </g>
    </svg>
  );
};

export default MainIcon;
