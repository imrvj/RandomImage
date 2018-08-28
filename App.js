import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Middle from './Middle';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div >
      
    <Header/>
    <Middle/>  
    </div>
    
    );
  }
}

export default App;
