import { Progress } from "./ui/progress";
import { Card } from "./ui/card";
import { Palette, Layers, Search, BarChart3, Users, Lightbulb } from "lucide-react";

export function Skills() {
  const technicalSkills = [
    { name: "UI/UX & Prototype Design", level: 98 },
    { name: "Design System Development", level: 95 },
    { name: "Figma & Design Tools", level: 95 },
    { name: "User Research & Testing", level: 90 },
    { name: "Data Visualization", level: 92 },
    { name: "SaaS Platform Architecture", level: 90 }
  ];

  const designAreas = [
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UI/UX Design",
      description: "Expert in creating enterprise-level interfaces for complex SaaS platforms with focus on usability and scalability."
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Design Systems",
      description: "Led development of comprehensive design systems ensuring consistency, efficiency, and brand alignment across products."
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "User Research",
      description: "Conducting research to uncover insights that drive strategic design decisions and optimize user experience."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Data Visualization",
      description: "Designing advanced analytics dashboards and reporting tools that transform complex data into actionable insights."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Leadership",
      description: "8+ years leading design teams, mentoring designers, and fostering collaborative cross-functional partnerships."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Strategic Innovation",
      description: "Driving product modernization initiatives and championing AI-driven features that enhance enterprise capabilities."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">Core Competencies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set honed over 10+ years, spanning enterprise SaaS design, 
            design systems, team leadership, and strategic innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium">Expertise & Proficiency</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Design Areas */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium">Key Strengths</h3>
            <div className="grid gap-6">
              {designAreas.map((area, index) => (
                <Card key={index} className="p-6 border-0 shadow-sm">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      {area.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">{area.title}</h4>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium mb-8">Additional Capabilities</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Billing & Finance UX",
              "Payment Systems Design",
              "CPQ Interfaces",
              "Revenue Recognition",
              "Analytics & Reporting",
              "AI/ML Integration",
              "Salesforce Design",
              "CMS Architecture",
              "Cross-functional Leadership",
              "Stakeholder Management",
              "Design Documentation",
              "Agile/Scrum"
            ].map((skill) => (
              <div key={skill} className="px-4 py-2 bg-accent rounded-full text-sm font-medium">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
