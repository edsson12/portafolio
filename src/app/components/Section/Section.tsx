import React from "react";
interface SectionProps {
  children: React.ReactNode;
  className?: string;
}
const Section = ({ children, className }: SectionProps) => {
  return (
    <section
      className={`flex flex-col items-center justify-center w-full h-auto font-monserrat ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
