import { X, Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import svgPaths from "../imports/svg-px6vx1h0bi";

interface ResumeProps {
  open: boolean;
  onClose: () => void;
}

export function Resume({ open, onClose }: ResumeProps) {
  const handleOpenInNewWindow = () => {
    const newWindow = window.open(
      "",
      "_blank",
      "width=1000,height=800,scrollbars=yes",
    );
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - Qianli Zhang</title>
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
          Resume - Qianli Zhang
        </DialogTitle>
        <DialogDescription className="sr-only">
          Complete professional resume for Qianli Zhang,
          Principal UI/UX Designer & AI Product Developer,
          including work experience, skills, and education.
        </DialogDescription>

        <div className="relative bg-white">
          {/* Close Button and Open in New Window */}
          <div className="sticky top-0 right-0 z-50 flex justify-end items-center gap-2 p-4 bg-white/95 backdrop-blur-sm border-b">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleOpenInNewWindow}
              className="rounded-full"
              title="Open in new window"
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
                Qianli Zhang
              </h1>
              <p className="text-lg text-indigo-100 mb-4">
                Principal UI/UX Designer & AI Product Developer
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
                  Shanghai
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
                  Core Strengths
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-50 rounded-lg p-5 border-l-4 border-[#4f39f6]">
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      10+ years UI/UX design experience in
                      enterprise SaaS products, plus 8+ years
                      designing 50+ digital marketing websites
                      while managing teams of 3-4 designers.
                    </p>
                  </div>
                  <div className="bg-neutral-50 rounded-lg p-5 border-l-4 border-[#9810fa]">
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      Recent focus on AI product development -
                      built an AI-powered digital marketing
                      platform and produced multiple
                      AI-generated videos using cutting-edge
                      tools.
                    </p>
                  </div>
                  <div className="bg-neutral-50 rounded-lg p-5 border-l-4 border-[#4f39f6]">
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      Built complete subscription billing system
                      from ground up, covering customer
                      accounts, product catalogs, subscriptions,
                      invoicing, payments, and reporting.
                    </p>
                  </div>
                  <div className="bg-neutral-50 rounded-lg p-5 border-l-4 border-[#9810fa]">
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      Strong expertise in design system
                      development and maintenance, ensuring
                      brand consistency and optimal user
                      experience across products.
                    </p>
                  </div>
                  <div className="bg-neutral-50 rounded-lg p-5 border-l-4 border-[#4f39f6]">
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      Designed Salesforce-based CPQ interface
                      enabling flexible subscription, product,
                      and service quoting.
                    </p>
                  </div>
                  <div className="bg-neutral-50 rounded-lg p-5 border-l-4 border-[#9810fa]">
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      Early adopter of AI in design workflow -
                      pioneered GPT-based Analytics AI for
                      advanced data analysis and predictions.
                    </p>
                  </div>
                </div>
              </section>

              {/* Key Skills */}
              <section>
                <h2 className="text-lg text-neutral-900 border-b-2 border-[#4f39f6] pb-2 mb-6">
                  Key Skills
                </h2>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-indigo-100 text-[#432dd7] px-4 py-2 rounded-full text-sm">
                    UI/UX Design
                  </span>
                  <span className="bg-purple-100 text-[#8200db] px-4 py-2 rounded-full text-sm">
                    Prototyping
                  </span>
                  <span className="bg-indigo-100 text-[#432dd7] px-4 py-2 rounded-full text-sm">
                    AI Product Development
                  </span>
                  <span className="bg-purple-100 text-[#8200db] px-4 py-2 rounded-full text-sm">
                    AI Video Production
                  </span>
                  <span className="bg-indigo-100 text-[#432dd7] px-4 py-2 rounded-full text-sm">
                    SaaS Platforms
                  </span>
                  <span className="bg-purple-100 text-[#8200db] px-4 py-2 rounded-full text-sm">
                    Design Systems
                  </span>
                  <span className="bg-indigo-100 text-[#432dd7] px-4 py-2 rounded-full text-sm">
                    User Research
                  </span>
                  <span className="bg-purple-100 text-[#8200db] px-4 py-2 rounded-full text-sm">
                    Team Leadership
                  </span>
                </div>
              </section>

              {/* Work Experience */}
              <section>
                <h2 className="text-lg text-neutral-900 border-b-2 border-[#4f39f6] pb-2 mb-6">
                  Work Experience
                </h2>

                {/* AI Product Designer & Developer */}
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-base text-neutral-900">
                        AI Product Designer & Developer
                      </h3>
                      <p className="text-sm text-[#4f39f6]">
                        Independent
                      </p>
                    </div>
                    <span className="bg-indigo-50 text-[#432dd7] px-3 py-1 rounded text-sm">
                      2024.02 - Present
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Designed and built AI-driven digital
                        marketing platform integrating content
                        generation, analytics, and automated
                        workflows.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Produced several AI videos using tools
                        like Midjourney, Sora, Jimeng AI, Kling,
                        and Tongyi for various marketing
                        campaigns.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Explored AI coding assistants (Cursor,
                        GitHub Copilot) to accelerate product
                        development and prototype iteration.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Principal UI/UX Designer */}
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-base text-neutral-900">
                        Principal UI/UX Designer
                      </h3>
                      <p className="text-sm text-[#4f39f6]">
                        Zuora Inc.
                      </p>
                    </div>
                    <span className="bg-indigo-50 text-[#432dd7] px-3 py-1 rounded text-sm">
                      2019.03 - 2024.02
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Led design for billing, payments,
                        finance, reporting, analytics, and CPQ
                        products for a billion-dollar enterprise
                        billing system.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Led Zuora Billing end-to-end UI design
                        and UX Foundation, shaping the product
                        where Zuora's UX/UI foundation.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Built data management interfaces for
                        Zuora Analytics (+ features powered by
                        GPT technology).
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Coordinated with third-party teams and
                        internal devs on Revpro project to
                        modernize legacy UI across all products.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Designed dashboards and reporting views
                        for Zuora Revenue product line.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Created dashboards for Salesforce CPQ
                        interface for flexible pricing and
                        quoting legacy UI.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Staff UI/UX Designer */}
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-base text-neutral-900">
                        Staff UI/UX Designer
                      </h3>
                      <p className="text-sm text-[#4f39f6]">
                        Zuora Inc.
                      </p>
                    </div>
                    <span className="bg-indigo-50 text-[#432dd7] px-3 py-1 rounded text-sm">
                      2011.01 - 2019.03
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Owned design for multiple Zuora products
                        including Billing, Payments, Finance,
                        Reporting modules.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Designed billing workflows including
                        customer accounts, product catalogs,
                        subscriptions, invoicing, pricing,
                        collections and revenue recognition.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Led and Designed the entire Zuora
                        Billing end-to-end UX Foundation.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Built Finance module interfaces for
                        accounting cycles, journal entries, and
                        revenue recognition.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Created management pages for GL and
                        Revenue Rule Setup, Payment Gateway,
                        Billing and Payment Operations.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Coordinated with third party teams and
                        internal devs on Revpro project to
                        modernize legacy UI across all products.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Designed CPQ interface in Salesforce
                        platform for flexible pricing, quoting
                        and service.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Created dashboards and reporting views
                        for Zuora Revenue product line.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Senior UI Designer */}
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-base text-neutral-900">
                        Senior UI Designer
                      </h3>
                      <p className="text-sm text-[#4f39f6]">
                        Protime
                      </p>
                    </div>
                    <span className="bg-indigo-50 text-[#432dd7] px-3 py-1 rounded text-sm">
                      2003.04 - 2011.01
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Managed team of 3-4 designers and
                        delivered 50+ website design projects
                        for various clients.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Implemented flexible CMS platform for
                        dynamic content management and
                        multi-channel publishing.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Key clients: Sony, Estée Lauder,
                        Shanghai Tobacco, Xintiandi and other
                        major brands.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Web Designer */}
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-base text-neutral-900">
                        Web Designer
                      </h3>
                      <p className="text-sm text-[#4f39f6]">
                        Yifei Group
                      </p>
                    </div>
                    <span className="bg-indigo-50 text-[#432dd7] px-3 py-1 rounded text-sm">
                      2000.01 - 2003.04
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li className="flex gap-2">
                      <span className="text-[#4f39f6]">•</span>
                      <span>
                        Designed marketing website for Yifei
                        Group, Shaolin Temple, Jiyitang, and
                        other enterprise clients.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-lg text-neutral-900 border-b-2 border-[#4f39f6] pb-2 mb-6">
                  Education
                </h2>
                <div className="bg-neutral-50 rounded-lg p-5">
                  <h3 className="text-base text-neutral-900 mb-1">
                    Bachelor's Degree in Environmental Planning
                    and Management
                  </h3>
                  <p className="text-sm text-[#4f39f6] mb-1">
                    Nanjing University
                  </p>
                  <p className="text-sm text-neutral-600">
                    1993 - 1997
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