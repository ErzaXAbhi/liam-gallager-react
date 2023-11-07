import React from "react";
import Potrait1 from "./images/potraits1-min.jpg";
import Potrait2 from "./images/potraits2-min.jpg";
import Potrait3 from "./images/potraits3-min.jpg";
import Potrait8 from "./images/potraits8-min.jpg";
import Potrait5 from "./images/potraits5-min.jpg";
import Potrait6 from "./images/potraits6-min.jpg";

const Potraits = () => {
  return (
    <>
      <div className="potraits">
        <img src={Potrait1} alt="model 1" loading="lazy" />
        <img src={Potrait2} alt="model 2" loading="lazy" />
        <img src={Potrait3} alt="model 3" loading="lazy" />
        <img src={Potrait8} alt="model 4" loading="lazy" />
        <img src={Potrait5} alt="model 5" loading="lazy" />
        <img src={Potrait6} alt="model 6" loading="lazy" />
      </div>
    </>
  );
};

export default Potraits;
