import React from "react";
interface ThemeButtonProps {
  text?: string;
  svg?: React.ReactNode;
  onClick?: () => void;
}

const ThemeButton = ({ text, svg, onClick }: ThemeButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-white p-2 rounded-md border border-gray-600/30 hover:bg-gray-600/50 hover:text-black transition-all duration-300"
    >
      {text ? text : ""}
      {svg}
    </button>
  );
};

export default ThemeButton;
