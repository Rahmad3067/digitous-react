import React from "react";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import Home from "./components/Home";
import Weekly from "./components/Weekly";
import WeeklyBattle from "./components/WeeklyBattle";
import Popular from "./components/Popular";
import PopularBattle from "./components/PopularBattle";
import Favorites from "./components/Favorites";




class App extends React.Component {
    render() {
        return (
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/weekly" component={Weekly} />
          <Route exact path="/WeeklyBattle" component={WeeklyBattle} />
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/PopularBattle" component={PopularBattle} />
          <Route exact path="/favorites" component={Favorites} />
          {/* <Route path="/:id" component={Movie} /> */}
          </Switch>
      </BrowserRouter>
     )}
}
export default App;
