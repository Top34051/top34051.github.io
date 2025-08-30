import React from 'react';

const groups = [
  {
    name: "Languages",
    items: ["C++", "Python", "Java", "JavaScript", "SQL", "R", "LaTeX"]
  },
  {
    name: "ML Frameworks",
    items: ["PyTorch", "Tensorflow", "NumPy", "Pandas", "Hugging Face"]
  },
  {
    name: "Web Frameworks",
    items: ["ReactJS", "NodeJS", "ExpressJS", "Redux", "TailwindCSS", "Flask", "Celery"]
  },
  {
    name: "Data and Cloud",
    items: ["Docker", "Hadoop", "Spark", "Cassandra", "Kafka", "Elasticsearch", "PostgreSQL", "MongoDB", "AWS", "Azure", "Google Cloud Platform", "BigQuery"]
  },
]

function Skills() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">Technical Skills</h2>
      {groups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <h3 className="text-lg font-bold mt-2">{group.name}</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            {group.items.map((item, itemIndex) => (
              <button
                key={`${groupIndex}-${itemIndex}`}
                className="text-sm py-1 px-3 font-semibold bg-sky-200 hover:bg-sky-300 rounded-full transition duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
