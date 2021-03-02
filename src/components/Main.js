import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Kitchen from "./pages/Kitchen";
import Bathroom from "./pages/Bathroom";
import Livingroom from "./pages/Livingroom";
import Contact from "./pages/Contact";

const Main = () => {
  return (
    <Switch>
      <Route path="/kitchen" component={Kitchen} />
      <Route path="/bathroom" component={Bathroom} />
      <Route path="/livingroom" component={Livingroom} />
      <Route path="/contact" component={Contact} />
      <Route component={Home} />
    </Switch>
  );
};

export default Main;
