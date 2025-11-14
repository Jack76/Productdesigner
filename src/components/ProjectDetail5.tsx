import { X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import imgBackground from "figma:asset/0eda3f138996a2cb80c5969bd80602b0445c5af9.png";
import img202404131807 from "figma:asset/02f9a55ceaaa4b4955ad8539c98733681986fbf0.png";
import imgDataWorkbenchNewTransform0 from "figma:asset/a0e0e10673cc284736d056a65608b51a4f3dac6c.png";
import imgDataWorkbenchNewTransform from "figma:asset/b438bef170163f7fc60e6a06436641797dbd6398.png";
import imgDataWorkbenchNewTransform2 from "figma:asset/9b429be83969b2bc9a90ae03c1e541a230e02d17.png";
import img202404131640 from "figma:asset/d12ef81368140e076be8e36e7565e72f0692fcc5.png";
import img202404131641 from "figma:asset/47ea4b2375ff5b23cc542c5cb92dbc7e4bc09d52.png";

interface ProjectDetail5Props {
  open: boolean;
  onClose: () => void;
}

export function ProjectDetail5({
  open,
  onClose,
}: ProjectDetail5Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="!max-w-none w-[96vw] h-[96vh] !p-0 !rounded-xl border-0 overflow-y-auto overflow-x-hidden bg-white">
        {/* Accessible title */}
        <DialogTitle className="sr-only">
          Zuora Data Workbench Project - Full Case Study
        </DialogTitle>
        <DialogDescription className="sr-only">
          A comprehensive case study showcasing the Zuora Data Workbench
          project, including data transformation tools and workflow
          management interfaces.
        </DialogDescription>

        <div className="relative bg-white w-full">
          {/* Close Button - Sticky Header Bar */}
          <div className="sticky top-0 right-0 z-50 flex justify-between items-center p-4 md:p-6 bg-white/95 backdrop-blur-sm border-b border-gray-200">
            <h1 className="text-black">
              Zuora Data Workbench
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
                What's Zuora Data Workbench?
              </div>

              <div className="space-y-8 md:space-y-10">
                <p className="text-3xl md:text-5xl lg:text-6xl leading-normal text-black">
                  <span className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent">
                    Zuora Data Workbench
                  </span>
                  <span>
                    {" "}
                    is a powerful data transformation and
                    management platform that I designed for
                    Zuora. It enables data engineers and
                    analysts to create, manage, and orchestrate
                    complex data pipelines through an intuitive
                    visual interface, making enterprise data
                    transformation more accessible and
                    efficient.
                  </span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-8">
                <div className="space-y-6">
                  <h3 className="uppercase text-black">
                    Project
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Name / Zuora Data Workbench</p>
                    <p>Duration / 8 months</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="uppercase text-black">
                    My Role
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {[
                      "UX design",
                      "UI design",
                      "Workflow Design",
                    ].map((tag) => (
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

            {/* Slide 2: Problems */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Problems
              </div>

              <div className="space-y-8">
                <p className="text-3xl md:text-5xl lg:text-6xl text-black leading-normal">
                  Data engineers faced significant challenges
                  managing complex data transformation workflows
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-8">
                  {[
                    {
                      num: "01",
                      text: "Manual coding required for every data transformation, leading to time-consuming development cycles",
                    },
                    {
                      num: "02",
                      text: "Limited visibility into data pipeline dependencies and workflow execution status",
                    },
                    {
                      num: "03",
                      text: "Difficult to debug and troubleshoot failed transformations without proper error tracking",
                    },
                    {
                      num: "04",
                      text: "No standardized approach to data quality validation and testing across pipelines",
                    },
                    {
                      num: "05",
                      text: "Steep learning curve for new team members to understand existing data workflows",
                    },
                    {
                      num: "06",
                      text: "Inefficient collaboration between data engineers and business analysts",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="space-y-3 md:space-y-4"
                    >
                      <div className="text-[#bfbfbf] text-4xl md:text-5xl lg:text-6xl">
                        {item.num}
                      </div>
                      <p className="text-black text-base md:text-lg lg:text-xl leading-normal">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Slide 3: Proposed Solutions */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Proposed Solutions
              </div>

              <div className="space-y-8">
                <p className="text-3xl md:text-5xl lg:text-6xl text-black leading-normal">
                  A comprehensive visual data transformation
                  platform with powerful workflow management
                  capabilities
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-8">
                  {[
                    {
                      num: "01",
                      text: "Visual transformation builder with drag-and-drop interface for creating data pipelines",
                    },
                    {
                      num: "02",
                      text: "Real-time workflow monitoring and execution tracking with detailed logs",
                    },
                    {
                      num: "03",
                      text: "Integrated error handling and debugging tools with step-by-step execution details",
                    },
                    {
                      num: "04",
                      text: "Built-in data quality validators and automated testing frameworks",
                    },
                    {
                      num: "05",
                      text: "Clear visual documentation and dependency mapping for easy onboarding",
                    },
                    {
                      num: "06",
                      text: "Collaborative features for sharing and reviewing data transformation logic",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="space-y-3 md:space-y-4"
                    >
                      <div className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
                        {item.num}
                      </div>
                      <p className="text-black text-base md:text-lg lg:text-xl leading-normal">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Slide 4: Main Dashboard */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Design & Interface
              </div>

              <div className="space-y-8">
                <p className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl">
                  Workbench Dashboard
                </p>

                <p className="text-xl md:text-2xl lg:text-3xl text-black leading-normal">
                  The main dashboard provides a centralized view
                  of all data transformation workflows, with
                  quick access to recent projects, execution
                  history, and system health.
                </p>

                <div className="bg-[#f5f5f5] rounded-3xl overflow-hidden shadow-lg">
                  <div className="bg-white/50 backdrop-blur-sm px-4 py-2 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EE6A5F]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F5BD4F]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#61C454]"></div>
                  </div>
                  <img
                    alt="Data Workbench Dashboard"
                    className="w-full h-auto"
                    src={img202404131807}
                  />
                </div>
              </div>
            </section>

            {/* Slide 5: New Transformation Flow */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Transformation Builder
              </div>

              <div className="space-y-8">
                <p className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl">
                  Creating New Transformations
                </p>

                <p className="text-xl md:text-2xl lg:text-3xl text-black leading-normal">
                  The transformation builder guides users
                  through a step-by-step process to create new
                  data pipelines, from source selection to
                  output configuration.
                </p>

                {/* Three transformation screenshots */}
                <div className="space-y-8">
                  <div className="bg-[#f5f5f5] rounded-3xl overflow-hidden shadow-lg">
                    <div className="bg-white/50 backdrop-blur-sm px-4 py-2 flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#EE6A5F]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#F5BD4F]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#61C454]"></div>
                    </div>
                    <img
                      alt="New Transformation - Step 1"
                      className="w-full h-auto"
                      src={imgDataWorkbenchNewTransform0}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-black">
                        Source Selection
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Choose from various data sources
                        including databases, APIs, and file
                        systems
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-black">
                        Transformation Logic
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Define transformation rules using visual
                        builders or SQL expressions
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-black">
                        Output Configuration
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Configure destination, scheduling, and
                        quality validation rules
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Slide 6: Transformation Configuration */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Advanced Configuration
              </div>

              <div className="space-y-8">
                <div className="bg-[#f5f5f5] rounded-3xl overflow-hidden shadow-lg">
                  <div className="bg-white/50 backdrop-blur-sm px-4 py-2 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EE6A5F]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F5BD4F]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#61C454]"></div>
                  </div>
                  <img
                    alt="Transformation Configuration"
                    className="w-full h-auto"
                    src={imgDataWorkbenchNewTransform}
                  />
                </div>

                <p className="text-xl md:text-2xl lg:text-3xl text-black leading-normal">
                  Advanced configuration options allow users to
                  fine-tune transformation behavior, set up
                  error handling, and define custom validation
                  rules.
                </p>
              </div>
            </section>

            {/* Slide 7: Testing & Validation */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Testing & Validation
              </div>

              <div className="space-y-8">
                <div className="bg-[#f5f5f5] rounded-3xl overflow-hidden shadow-lg">
                  <div className="bg-white/50 backdrop-blur-sm px-4 py-2 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EE6A5F]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F5BD4F]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#61C454]"></div>
                  </div>
                  <img
                    alt="Testing and Validation Interface"
                    className="w-full h-auto"
                    src={imgDataWorkbenchNewTransform2}
                  />
                </div>

                <p className="text-xl md:text-2xl lg:text-3xl text-black leading-normal">
                  Built-in testing tools enable users to
                  validate transformations before deployment,
                  with detailed preview of output data and
                  quality checks.
                </p>
              </div>
            </section>

            {/* Slide 9: Design Impact */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Impact & Results
              </div>

              <div className="space-y-8">
                <p className="text-3xl md:text-5xl lg:text-6xl text-black leading-normal">
                  Data Workbench has transformed how teams
                  manage and execute data transformation
                  workflows at Zuora.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                  {[
                    {
                      metric: "70%",
                      label: "Faster Development",
                    },
                    {
                      metric: "500+",
                      label: "Active Pipelines",
                    },
                    {
                      metric: "90%",
                      label: "Code Reduction",
                    },
                    {
                      metric: "98%",
                      label: "Success Rate",
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="space-y-3 text-center"
                    >
                      <div className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent text-5xl md:text-6xl">
                        {stat.metric}
                      </div>
                      <p className="text-black">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 pt-12">
                  {[
                    {
                      title: "Increased Productivity",
                      desc: "Teams can now build and deploy data pipelines 70% faster than before",
                    },
                    {
                      title: "Improved Reliability",
                      desc: "Built-in validation and testing resulted in 98% pipeline success rate",
                    },
                    {
                      title: "Enhanced Collaboration",
                      desc: "Visual interface enabled better communication between technical and business teams",
                    },
                  ].map((impact, index) => (
                    <div key={index} className="space-y-3">
                      <h4 className="text-black">
                        {impact.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {impact.desc}
                      </p>
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