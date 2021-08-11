import React from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage } from "./pages/homepage/homepage.component";
import "./App.css";
import { Hats } from "./pages/hats/hats.component";
import { Shop } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInSignUp } from "./pages/sign-in-sign-up/sign-in-sign-up.component";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>         
        <Route exact path="/shop" component={Shop}/>          
        <Route exact path="/shop/hats" component={Hats}/>
        <Route exact path="/signin" component={SignInSignUp}/>          
      </Switch>
    </div>
  );
}

export default App;
