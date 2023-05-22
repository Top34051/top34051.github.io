import React from 'react';

const projects = [
  {
    title: 'Zero-shot Voice Conversion',
    year: '2021',
    description: '<ul class="list-disc pl-5"><li>Implemented and trained an extended StarGAN-family deep learning model that modifies the speech of a source speaker and makes their speech sound like another target speaker without changing the linguistic information.</li></ul>',
    link: 'https://github.com/Top34051/stargan-zsvc',
  },
  {
    title: 'Parrot.Ai',
    year: '2022',
    description: '<ul class="list-disc pl-5"><li>Developed a platform that allows users with low literacy to fill out forms without having to read or write to improve essential services accessibility using ReactJS and TailwindCSS</li><li>The platform scrapes Google Form and utilizes Google Speech-to-Text and Text-to-Speech API for input and output conversion</li></ul>',
    link: 'https://parrot-ai.vercel.app/',
  },
  {
    title: 'Wisc-course-alert',
    year: '2022',
    description: '<ul class="list-disc pl-5"><li>Request course status from the UW-Madison enrollment website via Rest API.</li><li>Manage users watching list databases and notify them when the courses become available (using NodeJS and MongoDB).</li></ul>',
    link: 'https://wiscoursealert.com',
  },
  // Add more projects as needed
];

function Projects() {
  const reversedProjects = [...projects].reverse();

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">Selected Personal Projects</h2>
      {reversedProjects.map((project, index) => (
        <div key={index} className="mt-3 border bg-white rounded shadow p-4">
          <h2 className="text-l font-bold mb-2">{project.title}</h2>
          <p className="text-sm text-gray-600">
            {project.year && (
                <div>
                    <b>Year:</b> <span dangerouslySetInnerHTML={{ __html: project.year }} /><br />
                </div>
            )}
            {project.description && (
                <div>
                    <b>Description:</b> <span dangerouslySetInnerHTML={{ __html: project.description }} />
                </div>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mr-2">
                <button className="text-xs py-1 px-3 mt-3 border text-white font-semibold bg-green-600 border-green-700  hover:bg-green-700 rounded transition duration-200">
                  Website
                </button>
              </a>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
