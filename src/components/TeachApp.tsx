import React from 'react';
import { useRouter } from 'next/router';
import  Navigation  from './Navigation'


type Candidate = {
  name: string;
  skills: string[];
  experience: string;
};

const candidates: Candidate[] = [
  {
    name: 'Alice Johnson',
    skills: ['Cybersecurity', 'Blockchain'],
    experience: '5 years',
  },
  {
    name: 'Bob Smith',
    skills: ['AI', 'Data Science'],
    experience: '3 years',
  },
{
    name: 'Altynay Suleymenova',
    skills: ['AI', 'Data Science'],
    experience: '3 years',
  },
];

const TalentPool: React.FC = () => {
  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">Talent Pool & Community</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {candidates.map((candidate, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl sm:text-2xl text-sky-500">{candidate.name}</h2>
            <p className="text-sm sm:text-base">Опыт: {candidate.experience}</p>
            <ul className="mt-2">
              {candidate.skills.map((skill, idx) => (
                <li key={idx} className="inline-block bg-green-100 text-green-800 rounded px-2 py-1 mr-2 mt-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Navigation />
    </div>
  );
};


export default TalentPool;
