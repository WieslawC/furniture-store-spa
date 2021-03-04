import { React, Component } from "react";
import "../../styles/Home.scss";
import $ from "jquery";

class Home extends Component {
  componentDidMount() {
    // //show page elements on scroll
    // $(window).on("scroll", function () {
    //   let scrollPosition = $(this).scrollTop();
    //   $("div.content").each(function () {
    //     let itemOffsetTop = $(this).offset().top;
    //     if (itemOffsetTop - 600 < scrollPosition) $(this).addClass("active");
    //   });
    // });

    //small /home interactive gallery
    $(".image").each(function () {
      $(this).on("click", function () {
        $(".image").each(function () {
          $(this).removeClass("active");
        });
        $(this).addClass("active");
      });
    });
  }
  render() {
    return (
      <>
        <section className="introduction">
          <div className="backgroundImage"></div>
          <div className="content">
            <h4>Kim jesteśmy?</h4>
            <p>
              Meblex jest firmą, która od 20 lat zaopatruje naszych klijentów we
              wszelkiego rodzaju meble kuchenne, łazienkowe oraz wszystko to, co
              umieścić można w salonie. Jesteśmy również doradcami, dbającymi o
              to, by każdy zakątek domu jak najlepiej odzwierciedlał Twoje
              oczekiwania.
            </p>
          </div>
        </section>
        <section className="offerts">
          <div className="backgroundImage"></div>
          <div className="content">
            <h4>Nasza oferta</h4>
            <p>
              Oferujemy produkty wykonane z dbałością oraz z materiałów
              najlepszej jakości. Nasi pracownicy pomogą Ci w odpowiednim
              zorganizowaniu zakupów, dostarczą produkt do domu oraz pomogą w
              jego montarzu.
            </p>
          </div>
        </section>
        <section className="showcase">
          <h4>Odkryj swoje nowe wnętrze</h4>
          <div className="images">
            <div className="image active"></div>
            <div className="image"></div>
            <div className="image"></div>
            <div className="image"></div>
            <div className="image"></div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
