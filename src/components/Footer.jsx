// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Your Name. Built with React & ❤️.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;