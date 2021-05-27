import React from "react";
import Navbar from "../HomePage/Navbar";
import { Container, Typography } from "@material-ui/core";
import FirstStep from "./FirstStep"
import "./Cotizador.css"

function Cotizaciones() {
  return (
    <>
      <Navbar />
      <section className="cotizaciones--container">
        <div className="cotizaciones--title">
          <h3>Cotizador</h3>
        </div>
        <div className="form--container">
          <FirstStep/>
        </div>
      </section>
      
    </>
  );
}

export default Cotizaciones;
