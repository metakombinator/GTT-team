import React from 'react'

type Job = {
  title: string;
  company: string;
  description: string;
  skills: string[];
};

const jobs: Job[] = [
  {
    title: 'Blockchain Developer',
    company: 'Tech Corp',
    description: 'Develop and maintain blockchain applications',
    skills: ['Blockchain', 'Solidity', 'Ethereum'],
  },
  {
    title: 'AI Specialist',
    company: 'AI Innovations',
    description: 'Work on machine learning models and AI projects',
    skills: ['Python', 'TensorFlow', 'AI'],
  },
];

const Marketplace: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Talent Marketplace</h1>
      <div className="mt-4 grid grid-cols-1 gap-4">
        {jobs.map((job, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-2xl">{job.title}</h2>
            <p className="text-sm">{job.company}</p>
            <p className="mt-2">{job.description}</p>
            <ul className="mt-2">
              {job.skills.map((skill, idx) => (
                <li key={idx} className="inline-block bg-blue-100 text-blue-800 rounded px-2 py-1 mr-2">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
