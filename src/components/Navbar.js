import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Container from "react-bootstrap/Container";
import { buttonStyle } from "../variables"

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
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-blue-300 flex flex-wrap items-center text-base justify-center">
              <a href="#projects" className="mr-5 hover:text-white">
                Past Work
              </a>
              <a href="#skills" className="mr-5 hover:text-white">
                Skills
              </a>
            </nav>
            <a
              href="https://github.com/Parker06"
              className="inline-flex items-center focus:outline-none hover:bg-blue-500 rounded text-white hover:text-black mt-1 md:mt-0 pr-4">
              <img className="h-16 w-16" src="./images/github_gradient.png"/>
              Github
            </a>
            <a
              href="https://github.com/Parker06"
              className="inline-flex items-center focus:outline-none hover:bg-blue-500 rounded text-white hover:text-black mt-1 md:mt-0 pr-4">
              <img className="h-16 w-16" src="./images/instagram_gradient.png"/>
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/harry-parker-it976/"
              className="inline-flex items-center focus:outline-none hover:bg-blue-500 rounded text-white hover:text-black mt-1 md:mt-0 pr-4">
              <img className="h-16 w-16" src="./images/linkedin_gradient.png"/>
              Linkedin
            </a>
            <a
              href="#contact"
              className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-white hover:text-black mt-4 md:mt-0">
              Hire Me
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
        </header>
      );
}