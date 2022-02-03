import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from '../pages/Home'
import Plan from '../pages/Plan'
import Navbar from './Navbar';
import '../App.scss'

function App() {

  const LOCAL_STORAGE_KEY = "user";
  const navigate = useNavigate();

  const addNewUser = (user) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user))
    navigate("/plan");
  }

  return (
    <div className='Rimac'>
      <div>
        <Navbar/>
        <Routes>
          <Route 
            exact 
            path="/"
            element={<Home addNewUser={addNewUser} />}
          />
          <Route exact path="/plan" element={<Plan />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
