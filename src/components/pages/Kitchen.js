import React from "react";
import "../../styles/Kitchen.scss";

const Kitchen = () => {
  return (
    <>
      <div className="mainContainer">
        <section className="kitchenSliderWrapper">
          <h4>Poznaj kuchnię twoich marzeń</h4>
          <div className="imageContainer">
            <div className="image"></div>
          </div>
        </section>
        <section className="kitchenAboutWrapper">
          <p>
            Nasze zaplecze kuchenne umożliwi Ci urządzenie dowolnego rozmiaru
            pomieszczenia, a dobierając i dostosowując jeden z gotowych
            kuchennych schematów, będziesz miał możliwość uniknięcia bezkresnego
            koła dobierania mebli
          </p>
          <div className="image"></div>
        </section>
        <section className="kitchenConclusion"></section>
      </div>
    </>
  );
};

export default Kitchen;
