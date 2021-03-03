import { React, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import $ from "jquery";

class App extends Component {
  componentDidMount() {
    //handle menu icon and option click
    $(".menuIcon").on("click", () => {
      $(".headerNavigation").toggleClass("active");
    });

    $("a").each(function (item) {
      $(this).on("click", () => {
        $(".headerNavigation").toggleClass("active");
      });
    });

    //show elements on scroll
    $(window).on("scroll", function () {
      let scrollPosition = $(this).scrollTop();
      $("div.content").each(function (item) {
        let itemOffsetTop = $(this).offset().top;
        if (itemOffsetTop - 600 < scrollPosition) $(this).addClass("active");
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
