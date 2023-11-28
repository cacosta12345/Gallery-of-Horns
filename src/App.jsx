import React from "react";
import Header from "./components/Header/Header.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Footer from "./components/Footer/Footer.jsx";
import beast from './assets/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'


function App(){
  return (
    <>
      <Header title = "Gallery of Horns"/>
      <Gallery list = {beast}/>
      <Footer/>
    </>
  )
}

export default App
