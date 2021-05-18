import React from "react";
import "./Tittle.css"
import Navbar from "./Navbar"
const Tittle=()=> {

  return (
    <div className="Header--container">
      <Navbar/>
      <div className="Tittle--container">
        <div  className="Tittle--text__container">
          <div className="Tittle--text__content">
            <h1>Expertos en topografía geodésica </h1>
            <p>Cotizamos proyectos en toda la República Mexicana </p>
            <button className=".btn-grad ">Contactanos</button>        
          </div>
        </div>    
        <div className="Tittle--illustration__container">
            
        </div>
      </div>
    </div>
  );
}

export default Tittle;
