import React, { useState } from "react";
import emailjs from '@emailjs/browser';

import "./Contact.scss";

const Contact = () => {
    
    const[mensaje,setMensaje]= useState(false)
    const [correo, setCorreo] = useState('')
    const [mensajeEnviado, setMensajeEnviado] = useState('')
    const [mensajeCambiado, setmensajeCambiado] = useState('')

  const handlesubmit = (e) => {

    
    e.preventDefault();
    
    setMensaje(true)
    setTimeout(() => {
        setMensaje(false)
    }, 4000);

    

    if ([correo, mensajeEnviado].includes('')) {
        setMensaje(false)
        setmensajeCambiado('Por favor rellena todos los campos')
        setTimeout(() => {
            setmensajeCambiado('')
        }, 4000);

        return;
        
    }

    emailjs.sendForm('service_1snxs3y', 'template_0fhqsm7', e.target, 'user_PUbSdqWqd6PH3LZop99wI')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();

  };
  return (
    <div className="o-contact" id="contact">
      <div className="left">
        <img
          src="assets/contact.png"
          alt="img"
        />
      </div>
      <div className="right">
        <h2>Contact: </h2>
        <form onSubmit={handlesubmit}>
          <input type="text" placeholder="Email" name="from_name" value={correo} onChange={e=>setCorreo(e.target.value)} />
          <textarea placeholder="Mensaje..." name="message" value={mensajeEnviado} onChange={e=>setMensajeEnviado(e.target.value)}></textarea>
          <button type="submit">Enviar</button>

          {mensajeCambiado && <span className="espan error">{mensajeCambiado}</span>}
          {mensaje && <span className="espan">¡Gracias! te respondere pronto</span>}
         

        </form>
      </div>
    </div>
  );
};

export default Contact;
