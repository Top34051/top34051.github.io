import React, { useState } from 'react';

const publications = [
  {
    title: 'A critical appraisal of equity in conversational AI: Evidence from auditing GPT-3\'s dialogues with different publics on climate change and Black Lives Matter',
    authors: 'Kaiping Chen, Anqi Shao, <b>Jirayu Burapacheep</b>, Yixuan Li',
    year: '2022',
    abstract: 'Autoregressive language models, which use deep learning to produce human-like texts, have become increasingly widespread. Such models are powering popular virtual assistants in areas like smart health, finance, and autonomous driving. While the parameters of these large language models are improving, concerns persist that these models might not work equally for all subgroups in society. Despite growing discussions of AI fairness across disciplines, there lacks systemic metrics to assess what equity means in dialogue systems and how to engage different populations in the assessment loop. Grounded in theories of deliberative democracy and science and technology studies, this paper proposes an analytical framework for unpacking the meaning of equity in human-AI dialogues. Using this framework, we conducted an auditing study to examine how GPT-3 responded to different sub-populations on crucial science and social topics: climate change and the Black Lives Matter (BLM) movement. Our corpus consists of over 20,000 rounds of dialogues between GPT-3 and 3290 individuals who vary in gender, race and ethnicity, education level, English as a first language, and opinions toward the issues. We found a substantively worse user experience with GPT-3 among the opinion and the education minority subpopulations; however, these two groups achieved the largest knowledge gain, changing attitudes toward supporting BLM and climate change efforts after the chat. We traced these user experience divides to conversational differences and found that GPT-3 used more negative expressions when it responded to the education and opinion minority groups, compared to its responses to the majority groups. We discuss the implications of our findings for a deliberative conversational AI system that centralizes diversity, equity, and inclusion.',
    paperLink: 'https://arxiv.org/abs/2209.13627',
    githubLink: 'https://github.com/top34051/chat-with-gpt-3',
  },
  // Add more publications as needed
];

function Publications() {
  const reversedPublications = [...publications].reverse();

  const [showAbstract, setShowAbstract] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState(null);

  const handleAbstractToggle = (index) => {
    setSelectedPublication(index);
    setShowAbstract(!showAbstract);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">Publications</h2>
      {reversedPublications.map((publication, index) => (
        <div key={index} className="mt-3 border bg-white rounded shadow p-4">
          <h2 className="text-l font-bold mb-2">{publication.title}</h2>
          <p className="text-sm text-gray-600">
            <b>Authors:</b> <span dangerouslySetInnerHTML={{ __html: publication.authors }} /><br />
            {publication.year && (
                <div>
                    <b>Year:</b> <span dangerouslySetInnerHTML={{ __html: publication.year }} /><br />
                </div>
            )}
          </p>
          {publication.abstract && (
            <a className="mr-2">
              <button className="text-xs py-1 px-3 mt-2 border text-white font-semibold bg-gray-500 border-gray-700 hover:bg-gray-700 rounded transition duration-200" onClick={() => handleAbstractToggle(index)}>
                {showAbstract && selectedPublication === index ? 'Hide Abstract' : 'Show Abstract'}
              </button>
            </a>
          )}
          {publication.paperLink && (
            <a href={publication.paperLink} rel="noopener" className="mr-2">
              <button className="text-xs py-1 px-3 mt-2 border text-white font-semibold bg-blue-500 border-blue-700  hover:bg-blue-700 rounded transition duration-200">
                Paper
              </button>
            </a>
          )}
          {publication.githubLink && (
            <a href={publication.githubLink} rel="noopener" className="mr-2">
              <button className="text-xs py-1 px-3 mt-2 border text-white font-semibold bg-yellow-500 border-yellow-600  hover:bg-yellow-600 rounded transition duration-200">
                View on GitHub
              </button>
            </a>
          )}
          {showAbstract && selectedPublication === index && publication.abstract && (
            <div className="text-sm text-gray-600 mt-2">
              <b>Abstract:</b> <span dangerouslySetInnerHTML={{ __html: publication.abstract }} /><br />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Publications;
