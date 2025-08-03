import { Code, Layers, Database, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["C", "C++", "Python", "Java", "SQL"]
    },
    {
      title: "Frontend Development",
      icon: <Layers className="h-6 w-6" />,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend Development",
      icon: <Database className="h-6 w-6" />,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "Core CS Subjects",
      icon: <Settings className="h-6 w-6" />,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["DBMS", "OOPs", "DSA", "Operating Systems", "Networking"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-gradient border-border hover:glow-effect transition-all duration-300 group">
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 rounded-full ${category.bgColor} flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skill Levels Visualization */}
          <Card className="card-gradient border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Proficiency <span className="text-gradient">Levels</span>
              </h3>
              
              <div className="space-y-6">
                {[
                  { skill: "JavaScript", level: 85, color: "bg-accent" },
                  { skill: "React.js", level: 80, color: "bg-primary" },
                  { skill: "Python", level: 75, color: "bg-accent" },
                  { skill: "Node.js", level: 70, color: "bg-primary" },
                  { skill: "MongoDB", level: 65, color: "bg-accent" },
                  { skill: "Tailwind CSS", level: 90, color: "bg-primary" }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-sm text-muted-foreground">{item.level}%</span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${item.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
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

export default SkillsSection;