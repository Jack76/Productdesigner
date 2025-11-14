import { X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { useLanguage } from "./LanguageContext";

interface ProjectDetail6Props {
  open: boolean;
  onClose: () => void;
}

export function ProjectDetail6({ open, onClose }: ProjectDetail6Props) {
  const { language } = useLanguage();

  const content = {
    title: { 
      en: "DealFlow Automation Workflows", 
      zh: "DealFlow 自动化工作流" 
    },
    overview: { en: "Project Overview", zh: "项目概述" },
    overviewText: {
      en: "DealFlow is an internal R&D prototype exploring intelligent sales automation capabilities, designed using AI-assisted coding methodology. As a design exploration project leveraging AI tools for rapid development, this prototype demonstrated how sales teams could create sophisticated, trigger-based automation workflows without requiring technical expertise. By utilizing AI coding to accelerate the prototyping process, we were able to quickly validate design concepts and iterate on user interface patterns. While not publicly launched, this initiative showcased innovative approaches to streamlining deal management and customer engagement processes through intuitive interface design powered by AI development tools.",
      zh: "DealFlow 是一个探索智能销售自动化能力的内部研发原型，使用AI辅助编码方法进行设计。作为利用AI工具快速开发的设计探索项目，该原型展示了销售团队如何在不需要技术专业知识的情况下创建复杂的、基于触发器的自动化工作流。通过利用AI编码来加速原型开发过程，我们能够快速验证设计概念并迭代用户界面模式。虽然没有公开发布，但这个项目通过由AI开发工具支持的直观界面设计，展示了简化交易管理和客户参与流程的创新方法。"
    },
    role: { en: "My Role", zh: "我的角色" },
    roleText: {
      en: "Principal UI/UX Designer & Prototype Lead",
      zh: "首席 UI/UX 设计师与原型负责人"
    },
    responsibilities: { en: "Responsibilities", zh: "职责范围" },
    respList: {
      en: [
        "Led UX design exploration from concept to interactive prototype",
        "Designed intuitive workflow management interface and interactions",
        "Created design patterns for automation logic visualization",
        "Collaborated with product team on feature viability assessment",
        "Developed design system components for consistency",
        "Presented prototype to stakeholders and gathered feedback"
      ],
      zh: [
        "主导从概念到交互原型的用户体验设计探索",
        "设计了直观的工作流管理界面和交互",
        "为自动化逻辑可视化创建设计模式",
        "与产品团队合作评估功能可行性",
        "开发设计系统组件以确保一致性",
        "向利益相关者展示原型并收集反馈"
      ]
    },
    challenge: { en: "Design Challenge", zh: "设计挑战" },
    challengeText: {
      en: "The design challenge was to envision how sales automation could be made accessible to non-technical users. We needed to explore whether complex automation logic—including triggers, conditions, and multi-step actions—could be managed through a simple, table-based interface without overwhelming users or requiring coding knowledge.",
      zh: "设计挑战在于构想如何让非技术用户能够使用销售自动化功能。我们需要探索是否可以通过简单的基于表格的界面来管理复杂的自动化逻辑——包括触发器、条件和多步骤操作——而不会让用户感到不知所措或需要编码知识。"
    },
    solution: { en: "Design Solution", zh: "设计解决方案" },
    solutionText: {
      en: "I designed a comprehensive automation workflow prototype featuring:",
      zh: "我设计了一个全面的自动化工作流原型，包括："
    },
    features: {
      en: [
        {
          title: "Clean Workflow Management Interface",
          desc: "Table-based view displaying all workflows with key information (name, status, triggers, actions, performance metrics) at a glance. Quick filters and search functionality for efficient workflow discovery and management."
        },
        {
          title: "Template Library Concept",
          desc: "Default templates for common scenarios (Welcome Campaign, Re-engagement Flow, RFM Marketing) to accelerate setup and educate users about best practices. Templates serve as starting points for customization."
        },
        {
          title: "Flexible Trigger System Design",
          desc: "Visual representation of trigger types (User Registers, Inactivity > 30d, CRM Status Change, API Call) that respond to customer behaviors. Clear labeling helps users understand automation logic."
        },
        {
          title: "Action Sequence Visualization",
          desc: "Configurable action badges showing the types of automated tasks (send email, update records, notify teams). Visual indicators communicate workflow complexity without technical jargon."
        },
        {
          title: "Status Management Controls",
          desc: "Color-coded workflow states (Active, Draft, Paused) with intuitive quick action buttons for editing and controlling automation. Clear visual hierarchy guides user actions."
        },
        {
          title: "Performance Metrics Display",
          desc: "Success rate indicators, execution timestamps, and trigger counts to help users understand automation effectiveness. Data-driven insights inform optimization opportunities."
        }
      ],
      zh: [
        {
          title: "简洁的工作流管理界面",
          desc: "基于表格的视图一目了然地显示所有工作流及其关键信息（名称、状态、触发器、操作、性能指标）。快速筛选和搜索功能实现高效的工作流发现和管理。"
        },
        {
          title: "模板库概念",
          desc: "常见场景的默认模板（欢迎活动、重新参与流程、RFM营销）可加速设置并教育用户了解最佳实践。模板作为自定义的起点。"
        },
        {
          title: "灵活的触发系统设计",
          desc: "触发器类型的可视化表示（用户注册、不活跃>30天、CRM状态变更、API调用）可响应客户行为。清晰的标签帮助用户理解自动化逻辑。"
        },
        {
          title: "操作序列可视化",
          desc: "可配置的操作徽章显示自动化任务的类型（发送邮件、更新记录、通知团队）。可视化指标在不使用技术术语的情况下传达工作流复杂性。"
        },
        {
          title: "状态管理控制",
          desc: "颜色编码的工作流状态（活动、草稿、暂停），配有直观的快速操作按钮用于编辑和控制自动化。清晰的视觉层次引导用户操作。"
        },
        {
          title: "性能指标展示",
          desc: "成功率指标、执行时间戳和触发次数帮助用户了解自动化效果。数据驱动的洞察为优化提供依据。"
        }
      ]
    },
    demo: { en: "Interactive Prototype", zh: "交互原型" },
    demoText: {
      en: "Watch the interactive prototype demonstration (best viewed in web browser):",
      zh: "观看交互原型演示（建议在网页浏览器中查看）："
    },
    methodology: { en: "AI-Assisted Development Approach", zh: "AI辅助开发方法" },
    methodologyText: {
      en: "This project pioneered the use of AI-assisted coding tools in our design prototyping workflow. By leveraging AI to generate code from design specifications, we accelerated development time by 70% compared to traditional hand-coding. This approach allowed for rapid iteration on interface concepts, enabling us to test multiple design variations and gather stakeholder feedback earlier in the process. The AI coding methodology proved particularly effective for creating data-intensive interfaces like workflow management tables, where pattern repetition and consistent styling are critical.",
      zh: "该项目率先在我们的设计原型工作流程中使用AI辅助编码工具。通过利用AI从设计规范生成代码，与传统手工编码相比，我们将开发时间加快了70%。这种方法允许快速迭代界面概念，使我们能够测试多个设计变体并更早地收集利益相关者的反馈。AI编码方法对于创建数据密集型界面（如工作流管理表）特别有效，在这些界面中，模式重复和一致的样式至关重要。"
    },
    impact: { en: "Design Insights & Learnings", zh: "设计洞察与收获" },
    impactList: {
      en: [
        {
          metric: "Prototype",
          label: "Successful Concept Validation",
          desc: "Demonstrated viability of table-based automation management for non-technical users"
        },
        {
          metric: "Feedback",
          label: "Positive Stakeholder Response",
          desc: "Internal teams validated the approach and identified potential use cases"
        },
        {
          metric: "Patterns",
          label: "Reusable Design System",
          desc: "Created interaction patterns applicable to other workflow-based features"
        },
        {
          metric: "Learning",
          label: "R&D Design Exploration",
          desc: "Informed future product strategy through hands-on prototyping and testing"
        }
      ],
      zh: [
        {
          metric: "原型",
          label: "成功的概念验证",
          desc: "展示了基于表格的自动化管理对非技术用户的可行性"
        },
        {
          metric: "反馈",
          label: "利益相关者积极响应",
          desc: "内部团队验证了该方法并确定了潜在的用例"
        },
        {
          metric: "模式",
          label: "可复用的设计系统",
          desc: "创建了适用于其他基于工作流的功能的交互模式"
        },
        {
          metric: "学习",
          label: "研发设计探索",
          desc: "通过实践原型和测试为未来的产品策略提供依据"
        }
      ]
    },
    takeaways: { en: "Key Design Takeaways", zh: "关键设计收获" },
    takeawaysList: {
      en: [
        "Prototyping Value: Creating interactive prototypes helps validate complex ideas before committing to full development, reducing risk and enabling early feedback.",
        "Simplicity Over Features: Even in R&D exploration, focusing on clear, simple interactions proved more valuable than showcasing every possible feature.",
        "Table-Based Interfaces Work: For management-heavy features like automation workflows, table views with inline actions provide familiar, efficient interactions.",
        "Visual Feedback is Essential: Color coding, badges, and icons communicate system state and workflow logic without requiring technical explanations.",
        "Templates Accelerate Understanding: Pre-built examples help users quickly grasp capabilities and see practical applications, even in prototype stages."
      ],
      zh: [
        "原型价值：创建交互原型有助于在完全开发之前验证复杂的想法，降低风险并实现早期反馈。",
        "简单胜过功能：即使在研发探索中，专注于清晰、简单的交互也比展示所有可能的功能更有价值。",
        "基于表格的界面有效：对于自动化工作流等管理密集型功能，带有内联操作的表格视图提供了熟悉、高效的交互。",
        "视觉反馈至关重要：颜色编码、徽章和图标在不需要技术解释的情况下传达系统状态和工作流逻辑。",
        "模板加速理解：预建示例帮助用户快速掌握功能并查看实际应用，即使在原型阶段也是如此。"
      ]
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="!max-w-[1200px] w-full max-h-[90vh] !p-0 overflow-y-auto">
        <DialogTitle className="sr-only">{content.title[language]}</DialogTitle>
        <DialogDescription className="sr-only">
          {content.overviewText[language]}
        </DialogDescription>

        <div className="relative">
          {/* Header with gradient background */}
          <div className="sticky top-0 z-50 bg-gradient-to-r from-[#4f39f6] to-[#9810fa] px-8 py-6 flex justify-between items-center">
            <h2 className="text-2xl font-medium text-white">{content.title[language]}</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="p-8 space-y-12">
            {/* Project Overview */}
            <section className="space-y-4">
              <h3 className="text-xl font-medium">{content.overview[language]}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {content.overviewText[language]}
              </p>
            </section>

            {/* Role & Responsibilities */}
            <section className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">{content.role[language]}</h3>
                <p className="text-muted-foreground">{content.roleText[language]}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">{content.responsibilities[language]}</h3>
                <ul className="space-y-2">
                  {content.respList[language].map((item, index) => (
                    <li key={index} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-[#4f39f6] mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* The Challenge */}
            <section className="space-y-4">
              <h3 className="text-xl font-medium">{content.challenge[language]}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {content.challengeText[language]}
              </p>
            </section>

            {/* Product Demo Video */}
            <section className="space-y-4">
              <h3 className="text-xl font-medium">{content.demo[language]}</h3>
              <p className="text-muted-foreground mb-4">{content.demoText[language]}</p>
              <div className="relative w-full aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://player.vimeo.com/video/1136813805?badge=0&autopause=0&player_id=0&app_id=58479"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="DealFlow Automation Workflows Demo"
                ></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </section>

            {/* AI-Assisted Development Approach */}
            <section className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">{content.methodology[language]}</h3>
                <p className="text-muted-foreground">{content.methodologyText[language]}</p>
              </div>
            </section>

            {/* Design Solution */}
            <section className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">{content.solution[language]}</h3>
                <p className="text-muted-foreground">{content.solutionText[language]}</p>
              </div>
              
              <div className="grid gap-6">
                {content.features[language].map((feature, index) => (
                  <div key={index} className="border-l-4 border-[#4f39f6] pl-6 py-2">
                    <h4 className="font-medium mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Impact & Results */}
            <section className="space-y-6">
              <h3 className="text-xl font-medium">{content.impact[language]}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {content.impactList[language].map((item, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                    <div className="text-4xl font-medium text-[#4f39f6] mb-2">{item.metric}</div>
                    <div className="font-medium mb-1">{item.label}</div>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Takeaways */}
            <section className="space-y-6">
              <h3 className="text-xl font-medium">{content.takeaways[language]}</h3>
              <div className="space-y-4">
                {content.takeawaysList[language].map((takeaway, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#4f39f6] to-[#9810fa] rounded-full flex items-center justify-center text-white text-sm">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{takeaway}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}