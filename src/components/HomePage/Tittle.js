import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import image from "../../images/sierra.jpg";

function Tittle() {
  useEffect(() => {
    var elems = document.querySelectorAll(".parallax");
    var instances = M.Parallax.init(elems, {});
  }, []);

  return (
    <div id="index-banner" className="parallax-container">
      <div className="section no-pad-bot">
        <div className="container">
          <br />
          <br />
          <h1 className="header center grey-text text-darken-4" id="mio">
            Especialistas en topografia geodesica
          </h1>
          <div className="row center">
            <h5 className="header col s12 strong">
              Cotizamos proyectos en toda la republica mexicana
            </h5>
          </div>
          <div className="row center">
            <a
              href=""
              className="btn-large waves-effect waves-light grey darken-4"
            >
              Contactanos
            </a>
          </div>
          <br />
          <br />
        </div>
      </div>
      <div className="parallax">
        <img
          className="responsive-img"
          src={image}
          alt="Unsplashed background img 1"
          id="op"
        />
      </div>
    </div>
  );
}

export default Tittle;
