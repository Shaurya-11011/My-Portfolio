// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      <main>
        {/* Home Section - Matches #home */}
        <section id="home" name="home" className="pt-20">
          <Home />
        </section>
        
        {/* About Section - Matches #about */}
        <section id="about" name="about" className="py-20 md:py-32 bg-gray-900">
          <About />
        </section>
        
        {/* Projects Section - Matches #projects */}
        <section id="projects" name="projects" className="py-20 md:py-32 bg-gray-950">
          <Projects />
        </section>
        
        {/* Contact Section - Matches #contact */}
        <section id="contact" name="contact" className="py-20 md:py-32 bg-gray-900">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;