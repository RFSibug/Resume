import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="text-blue-400" size={24} />
            <span className="text-xl font-bold">Reggie Sibug</span>
          </div>
          
          <p className="text-gray-400 mb-6">
            Software Developer passionate about creating innovative solutions
          </p>
          
          <div className="flex items-center justify-center space-x-1 text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>and lots of ☕ in the Philippines</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2024 Reggie Sibug. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;