import React from 'react';

//files for website

import About from "./components/About";
import Contact from "./components/Contact";
import Development from "./components/Development";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Scrollspy from "./components/Scrollspy";
import Skills from './components/Skills';
import Testimonials from "./components/Testimonials";



export default function App(){
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
  );
}
