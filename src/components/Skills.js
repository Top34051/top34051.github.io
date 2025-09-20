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
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Technical Skills</h2>
      {groups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <h3 className="text-lg font-bold mt-2">{group.name}</h3>
          <div className="mt-1 flex flex-wrap gap-2">
            {group.items.map((item, itemIndex) => (
              <span
                key={`${groupIndex}-${itemIndex}`}
                className="text-xs py-1.5 px-3 font-medium bg-gradient-to-r from-sky-100 to-sky-50 text-sky-800 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
