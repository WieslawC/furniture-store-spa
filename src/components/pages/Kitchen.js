import React from "react";
import "../../styles/Kitchen.scss";

const Kitchen = () => {
  return (
    <>
      <div className="mainKitchen">
        <div className="kitchenSliderWrapper">
          <h4>Kuchnia twoich marzeń</h4>
          <section className="kitchenSlider"></section>
        </div>
        <div className="kitchenAbout">
          <h4>Informacje</h4>
          <section className="kitchenSlider"></section>
        </div>
        <div className="kitchenContent">
          <h4>Treść</h4>
          <section className="kitchenSlider"></section>
        </div>
      </div>
    </>
  );
};

export default Kitchen;
