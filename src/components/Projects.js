import React from 'react';
import Card from './Card';
import Badge from './Badge';
import DateDisplay from './DateDisplay';
import ActionButton from './ActionButton';

const projects = [
  {
    title: 'Zero-shot Voice Conversion',
    year: '2021',
    category: 'Machine Learning',
    description: '<ul class="list-disc pl-5"><li>Implemented and trained an extended StarGAN-family deep learning model that modifies the speech of a source speaker and makes their speech sound like another target speaker without changing the linguistic information.</li></ul>',
    link: 'https://github.com/Top34051/stargan-zsvc',
  },
  {
    title: 'Parrot.Ai',
    year: '2022',
    category: 'Web Application',
    description: '<ul class="list-disc pl-5"><li>Developed a platform that allows users with low literacy to fill out forms without having to read or write to improve essential services accessibility using ReactJS and TailwindCSS</li><li>The platform scrapes Google Form and utilizes Google Speech-to-Text and Text-to-Speech API for input and output conversion</li></ul>',
    link: 'https://parrot-ai.vercel.app/',
  },
  {
    title: 'Wisc-course-alert',
    year: '2022',
    category: 'Web Application',
    description: '<ul class="list-disc pl-5"><li>Request course status from the UW-Madison enrollment website via Rest API.</li><li>Manage users watching list databases and notify them when the courses become available (using NodeJS and MongoDB).</li></ul>',
    link: 'https://wiscoursealert.com',
  },
  // Add more projects as needed
];

function Projects() {
  const reversedProjects = [...projects].reverse();

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Selected Personal Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {reversedProjects.map((project, index) => (
          <Card key={index}>
            <div className="flex-grow">
              <div className="flex items-start justify-between mb-1">
                <div className="flex-grow">
                  {project.category && (
                    <Badge>{project.category}</Badge>
                  )}
                  <h2 className="text-sm font-bold mb-1">{project.title}</h2>
                </div>
                <DateDisplay date={project.year} />
              </div>
              <p className="text-xs text-gray-600">
                {project.description && (
                  <div>
                    <span dangerouslySetInnerHTML={{ __html: project.description }} />
                  </div>
                )}
              </p>
            </div>
            <div className="mt-2">
              {project.link && (
                <ActionButton variant="website" href={project.link}>
                  Website
                </ActionButton>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
