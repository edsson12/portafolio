import React, { useState, useEffect } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
/*import Modal from "../Modal/Modal";*/

import "./Portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  } from "../../data.js";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  /*const [abrirModal, setAbrirModal] = useState(false);*/

  

  
  
  const list = [
    {
      id: "destacados",
      title: "Proyectos",
    },
    {
      id: "web",
      title: "UX",
    }
   
 
  ];
 

  const handleItems = e => {
   /* setAbrirModal(true);*/
   console.log('')
    
    

    
  };

  useEffect(() => {
    switch (selected) {
      case "destacados":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;

      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="o-portfolio" id="portfolio">
      <h1>Portafolio</h1>
      {/*{abrirModal && <Modal 
        setAbrirModal={setAbrirModal}
        enviarInfo={enviarInfo}
        data={data}
        
        
        />}*/}
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="port-container">
        {
        data.map((d) => (
          
          <div className="items" onClick={handleItems} id={d.id} >    
          <a href={d.ref} target="_blank" rel="noreferrer noopener">       
            <img src={d.img} alt="img" />
            <h3>{d.title}</h3>
            </a> 
                       
          </div>
        ))}
        
        
      </div>
    </div>
  );
};

export default Portfolio;
