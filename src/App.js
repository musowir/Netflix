import './App.css'
import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {trending, action, originals, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries} from './Constants/urls'

function App() {
  return (
    <div>
     <NavBar/>
     <Banner url={trending}/>
     <RowPost url={originals} title='Netflix Orginals' />
     <RowPost url={action} title='Actions' isSmall/>
     <RowPost url={ComedyMovies} title='Comedy Movies' isSmall/>
     <RowPost url={HorrorMovies} title='Horror Movies' isSmall/>
     <RowPost url={RomanceMovies} title='Romance Movies' isSmall/>
     <RowPost url={Documentaries} title='Documentaries' isSmall/>

   </div>
  );
}

export default App;
