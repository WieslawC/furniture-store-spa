import React from "react";
import "../../styles/Home.scss";

const Home = () => {
  return (
    <>
      <section className="introduction">
        <div className="backgroundImage"></div>
        <div className="fadeAway"></div>
        <div className="content">
          <h4>Kim jesteśmy?</h4>
          <p>
            Meblex jest firmą, która od 20 lat zaopatruje naszych klijentów we
            wszelkiego rodzaju meble kuchenne, łazienkowe oraz wszystko to co
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
            Oferujemy produkty wykonane z dbałością oraz z materiałów najlepszej
            jakości. Nasi pracownicy pomogą Ci w odpowiednim zorganizowaniu
            zakupów, dostarczą produkt do domu oraz pomogą w jego montarzu.
          </p>
        </div>
      </section>
      <section className="showcase">
        <div className="backgroundImage"></div>
        <div className="content">
          <h4>Lorem </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            est enim, ipsa laudantium atque debitis fuga iusto quod laborum
            ullam aperiam repellendus aliquam laboriosam repudiandae,
            asperiores, nihil totam dig
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
