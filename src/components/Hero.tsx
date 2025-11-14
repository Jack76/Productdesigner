import { ArrowDown, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Resume } from "./Resume";
import { AvatarIllustration } from "./AvatarIllustration";
import { useLanguage } from "./LanguageContext";

export function Hero() {
  const [showResume, setShowResume] = useState(false);
  const { language } = useLanguage();

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const content = {
    title: {
      en: "Principal UI/UX Designer",
      zh: "资深UI/UX设计师"
    },
    subtitle: {
      en: "Design Manager",
      zh: "设计经理"
    },
    description: {
      en: "10+ years driving design excellence for enterprise SaaS products. Specializing in design systems, UX optimization, and creating intuitive experiences that align user needs with business goals.",
      zh: "10年以上企业级SaaS产品设计经验。专注于设计系统、用户体验优化，以及创造符合用户需求和业务目标的直观体验。"
    },
    viewWork: {
      en: "View My Work",
      zh: "查看作品"
    },
    viewResume: {
      en: "View Resume",
      zh: "查看简历"
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                {content.title[language]}
                <span className="block bg-gradient-to-r from-[#4f39f6] to-[#9810fa] bg-clip-text text-transparent">{content.subtitle[language]}</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                {content.description[language]}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToPortfolio} className="group bg-gradient-to-r from-[#4f39f6] to-[#9810fa] hover:opacity-90">
                {content.viewWork[language]}
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button variant="outline" onClick={() => setShowResume(true)} className="border-[#4f39f6] text-[#4f39f6] hover:bg-purple-50">
                <Eye className="mr-2 h-4 w-4" />
                {content.viewResume[language]}
              </Button>
            </div>
          </div>

          {/* Avatar Illustration with Parallax */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4f39f6]/20 to-[#9810fa]/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 w-full h-full">
                <AvatarIllustration />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-[#4f39f6]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-[#9810fa]/20 rounded-full blur-3xl"></div>

      {/* Resume Dialog */}
      <Resume open={showResume} onClose={() => setShowResume(false)} />
    </section>
  );
}