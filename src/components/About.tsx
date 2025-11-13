import { Award, Users, Clock, Target } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const stats = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "50+",
      label: "Enterprise Projects"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "8+",
      label: "Years Leading Teams"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      value: "10+",
      label: "Years Experience"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      value: "100%",
      label: "User-Focused"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-medium">
                Hello, I'm Qianli Zhang
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  An innovative and strategic UI/UX Design Leader with <strong>10+ years of experience</strong> driving 
                  design excellence for enterprise-level SaaS products and <strong>8+ years</strong> leading design for 50+ 
                  digital marketing websites. I excel in design system development, UX optimization, and team leadership.
                </p>
                <p className="text-muted-foreground">
                  At <strong>Zuora Inc.</strong>, I led UI/UX for Billing, Payments, Finance, Reporting, Analytics, and CPQ products. 
                  I spearheaded the development of the Zuora Design System and championed modernization initiatives that 
                  transformed user experience across the entire product suite.
                </p>
                <p className="text-muted-foreground">
                  My proven track record includes designing complex subscription-based billing systems, AI-driven analytics 
                  powered by GPT, and cross-platform CPQ interfaces that streamline enterprise operations.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium">Design Philosophy</h3>
              <p className="text-muted-foreground">
                Driven by a balance between aesthetics and functionality, I strive to create <strong>intuitive, 
                scalable, and delightful user experiences</strong> that align with both user needs and business goals.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Design systems ensure consistency and scalability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>User research drives informed design decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Collaboration elevates product outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Balance aesthetics with enterprise functionality</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center space-y-4">
                <div className="flex justify-center">
                  {stat.icon}
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-medium">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
