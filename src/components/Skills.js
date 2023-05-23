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
    items: ["Docker", "Hadoop", "Spark", "Cassandra", "Kafka", "BigQuery", "PostgreSQL", "MongoDB", "Elasticsearch", "AWS", "Azure", "Google Cloud Platform"]
  },
]

function Skills() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">Technical Skills</h2>
      {groups.map((group, index) => (
        <div key={index}>
          <h3 className="text-lg font-bold mt-2">{group.name}</h3>
          <div className="mt-1">
            {group.items.map((item, index) => (
              <button className="text-sm py-1 px-3 mt-1 font-semibold bg-sky-200 hover:bg-sky-300 rounded-full transition duration-200 mr-1">
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
