import React from "react";

function Services() {
  return (
    <article className="container">
      <div className="section">
        <div className="row">
          <div className="col s12 m4">
            <div className="icon-block">
              <a href="#">
                <h2 className="center blue-text text-accent-4">
                  <i className="large material-icons">explore</i>
                </h2>
              </a>
              <h5 className="center">Servicios</h5>
              <p className="strong">
                By utilizing elements and principles of Material Design, we were
                able to create a framework that incorporates components and
                animations that provide more feedback to users. Additionally, a
                single underlying responsive system across all platforms allow
                for a more unified user experience.
              </p>
            </div>
          </div>
    
          <div className="col s12 m4">
            <div className="icon-block">
              <a href="proyectos.html">
                <h2 className="center blue-text text-accent-4">
                  <i className="large material-icons">landscape</i>
                </h2>
              </a>
              <h5 className="center">Proyectos</h5>

              <p className="strong">
                Realizamos proyectos en toda la Republica Mexicana,contamos con
                participacion en obra civil como puentes, carreteras,naves
                industriales, ductos de PEMEX,
              </p>
              <p className="strong">
                Encuentra mas de nuestro trabajo en el apartado de proyectos o
                da <a href="proyectos.html">click aqui</a>
              </p>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="icon-block">
              <a href="#">
                <h2 className="center blue-text text-accent-4">
                  <i className="large material-icons">monetization_on</i>
                </h2>
              </a>
              <h5 className="center">Cotizaciones</h5>

              <p className="strong">
                Da un click en el apartado de cotizaciones o en el signo de $ y
                sigue los pasos para tener una idea de lo que costara tu
                proyecto. Enseguida hagas tu cotizacion nos pondremos en
                contacto contigo
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Services;
