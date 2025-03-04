import React from "react";
//IMG
//import logo from "../../assets/banerEvil.png";
//CSS
import "./Inicio.css"
//componentes
import {AutoSliderBanner} from "../../components/AutoSliderBanner/AutoSliderBanner";
const inicio = () => {
  return (
    <div>
      {/* <div className="caja">
        <img  src={logo} alt="logo" className="logo" />
      </div> */}
      <div>
        <AutoSliderBanner />
      </div>
    </div>
  );
};

export default inicio;
