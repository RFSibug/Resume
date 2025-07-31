import React from 'react';
import { ExternalLink, Code, Database, Cog } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "POS Integration System",
      description: "Developed a comprehensive Point of Sale integration system that seamlessly connects with multiple payment gateways and inventory management systems. The solution streamlines transaction processing and provides real-time sales analytics.",
      technologies: ["C#", ".NET MAUI", "MySQL", "REST APIs"],
      features: [
        "Real-time payment processing",
        "Inventory synchronization",
        "Sales analytics dashboard",
        "Multi-location support"
      ],
      icon: <Cog className="text-blue-600" size={24} />
    },
    {
      title: "Enterprise API Development",
      description: "Built robust RESTful APIs for enterprise-level applications, handling complex business logic and data transformations. Implemented secure authentication, rate limiting, and comprehensive error handling.",
      technologies: ["Node.js", "Express.js", "MySQL", "JWT"],
      features: [
        "RESTful API architecture",
        "JWT authentication",
        "Rate limiting & security",
        "Comprehensive documentation"
      ],
      icon: <Code className="text-teal-600" size={24} />
    },
    {
      title: "Business Process Automation",
      description: "Created automated workflows using SAP ByDesign and custom Odoo modules to eliminate manual processes. Reduced processing time by 70% and improved data accuracy across multiple business units.",
      technologies: ["SAP ByDesign", "Odoo", "Python", "SQL"],
      features: [
        "Workflow automation",
        "Data validation rules",
        "Custom reporting",
        "Integration with existing systems"
      ],
      icon: <Database className="text-indigo-600" size={24} />
    },
    {
      title: "Customer Management Portal",
      description: "Developed a modern, responsive web application for customer relationship management. Features include customer onboarding, support ticket management, and detailed analytics with interactive dashboards.",
      technologies: ["React.js", "TypeScript", "Node.js", "MySQL"],
      features: [
        "Responsive design",
        "Interactive dashboards",
        "Customer onboarding flow",
        "Support ticket system"
      ],
      icon: <ExternalLink className="text-green-600" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that drive business efficiency and digital transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;