// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Let’s <span className="text-cyan-400">Work Together</span>
      </h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xl text-gray-300 mb-12">
          I’m currently open to freelance opportunities and full-time roles. Let’s build something amazing.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="shauryajn101@gmail.com"
            className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-full hover:bg-cyan-600/20 hover:border-cyan-500 transition-all duration-300"
          >
            Email Me
          </a>
          <a
            href="https://github.com/Shaurya-11011"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-full hover:bg-cyan-600/20 hover:border-cyan-500 transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shaurya-jain-003a90253"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-full hover:bg-cyan-600/20 hover:border-cyan-500 transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          Or reach out via socials above — I respond within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default Contact;
