import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Card } from "./ui/card";
import { useLanguage } from "./LanguageContext";

export function Contact() {
  const { language } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: { en: "Email", zh: "邮箱" },
      value: "Jackpassingby@gmail.com",
      link: "mailto:Jackpassingby@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: { en: "Phone", zh: "电话" },
      value: "+86 139 1844 3136",
      link: "tel:+8613918443136"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: { en: "Location", zh: "位置" },
      value: { en: "Shanghai, China", zh: "中国上海" },
      link: null
    }
  ];

  const content = {
    title: { en: "Let's Connect", zh: "联系我" },
    subtitle: {
      en: "I'm open to discussing new opportunities, collaborative projects, or simply connecting with fellow design professionals. Let's create something exceptional together.",
      zh: "我愿意探讨新的机会、合作项目，或者与设计同行交流。让我们一起创造卓越的作品。"
    },
    getInTouch: { en: "Get In Touch", zh: "联系方式" },
    intro: {
      en: "With 10+ years of experience in enterprise SaaS design and proven leadership in building scalable design systems, I'm ready to bring strategic design thinking to your organization.",
      zh: "拥有10年以上企业级SaaS设计经验和构建可扩展设计系统的领导能力，我已准备好为您的组织带来战略性设计思维。"
    },
    connectWith: { en: "Connect With Me", zh: "社交媒体" },
    professionalBg: { en: "Professional Background", zh: "专业背景" },
    bgText: {
      en: <>
        <strong>Principal UI/UX Designer</strong> at Zuora Inc. (2011-2024)
        <br />
        <strong>Senior UI Designer</strong> at Protime Consulting (2003-2011)
        <br />
        Bachelor of Environmental Planning, Nanjing University
      </>,
      zh: <>
        Zuora Inc. <strong>资深UI/UX设计师</strong> (2011-2024)
        <br />
        Protime Consulting <strong>高级UI设计师</strong> (2003-2011)
        <br />
        南京大学 环境规划学士
      </>
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">{content.title[language]}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {content.subtitle[language]}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-medium">{content.getInTouch[language]}</h3>
              <p className="text-muted-foreground">
                {content.intro[language]}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#4f39f6]/10 to-[#9810fa]/10 rounded-full flex items-center justify-center text-[#4f39f6]">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-medium">{info.label[language]}</div>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {typeof info.value === 'string' ? info.value : info.value[language]}
                      </a>
                    ) : (
                      <div className="text-muted-foreground">{typeof info.value === 'string' ? info.value : info.value[language]}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-medium">{content.connectWith[language]}</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/zhangqianli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-[#4f39f6]/10 to-[#9810fa]/10 rounded-full flex items-center justify-center text-[#4f39f6] hover:bg-gradient-to-br hover:from-[#4f39f6] hover:to-[#9810fa] hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <Card className="p-6 border-0 bg-accent/50">
              <div className="space-y-2">
                <h4 className="font-medium">{content.professionalBg[language]}</h4>
                <p className="text-sm text-muted-foreground">
                  {content.bgText[language]}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}