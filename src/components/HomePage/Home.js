import React from "react";
import Navbar from "./Navbar";
import Tittle from "./Tittle";
import Services from "./Services";
import Aboutus  from "./Aboutus"
import Mision from "./Mision";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Tittle />
      <Services />
      <Aboutus/>
      <Mision />
      <Footer />
    </>
  );
}

export default Home;
