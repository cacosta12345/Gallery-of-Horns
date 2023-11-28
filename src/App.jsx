import React from "react";
import Header from "./components/Header/Header.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App(){
  return (
    <>
      <Header title = "Gallery of Horns"/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
