import React from "react";
import "./Modal.scss";


const Modal = ({ setAbrirModal }) => {
    
  return (
    <div className="modal">
        <div className="imgcont">
        <img src="assets/close.png" alt="img" onClick={()=>setAbrirModal(false)} />
        </div>
        
      <div className="infoContainer">
          <h1 className="ache1">React js</h1>
          <img src="https://sugarandcode.com/wp-content/uploads/2018/05/chloe-coming-soon-wordpress-theme-web-design-kit.png" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae minus temporibus numquam, nihil aliquam eius similique expedita illum, dolorum, modi a magnam. Libero nulla obcaecati eveniet incidunt ipsam nihil.</p>
          <div className="links">
          <button>Ir a Github</button>
          <button>Ver en la Web</button>
          </div>
      </div>
    </div>
  );
};

export default Modal;
