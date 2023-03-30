import './App.css';
import show from './show.js';
import {useEffect} from "react";
import {
  BrowserRouter as R, Routes, Route, Link } from "react-router-dom";
import {useState} from 'react';

const Welcome = () =>{
  return(
    <h1 className="titleText">Rick and Morty Characters</h1>
  )
  }


function App() {

  
    const [r, getR] = useState(Math.floor(Math.random() * 825)+1);
  
    const handleClick = () => {
      getR(Math.floor(Math.random() * 825)+1)
    }

  return (
    <R>
    <div className="App">
      <Welcome />
    <Link to = {`/${r}`} onClick={handleClick} className="randomButton">Random</Link>
    </div>
    <Routes>
     
      <Route path="/:c_id" element={<show />} />
    </Routes>
    </R>
  );
}

export default App;
