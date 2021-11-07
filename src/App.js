
//files for website

import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Development from "./components/Development";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from './components/Skills';
import "./index.css"



export default function App(){

  return (
      <main className="text-gray-400" style={{backgroundColor: '#3E63F5'}}>
        <Navbar/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
  );
}
