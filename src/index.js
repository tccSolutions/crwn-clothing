import React from 'react';
import ReactDOM from 'react-dom';
import Store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';

ReactDOM.render(  
  <React.StrictMode> 
    <Provider store={Store}>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>    
    </Provider>          
  </React.StrictMode>,
  document.getElementById('root')
);

