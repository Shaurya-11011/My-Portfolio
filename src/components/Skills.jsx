// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = [
    'React.js',
    'Flask',
    'Python',
    'Java',
    'C Programming',
    'AWS Cloud Practitioner (in progress)',
    'MAVSDK & PX4',
    'Docker',
    'Digital Marketing',
    'SEO & AdWords',
    'People Management',
  ];

  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Technical <span className="text-cyan-400">Skills</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-purple-600/20 hover:text-cyan-300 transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;