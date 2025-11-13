import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "SaaS Platform", "Design System", "Analytics & AI", "Enterprise"];

  const projects = [
    {
      id: 1,
      title: "Zuora Billing System",
      category: "SaaS Platform",
      description: "End-to-end SaaS billing system UI/UX including account management, subscription flows, invoices, and analytics. Significantly improved usability and enterprise efficiency.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI5MTA5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Billing UI/UX", "Subscription Flow", "Enterprise SaaS"]
    },
    {
      id: 2,
      title: "Zuora Design System",
      category: "Design System",
      description: "Established scalable UI/UX standards ensuring design consistency and brand alignment across multiple product lines. Led product modernization initiative.",
      image: "https://images.unsplash.com/photo-1756576357697-13dfc5fff61c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyOTMzODM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Design System", "Component Library", "Standards"]
    },
    {
      id: 3,
      title: "Analytics AI (GPT-Powered)",
      category: "Analytics & AI",
      description: "Spearheaded design of Analytics AI powered by GPT, enhancing users' ability to perform advanced data insights and predictive analysis.",
      image: "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbiUyMHdpcmVmcmFtZXN8ZW58MXx8fHwxNzYyOTMzODM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["AI/ML", "Data Visualization", "Predictive Analytics"]
    },
    {
      id: 4,
      title: "Salesforce CPQ Integration",
      category: "Enterprise",
      description: "Developed CPQ interfaces on Salesforce to streamline quote-to-cash operations for complex subscription and product models.",
      image: "https://images.unsplash.com/photo-1587355760421-b9de3226a046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjI4NTYzMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["CPQ", "Salesforce", "Quote-to-Cash"]
    },
    {
      id: 5,
      title: "Zuora Payments & Finance",
      category: "SaaS Platform",
      description: "Designed complex user flows for payment processing and finance modules including accounting cycles and revenue recognition.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjI5MTA5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Payment Systems", "Revenue Recognition", "Finance"]
    },
    {
      id: 6,
      title: "Enterprise Marketing Websites",
      category: "Enterprise",
      description: "Led design team delivering 50+ enterprise and marketing website projects for major brands including Sony, Estée Lauder, and Shanghai Tobacco.",
      image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyODIxNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Enterprise Web", "CMS", "Team Leadership"]
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">Key Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing impactful enterprise SaaS products, design systems, and strategic initiatives 
            that drove measurable business outcomes and elevated user experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button size="sm" variant="secondary">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-medium mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
