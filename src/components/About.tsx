import React from 'react';
import { Code, Database, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Software Developer with expertise in enterprise systems and modern web technologies. 
              With a strong background in SAP ByDesign, Odoo customization, and full-stack development, I help 
              businesses streamline their operations through innovative software solutions.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My experience spans across database management with MySQL and MSSQL, desktop application development 
              using C# (.NET MAUI), and frontend development with React.js. I'm committed to writing clean, 
              efficient code that solves real-world business challenges.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Enterprise Systems
              </span>
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                Full-Stack Development
              </span>
              <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Business Automation
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Frontend Development</h3>
                  <p className="text-gray-600">2+ years with React.js</p>
                </div>
              </div>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-600 p-3 rounded-lg">
                  <Database className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Database Management</h3>
                  <p className="text-gray-600">MySQL, MSSQL expertise</p>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-600 p-3 rounded-lg">
                  <Cpu className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Enterprise Solutions</h3>
                  <p className="text-gray-600">SAP ByDesign, Odoo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;