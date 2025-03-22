import React from "react";
import Section from "../Section/Section";

const AboutSection = () => {
  return (
    <Section className="mt-20">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-2 font-bold text-xl">
          <h2>About me</h2>
        </div>
        <div className="flex-3 font-extralight text-justify">
          <p>
            Software Developer with over 3 years of experience in creating
            scalable and optimized web applications. Specialized in Next.js,
            NestJS, React.js, and Node.js, with a focus on modern architectures
            such as Clean Architecture and Atomic Design. Experience in
            developing and integrating REST and GraphQL APIs, as well as
            managing relational and NoSQL databases such as PostgreSQL and
            MongoDB.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
