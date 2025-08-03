import { ExternalLink, Github, Code, BookOpen, User, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "SkillBoost - MERN Ed-Tech Platform",
      description: "A comprehensive educational technology platform built with MERN stack featuring course management, progress tracking, and interactive learning modules.",
      icon: <Monitor className="h-8 w-8" />,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      features: ["User Authentication", "Course Management", "Progress Tracking", "Payment Integration"],
      liveUrl: "https://skill-boost-umber.vercel.app/",
      githubUrl: "https://github.com/Umangpr/Skill-Boost",
      status: "Live",
      color: "text-primary"
    },
    {
      title: "React Blogging App",
      description: "A feature-rich blogging platform with user authentication, content management, and responsive design using React and Appwrite backend services.",
      icon: <BookOpen className="h-8 w-8" />,
      technologies: ["React.js", "Appwrite", "Tailwind CSS", "JavaScript"],
      features: ["User Authentication", "CRUD Operations", "Rich Text Editor", "Image Upload"],
      liveUrl: "https://mega-blog-pearl.vercel.app/",
      githubUrl: "https://github.com/Umangpr/MegaBlog",
      status: "Live",
      color: "text-accent"
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and experience with smooth animations and dark theme design.",
      icon: <User className="h-8 w-8" />,
      technologies: ["React.js", "Tailwind CSS", "TypeScript", "Vite"],
      features: ["Responsive Design", "Smooth Animations", "Dark Theme", "SEO Optimized"],
      liveUrl: "https://umangprakash.dev",
      githubUrl: "https://github.com/umangprakash/portfolio",
      status: "Live",
      color: "text-primary"
    }
  ];

  const certifications = [
    "Web Development Masterclass - Udemy",
    "Cybersecurity Essentials - Cisco",
    "Cloud Computing - NPTEL",
    "CCNA - Cisco Networking"
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I've been exploring
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card key={index} className="card-gradient border-border hover:glow-effect transition-all duration-300 group h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`${project.status === 'Live' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}
                    >
                      {project.status}
                    </Badge>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${project.color === 'text-primary' ? 'bg-primary' : 'bg-accent'}`}></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 mt-auto">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <Card className="card-gradient border-border">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  <Code className="inline-block h-6 w-6 mr-2 text-accent" />
                  Certifications & Learning
                </h3>
                <p className="text-muted-foreground">
                  Continuous learning and professional development in various technologies
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-secondary/30">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;