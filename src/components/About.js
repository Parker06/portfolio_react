import React from 'react';
import { motion } from "framer-motion";
import "../index.css";

export default function About() {

    return (
        <section id="about" className="bg-gray-800" style={{backgroundColor: '#3E63F5'}}>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:flex-grow md:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mt-16  md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Harry Parker
                    </h1>
                    <br className="hidden lg:inline-block"/>
                    <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Cyber Security Student
                        <br className="hidden lg:inline-block"/>
                        Front-End / UI Developer
                    </h3>
                    {/*paragraphs
                    <p className="mb-8 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                    laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                    Laborum, voluptas natus?
                    </p>*/}
                    <div className="flex justify-content">
                        <motion.a 
                            whileHover={{
                                textShadow: "0px 0px 8px rgb (255,255,255)",
                                boxShadow: "0px 0px 8px rgb (255,255,255)",
                                scale: 1.1,
                                transition: {duration: 1},
                            }}
                            href="#contact"
                            className="ml-0 inline-flex text-black bg-blue-400 border-0 py-2 px-6 pr-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Contact Me!
                        </motion.a>
                        <motion.a
                            whileHover={{
                                textShadow: "0px 0px 8px rgb (255,255,255)",
                                boxShadow: "0px 0px 8px rgb (255,255,255)",
                                scale: 1.1,
                                transition: {duration: 1},
                            }}
                            href="#projects"
                            className="ml-8 inline-flex text-black bg-blue-300 border-0 py-2 px-4 focus:outline-none hover:bg-gray-800 hover:text-white rounded text-lg">
                            See my Previous / Current Projects
                        </motion.a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="coding"
                        src={process.env.PUBLIC_URL + "/images/work.png"}                    
                    />
                </div>
            </div>
        </section>
    )
}