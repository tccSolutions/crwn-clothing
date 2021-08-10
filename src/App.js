import React from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage } from "./pages/homepage/homepage.component";
import "./App.css";
import { Hats } from "./pages/hats/hats.component";
import { Shop } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>         
        <Route path="/shop" component={Shop}/>          
        <Route path="/shop/hats" component={Hats}/>         
      </Switch>
    </div>
  );
}

export default App;
