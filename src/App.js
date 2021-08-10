import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Homepage} from './pages/homepage/homepage.component'
import './App.css';
import { Hats } from './pages/hats/hats.component';
import { Shop } from './pages/shop/shop.component';

function App() {
  return (
   <Router>
       <Route exact path='/'><Homepage/></Route>
       <Route path='/shop'><Shop/></Route>
       <Route path='/shop/hats'><Hats/></Route>     
   </Router>
   
   
  );
}

export default App;
