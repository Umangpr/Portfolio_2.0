import { Globe, Code, Smartphone, Database, BookOpen, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using modern technologies like React, Node.js, and MongoDB.",
      features: ["MERN Stack", "RESTful APIs", "Database Design", "Responsive Design"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Creating beautiful, responsive user interfaces with React.js, Tailwind CSS, and modern JavaScript.",
      features: ["React.js", "Tailwind CSS", "JavaScript ES6+", "UI/UX Implementation"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Integration & APIs",
      description: "Building robust backend systems and APIs to power your web applications with secure data handling.",
      features: ["Express.js", "MongoDB", "Authentication", "Data Validation"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Custom Blogging Platforms",
      description: "Developing personalized blogging systems with content management, user authentication, and admin panels.",
      features: ["CMS Development", "User Authentication", "Content Editor", "Admin Dashboard"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Ed-Tech Platform Development",
      description: "Building educational platforms with course management, progress tracking, and interactive learning features.",
      features: ["Course Management", "Progress Tracking", "Interactive UI", "Student Dashboard"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Portfolio Site Development",
      description: "Creating professional portfolio websites that showcase your work and skills with modern design principles.",
      features: ["Modern Design", "Performance Optimization", "SEO Friendly", "Mobile Responsive"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive web development services to bring your digital ideas to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-gradient border-border hover:glow-effect transition-all duration-300 group h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Service Icon */}
                  <div className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center ${service.color} group-hover:scale-110 transition-transform duration-300 mb-6`}>
                    {service.icon}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-gradient transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${service.color === 'text-primary' ? 'bg-primary' : 'bg-accent'}`}></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="card-gradient border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Work Together?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let's discuss your project requirements and create something amazing together. 
                  I'm always excited to take on new challenges and help bring your ideas to life.
                </p>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
                >
                  Get In Touch
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;