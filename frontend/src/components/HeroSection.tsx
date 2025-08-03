import { ArrowDown, Download, Github, Linkedin, Mail, Code2, Sparkles, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import profileImage from '@/assets/umang-profile.jpg';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Umangpr", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/umang-prakash", label: "LinkedIn" },
    { icon: Mail, href: "mailto:umangprakash21@gmail.com", label: "Email" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-xl floating-animation"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-lg floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-primary/25 to-accent/25 blur-md floating-animation" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full bg-gradient-to-r from-accent/30 to-primary/30 blur-lg floating-animation" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Main Content */}
            <div className="space-y-8 fade-in-up">
              {/* Status Badge */}
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20 px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Available for work
                </Badge>
                <Badge variant="outline" className="border-accent/30 text-accent px-4 py-2">
                  <MapPin className="w-3 h-3 mr-1" />
                  Bihar, India
                </Badge>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-muted-foreground text-lg md:text-xl font-normal mb-2">
                    👋 Hello, I'm
                  </span>
                  <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Umang Prakash
                  </span>
                </h1>
                
                <div className="space-y-2">
                  <p className="text-2xl md:text-3xl font-semibold text-foreground">
                    Software Engineer &
                  </p>
                  <p className="text-2xl md:text-3xl font-semibold">
                    <span className="text-accent">Web Developer</span>
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                I craft digital experiences that solve real-world problems with 
                <span className="text-accent font-semibold"> creativity</span> and 
                <span className="text-primary font-semibold"> consistency</span>. 
                Passionate about building impactful web solutions.
              </p>

              {/* Tech Stack */}
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                  Currently working with
                </p>
                <div className="flex flex-wrap gap-3">
                  {['React.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind'].map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-secondary/30 border-border text-sm py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToProjects}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold group"
                >
                  <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Explore My Work
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className=" border-2 border-accent/30 bg-background/50 backdrop-blur-sm hover:bg-accent/10 hover:border-accent/50 px-8 py-6 text-lg font-semibold group transition-all duration-300"
                >
                  <a href="/Resume.pdf" className='flex justify-center items-center' download>
    <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
    Download CV
  </a>
                  
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-sm text-muted-foreground">Connect with me:</span>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-secondary/30 backdrop-blur-sm border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 hover:scale-110"
                        title={social.label}
                      >
                        <IconComponent size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Profile & Stats */}
            <div className="space-y-8 fade-in-up stagger-2">
              {/* Profile Card */}
              <Card className="relative overflow-hidden bg-gradient-to-br from-card/50 to-secondary/30 backdrop-blur-sm border-border/50 hover:glow-effect transition-all duration-500 group">
                <CardContent className="p-8">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="relative w-48 h-48 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                        <img
                          src={profileImage}
                          alt="Umang Prakash"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg">
                        <Code2 className="text-white h-6 w-6" />
                      </div>
                      <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-green-400 border-2 border-background animate-pulse"></div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary">10+</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-accent">2+</div>
                      <div className="text-xs text-muted-foreground">Years</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-xs text-muted-foreground">Technologies</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Experience Card */}
              <Card className="bg-gradient-to-br from-secondary/30 to-card/50 backdrop-blur-sm border-border/50 hover:border-accent/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Code2 className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Currently Learning</h3>
                      <p className="text-sm text-muted-foreground">Advanced React Patterns & System Design</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <ArrowDown className="text-accent h-5 w-5" />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;