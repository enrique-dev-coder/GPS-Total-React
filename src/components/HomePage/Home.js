import React from "react";
import Proyectos from "../Proyectos/Proyectos"
import Tittle from "./Tittle";
import Services from "./Services";
import Aboutus  from "./Aboutus"
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Tittle />
      <Services />
      <Aboutus/>
      <Proyectos/>
      <Footer />
    </>
  );
}

export default Home;
