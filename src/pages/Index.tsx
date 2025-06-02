
import { useState } from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Index = () => {
  const [backgroundColor, setBackgroundColor] = useState('#f3f4f6');

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com', username: 'yourhandle' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com', username: 'yourhandle' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com', username: 'yourhandle' },
    { icon: Mail, label: 'Email', url: 'mailto:hello@example.com', username: 'hello@example.com' },
  ];

  const colors = [
    '#f3f4f6', // gray
    '#fef3c7', // yellow
    '#dbeafe', // blue
    '#dcfce7', // green
    '#fce7f3', // pink
    '#f3e8ff', // purple
    '#fed7d7', // red
    '#e0f2fe', // cyan
  ];

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 transition-colors duration-300"
      style={{ backgroundColor }}
    >
      <div className="text-center max-w-md">
        {/* Profile Picture */}
        <div className="mb-6">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face"
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-white shadow-lg"
          />
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Your Name
        </h1>

        {/* Bio */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Developer & Designer building cool stuff on the internet. 
          I love creating beautiful experiences and solving problems.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-600 hover:text-gray-900"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Color Picker */}
        <div>
          <p className="text-sm text-gray-500 mb-3">Change background color:</p>
          <div className="flex justify-center space-x-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setBackgroundColor(color)}
                className="w-6 h-6 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform duration-200"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
