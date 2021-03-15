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
        this.textContent === "START"
          ? window.scrollTo(0, 0)
          : window.scrollTo(0, $("header").height());
      });
    });
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Header />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
