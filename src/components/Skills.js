import { BadgeCheckIcon, ChipIcon, BookOpenIcon} from "@heroicons/react/solid";
import { PencilIcon } from "@heroicons/react/outline";
import React from "react";
import { skills, currentSkills } from "../data";


export default function Skills() {
    return (
        <section id="skills" className="bg-blue-900">
            <div className="container px-5 pt-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" style={{backgroundColor: '#1E3A8A', color:'#39ACFF'}}/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        My Skills &amp; Technologies I use
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        The Skills that I have acquainted over my programming career.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="w-6 h-6 flex-shrink-0 mr-4" style={{backgroundColor: '#1F2937', color:'#39ACFF'}}/>
                                <span className="title-font font-medium text-white">
                                    {skill.technology}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container px-5 mb-40 py-10 mx-auto">
                <div className="text-center mb-20">
                    <BookOpenIcon className="w-10 inline-block mb-4" style={{backgroundColor: '#1E3A8A', color:'#39ACFF'}}/>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        What am I currently working on / learning about? 
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        These are the technologies that I am practising on my unviersity course and in my free time.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {currentSkills.map((learn) => (
                        <div key={learn} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <PencilIcon className="w-6 h-6 flex-shrink-0 mr-4" style={{backgroundColor: '#1F2937', color:'#39ACFF'}}/>
                                <span className="title-font font-medium text-white">
                                    {learn.learning}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}