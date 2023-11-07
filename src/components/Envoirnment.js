import React from "react";
import Envo1 from "./images/potraits4-min.jpg";
import Envo2 from "./images/environment2-min.jpg";
import Envo3 from "./images/environment3-min.jpg";
import Envo4 from "./images/environment4-min.jpg";
import Envo5 from "./images/environment5-min.jpg";
import Envo6 from "./images/environment6-min.jpg";

const Envoirnment = () => {
  return (
    <>
      <div className="envo">
        <img src={Envo1} alt="model 1" loading="lazy" />
        <img src={Envo2} alt="model 1" loading="lazy" />
        <img src={Envo3} alt="model 1" loading="lazy" />
        <img src={Envo4} alt="model 1" loading="lazy" />
        <img src={Envo5} alt="model 1" loading="lazy" />
        <img src={Envo6} alt="model 1" loading="lazy" />
      </div>
    </>
  );
};

export default Envoirnment;
