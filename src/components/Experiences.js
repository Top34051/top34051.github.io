import React from 'react';
import Card from './Card';
import DateDisplay from './DateDisplay';
import GoogleImage from '../assets/images/google.png';
import DataWowImage from '../assets/images/datawow.png';
import UWMadisonImage from '../assets/images/uw-madison.png';
import CitadelImage from '../assets/images/citadel.png';
import StanfordImage from '../assets/images/stanford_logo.png';

const experiences = [
  {
    title: 'Research Project Participant',
    subtitle: 'Information Skunkworks Group, Department of Material Science & Engineering, UW-Madison',
    date: 'Feb 2021 - Jun 2021',
    description: 'Explored statistical methods relevant to material properties prediction research and gathered performance comparison between different models on predicting molecule homo-lumo gap.',
    category: 'Academic',
    image: UWMadisonImage,
  },
  {
    title: 'Undergraduate Research Assistant',
    subtitle: 'Under a collaboration between the Department of Life Sciences Communication (Professor Kaiping Chen) and the Department of Computer Science (Professor Sharon Li), UW-Madison',
    date: 'Sep 2021 - Sep 2022',
    description: 'Contributed to the conversational data collection part of the research by building a web application that collects interaction between survey participants and OpenAI\'s GPT-3 chatbot model.',
    category: 'Academic',
    image: UWMadisonImage,
  },
  {
    title: 'Grader (Graduate-level Course)',
    subtitle: 'COMP SCI 880 Quantum Algorithms, UW-Madison',
    date: 'Jan 2023 - May 2023',
    description: 'Grade assignments for COMP SCI 880: Quantum Algorithms course at UW-Madison. Provide constructive feedback to students on technical work related to assignments.',
    category: 'Academic',
    image: UWMadisonImage,
  },
  {
    title: 'Undergraduate Research Assistant',
    subtitle: 'Research Group led by Professor Sharon Li, Department of Computer Science, UW-Madison',
    date: 'Sep 2021 - Oct 2023',
    description: 'Studied different approaches to out-of-distribution detection and representation learning.',
    category: 'Academic',
    image: UWMadisonImage,
  },
  {
    title: 'Graduate Research Assistant',
    subtitle: 'Stanford NLP',
    date: 'Nov 2023 - Mar 2025',
    description: 'Worked on (1) evaluation of vision-language model on word-order understanding task and (2) LLM-based inconsistency detection',
    category: 'Academic',
    image: StanfordImage,
  },
  {
    title: 'Course Assistant',
    subtitle: 'Stanford University',
    date: 'Sep 2024 - Dec 2024',
    description: 'Course assistant for CS161: Introduction to Algorithm at Stanford University',
    category: 'Academic',
    image: StanfordImage,
  },
  {
    title: 'Machine Learning Engineer Intern',
    subtitle: 'Data Wow Co., Ltd.',
    date: 'Jun 2021 - Aug 2021',
    description: '<ul class="list-disc pl-5"><li>Reduced 83% of a human workload in ID card spam checking by switching to an AI solution to recognize similar cards and designing a backend system to self-maintain a card database.</li><li>Utilized few-shot object detection algorithm for image self-labeling application.</li></ul>',
    category: 'Industry',
    image: DataWowImage,
  },
  {
    title: 'Software Engineer Intern',
    subtitle: 'Google',
    date: 'May 2022 - Aug 2022',
    description: '<ul class="list-disc pl-5"><li>Explored and implemented a method to improve Google Recipes Search results ranking by utilizing rating score, thumbnail image quality, and other signals.</li><li>Improved recipes grouping with majority users\' historical query refinements and achieve positive metrics feedback from human evaluation.</li></ul>',
    category: 'Industry',
    image: GoogleImage,
  },
  {
    title: 'Quantitative Research Engineer Intern',
    subtitle: "Citadel GQS",
    date: 'May 2024 - Aug 2024',
    description: 'Implemented and improved data pipeline and research framework for Citadel\'s GQS team (C++ and Python)',
    category: 'Industry',
    image: CitadelImage,
  },
  {
    title: 'Quantitative Research Engineer',
    subtitle: "Citadel GQS",
    date: 'Aug 2024 - Present',
    description: 'Streamlined data pipeline specialized in ensuring data quality and regression (C++ and Python)',
    category: 'Industry',
    image: CitadelImage,
  }
  // Add more experiences as needed
];

function Experiences() {
  const reversedExperiences = [...experiences].reverse();
  const academicExperiences = reversedExperiences.filter(
    (experience) => experience.category === 'Academic'
  );
  const industryExperiences = reversedExperiences.filter(
    (experience) => experience.category === 'Industry'
  );

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Experiences</h2>

      {industryExperiences.length > 0 && (
        <>
          <h3 className="text-lg font-bold mb-3">Industry Experiences</h3>
          <div className="space-y-2 mb-6">
            {industryExperiences.map((experience, index) => (
              <Card key={index}>
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center flex-grow">
                      <div className="flex-shrink-0 mr-2 h-10 w-10">
                        {experience.image && (
                          <img src={experience.image} alt="Experience Logo" className="object-cover w-full h-full" />
                        )}
                      </div>
                      <div className="flex-grow min-w-0">
                        <h2 className="text-sm font-bold">{experience.title}</h2>
                        <h2 className="text-xs font-bold mt-1"><span dangerouslySetInnerHTML={{ __html: experience.subtitle }} /></h2>
                      </div>
                    </div>
                    <DateDisplay date={experience.date} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">
                      {experience.description && (
                        <div>
                          <span dangerouslySetInnerHTML={{ __html: experience.description }} />
                        </div>
                      )}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}

      {academicExperiences.length > 0 && (
        <>
          <h3 className="text-lg font-bold mb-3">Academic Experiences</h3>
          <div className="space-y-2">
            {academicExperiences.map((experience, index) => (
              <Card key={index}>
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center flex-grow">
                      <div className="flex-shrink-0 mr-2 h-10 w-10">
                        {experience.image && (
                          <img src={experience.image} alt="Experience Logo" className="object-cover w-full h-full" />
                        )}
                      </div>
                      <div className="flex-grow min-w-0">
                        <h2 className="text-sm font-bold">{experience.title}</h2>
                        <h2 className="text-xs font-bold mt-1"><span dangerouslySetInnerHTML={{ __html: experience.subtitle }} /></h2>
                      </div>
                    </div>
                    <DateDisplay date={experience.date} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">
                      {experience.description && (
                        <div>
                          <span dangerouslySetInnerHTML={{ __html: experience.description }} />
                        </div>
                      )}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Experiences;
