// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-cyan-400">Shaurya</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Full-stack developer passionate about building elegant, user-centric web experiences that blend creativity with clean code.
      </p>

      {/* Existing buttons */}
      <div className="flex flex-col sm:flex-row gap-6 mt-10 mb-8">
        <a
          href="#projects"
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300"
        >
          View My Work
        </a>
      </div>

      {/* Resume buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <a
          href="/assets/resume-technical.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-green-500/25 transform hover:-translate-y-1 transition-all duration-300 text-center"
        >
          View Technical Resume
        </a>
        <a
          href="/assets/resume-business.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg shadow-md hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300 text-center"
        >
          View Business Resume
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Home;
