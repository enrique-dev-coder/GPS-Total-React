import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import image from "../../images/logo_web_lg.png";
import { Link, Router } from "react-router-dom";
function Navbar() {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {
        edge: "left",
        draggable: "true",
      });
    });
  }, []);

  return (
    <nav className="indigo accent-1" role="navigation">
      <div className="nav-wrapper container">
        <Link to="/" id="logo-container" class="brand-logo">
          <img class="responsive-img" src={image} alt="logo" />
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/proyectos">Proyectos</Link>
          </li>
          <li>
            <Link to="/cotizaciones">Cotizaciones</Link>
          </li>
          <li>
            <a href="#">Planos</a>
          </li>
        </ul>

        <ul id="nav-mobile" className="sidenav">
          <li>
            <Link to="/proyectos" className="sidenav-close">
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/cotizaciones" className="sidenav-close">
              Cotizaciones
            </Link>
          </li>
          <li>
            <a href="#" className="sidenav-close">
              Planos
            </a>
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
