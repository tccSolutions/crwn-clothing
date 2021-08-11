import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage } from "./pages/homepage/homepage.component";
import "./App.css";
import { Hats } from "./pages/hats/hats.component";
import { Shop } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInSignUp } from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {auth} from './firebase/firebase.util'

function App() {
  const [currentUser=null, setCurrentUser] = useState({});
  
  let unSubscribeFromAuth= null;

  const signOut=()=>{
   auth.signOut()   
  }

  const  onAuthStateChange =()=> {
    return auth.onAuthStateChanged(user => {
      if (user) {
        
        setCurrentUser(user)
        console.log(`${currentUser.displayName} is logged in`);
      } else {
        console.log(`${currentUser.displayName} has logged out`);
        setCurrentUser(null)
      }
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);  

    
  return (
    <div>
      <Header signOut={signOut} user = {currentUser}/>
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
