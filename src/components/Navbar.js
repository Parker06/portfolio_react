import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";

class Navbar extends Component {

  state = {showing: true};

  render(){
    const { showing } = this.state;
        return (
            <header className="md:sticky sm:sticky top-0 z-10" style={{backgroundColor: '#0D0047'}}>
            <div id="Navbar" className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
             <button onClick={() => this.setState({ showing: !showing })}>Open</button>
             { showing 
                ? 
                <div className="leftSide mr-80">
                    <motion.a
                      whileHover={{
                        backgroundColor: "rgb(82, 194, 255)",
                        scale: 1.2,
                        transition: {duration: 1.0, delay: 0.5},
                      }}
                      href="#about"
                      className="items-center focus:outline-none rounded text-white mt-1 md:mt-0 ">
                      <img className="h-16 w-16" src="./images/Logo_circle.png"/>
                    </motion.a>
                    <a className="title-font font-medium text-white mb-4 md:mb-0">
                        <Container className="ml-20">
                            <a href="#about" className="ml-3 text-xl">
                                Harry Parker
                            </a>
                        </Container>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-blue-300 flex flex-wrap items-center text-base justify-center ">
                      <a href="#skills" className="active mr-5 hover:text-white transition-color duration-300">
                        Skills
                      </a>
                      <a href="#projects" className="mr-5 hover:text-white transition-color duration-300">
                        Past Work
                      </a>
                      <a
                      href="#contact"
                      className="inline-flex items-center mr-5 hover:text-white transition-color duration-300">
                      Contact Me
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                      </a>
                    </nav>
                </div>
              : null
             }
             <div className="rightSide">
                <motion.a
                  whileHover={{
                    backgroundColor: "rgb(82, 194, 255)",
                    scale: 1.2,
                    transition: {duration: 1.0, delay: 0.5},
                  }}
                  target="_blank"
                  href="https://github.com/Parker06"
                  className="inline-flex items-center focus:outline-none rounded text-white mt-1 md:mt-0 pr-2 mr-5 ">
                  <img className="h-16 w-16" src="./images/github_gradient.png"/>
                  Github
                </motion.a>
                <motion.a
                  whileHover={{
                    backgroundColor: "rgb(82, 194, 255)",
                    scale: 1.2,
                    transition: {duration: 1.0, delay: 0.5},
                  }}
                  href="https://www.instagram.com/harry_parker_it/"
                  target="_blank"
                  className="inline-flex items-center focus:outline-none rounded text-white mt-1 md:mt-0 pr-2 mr-5">
                  <img className="h-16 w-16" src="./images/instagram_gradient.png"/>
                  Instagram
                </motion.a>
                <motion.a
                  whileHover={{
                    boxShadow: "0px 0px 15px rgb(255,255,255)",
                    backgroundColor: "rgb(82, 194, 255)",
                    scale: 1.2,
                    transition: {duration: 1.5, delay: 0.5},
                  }}
                  href="https://www.linkedin.com/in/harry-parker-it976/"
                  target="_blank"
                  className="inline-flex items-center focus:outline-none rounded text-white mt-1 md:mt-0 mr-5 pr-2">
                  <img className="h-16 w-16" src="./images/linkedin_gradient.png"/>
                  Linkedin
                </motion.a>
                </div>
                </div>
            </header>
        );
  }
}

export default Navbar;