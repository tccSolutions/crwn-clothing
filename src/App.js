import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage } from "./pages/homepage/homepage.component";
import "./App.css";
import { Hats } from "./pages/hats/hats.component";
import { Shop } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInSignUp } from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {auth, createProfileDocument} from './firebase/firebase.util'

function App() {
  //state with hook
  const [currentUser=null, setCurrentUser] = useState({});
  
   //get google data and set current user 
  const  onAuthStateChange =()=> {
    return auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createProfileDocument(userAuth);       
          userRef.onSnapshot(snapShot=>(setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          )));                 
         
      } else {       
        setCurrentUser(null)
      }
    });
  }

  
  

  //updates on state change
  useEffect(() => {    
   //unsubscribe from google service
  const unsubscribe = onAuthStateChange();
  return () => {
    unsubscribe();        
  };     
  }, []);  

    
  return (
    <div>
      <Header signOut={auth.signOut} user = {currentUser}/>
      <Switch>
        <Route exact path="/" component={Homepage}/>         
        <Route exact path="/shop" component={Shop} />          
        <Route exact path="/shop/hats" component={Hats}/>
        <Route exact path="/signin" component={SignInSignUp}/>          
      </Switch>
    </div>
  );
}

export default App;
