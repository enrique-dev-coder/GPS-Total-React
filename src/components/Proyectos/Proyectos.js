import React,{useEffect,useState} from "react";
import "./proyectos.css"
import Proyectcard from "./Proyectcard"


function Proyectos() {
  const[cards, allCards] = useState([])
  useEffect(function(){
    return allCards([
      {
        tituloProyecto:"Peru",
        descripcion:"Mediciones topograficas en Peru",
        imagen:"https://res.cloudinary.com/dof2dcqoe/image/upload/v1621481465/jungle_av5haj.jpg"
      },
      {
        tituloProyecto:"Peru",
        descripcion:"Mediciones topograficas en Peru",
        imagen:"https://res.cloudinary.com/dof2dcqoe/image/upload/v1621481465/jungle_av5haj.jpg"
      },
      {
        tituloProyecto:"Peru",
        descripcion:"Mediciones topograficas en Peru",
        imagen:"https://res.cloudinary.com/dof2dcqoe/image/upload/v1621481465/jungle_av5haj.jpg"
      },
      {
        tituloProyecto:"Peru",
        descripcion:"Mediciones topograficas en Peru",
        imagen:"https://res.cloudinary.com/dof2dcqoe/image/upload/v1621481465/jungle_av5haj.jpg"
      },

    ])
  },[])
  return(

      <section className="section--proyectos__container" id="proyects">
        <h2>Contamos con amplia experiencia en proyectos nacionales en internancionales</h2>
        <div className="section--proyectos__container__cards">
          { cards.map((proyectos)=>{
            return(
              <Proyectcard
              tituloProyecto={proyectos.tituloProyecto}
              descripcion={proyectos.descripcion}
              imagen={proyectos.imagen}
              />
            )
          })
          }
          
        </div>



      </section>

  )



}

export default Proyectos;
