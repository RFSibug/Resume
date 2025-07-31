import React from 'react';
import { Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center relative">
      <div className="text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Reggie Sibug
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
            Software Developer
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Helping businesses through code.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors duration-300"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-600 hover:text-blue-700 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </header>
  );
};

export default Header;