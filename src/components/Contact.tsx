import { Mail, Phone, MapPin, Linkedin, Github, Dribbble } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "Jackpassingby@gmail.com",
      link: "mailto:Jackpassingby@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+86 139 1844 3136",
      link: "tel:+8613918443136"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Shanghai, China",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/qianlizhang"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      link: "https://github.com/qianlizhang"
    },
    {
      icon: <Dribbble className="h-5 w-5" />,
      label: "Dribbble",
      link: "https://dribbble.com/qianlizhang"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-medium">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm open to discussing new opportunities, collaborative projects, 
            or simply connecting with fellow design professionals. Let's create something exceptional together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-0 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@company.com" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="inquiryType">Inquiry Type</Label>
                <select 
                  id="inquiryType"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select inquiry type</option>
                  <option value="job">Job Opportunity</option>
                  <option value="consulting">Consulting Project</option>
                  <option value="collaboration">Design Collaboration</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your opportunity, project, or how we might collaborate..."
                  className="min-h-[120px]"
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-medium">Get In Touch</h3>
              <p className="text-muted-foreground">
                With 10+ years of experience in enterprise SaaS design and proven leadership 
                in building scalable design systems, I'm ready to bring strategic design thinking 
                to your organization.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-medium">{info.label}</div>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-muted-foreground">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-medium">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="p-6 border-0 bg-accent/50">
              <div className="space-y-2">
                <h4 className="font-medium">Professional Background</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Principal UI/UX Designer</strong> at Zuora Inc. (2011-2024)
                  <br />
                  <strong>Senior UI Designer</strong> at Protime Consulting (2003-2011)
                  <br />
                  Bachelor of Environmental Planning, Nanjing University
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
