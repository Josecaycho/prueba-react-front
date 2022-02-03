import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Plan from '../pages/Plan'
import Navbar from './Navbar';
import '../App.scss'

function App() {
  return (
    <div className='Rimac'>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/"  element={<Home />}></Route>
          <Route exact path="/plan" element={<Plan />}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
