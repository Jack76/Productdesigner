import { Heart } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const content = {
    name: { en: "Qianli Zhang", zh: "张前利" },
    tagline: {
      en: "Principal UI/UX Designer crafting intuitive, scalable experiences for enterprise SaaS products.",
      zh: "资深UI/UX设计师，为企业级SaaS产品打造直观、可扩展的体验。"
    },
    navItems: {
      about: { en: "About", zh: "关于" },
      portfolio: { en: "Portfolio", zh: "作品集" },
      skills: { en: "Skills", zh: "技能" },
      contact: { en: "Contact", zh: "联系" }
    },
    backToTop: { en: "Back to Top ↑", zh: "返回顶部 ↑" },
    copyright: {
      en: `© ${currentYear} Qianli Zhang. All rights reserved.`,
      zh: `© ${currentYear} 张前利。保留所有权利。`
    },
    madeWith: {
      en: <>Made with <Heart className="h-4 w-4 text-red-500" /> in Shanghai</>,
      zh: <>用<Heart className="h-4 w-4 text-red-500" />在上海制作</>
    }
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-medium text-lg">{content.name[language]}</div>
            <p className="text-sm text-muted-foreground">
              {content.tagline[language]}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:text-center">
            <nav className="flex flex-wrap gap-6 justify-center">
              <button 
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {content.navItems.about[language]}
              </button>
              <button 
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {content.navItems.portfolio[language]}
              </button>
              <button 
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {content.navItems.skills[language]}
              </button>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {content.navItems.contact[language]}
              </button>
            </nav>
          </div>

          {/* Back to Top */}
          <div className="md:text-right">
            <button
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {content.backToTop[language]}
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              {content.copyright[language]}
            </div>
            <div className="flex items-center gap-1">
              {content.madeWith[language]}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}