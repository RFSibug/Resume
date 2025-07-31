import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Fasttrack Solutions Inc.",
      position: "Software Developer",
      duration: "May 2021 - Present",
      location: "Philippines",
      description: "Leading development of enterprise solutions and business automation systems. Specializing in SAP ByDesign implementations, custom Odoo modules, and full-stack web applications.",
      achievements: [
        "Developed and maintained enterprise-level applications using C# and .NET MAUI",
        "Implemented complex business logic in SAP ByDesign for multiple clients",
        "Built responsive web applications using React.js and modern frontend technologies",
        "Optimized database performance and designed efficient data models in MySQL",
        "Collaborated with cross-functional teams to deliver high-quality software solutions"
      ],
      technologies: ["C#", ".NET MAUI", "SAP ByDesign", "React.js", "MySQL", "Odoo"]
    },
    {
      company: "Competitive I.T. Solutions",
      position: "Software Developer",
      duration: "Previous Experience",
      location: "Philippines",
      description: "Focused on database management and enterprise system integration. Gained extensive experience in SQL Server administration and business process automation.",
      achievements: [
        "Managed and optimized MSSQL databases for improved performance",
        "Developed custom reports and analytics solutions using SAP ByDesign",
        "Built dynamic web interfaces with React.js for better user experience",
        "Implemented data migration strategies and database optimization techniques",
        "Provided technical support and system maintenance for enterprise clients"
      ],
      technologies: ["MSSQL", "SAP ByDesign", "React.js", "Database Administration", "Business Intelligence"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional journey building enterprise solutions and driving business innovation
          </p>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-blue-200"></div>
              )}
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Building className="text-white" size={20} />
                </div>
                
                <div className="flex-1 bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                      <h4 className="text-xl text-blue-600 font-semibold">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1 mt-2 md:mt-0">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;