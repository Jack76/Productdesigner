import { Progress } from "./ui/progress";
import { Card } from "./ui/card";
import { Palette, Layers, Search, BarChart3, Users, Lightbulb } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Skills() {
  const { language } = useLanguage();

  const technicalSkills = [
    { name: { en: "UI/UX & Prototype Design", zh: "UI/UX与原型设计" }, level: 98 },
    { name: { en: "Design System Development", zh: "设计系统开发" }, level: 95 },
    { name: { en: "Figma & Design Tools", zh: "Figma与设计工具" }, level: 95 },
    { name: { en: "User Research & Testing", zh: "用户研究与测试" }, level: 90 },
    { name: { en: "Data Visualization", zh: "数据可视化" }, level: 92 },
    { name: { en: "SaaS Platform Architecture", zh: "SaaS平台架构" }, level: 90 }
  ];

  const designAreas = [
    {
      icon: <Palette className="h-8 w-8 text-[#4f39f6]" />,
      title: { en: "UI/UX Design", zh: "UI/UX设计" },
      description: {
        en: "Expert in creating enterprise-level interfaces for complex SaaS platforms with focus on usability and scalability.",
        zh: "擅长为复杂的SaaS平台创建企业级界面，专注于可用性和可扩展性。"
      }
    },
    {
      icon: <Layers className="h-8 w-8 text-[#9810fa]" />,
      title: { en: "Design Systems", zh: "设计系统" },
      description: {
        en: "Led development of comprehensive design systems ensuring consistency, efficiency, and brand alignment across products.",
        zh: "主导全面设计系统的开发，确保产品的一致性、效率和品牌一致性。"
      }
    },
    {
      icon: <Search className="h-8 w-8 text-[#8200db]" />,
      title: { en: "User Research", zh: "用户研究" },
      description: {
        en: "Conducting research to uncover insights that drive strategic design decisions and optimize user experience.",
        zh: "开展研究以发现驱动战略设计决策并优化用户体验的洞察。"
      }
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#4f39f6]" />,
      title: { en: "Data Visualization", zh: "数据可视化" },
      description: {
        en: "Designing advanced analytics dashboards and reporting tools that transform complex data into actionable insights.",
        zh: "设计先进的分析仪表板和报表工具，将复杂数据转化为可操作的洞察。"
      }
    },
    {
      icon: <Users className="h-8 w-8 text-[#9810fa]" />,
      title: { en: "Team Leadership", zh: "团队领导" },
      description: {
        en: "8+ years leading design teams, mentoring designers, and fostering collaborative cross-functional partnerships.",
        zh: "8年以上领导设计团队、指导设计师并促进跨职能协作的经验。"
      }
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#8200db]" />,
      title: { en: "Strategic Innovation", zh: "战略创新" },
      description: {
        en: "Driving product modernization initiatives and championing AI-driven features that enhance enterprise capabilities.",
        zh: "推动产品现代化举措，并倡导增强企业能力的AI驱动功能。"
      }
    }
  ];

  const additionalSkills = [
    { en: "Billing & Finance UX", zh: "计费与财务用户体验" },
    { en: "Payment Systems Design", zh: "支付系统设计" },
    { en: "CPQ Interfaces", zh: "CPQ界面" },
    { en: "Revenue Recognition", zh: "收入确认" },
    { en: "Analytics & Reporting", zh: "分析与报表" },
    { en: "AI/ML Integration", zh: "AI/ML集成" },
    { en: "Salesforce Design", zh: "Salesforce设计" },
    { en: "CMS Architecture", zh: "CMS架构" },
    { en: "Cross-functional Leadership", zh: "跨职能领导" },
    { en: "Stakeholder Management", zh: "利益相关者管理" },
    { en: "Design Documentation", zh: "设计文档" },
    { en: "Agile/Scrum", zh: "敏捷/Scrum" }
  ];

  const content = {
    title: { en: "Core Competencies", zh: "核心能力" },
    subtitle: {
      en: "A comprehensive skill set honed over 10+ years, spanning enterprise SaaS design, design systems, team leadership, and strategic innovation.",
      zh: "在10多年的磨练中形成的全面技能，涵盖企业级SaaS设计、设计系统、团队领导和战略创新。"
    },
    expertiseTitle: { en: "Expertise & Proficiency", zh: "专业技能" },
    strengthsTitle: { en: "Key Strengths", zh: "核心优势" },
    additionalTitle: { en: "Additional Capabilities", zh: "其他能力" }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">{content.title[language]}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {content.subtitle[language]}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium">{content.expertiseTitle[language]}</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name[language]}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Design Areas */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium">{content.strengthsTitle[language]}</h3>
            <div className="grid gap-6">
              {designAreas.map((area, index) => (
                <Card key={index} className="p-6 border-0 shadow-sm">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      {area.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">{area.title[language]}</h4>
                      <p className="text-sm text-muted-foreground">{area.description[language]}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium mb-8">{content.additionalTitle[language]}</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="px-4 py-2 bg-accent rounded-full text-sm font-medium">
                {skill[language]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}