import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Proyectos from "./components/Proyectos/Proyectos";
import Cotizaciones from "./components/Cotizaciones/Cotizaciones";

function App() {
  // hook para inicializar los componentes de materialize
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/proyectos" component={Proyectos} />
        <Route exact path="/cotizaciones" component={Cotizaciones} />
      </div>
    </BrowserRouter>
  );
}

export default App;
