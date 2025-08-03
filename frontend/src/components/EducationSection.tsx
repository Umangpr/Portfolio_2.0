import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Sitamarhi Institute of Technology",
      period: "2021 - 2024",
      grade: "CGPA: 8.29",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "text-primary"
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "Government Polytechnic Muzaffarpur",
      period: "2018 - 2021",
      grade: "CGPA: 8.63",
      icon: <Award className="h-6 w-6" />,
      color: "text-accent"
    },
    {
      degree: "Higher Secondary (+2)",
      institution: "Zila School Motihari - BSEB",
      period: "2016 - 2018",
      grade: "Percentage: 77%",
      icon: <Calendar className="h-6 w-6" />,
      color: "text-primary"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Education</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic journey that shaped my foundation in computer science and engineering
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card key={index} className="card-gradient border-border hover:glow-effect transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${edu.color} flex-shrink-0`}>
                      {edu.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-muted-foreground text-lg">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">{edu.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 ${edu.color} font-semibold`}>
                          <Award className="h-4 w-4" />
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card className="card-gradient border-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Academic Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Consistently maintained high academic performance throughout my educational journey, 
                  demonstrating strong dedication to learning and mastering computer science fundamentals. 
                  My education has provided me with a solid foundation in programming, algorithms, 
                  data structures, and software engineering principles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;