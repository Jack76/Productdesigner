import { ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                Principal UI/UX Designer
                <span className="block text-muted-foreground">Design Manager</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                10+ years driving design excellence for enterprise SaaS products. 
                Specializing in design systems, UX optimization, and creating intuitive experiences 
                that align user needs with business goals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToPortfolio} className="group">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" download="Qianli_Zhang_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1648312182804-346237fbc0ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGVzaWduZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyODMxNDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Qianli Zhang - Principal UI/UX Designer"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
    </section>
  );
}