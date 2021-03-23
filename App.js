import React from 'react';
import './App.css';
import Footer from './components/footer';
import NavBar from './components/navBar';
import QuantityPicker from './components/quantityPicker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

function App() {
  return (
    
    <div className="App">
      <NavBar class="navBar"></NavBar>


        <h1>Hello World!</h1>
        <div style={{ backgroundImage: "url(/brain.jpg)" }}>
          
        </div>

        <Footer class="footer1"></Footer>

        <QuantityPicker></QuantityPicker>

    </div>
    
  );
}

export default App;
