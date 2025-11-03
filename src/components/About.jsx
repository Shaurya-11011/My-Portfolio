// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            I’m a passionate full-stack developer with 3+ years of experience crafting digital experiences that users love. I specialize in React, Node.js, and modern UI/UX design.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            When I’m not coding, you’ll find me hiking, reading sci-fi novels, or experimenting with AI tools to automate boring tasks.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300">React</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300">Node.js</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300">TypeScript</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300">Tailwind CSS</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300">AWS</span>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="/assets/about-bg.jpg" // Optional background image
            alt="About Me"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;