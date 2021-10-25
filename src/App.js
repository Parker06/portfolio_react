import React from 'react';

//files for website

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from './components/Skills';


export default function App(){
  return (
      <main className="text-gray-400 bg-blue-900">
        <Navbar/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
  );
}
