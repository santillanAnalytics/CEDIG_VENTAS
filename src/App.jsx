import React from "react";
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Doctors from './Components/Doctors'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <div id='home'><Home /></div>
        <div id='about'><About /></div>
        <div id='services'><Services /></div>
        <div id='doctors'><Doctors /></div>
        <div id='blogs'><Blogs /></div>
      </main>
      <Footer />
    </>
  );
}

export default App;
