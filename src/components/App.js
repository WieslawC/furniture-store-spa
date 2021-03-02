import { React, Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";

class App extends Component {
  componentDidMount() {
    document.querySelector(".menuIcon").addEventListener("click", () => {
      document.querySelector(".headerNavigation").classList.toggle("active");
    });

    document.querySelectorAll("a").forEach((item) => {
      item.addEventListener("click", () => {
        document.querySelector(".headerNavigation").classList.toggle("active");
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
