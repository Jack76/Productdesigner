import { Award, Users, Clock, Target } from "lucide-react";
import { Card } from "./ui/card";
import { useLanguage } from "./LanguageContext";

export function About() {
  const { language } = useLanguage();

  const stats = [
    {
      icon: <Award className="h-8 w-8 text-[#4f39f6]" />,
      value: "50+",
      label: { en: "Enterprise Projects", zh: "企业级项目" }
    },
    {
      icon: <Users className="h-8 w-8 text-[#8200db]" />,
      value: "8+",
      label: { en: "Years Leading Teams", zh: "年团队管理经验" }
    },
    {
      icon: <Clock className="h-8 w-8 text-[#4f39f6]" />,
      value: "10+",
      label: { en: "Years Experience", zh: "年工作经验" }
    },
    {
      icon: <Target className="h-8 w-8 text-[#9810fa]" />,
      value: "100%",
      label: { en: "User-Focused", zh: "以用户为中心" }
    }
  ];

  const content = {
    greeting: {
      en: "Hello, I'm Qianli Zhang",
      zh: "你好，我是张前利"
    },
    intro1: {
      en: <>An innovative and strategic UI/UX Design Leader with <strong>10+ years of experience</strong> driving design excellence for enterprise-level SaaS products and <strong>8+ years</strong> leading design for 50+ digital marketing websites. I excel in design system development, UX optimization, and team leadership.</>,
      zh: <>创新型战略UI/UX设计领导者，拥有<strong>10年以上</strong>企业级SaaS产品设计卓越经验，以及<strong>8年以上</strong>领导50多个数字营销网站设计的经验。擅长设计系统开发、用户体验优化和团队领导。</>
    },
    intro2: {
      en: <>At <strong>Zuora Inc.</strong>, I led UI/UX for Billing, Payments, Finance, Reporting, Analytics, and CPQ products. I spearheaded the development of the Zuora Design System and championed modernization initiatives that transformed user experience across the entire product suite.</>,
      zh: <>在<strong>Zuora Inc.</strong>，我负责计费、支付、财务、报表、分析和CPQ产品的UI/UX设计。我主导了Zuora设计系统的开发，并推动现代化举措，改变了整个产品套件的用户体验。</>
    },
    intro3: {
      en: "My proven track record includes designing complex subscription-based billing systems, AI-driven analytics powered by GPT, and cross-platform CPQ interfaces that streamline enterprise operations.",
      zh: "我的成功经验包括设计复杂的订阅计费系统、由GPT驱动的AI分析工具，以及简化企业运营的跨平台CPQ界面。"
    },
    philosophyTitle: {
      en: "Design Philosophy",
      zh: "设计理念"
    },
    philosophyText: {
      en: <>Driven by a balance between aesthetics and functionality, I strive to create <strong>intuitive, scalable, and delightful user experiences</strong> that align with both user needs and business goals.</>,
      zh: <>在美学与功能之间寻求平衡，我致力于创造<strong>直观、可扩展且令人愉悦的用户体验</strong>，使其符合用户需求和业务目标。</>
    },
    principles: [
      {
        en: "Design systems ensure consistency and scalability",
        zh: "设计系统确保一致性和可扩展性"
      },
      {
        en: "User research drives informed design decisions",
        zh: "用户研究驱动明智的设计决策"
      },
      {
        en: "Collaboration elevates product outcomes",
        zh: "协作提升产品成果"
      },
      {
        en: "Balance aesthetics with enterprise functionality",
        zh: "平衡美学与企业功能性"
      }
    ]
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-medium">
                {content.greeting[language]}
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  {content.intro1[language]}
                </p>
                <p className="text-muted-foreground">
                  {content.intro2[language]}
                </p>
                <p className="text-muted-foreground">
                  {content.intro3[language]}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium">{content.philosophyTitle[language]}</h3>
              <p className="text-muted-foreground">
                {content.philosophyText[language]}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                {content.principles.map((principle, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>{principle[language]}</span>
                  </li>
                ))}
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
                  <div className="text-sm text-muted-foreground">{stat.label[language]}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}