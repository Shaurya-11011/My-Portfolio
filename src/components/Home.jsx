// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="mb-8">
        <img
          src="/assets/profile-pic.jpg" // Put your photo in /public/assets/
          alt="Your Name"
          className="w-32 h-32 rounded-full border-4 border-cyan-500 shadow-lg mx-auto mb-6 object-cover"
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-cyan-400">Your Name</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Full-stack developer passionate about building elegant, user-centric web experiences that blend creativity with clean code.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 mt-10">
        <a
          href="#projects"
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300"
        >
          View My Work
        </a>
        <a
          href="/assets/resume.pdf" // Add your resume in /public/assets/
          download
          className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-500"
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
    </div>
  );
};

export default Home;