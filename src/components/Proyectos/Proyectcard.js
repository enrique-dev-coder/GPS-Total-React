import React from "react";
import "./proyectos.css"

const  Proyectcard = ({tituloProyecto,descripcion,imagen}) =>{
    return(
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={imagen}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{tituloProyecto}<i className="material-icons right">more_vert</i></span>
                <p>Da clcik para conocer mas!</p>
            </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{tituloProyecto}<i className="material-icons right">close</i></span>
          <p>{descripcion}</p>
        </div>
      </div>

    )
}



export default Proyectcard;


