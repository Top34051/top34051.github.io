import React from 'react';
import './App.css';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaGraduationCap, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import profileImage from './profile-image.jpg';
import Publication from './Publications';
import Projects from './Projects';
import Awards from './Awards';
import Experiences from './Experiences';
import CV from './burapacheep_cv_2022.pdf';


function Home() {
  return (
    <div className="bg-sky-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow rounded">
        <div className="flex">
          <div className="w-3/4 mr-7">
            <h1 className="text-4xl font-bold mb-6">
              <TypeAnimation
                sequence={[
                  'Top Burapacheep', 3000,
                  'Jirayu Burapacheep', 3000,
                  'จิรายุ บูรพาชีพ', 3000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </h1>
            <p className="text-gray-600 mb-3">
              Welcome to my academic personal website! I have recently graduated from 
              the University of Wisconsin-Madison, where I completed my undergraduate degree in computer science 
              and data science. I will be joining Stanford University as a Masters student in computer science in Fall 2023.
            </p>
            <p className="text-gray-600 mb-3">
              During my time at UW-Madison, I was fortunate to be advised by <a href="https://pages.cs.wisc.edu/~sharonli/" rel="external" className="text-blue-500 hover:text-blue-700">Prof. Sharon Li</a>.
              My broad research interests are in the area of deep learning, with a focus on trustworthy machine learning and representation learning.
            </p>
            <p className="text-gray-600 mb-10">
              I also has deep passion in competitive programming and algorithmic problem solving. I represented UW-Madison at ICPC 2020 World Finals, advised 
              by <a href="https://pages.cs.wisc.edu/~dieter/" rel="external" className="text-blue-500 hover:text-blue-700">Prof. Dieter van Melkebeek</a>.
            </p>
            <div className="flex mb-2 space-x-3">
              <p className="text-gray-600 font-bold">Links:</p>
              <a
                href="https://scholar.google.com/citations?user=WRZ91QEAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <FaGraduationCap size={24} />
              </a>
              <a
                href="https://github.com/Top34051"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/jburapacheep/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="mailto:top34051@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <MdEmail size={24} />
              </a>
            </div>
            <ul className="flex space-x-4 items-center">
              <p className="text-gray-600 font-bold">Jump to:</p>
              <li>
                <a href="#publications" className="text-blue-500 hover:text-blue-700">
                  <b>Publications</b>
                </a>
              </li>
              <li>
                <a href="#awards" className="text-blue-500 hover:text-blue-700">
                  <b>Awards</b>
                </a>
              </li>
              <li>
                <a href="#experiences" className="text-blue-500 hover:text-blue-700">
                  <b>Experiences</b>
                </a>
              </li>
              <li>
                <a href="#projects" className="text-blue-500 hover:text-blue-700">
                  <b>Projects</b>
                </a>
              </li>
              <li>
                <a href={CV} className="text-blue-500 hover:text-blue-700">
                  <b>CV</b>
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <img src={profileImage} alt="Profile" className="rounded-md h-auto w-full" />
          </div>
        </div>
        <hr className="my-5" />
        <div id="publications">
          <Publication />
        </div>
        <hr className="my-5" />
        <div id="awards">
          <Awards />
        </div>
        <hr className="my-5" />
        <div id="experiences">
          <Experiences />
        </div>
        <hr className="my-5" />
        <div id="projects">
          <Projects />
        </div>
        <div className="mt-5 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Jirayu Burapacheep. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Home;
