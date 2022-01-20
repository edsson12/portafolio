import React, { useState } from "react";

import "./Works.scss";

const Works = () => {
  const [currentSlide, setcurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      icon: "assets/developer.png",
      title: "Trabajo en equipo",
      desc: "Soy una persona que brinda nuevas ideas y aporta opiniones para solucionar problemas. Soy empatico y me intereso por construir y desarrollar las ideas de los demás.",
      img: "https://image.freepik.com/vector-gratis/ilustracion-concepto-objetivos-equipo_114360-5006.jpg",
    },
    {
      id: 2,
      icon: "assets/developer.png",
      title: "Creatividad e innovación",
      desc: "Soy una persona con ideas frescas, motivadas por mi deseo de aprender. Me gusta mantenerme a la vanguardia a nivel de conocimientos para ponerlos en practica.",
      img: "https://image.freepik.com/vector-gratis/ilustracion-concepto-resolucion-problemas-laberinto_114360-2041.jpg",
    },
    {
      id: 3,
      icon: "assets/developer.png",
      title: "Responsabilidad",
      desc: "Soy disciplinado, por tanto no tengo problema en cumplir con los tiempos estimados para entregas.",
      img: "https://image.freepik.com/vector-gratis/ilustracion-concepto-objetivos-equipo_114360-5175.jpg",
    }
  ]
  const handleArrow = (way) => {
    way === "aleft"
      ? setcurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setcurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="o-works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="workContainer">
            <div className="workItem">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="imagen" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/white-arrow.png"
        alt="flecha"
        className="arrow aleft"
        onClick={() => handleArrow("aleft")}
      />
      <img
        src="assets/white-arrow.png"
        alt="flecha"
        className="arrow aright"
        onClick={() => handleArrow()}
      />
    </div>
  );
};

export default Works;
