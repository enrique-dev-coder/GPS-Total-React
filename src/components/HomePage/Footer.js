import React from "react";

function Footer() {
  return (
    <footer className="page-footer blue darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">GPS Total</h5>
            <p className="grey-text text-lighten-4">
              We are a team of college students working on this project like
              it's our full time job. Any amount would help support and continue
              development on this project and is greatly appreciated.
            </p>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Emails</h5>
            <ul>
              <li>
                <a className="white-text" href="#!">
                  ppchuy@example1
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  ppchuy@example2
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  ppchuy@example3
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  ppchuy@example4
                </a>
              </li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">Telefonos</h5>
            <ul>
              <li>
                <a className="white-text" href="#!">
                  844-012-34-55
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  844-012-34-55
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  844-012-34-55
                </a>
              </li>
              <li>
                <a className="white-text" href="#!">
                  844-012-34-55
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          Made by
          <a
            className="brown-text text-lighten-3"
            href="http://materializecss.com"
          >
            Tite
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
