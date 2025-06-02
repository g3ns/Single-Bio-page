
import { Github, Twitter, Linkedin, Mail, MapPin, Code, Coffee, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com', username: '@yourhandle' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com', username: '@yourhandle' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com', username: '@yourhandle' },
    { icon: Mail, label: 'Email', url: 'mailto:hello@example.com', username: 'hello@example.com' },
  ];

  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS',
    'Next.js', 'Tailwind CSS', 'PostgreSQL', 'GraphQL'
  ];

  const projects = [
    {
      name: 'Project Alpha',
      description: 'A modern web application built with React and TypeScript',
      tech: ['React', 'TypeScript', 'Tailwind'],
      url: '#'
    },
    {
      name: 'Project Beta',
      description: 'Backend API service with Node.js and PostgreSQL',
      tech: ['Node.js', 'PostgreSQL', 'Docker'],
      url: '#'
    },
    {
      name: 'Project Gamma',
      description: 'Mobile-first responsive design system',
      tech: ['CSS', 'Figma', 'Storybook'],
      url: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            YN
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Name</h1>
          <p className="text-xl text-gray-600 mb-4">Full Stack Developer & Designer</p>
          <div className="flex items-center justify-center text-gray-500 mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            <span>San Francisco, CA</span>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Passionate developer who loves building beautiful, functional web applications. 
            I enjoy working with modern technologies and creating delightful user experiences.
          </p>
        </div>

        {/* Social Links */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Connect With Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="outline"
                  className="justify-start h-12 p-4"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <link.icon className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">{link.label}</div>
                      <div className="text-sm text-gray-500">{link.username}</div>
                    </div>
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.name} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.url}>View Project</a>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-500">
          <div className="flex items-center justify-center mb-4">
            <span>Built with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500" />
            <span>using</span>
            <Code className="w-4 h-4 mx-2" />
            <span>and</span>
            <Coffee className="w-4 h-4 mx-2" />
          </div>
          <p className="text-sm">© 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
