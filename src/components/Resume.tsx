import { X, Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import svgPaths from "../imports/svg-px6vx1h0bi";
import { useLanguage } from "./LanguageContext";

interface ResumeProps {
  open: boolean;
  onClose: () => void;
}

export function Resume({ open, onClose }: ResumeProps) {
  const { language } = useLanguage();

  const content = {
    title: {
      en: "Resume - Qianli Zhang",
      zh: "简历 - 张前利",
    },
    position: {
      en: "Principal UI/UX Designer & AI Product Developer",
      zh: "首席UI/UX设计师与AI产品开发者",
    },
    sections: {
      coreStrengths: {
        en: "Core Strengths",
        zh: "核心优势",
      },
      keySkills: {
        en: "Key Skills",
        zh: "关键技能",
      },
      workExperience: {
        en: "Work Experience",
        zh: "工作经历",
      },
      education: {
        en: "Education",
        zh: "教育背景",
      },
    },
    strengths: [
      {
        en: "10+ years UI/UX design experience in enterprise SaaS products, plus 8+ years designing 50+ digital marketing websites while managing teams of 3-4 designers.",
        zh: "10+年企业级SaaS产品UI/UX设计经验，以及8+年间设计50+个数字营销网站的经验，同时管理3-4人的设计团队。",
      },
      {
        en: "Recent focus on AI product development - built an AI-powered digital marketing platform and produced multiple AI-generated videos using cutting-edge tools.",
        zh: "近期专注于AI产品开发 - 构建了AI驱动的数字营销平台，并使用前沿工具制作了多个AI生成的视频。",
      },
      {
        en: "Built complete subscription billing system from ground up, covering customer accounts, product catalogs, subscriptions, invoicing, payments, and reporting.",
        zh: "从零开始构建了完整的订阅计费系统，涵盖客户账户、产品目录、订阅管理、发票、支付和报表。",
      },
      {
        en: "Strong expertise in design system development and maintenance, ensuring brand consistency and optimal user experience across products.",
        zh: "在设计系统开发和维护方面拥有深厚专业知识，确保跨产品的品牌一致性和最佳用户体验。",
      },
      {
        en: "Designed Salesforce-based CPQ interface enabling flexible subscription, product, and service quoting.",
        zh: "设计了基于Salesforce的CPQ界面，实现灵活的订阅、产品和服务报价。",
      },
      {
        en: "Early adopter of AI in design workflow - pioneered GPT-based Analytics AI for advanced data analysis and predictions.",
        zh: "设计工作流程中AI的早期采用者 - 率先开发了基于GPT的分析AI，用于高级数据分析和预测。",
      },
    ],
    skills: [
      { en: "UI/UX Design", zh: "UI/UX设计" },
      { en: "Prototyping", zh: "原型设计" },
      { en: "AI Product Development", zh: "AI产品开发" },
      { en: "AI Video Production", zh: "AI视频制作" },
      { en: "SaaS Platforms", zh: "SaaS平台" },
      { en: "Design Systems", zh: "设计系统" },
      { en: "User Research", zh: "用户研究" },
      { en: "Team Leadership", zh: "团队领导" },
    ],
    jobs: [
      {
        title: {
          en: "AI Product Designer & Developer",
          zh: "AI产品设计师与开发者",
        },
        company: {
          en: "Independent",
          zh: "独立工作",
        },
        period: "2024.02 - Present",
        periodZh: "2024.02 - 至今",
        responsibilities: [
          {
            en: "Designed and built AI-driven digital marketing platform integrating content generation, analytics, and automated workflows.",
            zh: "设计并构建了AI驱动的数字营销平台，集成内容生成、分析和自动化工作流程。",
          },
          {
            en: "Produced several AI videos using tools like Midjourney, Sora, Jimeng AI, Kling, and Tongyi for various marketing campaigns.",
            zh: "使用Midjourney、Sora、即梦AI、可灵和通义等工具为各种营销活动制作了多个AI视频。",
          },
          {
            en: "Explored AI coding assistants (Cursor, GitHub Copilot) to accelerate product development and prototype iteration.",
            zh: "探索AI编码助手（Cursor、GitHub Copilot）以加速产品开发和原型迭代。",
          },
        ],
      },
      {
        title: {
          en: "Principal UI/UX Designer",
          zh: "首席UI/UX设计师",
        },
        company: {
          en: "Zuora Inc.",
          zh: "Zuora公司",
        },
        period: "2019.03 - 2024.02",
        periodZh: "2019.03 - 2024.02",
        responsibilities: [
          {
            en: "Led design for billing, payments, finance, reporting, analytics, and CPQ products for a billion-dollar enterprise billing system.",
            zh: "领导十亿美元级企业计费系统的账单、支付、财务、报表、分析和CPQ产品的设计工作。",
          },
          {
            en: "Led Zuora Billing end-to-end UI design and UX Foundation, shaping the product where Zuora's UX/UI foundation.",
            zh: "领导Zuora计费系统端到端UI设计和UX基础架构，塑造了Zuora的UX/UI基础。",
          },
          {
            en: "Built data management interfaces for Zuora Analytics (+ features powered by GPT technology).",
            zh: "为Zuora Analytics构建了数据管理界面（包含由GPT技术驱动的功能）。",
          },
          {
            en: "Coordinated with third-party teams and internal devs on Revpro project to modernize legacy UI across all products.",
            zh: "与第三方团队和内部开发人员协调Revpro项目，实现所有产品传统UI的现代化。",
          },
          {
            en: "Designed dashboards and reporting views for Zuora Revenue product line.",
            zh: "为Zuora Revenue产品线设计了仪表板和报表视图。",
          },
          {
            en: "Created dashboards for Salesforce CPQ interface for flexible pricing and quoting legacy UI.",
            zh: "为Salesforce CPQ界面创建了仪表板，实现灵活定价和报价的传统UI。",
          },
        ],
      },
      {
        title: {
          en: "Staff UI/UX Designer",
          zh: "资深UI/UX设计师",
        },
        company: {
          en: "Zuora Inc.",
          zh: "Zuora公司",
        },
        period: "2011.01 - 2019.03",
        periodZh: "2011.01 - 2019.03",
        responsibilities: [
          {
            en: "Owned design for multiple Zuora products including Billing, Payments, Finance, Reporting modules.",
            zh: "负责多个Zuora产品的设计，包括账单、支付、财务、报表模块。",
          },
          {
            en: "Designed billing workflows including customer accounts, product catalogs, subscriptions, invoicing, pricing, collections and revenue recognition.",
            zh: "设计了计费工作流程，包括客户账户、产品目录、订阅、发票、定价、催收和收入确认。",
          },
          {
            en: "Led and Designed the entire Zuora Billing end-to-end UX Foundation.",
            zh: "领导并设计了整个Zuora计费系统端到端的UX基础架构。",
          },
          {
            en: "Built Finance module interfaces for accounting cycles, journal entries, and revenue recognition.",
            zh: "为会计周期、日记账分录和收入确认构建了财务模块界面。",
          },
          {
            en: "Created management pages for GL and Revenue Rule Setup, Payment Gateway, Billing and Payment Operations.",
            zh: "创建了总账和收入规则设置、支付网关、账单和支付操作的管理页面。",
          },
          {
            en: "Coordinated with third party teams and internal devs on Revpro project to modernize legacy UI across all products.",
            zh: "与第三方团队和内部开发人员协调Revpro项目，实现所有产品传统UI的现代化。",
          },
          {
            en: "Designed CPQ interface in Salesforce platform for flexible pricing, quoting and service.",
            zh: "在Salesforce平台上设计了CPQ界面，实现灵活的定价、报价和服务。",
          },
          {
            en: "Created dashboards and reporting views for Zuora Revenue product line.",
            zh: "为Zuora Revenue产品线创建了仪表板和报表视图。",
          },
        ],
      },
      {
        title: {
          en: "Senior UI Designer",
          zh: "高级UI设计师",
        },
        company: {
          en: "Protime",
          zh: "点正科技",
        },
        period: "2003.04 - 2011.01",
        periodZh: "2003.04 - 2011.01",
        responsibilities: [
          {
            en: "Managed team of 3-4 designers and delivered 50+ website design projects for various clients.",
            zh: "管理3-4人设计团队，为各类客户交付了50+个网站设计项目。",
          },
          {
            en: "Implemented flexible CMS platform for dynamic content management and multi-channel publishing.",
            zh: "实施了灵活的CMS平台，用于动态内容管理和多渠道发布。",
          },
          {
            en: "Key clients: Sony, Estée Lauder, Shanghai Tobacco, Xintiandi and other major brands.",
            zh: "主要客户：索尼、雅诗兰黛、上海烟草、新天地等主要品牌。",
          },
        ],
      },
      {
        title: {
          en: "Web Designer",
          zh: "网页设计师",
        },
        company: {
          en: "Yifei Group",
          zh: "逸飞集团",
        },
        period: "2000.01 - 2003.04",
        periodZh: "2000.01 - 2003.04",
        responsibilities: [
          {
            en: "Designed marketing website for Yifei Group, Shaolin Temple, Jiyitang, and other enterprise clients.",
            zh: "为逸飞集团、少林寺、积翼堂及其他企业客户设计营销网站。",
          },
        ],
      },
    ],
    educationData: {
      degree: {
        en: "Bachelor's Degree in Environmental Planning and Management",
        zh: "环境规划与管理学士学位",
      },
      school: {
        en: "Nanjing University",
        zh: "南京大学",
      },
      period: "1993 - 1997",
    },
  };

  const handleOpenInNewWindow = () => {
    const newWindow = window.open(
      "",
      "_blank",
      "width=1000,height=800,scrollbars=yes",
    );
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="${language === "en" ? "en" : "zh-CN"}">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${content.title[language]}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            body {
              font-family: 'Inter', sans-serif;
              margin: 0;
              padding: 0;
            }
          </style>
        </head>
        <body class="bg-white">
          ${document.querySelector("[data-resume-content]")?.innerHTML || ""}
        </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="!max-w-[900px] w-full h-[90vh] !p-0 overflow-y-auto">
        {/* Accessible title and description */}
        <DialogTitle className="sr-only">
          {content.title[language]}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {language === "en"
            ? "Complete professional resume for Qianli Zhang, Principal UI/UX Designer & AI Product Developer, including work experience, skills, and education."
            : "张前利的完整专业简历，首席UI/UX设计师与AI产品开发者，包括工作经历、技能和教育背景。"}
        </DialogDescription>

        <div className="relative bg-white">
          {/* Close Button and Open in New Window */}
          <div className="sticky top-0 right-0 z-50 flex justify-end items-center gap-2 p-4 bg-white/95 backdrop-blur-sm border-b">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleOpenInNewWindow}
              className="rounded-full"
              title={
                language === "en"
                  ? "Open in new window"
                  : "在新窗口中打开"
              }
            >
              <ExternalLink className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div data-resume-content>
            {/* Header */}
            <div className="bg-gradient-to-r from-[#4f39f6] to-[#9810fa] px-16 pt-12 pb-8">
              <h1 className="text-5xl text-white mb-2">
                {language === "en" ? "Qianli Zhang" : "张前利"}
              </h1>
              <p className="text-lg text-indigo-100 mb-4">
                {content.position[language]}
              </p>
              <div className="flex gap-6 text-sm text-indigo-100">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d={svgPaths.p14548f00}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.33333"
                    />
                    <path
                      d={svgPaths.p17781bc0}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.33333"
                    />
                  </svg>
                  {language === "en" ? "Shanghai" : "上海"}
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d={svgPaths.p2f8e7e80}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.33333"
                    />
                    <path
                      d={svgPaths.p17070980}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.33333"
                    />
                  </svg>
                  Jackpassingby@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <clipPath id="clip0">
                      <rect
                        fill="white"
                        height="16"
                        width="16"
                      />
                    </clipPath>
                    <g clipPath="url(#clip0)">
                      <path
                        d={svgPaths.p26187580}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33333"
                      />
                    </g>
                  </svg>
                  +86 13918443136
                </div>
              </div>
            </div>

            <div className="px-16 py-12 space-y-12">
              {/* Core Strengths */}
              <section>
                <h2 className="text-lg text-neutral-900 border-b-2 border-[#4f39f6] pb-2 mb-6">
                  {content.sections.coreStrengths[language]}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {content.strengths.map((strength, index) => (
                    <div
                      key={index}
                      className={`bg-neutral-50 rounded-lg p-5 border-l-4 ${index % 2 === 0 ? "border-[#4f39f6]" : "border-[#9810fa]"}`}
                    >
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {strength[language]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Key Skills */}
              <section>
                <h2 className="text-lg text-neutral-900 border-b-2 border-[#4f39f6] pb-2 mb-6">
                  {content.sections.keySkills[language]}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {content.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`${index % 2 === 0 ? "bg-indigo-100 text-[#432dd7]" : "bg-purple-100 text-[#8200db]"} px-4 py-2 rounded-full text-sm`}
                    >
                      {skill[language]}
                    </span>
                  ))}
                </div>
              </section>

              {/* Work Experience */}
              <section>
                <h2 className="text-lg text-neutral-900 border-b-2 border-[#4f39f6] pb-2 mb-6">
                  {content.sections.workExperience[language]}
                </h2>

                {content.jobs.map((job, index) => (
                  <div key={index} className="mb-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-base text-neutral-900">
                          {job.title[language]}
                        </h3>
                        <p className="text-sm text-[#4f39f6]">
                          {job.company[language]}
                        </p>
                      </div>
                      <span className="bg-indigo-50 text-[#432dd7] px-3 py-1 rounded text-sm whitespace-nowrap">
                        {language === "en"
                          ? job.period
                          : job.periodZh}
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      {job.responsibilities.map(
                        (resp, respIndex) => (
                          <li
                            key={respIndex}
                            className="flex gap-2"
                          >
                            <span className="text-[#4f39f6]">
                              •
                            </span>
                            <span>{resp[language]}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                ))}
              </section>

              {/* Education */}
              <section>
                <h2 className="text-lg text-neutral-900 border-b-2 border-[#4f39f6] pb-2 mb-6">
                  {content.sections.education[language]}
                </h2>
                <div className="bg-neutral-50 rounded-lg p-5">
                  <h3 className="text-base text-neutral-900 mb-1">
                    {content.educationData.degree[language]}
                  </h3>
                  <p className="text-sm text-[#4f39f6] mb-1">
                    {content.educationData.school[language]}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {content.educationData.period}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}