// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    title: 'Market Entry Strategy with AI-Driven Consumer Insights',
    description:
      'A business project that leverages AI analytics and market segmentation to create data-backed entry strategies for brands. It involves consumer clustering, predictive analytics, and actionable go-to-market plans.',
    tech: ['AI/ML', 'Python', 'Data Analytics', 'Market Segmentation'],
    link: 'https://github.com/Shaurya-11011',
  },
  {
    title: 'Sustainability-Oriented Collaborative Business Ecosystem',
    description:
      'An ecosystem model built to connect businesses, consumers, and suppliers in sustainability-driven collaborations — encouraging shared value and eco-conscious growth.',
    tech: ['Business Modeling', 'Collaboration Platforms', 'Sustainability Analytics'],
    link: 'https://github.com/Shaurya-11011',
  },
  {
    title: 'Hyper-Personalized Subscription Box Service',
    description:
      'An AI-based recommendation model that delivers tailored product boxes to users based on their behavioral and psychographic insights, improving satisfaction and retention.',
    tech: ['AI Recommendation', 'Python', 'Behavioral Analytics', 'User Profiling'],
    link: 'https://github.com/Shaurya-11011',
  },
  {
    title: 'Anuvad (NLP Translation Tool)',
    description:
      'A real-time regional language translation tool using Natural Language Processing (NLP) and Python.',
    tech: ['NLP', 'Python', 'Real-time Translation'],
  },
  {
    title: 'Predictive Analytics for Natural Hazards (Edge Computing)',
    description:
      'A smart edge-based system for predicting natural hazards in metropolitan cities using IoT and data analytics.',
    tech: ['IoT', 'Edge Computing', 'Predictive Analytics', 'Data Science'],
  },
  {
    title: 'MAVSDK Drone Show Platform',
    description:
      'A PX4-based drone swarm management system built with MAVSDK, Flask, and React for real-time control and visualization.',
    tech: ['MAVSDK', 'PX4', 'Flask', 'React', 'Drone Control'],
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Featured <span className="text-cyan-400">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/20 transform hover:-translate-y-2 transition-all duration-500 border border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 text-cyan-300 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors flex items-center gap-1"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="#contact"
          className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
        >
          Want to see more? Let’s talk →
        </a>
      </div>
    </div>
  );
};

export default Projects;