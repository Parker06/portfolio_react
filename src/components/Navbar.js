import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";

export default function Navbar() {
    const [hover, setHover] = React.useState(false);
    return (
        <header className="md:sticky top-0 z-10" style={{backgroundColor: '#0D0047'}}>
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
              href="#about"
              className="inline-flex items-center focus:outline-none hover:bg-blue-500 rounded text-white hover:text-black mt-1 md:mt-0 pr-4">
              <img className="h-16 w-16" src="./images/Logo_circle.png"/>
            </a>
            <a className="title-font font-medium text-white mb-4 md:mb-0">
                <Container>
                    <a href="#about" className="ml-3 text-xl">
                        Harry Parker
                    </a>
                </Container>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-blue-300 flex flex-wrap items-center text-base justify-center ">
            <a href="#skills" className="mr-5 hover:text-white">
                Skills
              </a>
              <a href="#projects" className="mr-5 hover:text-white">
                Past Work
              </a>
            </nav>
            <motion.a
              whileHover={{
                textShadow: "0px 0px 12px rgb(255,255,255)",
                boxShadow: "0px 0px 15px rgb(255,255,255)",
                scale: 1.1,
                transition: {duration: 0.5},
              }}
              target="_blank"
              href="https://github.com/Parker06"
              className="inline-flex items-center focus:outline-none rounded text-white mt-1 md:mt-0 pr-2 mr-3">
              <img className="h-16 w-16" src="./images/github_gradient.png"/>
              Github
            </motion.a>
            <motion.a
              whileHover={{
                textShadow: "0px 0px 12px rgb(255,255,255)",
                boxShadow: "0px 0px 15px rgb(255,255,255)",
                scale: 1.1,
                transition: {duration: 0.5},
              }}
              href="https://www.instagram.com/harry_parker_it/"
              target="_blank"
              className="inline-flex items-center focus:outline-none rounded text-white mt-1 md:mt-0 pr-2 mr-3">
              <img className="h-16 w-16" src="./images/instagram_gradient.png"/>
              Instagram
            </motion.a>
            <motion.a
              whileHover={{
                textShadow: "0px 0px 12px rgb(255,255,255)",
                boxShadow: "0px 0px 15px rgb(255,255,255)",
                scale: 1.1,
                transition: {duration: 0.5},
              }}
              href="https://www.linkedin.com/in/harry-parker-it976/"
              target="_blank"
              className="inline-flex items-center focus:outline-none rounded text-white mt-1 md:mt-0 mr-3 pr-2">
              <img className="h-16 w-16" src="./images/linkedin_gradient.png"/>
              Linkedin
            </motion.a>
            <motion.a
              whileHover={{
                textShadow: "0px 0px 8px rgb (255,255,255)",
                boxShadow: "0px 0px 8px rgb (255,255,255)",
                scale: 1.2,
                backgroundColor: "black",
                transition: {duration: 1},
              }}
              href="#contact"
              className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-white mt-4 md:mt-0">
              Hire Me
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </motion.a>
          </div>
        </header>
      );
}