import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import image from "../../images/logo_web_lg.png";
import { Link as Link1 } from "react-router-dom";
import { Link as Link2, animateScroll as scroll } from "react-scroll"; 
function Navbar() {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {
      edge: "left",
      draggable: "true",
    });
  }, []);

  return (
    <nav id="navbar--style" role="navigation">
      <div className="nav-wrapper container">
        <Link1 to="/" id="logo-container" class="brand-logo">
          <img class="responsive-img" src={image} alt="logo" />
        </Link1>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link2 
            to="proyects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
            >
              Proyectos</Link2>
          </li>
          <li>
            <Link1 to="/cotizaciones">Cotizaciones</Link1>
          </li>
        </ul>

        <ul id="nav-mobile" className="sidenav">
          <li>
            <Link2 to="/proyectos" className="sidenav-close">
              Proyectos
            </Link2>
          </li> 
         <li>
            <Link1 to="/cotizaciones" className="sidenav-close">
              Cotizaciones
            </Link1>
          </li>
          <li>
            <a href="#" className="sidenav-close">
              Contacto
            </a>
          </li>
        </ul>
        <a href="#" data-target="nav-mobile" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
