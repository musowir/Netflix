import './App.css'
import React from 'react'
import {Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/Home/HomePage';
import Movies from './Components/Movies/Movies';
import Tv from './Components/tv/Tv'
import {useState} from 'react'


function App() {
  const [state, setState] = useState()
  return (
    <div>
     <NavBar/> 
     
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route element={<HomePage/>} path='/home' />
          <Route element={<Movies/>} path='/movies' />
          <Route element={<Tv/>} path='/tv'/>
        </Routes>
        
   </div>
  );
}

export default App;
