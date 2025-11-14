import { X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import imgBackground from "figma:asset/aa8c97ea3175ca3435c1c2c44b621f3c2e783eab.png";
import img202404131632 from "figma:asset/64eaa9c77c81169cde356e70d73127d5d9598733.png";
import img202404131633 from "figma:asset/27bde447a06467311e5f9801ac4094f165bfd5fe.png";
import img202404131634 from "figma:asset/282a8df97c28c7a0e8a606ecfa48df8dc41e88c0.png";
import img202404131635 from "figma:asset/5eee2f0f5ad246a2be504c46936482401d18cfbd.png";
import imgChurnRiskAnalysis from "figma:asset/da461f0e9e6044c31e1971294a713ef761720f30.png";
import imgProductPerformance from "figma:asset/70c75c6f4092e52a6f5af86d7eaa29100e936e53.png";
import imgBusinessHealth from "figma:asset/4b7317cd3c097493eb9c1bfa50f359ec5c0eb062.png";

interface ProjectDetail4Props {
  open: boolean;
  onClose: () => void;
}

export function ProjectDetail4({
  open,
  onClose,
}: ProjectDetail4Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="!max-w-none w-[96vw] h-[96vh] !p-0 !rounded-xl border-0 overflow-y-auto overflow-x-hidden bg-white">
        {/* Accessible title */}
        <DialogTitle className="sr-only">
          Zuora Reporting Project - Full Case Study
        </DialogTitle>
        <DialogDescription className="sr-only">
          A comprehensive case study showcasing the Zuora Reporting
          project, including dashboard designs for Churn Risk Analysis,
          Product Performance, and Business Health monitoring.
        </DialogDescription>

        <div className="relative bg-white w-full">
          {/* Close Button - Sticky Header Bar */}
          <div className="sticky top-0 right-0 z-50 flex justify-between items-center p-4 md:p-6 bg-white/95 backdrop-blur-sm border-b border-gray-200">
            <h1 className="text-black">
              Zuora Reporting
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content Container */}
          <div className="w-full max-w-[100vw] space-y-0 overflow-x-hidden">
            {/* Slide 1: Project Overview */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                What's Zuora Reporting?
              </div>

              <div className="space-y-8 md:space-y-10">
                <p className="text-3xl md:text-5xl lg:text-6xl leading-normal text-black">
                  <span className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent">
                    Zuora Reporting
                  </span>
                  <span>
                    {" "}
                    is a suite of advanced reporting and analytics
                    dashboards that I designed for Zuora. These
                    dashboards provide deep insights into customer
                    behavior, product performance, and overall business
                    health, helping data analysts and business leaders
                    make informed decisions.
                  </span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-8">
                <div className="space-y-6">
                  <h3 className="uppercase text-black">
                    Project
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Name / Zuora Reporting Dashboards</p>
                    <p>Duration / 6 months</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="uppercase text-black">
                    My Role
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {["UX design", "UI design", "Data Visualization"].map((tag) => (
                      <div
                        key={tag}
                        className="border border-black rounded-full px-6 py-4 text-black"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Slide 2: Overview Screens */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Dashboard Overview
              </div>

              <div className="space-y-8">
                <p className="text-2xl md:text-3xl lg:text-4xl text-black leading-normal">
                  The reporting suite includes multiple specialized
                  dashboards designed to provide comprehensive visibility
                  into different aspects of the business.
                </p>

                {/* Four Overview Screenshots */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {[
                    { img: img202404131632, title: "Subscription Overview" },
                    { img: img202404131633, title: "Revenue Analytics" },
                    { img: img202404131634, title: "Customer Metrics" },
                    { img: img202404131635, title: "Financial Reports" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-4">
                      <div className="bg-[#f5f5f5] rounded-3xl overflow-hidden shadow-lg">
                        <div className="bg-white/50 backdrop-blur-sm px-4 py-2 flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-[#EE6A5F]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#F5BD4F]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#61C454]"></div>
                        </div>
                        <img
                          alt={item.title}
                          className="w-full h-auto"
                          src={item.img}
                        />
                      </div>
                      <h4 className="text-black text-center">{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Slide 3: Churn Risk Analysis */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Dashboard - Churn Risk Analysis
              </div>

              <div className="space-y-8">
                <p className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl">
                  Churn Risk Analysis
                </p>

                <p className="text-xl md:text-2xl lg:text-3xl text-black leading-normal">
                  This dashboard helps identify customers at risk of
                  churning, providing actionable insights to improve
                  retention rates and customer lifetime value.
                </p>

                <div className="bg-[#f5f5f5] rounded-3xl overflow-hidden shadow-lg">
                  <div className="bg-white/50 backdrop-blur-sm px-4 py-2 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EE6A5F]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F5BD4F]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#61C454]"></div>
                  </div>
                  <img
                    alt="Churn Risk Analysis Dashboard"
                    className="w-full h-auto"
                    src={imgChurnRiskAnalysis}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 pt-4">
                  {[
                    {
                      title: "Risk Indicators",
                      desc: "Real-time monitoring of customer engagement metrics and warning signals"
                    },
                    {
                      title: "Predictive Analytics",
                      desc: "AI-powered predictions to identify high-risk accounts before they churn"
                    },
                    {
                      title: "Action Triggers",
                      desc: "Automated alerts and recommended actions for customer success teams"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="space-y-3">
                      <h4 className="text-black">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Slide 4: Product Performance */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Dashboard - Product Performance
              </div>

              <div className="space-y-8">
                <p className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl">
                  Product Performance
                </p>

                <p className="text-xl md:text-2xl lg:text-3xl text-black leading-normal">
                  Track and analyze the performance of individual products
                  and services, enabling data-driven product strategy and
                  pricing optimization.
                </p>

                <div className="bg-[#f5f5f5] rounded-3xl overflow-hidden shadow-lg">
                  <div className="bg-white/50 backdrop-blur-sm px-4 py-2 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EE6A5F]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F5BD4F]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#61C454]"></div>
                  </div>
                  <img
                    alt="Product Performance Dashboard"
                    className="w-full h-auto"
                    src={imgProductPerformance}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 pt-4">
                  {[
                    {
                      title: "Revenue Tracking",
                      desc: "Monitor product-level revenue, MRR, and ARR trends over time"
                    },
                    {
                      title: "Adoption Metrics",
                      desc: "Analyze user adoption rates, feature usage, and engagement patterns"
                    },
                    {
                      title: "Comparative Analysis",
                      desc: "Compare performance across products, regions, and customer segments"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="space-y-3">
                      <h4 className="text-black">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Slide 5: Business Health */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Dashboard - Business Health
              </div>

              <div className="space-y-8">
                <p className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl">
                  Business Health
                </p>

                <p className="text-xl md:text-2xl lg:text-3xl text-black leading-normal">
                  A comprehensive view of overall business health,
                  combining financial metrics, customer satisfaction,
                  and operational KPIs in one unified dashboard.
                </p>

                <div className="bg-[#f5f5f5] rounded-3xl overflow-hidden shadow-lg">
                  <div className="bg-white/50 backdrop-blur-sm px-4 py-2 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EE6A5F]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F5BD4F]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#61C454]"></div>
                  </div>
                  <img
                    alt="Business Health Dashboard"
                    className="w-full h-auto"
                    src={imgBusinessHealth}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 pt-4">
                  {[
                    {
                      title: "Financial Health",
                      desc: "Track revenue growth, profit margins, and cash flow metrics"
                    },
                    {
                      title: "Customer Health",
                      desc: "Monitor NPS scores, satisfaction ratings, and support ticket trends"
                    },
                    {
                      title: "Operational Metrics",
                      desc: "View system performance, SLA compliance, and team productivity"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="space-y-3">
                      <h4 className="text-black">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Slide 6: Design Impact */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Impact & Results
              </div>

              <div className="space-y-8">
                <p className="text-3xl md:text-5xl lg:text-6xl text-black leading-normal">
                  The reporting dashboards have significantly improved
                  data accessibility and decision-making across the
                  organization.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                  {[
                    {
                      metric: "50%",
                      label: "Faster Insights"
                    },
                    {
                      metric: "300+",
                      label: "Daily Users"
                    },
                    {
                      metric: "15%",
                      label: "Reduced Churn"
                    },
                    {
                      metric: "95%",
                      label: "User Satisfaction"
                    }
                  ].map((stat, index) => (
                    <div key={index} className="space-y-3 text-center">
                      <div className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent text-5xl md:text-6xl">
                        {stat.metric}
                      </div>
                      <p className="text-black">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}