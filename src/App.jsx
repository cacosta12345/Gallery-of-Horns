import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Footer from "./components/Footer/Footer.jsx";
import database from './assets/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'


function App(){
  const [beasties, setBeasties] = useState(database);
  
 

  function voteFor(hornedBeast){
    let newBeasts = beasties.map((obj, index)=>{
      if(obj.title === hornedBeast){
        obj.votes++;
        return obj;
      }
      return obj;
    });
    setBeasties(newBeasts);
  }
  return (
    <>
      <Header title = "Gallery of Horns"/>
      <Gallery list = {beasties} handleVote={voteFor} />
      <Footer/>
      
    </>
  )
}

export default App
