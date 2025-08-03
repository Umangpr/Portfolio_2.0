import { User, MapPin, Code, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get to know more about me, my background, and what drives my passion for technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info Cards */}
            <div className="space-y-6">
              <Card className="card-gradient border-border hover:glow-effect transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Personal Info</h3>
                      <p className="text-muted-foreground">Umang Prakash</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border hover:glow-effect transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-muted-foreground">Bihar, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border hover:glow-effect transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Experience</h3>
                      <p className="text-muted-foreground">Junior Web Developer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border hover:glow-effect transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Passion</h3>
                      <p className="text-muted-foreground">Problem Solving</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Bio */}
            <div className="space-y-6">
              <Card className="card-gradient border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gradient">
                    Designing Solutions, Not Just Visuals
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Umang Prakash is a passionate <strong className="text-foreground">Software Engineer</strong> and 
                      <strong className="text-foreground"> Junior Web Developer</strong> who enjoys solving real-world 
                      problems through innovative web solutions.
                    </p>
                    <p>
                      With a strong foundation in programming and a collaborative spirit, he is eager to 
                      contribute to the tech world with <strong className="text-accent">creativity</strong> and 
                      <strong className="text-primary"> consistency</strong>.
                    </p>
                    <p>
                      Currently pursuing his passion for creating impactful digital experiences, Umang 
                      combines technical expertise with creative problem-solving to build solutions that 
                      make a difference.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">10+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">5+</div>
                      <div className="text-sm text-muted-foreground">Technologies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">2+</div>
                      <div className="text-sm text-muted-foreground">Years Learning</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;