
import { Github, Twitter, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com', username: 'yourhandle' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com', username: 'yourhandle' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com', username: 'yourhandle' },
    { icon: Mail, label: 'Email', url: 'mailto:hello@example.com', username: 'hello@example.com' },
  ];

  const projects = [
    {
      name: 'Project Alpha',
      description: 'A modern web application built with React and TypeScript',
      url: '#'
    },
    {
      name: 'Project Beta',
      description: 'Backend API service with Node.js and PostgreSQL',
      url: '#'
    },
    {
      name: 'Project Gamma',
      description: 'Mobile-first responsive design system',
      url: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Name</h1>
          <p className="text-lg text-gray-600 mb-4">
            Full Stack Developer & Designer
          </p>
          <div className="flex items-center text-gray-500 mb-8">
            <MapPin className="w-4 h-4 mr-2" />
            <span>San Francisco, CA</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Passionate developer who loves building beautiful, functional web applications. 
            I enjoy working with modern technologies and creating delightful user experiences.
          </p>
        </div>

        {/* Social Links */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Connect</h2>
          <div className="space-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <link.icon className="w-4 h-4 mr-3" />
                <span className="mr-2">{link.label}</span>
                <span className="text-sm text-gray-400">{link.username}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Projects</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.name} className="group">
                <a
                  href={project.url}
                  className="flex items-start justify-between hover:bg-gray-50 -mx-4 px-4 py-3 rounded-lg transition-colors"
                >
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {project.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 ml-4 mt-0.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-400">
          <p>© 2024 Your Name</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
