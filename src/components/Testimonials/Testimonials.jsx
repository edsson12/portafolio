import React from "react";
import "./Testimonials.scss";

const Testimonials = () => {

    const data = [
        {
          id: 1,
          name: "Responsive design",
          title: "HTML",
          icon: "assets/files.png",         
          desc: "Html para la creacion de etiquetas de paginas web",
          img: "assets/foto_nofondo.png"
        },
        {
          id: 2,
          name: "MERN",
          title: "MongoDB, Express, React, Node",
          icon: "assets/react.png",         
          desc: "Utilizo mi gran aliado React.js para hacer todo tipo de aplicaciones web, que gracias a su ecosistema de modulos, herramientas y componentes, me ayuda a cubrir objetivos avanzados.",
          img: "assets/foto_nofondo.png",
          featured:true
          
          
          
        },
        {
          id: 3,
          name: "Responsive design",
          title: "CSS3, Sass",
          icon: "assets/css.png",         
          desc: "Utilizo tecnologias que me ayudan a construir aplicaciones web que se adaptan a todo tipo de dispositivos.",
          img: "assets/foto_nofondo.png"
        }
        
      ]



  return (
    <div className="o-testimonials" id="testimonials">
      <h1>Tecnologías</h1>
      <div className="tcontanier">

          {data.map((mapa)=>(
        <div className={mapa.featured? "tcard featured": "tcard"}>
          <div className="top">
            <img src="assets/down-arrow.png" className="left" alt="img" />
            <img
              className="user"
              src={mapa.img}
              alt="user"
            />
            <img className="right" src={mapa.icon} alt="img" />
          </div>
          <div className="center">
            {mapa.desc}
          </div>
          <div className="bottom">
            <h3>{mapa.name}</h3>
            <h4>{mapa.title}</h4>
          </div>
        </div>))}
      </div>
    </div>
  );
};

export default Testimonials;
