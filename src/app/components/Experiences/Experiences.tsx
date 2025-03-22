import React from "react";
import Section from "../Section/Section";

const Experiences = () => {
  return (
    <Section className="mt-20">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-2 font-bold text-xl">
          <h2>Experience</h2>
        </div>
        <div className="flex-3 flex-col font-extralight text-justify p-2 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            molestias, sit natus veniam debitis fuga fugit quod tempora enim
            voluptates sint atque possimus hic exercitationem? Nostrum adipisci
            qui ratione libero.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Experiences;
