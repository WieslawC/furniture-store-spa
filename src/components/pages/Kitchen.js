import { React, Component } from "react";
import "../../styles/Kitchen.scss";
import image1 from "../../img/kitchen/kitchenChoosePanel1.jpg";
import image2 from "../../img/kitchen/kitchenChoosePanel2.jpg";
import image3 from "../../img/kitchen/kitchenChoosePanel3.jpg";

class Kitchen extends Component {
  componentDidMount() {
    const slider = document.querySelector(".kitchenSlider .imageContainer");
    const images = document.querySelectorAll(".imageContainer img");
    let counter = 0;
    const size = images[0].clientWidth;

    setInterval(() => {
      if (counter >= images.length - 1) return;
      slider.style.transition = "transform 0.4s ease-in-out";
      counter++;
      slider.style.transform = "translateX(" + -size * counter + "px)";
    }, 5000);
  }
  render() {
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
              kuchennych schematów, będziesz miał możliwość uniknięcia
              bezkresnego koła dobierania mebli
            </p>
            <div className="image"></div>
          </section>
          <section className="kitchenSlider">
            <div className="imageContainer">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
            </div>
          </section>
          <section className="kitchenConclusion"></section>
        </div>
      </>
    );
  }
}

export default Kitchen;
