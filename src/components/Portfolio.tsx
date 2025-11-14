import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ProjectDetail } from "./ProjectDetail";
import { ProjectDetail2 } from "./ProjectDetail2";
import { ProjectDetail3 } from "./ProjectDetail3";
import { ProjectDetail4 } from "./ProjectDetail4";
import { ProjectDetail5 } from "./ProjectDetail5";
import { ProjectDetail6 } from "./ProjectDetail6";
import { useLanguage } from "./LanguageContext";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { language } = useLanguage();

  const filterLabels = {
    "All": { en: "All", zh: "全部" },
    "SaaS Platform": { en: "SaaS Platform", zh: "SaaS平台" },
    "Analytics & AI": { en: "Analytics & AI", zh: "分析与AI" },
    "Data & Reporting": { en: "Data & Reporting", zh: "数据与报表" }
  };

  const filters = ["All", "SaaS Platform", "Analytics & AI", "Data & Reporting"];

  const projects = [
    {
      id: 1,
      title: { en: "Zuora UI Restyle", zh: "Zuora界面重设计" },
      category: "SaaS Platform",
      description: {
        en: "Redesigned 100+ screens across Zuora's billing and revenue platform. Modernized the interface with consistent design patterns, aligned the experience with brand guidelines, and improved usability for enterprise users.",
        zh: "重新设计了Zuora计费和收入平台的100多个界面。通过一致的设计模式对界面进行现代化改造，使体验符合品牌指南，并提高了企业用户的可用性。"
      },
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHN5c3RlbXxlbnwxfHx8fDE3MzE1MTIwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: [
        { en: "UI Restyle", zh: "界面重设计" },
        { en: "Design System", zh: "设计系统" },
        { en: "Brand Redesign", zh: "品牌重塑" }
      ]
    },
    {
      id: 2,
      title: { en: "Zuora Offer & Price Book", zh: "Zuora优惠与价格手册" },
      category: "SaaS Platform",
      description: {
        en: "Built flexible pricing and offer management interfaces that let users create dynamic bundles and context-specific pricing. Replaced rigid workflows with an intuitive system that adapts to diverse business models.",
        zh: "构建了灵活的定价和优惠管理界面，让用户可以创建动态产品包和情境定价。用直观的系统取代了僵化的工作流程，适应多样化的业务模式。"
      },
      image: "https://images.unsplash.com/photo-1623667322051-18662ce6334c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmljZSUyMGJvb2slMjBjYXRhbG9nfGVufDF8fHx8MTc2MzEwMTQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: [
        { en: "Product Catalog", zh: "产品目录" },
        { en: "Pricing Strategy", zh: "定价策略" },
        { en: "UX Design", zh: "用户体验设计" }
      ]
    },
    {
      id: 4,
      title: { en: "Analytics AI (GPT-Powered)", zh: "分析AI（GPT驱动）" },
      category: "Analytics & AI",
      description: {
        en: "Introduced natural language analytics powered by OpenAI. Data analysts can now ask questions in plain English and instantly get charts and reports—no manual filtering, joins, or complex query building needed.",
        zh: "推出了由OpenAI驱动的自然语言分析功能。数据分析师现在可以用自然语言提问，即刻获得图表和报告——无需手动筛选、连接或构建复杂查询。"
      },
      image: "https://images.unsplash.com/photo-1761914410572-02614b575847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGdyYXBoc3xlbnwxfHx8fDE3NjMwOTU4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: [
        { en: "AI/ML", zh: "人工智能" },
        { en: "Natural Language", zh: "自然语言" },
        { en: "Data Analytics", zh: "数据分析" }
      ]
    },
    {
      id: 5,
      title: { en: "Reporting Dashboards", zh: "报表仪表板" },
      category: "Data & Reporting",
      description: {
        en: "Designed comprehensive reporting suite including Churn Risk Analysis, Product Performance, and Business Health dashboards to provide deep insights into customer behavior and business metrics.",
        zh: "设计了全面的报表套件，包括流失风险分析、产品性能和业务健康仪表板，以深入洞察客户行为和业务指标。"
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMDg2NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: [
        { en: "Dashboards", zh: "仪表板" },
        { en: "Data Visualization", zh: "数据可视化" },
        { en: "Analytics", zh: "分析" }
      ]
    },
    {
      id: 6,
      title: { en: "Data Workbench", zh: "数据工作台" },
      category: "Data & Reporting",
      description: {
        en: "Designed powerful data transformation platform with visual workflow builder, enabling data engineers to create and manage complex data pipelines through an intuitive interface without extensive coding.",
        zh: "设计了强大的数据转换平台，配备可视化工作流构建器，使数据工程师能够通过直观的界面创建和管理复杂的数据管道，无需大量编码。"
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwcGlwZWxpbmV8ZW58MXx8fHwxNzYzMDg2NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: [
        { en: "Data Engineering", zh: "数据工程" },
        { en: "ETL", zh: "ETL" },
        { en: "Workflow Design", zh: "工作流设计" }
      ]
    },
    {
      id: 3,
      title: { en: "DealFlow Automation Workflows", zh: "DealFlow 自动化工作流" },
      category: "SaaS Platform",
      description: {
        en: "Designed and prototyped intelligent sales automation platform using AI-assisted coding methodology. Created intuitive workflow management interface showcasing trigger-based automation capabilities through rapid AI-powered development.",
        zh: "使用AI辅助编码方法设计并原型化了智能销售自动化平台。通过快速的AI驱动开发创建了直观的工作流管理界面，展示基于触发器的自动化功能。"
      },
      image: "https://images.unsplash.com/photo-1694375073673-fc3f0b706d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNvZGluZyUyMHByb2dyYW1taW5nJTIwYXNzaXN0YW50fGVufDF8fHx8MTc2MzExMDQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: [
        { en: "AI Coding", zh: "AI编码" },
        { en: "Workflow Automation", zh: "工作流自动化" },
        { en: "Rapid Prototyping", zh: "快速原型" }
      ]
    }
  ];

  const content = {
    title: { en: "Key Achievements", zh: "核心成就" },
    subtitle: {
      en: "Showcasing impactful enterprise SaaS products, design systems, and strategic initiatives that drove measurable business outcomes and elevated user experience.",
      zh: "展示具有影响力的企业级SaaS产品、设计系统和战略举措，这些成果推动了可衡量的业务成果并提升了户体验。"
    },
    viewDetails: { en: "View Details", zh: "查看详情" }
  };

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">{content.title[language]}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {content.subtitle[language]}
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
              {filterLabels[filter as keyof typeof filterLabels][language]}
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
                  alt={project.title[language]}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#4f39f6] to-[#9810fa] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" onClick={() => { setSelectedProject(project.id); setShowDetail(true); }}>
                    <Eye className="h-4 w-4 mr-2" />
                    {content.viewDetails[language]}
                  </Button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-medium mb-2">{project.title[language]}</h3>
                  <p className="text-sm text-muted-foreground">{project.description[language]}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-purple-100 text-[#8200db] hover:bg-purple-200">
                      {tag[language]}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {showDetail && selectedProject === 1 && (
        <ProjectDetail
          open={showDetail}
          onClose={() => { setShowDetail(false); setSelectedProject(null); }}
        />
      )}
      {showDetail && selectedProject === 2 && (
        <ProjectDetail2
          open={showDetail}
          onClose={() => { setShowDetail(false); setSelectedProject(null); }}
        />
      )}
      {showDetail && selectedProject === 3 && (
        <ProjectDetail6
          open={showDetail}
          onClose={() => { setShowDetail(false); setSelectedProject(null); }}
        />
      )}
      {showDetail && selectedProject === 4 && (
        <ProjectDetail3
          open={showDetail}
          onClose={() => { setShowDetail(false); setSelectedProject(null); }}
        />
      )}
      {showDetail && selectedProject === 5 && (
        <ProjectDetail4
          open={showDetail}
          onClose={() => { setShowDetail(false); setSelectedProject(null); }}
        />
      )}
      {showDetail && selectedProject === 6 && (
        <ProjectDetail5
          open={showDetail}
          onClose={() => { setShowDetail(false); setSelectedProject(null); }}
        />
      )}
    </section>
  );
}