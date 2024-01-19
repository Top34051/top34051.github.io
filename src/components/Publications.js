import React, { useState } from 'react';

const publications = [
  {
    title: 'Conversational AI and equity through assessing GPT-3\'s communication with diverse social groups on contentious topics',
    authors: 'Kaiping Chen, Anqi Shao, <b>Jirayu Burapacheep</b>, Yixuan Li',
    year: '2023',
    abstract: 'Autoregressive language models, which use deep learning to produce human-like texts, have surged in prevalence. Despite advances in these models, concerns arise about their equity across diverse populations. While AI fairness is discussed widely, metrics to measure equity in dialogue systems are lacking. This paper presents a framework, rooted in deliberative democracy and science communication studies, to evaluate equity in human–AI communication. Using it, we conducted an algorithm auditing study to examine how GPT-3 responded to different populations who vary in sociodemographic backgrounds and viewpoints on crucial science and social issues: climate change and the Black Lives Matter (BLM) movement. We analyzed 20,000 dialogues with 3290 participants differing in gender, race, education, and opinions. We found a substantively worse user experience among the opinion minority groups (e.g., climate deniers, racists) and the education minority groups; however, these groups changed attitudes toward supporting BLM and climate change efforts much more compared to other social groups after the chat. GPT-3 used more negative expressions when responding to the education and opinion minority groups. We discuss the social-technological implications of our findings for a conversational AI system that centralizes diversity, equity, and inclusion.',
    paperLink: 'https://www.nature.com/articles/s41598-024-51969-w',
    githubLink: 'https://github.com/top34051/chat-with-gpt-3',
  },
  {
    title: 'Alignment as Reward-Guided Search',
    authors: 'Maxim Khanov, <b>Jirayu Burapacheep</b>, Yixuan Li',
    year: '2023',
    abstract: 'Aligning large language models with human objectives is paramount, yet common approaches including RLHF suffer from unstable and resource-intensive training. In response to this challenge, we introduce ARGS, Alignment as Reward-Guided Search, a novel framework that integrates alignment into the decoding process, eliminating the need for expensive RL training. By adjusting the model\'s probabilistic predictions using a reward signal, ARGS generates texts with semantic diversity while being aligned with human preferences, offering a promising and flexible solution for aligning language models. Notably, our method demonstrates consistent enhancements in average reward compared to baselines across diverse alignment tasks and various model dimensions. For example, under the same greedy-based decoding strategy, our method improves the average reward by 19.56% relative to the baseline and secures a preference or tie score of 64.33% in GPT-4 evaluation. We believe that our framework, emphasizing test-time alignment, paves the way for more responsive language models in the future.',
    paperLink: 'https://openreview.net/forum?id=shgx0eqdw6',
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
            <button className="text-xs py-1 px-3 mt-3 mr-2 border text-white font-semibold bg-gray-500 border-gray-700 hover:bg-gray-700 rounded transition duration-200" onClick={() => handleAbstractToggle(index)}>
              {showAbstract && selectedPublication === index ? 'Hide Abstract' : 'Show Abstract'}
            </button>
          )}
          {publication.paperLink && (
            <a href={publication.paperLink} target="_blank" rel="noopener noreferrer" className="mr-2">
              <button className="text-xs py-1 px-3 mt-2 border text-white font-semibold bg-blue-500 border-blue-700  hover:bg-blue-700 rounded transition duration-200">
                Paper
              </button>
            </a>
          )}
          {publication.githubLink && (
            <a href={publication.githubLink} target="_blank" rel="noopener noreferrer" className="mr-2">
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
