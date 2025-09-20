import React from 'react';
import Card from './Card';
import Badge from './Badge';
import DateDisplay from './DateDisplay';


const awards = [
  {
    title: 'ICPC 2020 World Finals, High Honor Award (17th place)',
    year: '2021',
    category: 'Competitive Programming',
    description: 'Ranked 17th in ICPC 2020 World Finals (4th place among all North American teams) and 1st in the North Central North American Regional Contest 2020',
  },
  {
    title: 'IOI 2018, Bronze Medal 🥉',
    year: '2018',
    category: 'Competitive Programming',
    description: 'Won a bronze medal in the International Olympiad in Informatics 2018, held in Tsukuba, Japan. Ranked 119th in the world.',
  },
  {
    title: 'APIO 2018, Silver Medal 🥈',
    year: '2018',
    category: 'Competitive Programming',
    description: 'Won a silver medal in the Asia-Pacific Informatics Olympiad 2018. Ranked 2nd in the Thai team and 24th in the Asia-Pacific region.',
  },
  {
    title: 'Royal Thai Government Scholarship',
    year: '2018 - Now',
    category: 'Scholarship',
    description: 'Received a full scholarship from the Royal Thai Government to study up to a PhD degree in Computer Science in the United States.',
  },
  // Add more awards as needed
];

function Awards() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Honors and Awards</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {awards.map((award, index) => (
          <Card key={index}>
            <div className="flex-grow">
              <div className="flex items-start justify-between mb-1">
                <div className="flex-grow">
                  {award.category && (
                    <Badge>{award.category}</Badge>
                  )}
                  <h2 className="text-sm font-bold mb-1">{award.title}</h2>
                </div>
                <DateDisplay date={award.year} />
              </div>
              <p className="text-xs text-gray-600">
                {award.description && (
                  <div>
                    <span dangerouslySetInnerHTML={{ __html: award.description }} />
                  </div>
                )}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Awards;
