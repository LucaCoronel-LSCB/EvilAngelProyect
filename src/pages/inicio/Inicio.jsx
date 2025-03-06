import React from "react";

//CSS
import "./Inicio.css"
//componentes
import {AutoSliderBanner} from "../../components/AutoSliderBanner/AutoSliderBanner";
import InicioGrid from "../../components/InicioGrid/InicioGrid";
const inicio = () => {
  return (
    <div>
      {/* <div className="caja">
        <img  src={logo} alt="logo" className="logo" />
      </div> */}
      <div>
        <AutoSliderBanner />
      </div>
      <div>
        <InicioGrid />
      </div>
    </div>
  );
};

export default inicio;
