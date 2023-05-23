import React from 'react';


const awards = [
  {
    title: 'ICPC 2020 World Finals, High Honor Award (17th place)',
    year: '2021',
    description: 'Ranked 17th in ICPC 2020 World Finals (4th place among all North American teams) and 1st in the North Central North American Regional Contest 2020',
  },
  {
    title: 'IOI 2018, Bronze Medal 🥉',
    year: '2018',
    description: 'Won a bronze medal in the International Olympiad in Informatics 2018, held in Tsukuba, Japan. Ranked 119th in the world.',
  },
  {
    title: 'APIO 2018, Silver Medal 🥈',
    year: '2018',
    description: 'Won a silver medal in the Asia-Pacific Informatics Olympiad 2018. Ranked 2nd in the Thai team and 24th in the Asia-Pacific region.',
  },
  {
    title: 'Royal Thai Government Scholarship',
    year: '2018 - Now',
    description: 'Received a full scholarship from the Royal Thai Government to study up to a PhD degree in Computer Science in the United States.',
  },
  // Add more awards as needed
];

function Awards() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">Honors and Awards</h2>
      {awards.map((project, index) => (
        <div key={index} className="mt-3 border bg-white rounded shadow p-4">
          <h2 className="text-l font-bold mb-2">{project.title}</h2>
          <p className="text-sm text-gray-600">
            {project.description && (
                <div>
                    <b>Description:</b> <span dangerouslySetInnerHTML={{ __html: project.description }} /><br />
                </div>
            )}
            {project.year && (
                <div>
                    <b>Year:</b> <span dangerouslySetInnerHTML={{ __html: project.year }} /><br />
                </div>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Awards;
