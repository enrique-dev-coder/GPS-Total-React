import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import image from "../../images/background3.jpg";

function Banner() {
  useEffect(() => {
    var elems = document.querySelectorAll(".parallax");
    var instances = M.Parallax.init(elems, {});
  }, []);

  return (
    <div className="parallax-container valign-wrapper">
      <div className="parallax">
        <img src={image} alt="Unsplashed background img 2" />
      </div>
    </div>
  );
}

export default Banner;
