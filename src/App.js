

import "slick-carousel/slick/slick.css";
import "./App.css";
import Home from "./component/Home";
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ComingSoonSolana from "./component/ComingSoonSolana";
import ComingSoonEthereum from "./component/ComingSoonEthereum"

function App() {
  return (
    // <div>
   
    <div className="App">
       <Routes>
        {/* <Home /> */}  
        <Route path="/" element={<Home />} exact />
        <Route path="/sol" element={< ComingSoonSolana/>} />
        <Route path="/eth" element={<ComingSoonEthereum/>} />
        {/* <ComingSoonSolana/> */}
        </Routes>
    </div>
   
    // </div>
    
  );
}

export default App;
