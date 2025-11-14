import { X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import svgPaths from "../imports/svg-6guxwfnjut";
import imgShadow from "figma:asset/479b6edc82a84425502a7dda07712ccc341d06a2.png";
import imgMain from "figma:asset/f3d7d3f689137960b198dcfaa3b82d31783df4c7.png";
import imgMacbookProLabel from "figma:asset/c024f5420cbb2297f42eee8f92fb49f7028070fa.png";
import imgShape from "figma:asset/5b7e8873145bc9cd113c34c8a7331b02b089ba99.png";
import imgArrow1 from "figma:asset/d7436711ccb06534019634939e2eb19735d4f02e.png";
import imgMisc1 from "figma:asset/28b44fb5216aa4fe7adcb58830c2e94f750c245a.png";
import imgColorSystem1 from "figma:asset/88b672e2f6efdeab253df9b8704ce9a790608c9c.png";
import imgLightTheme1 from "figma:asset/7f2a495867721ef5c4eada99ae7f28f086dcef24.png";
import imgCustomerAccount21 from "figma:asset/2573b210d01d37cdf89a8621da9515dd49d54eb8.png";
import imgMaketplaceList21 from "figma:asset/a3ea1291f11574a4af266f9b400e4037d3755af0.png";
import imgFilters1 from "figma:asset/31232f98a8a6a5a4d062e80d173013e2ec2a4167.png";
import imgAmendment41 from "figma:asset/a17ef388f20a4d2aece397486a079e94b943c94d.png";
import imgCustomerAccounts1 from "figma:asset/3be0251ebbb38b7a053227bbd89e9cb0611b16f3.png";
import imgProducts1 from "figma:asset/bb139b447de1bcad0c056a8fadf891a1acaa63bb.png";
import imgSubscription1 from "figma:asset/4cf37dcf529c8d881ed7e15bfd11a6f5be72beae.png";
import imgRevenueSection1 from "figma:asset/d71f34c696eae0f0947cafddfb98be94355c5ecf.png";

interface ProjectDetailProps {
  open: boolean;
  onClose: () => void;
}

export function ProjectDetail({
  open,
  onClose,
}: ProjectDetailProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="!max-w-none w-[96vw] h-[96vh] !p-0 !rounded-xl border-0 overflow-y-auto">
        {/* Accessible title - visually hidden but available for screen readers */}
        <DialogTitle className="sr-only">
          Zuora UI Restyle Project - Full Case Study
        </DialogTitle>
        <DialogDescription className="sr-only">
          A comprehensive case study showcasing the Zuora UI
          Restyle project, including problems, solutions, design
          process, and final implementations.
        </DialogDescription>

        <div className="relative bg-white">
          {/* Close Button - Sticky Header Bar */}
          <div className="sticky top-0 right-0 z-50 flex justify-between items-center p-4 bg-white/95 backdrop-blur-sm border-b">
            <h1 className="font-medium text-foreground">Zuora UI Restyle</h1>
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
          <div className="space-y-0">
            {/* Slide 1: Project Overview */}
            <section className="bg-white px-8 md:px-16 lg:px-24 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                What's Zuora UI Restyle?
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl text-foreground leading-normal">
                  <span className="text-primary">
                    Zuora UI Restyle
                  </span>
                  {` redesigned the company's billing and revenue management system to align with modern design standards and the overall brand refresh. This initiative improved user experience while strengthening Zuora's market position.`}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 pt-8">
                <div className="space-y-4">
                  <h3 className="uppercase text-foreground">
                    Project
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Name / Zuora UI Restyle</p>
                    <p>Duration / 9 months</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="uppercase text-foreground">
                    My Role
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "UX design",
                      "UI design",
                      "Design Manage",
                    ].map((tag) => (
                      <div
                        key={tag}
                        className="border border-foreground rounded-full px-6 py-3"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Slide 2: Problems */}
            <section className="bg-white px-8 md:px-16 lg:px-24 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Problems
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-shrink-0 bg-[#a1a6c0] rounded-full p-8 w-48 h-48 flex items-center justify-center">
                  <div className="w-32 h-32">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 160 160"
                    >
                      <path
                        d={svgPaths.p19496680}
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 space-y-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        num: "01",
                        text: "The existing interface looked dated and lacked consistency. Icons, labels, and menus didn't follow modern standards, and the color scheme and typography were misaligned with the new brand identity.",
                      },
                      {
                        num: "02",
                        text: "User feedback revealed a disconnect between expectations and what the interface delivered. The outdated design didn't reflect Zuora's evolving market position.",
                      },
                      {
                        num: "03",
                        text: "Critical features like custom reporting, data export, and third-party integrations were either missing or poorly implemented, limiting user productivity.",
                      },
                    ].map((item) => (
                      <div key={item.num} className="space-y-4">
                        <div className="text-[#bfbfbf] text-5xl md:text-6xl opacity-50">
                          {item.num}
                        </div>
                        <p className="text-foreground text-lg">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      {
                        num: "04",
                        text: "Without proper testing and optimization, the interface suffered from usability issues, bugs, and compatibility problems that undermined product reliability.",
                      },
                      {
                        num: "05",
                        text: "Accessibility was an afterthought. The interface failed to meet basic standards like alt text for images, proper contrast ratios, and adequate font sizing.",
                      },
                    ].map((item) => (
                      <div key={item.num} className="space-y-4">
                        <div className="text-[#bfbfbf] text-5xl md:text-6xl opacity-50">
                          {item.num}
                        </div>
                        <p className="text-foreground text-lg">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Slide 3: Proposed Solutions */}
            <section className="bg-white px-8 md:px-16 lg:px-24 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Proposed Solutions
              </div>

              <div className="flex gap-8 items-start">
                <div className="flex-1 space-y-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        num: "01",
                        text: "Modernized the interface with intuitive icons, clear labels, and simplified navigation. Applied a consistent color scheme and typography aligned with the brand refresh.",
                      },
                      {
                        num: "02",
                        text: "Collaborated extensively with internal teams and stakeholders to understand user needs and translate them into actionable design solutions.",
                      },
                      {
                        num: "03",
                        text: "Partnered with development teams to ensure designs were technically feasible and could be implemented efficiently without compromising the vision.",
                      },
                    ].map((item) => (
                      <div key={item.num} className="space-y-4">
                        <div className="text-primary text-5xl md:text-6xl">
                          {item.num}
                        </div>
                        <p className="text-foreground text-lg">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      {
                        num: "04",
                        text: "Established a rigorous testing process with iterative feedback loops, ensuring the interface met user needs while maintaining reliability and cross-platform compatibility.",
                      },
                      {
                        num: "05",
                        text: "Prioritized accessibility from the start—implementing proper alt text, contrast ratios, font sizing, and keyboard navigation throughout the interface.",
                      },
                    ].map((item) => (
                      <div key={item.num} className="space-y-4">
                        <div className="text-primary text-5xl md:text-6xl">
                          {item.num}
                        </div>
                        <p className="text-foreground text-lg">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 bg-primary rounded-full p-8 w-48 h-48 flex items-center justify-center">
                  <div className="w-32 h-32">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 160 160"
                    >
                      <path
                        d={svgPaths.p26df8100}
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </section>

            {/* Slide 4: Design Thinking */}
            <section className="bg-white px-8 md:px-16 lg:px-24 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Design Thinking
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {[
                  "Design Thinking",
                  "Design & Prototype",
                  "Deliver",
                  "Tweak & Evolve",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4"
                  >
                    <div className="bg-foreground text-background rounded-full px-6 py-3">
                      {step}
                    </div>
                    {index < 3 && (
                      <img
                        alt=""
                        className="h-5"
                        src={imgArrow1}
                      />
                    )}
                  </div>
                ))}
              </div>

              <p className="text-foreground">
                Generate and evaluate design ideas for the
                Restyle UI, based on the design objectives.
                Create low-fidelity prototypes that show the
                layout and structure of the interface. Define
                the features, functionalities, and content that
                the interface should include.
              </p>

              <div className="bg-muted rounded-[100px] p-12 flex justify-center overflow-hidden">
                <img
                  alt=""
                  className="max-w-full h-auto"
                  src={imgMisc1}
                />
              </div>
            </section>

            {/* Slide 5: Design & Prototype */}
            <section className="bg-white px-8 md:px-16 lg:px-24 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Design & Prototype
              </div>

              <div className="flex items-center justify-center">
                <div className="bg-primary rounded-full p-12">
                  <div className="w-32 h-32">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 160 160"
                    >
                      <path
                        d={svgPaths.p17159600}
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-foreground">
                  <span>Create </span>
                  <span className="text-primary">over 100</span>
                  <span>
                    {" "}
                    high-fidelity prototypes and mockups that
                    show the final appearance of the interface.
                  </span>
                </p>
                <p className="text-muted-foreground">
                  Define the color system, typography, and UI
                  elements for the interface, following the
                  brand identity and the modern design
                  standards. Document the UI components,
                  specifications, and guidelines for the
                  development team.
                </p>
              </div>

              <div className="space-y-4">
                <div className="uppercase text-foreground font-medium">
                  Tools
                </div>
                <div className="flex flex-wrap gap-3">
                  {["Figma", "Jira"].map((tool) => (
                    <div
                      key={tool}
                      className="border border-foreground rounded-full px-6 py-3"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Slide 6: Typography */}
            <section className="bg-white px-8 md:px-16 lg:px-24 py-16 md:py-20">
              <div className="text-muted-foreground mb-12">
                Design & Prototype
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-foreground">Typography</p>
                  <div className="text-muted-foreground space-y-2">
                    <p>
                      --zui-font-system: -apple-system,
                      BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                      'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid
                      Sans', 'Helvetica Neue', sans-serif;
                    </p>
                    <p>
                      --zui-font-monospace: 'IBM Plex Mono', 'SF
                      Mono', 'Segoe UI Mono', 'Roboto Mono',
                      'Ubuntu Mono', Menlo, Consolas, Courier,
                      monospace;
                    </p>
                  </div>
                </div>

                <div className="bg-muted rounded-[60px] p-12 space-y-8">
                  {[
                    {
                      title: "Display",
                      desc: "Font Size: 36px | Line Height: 44px | Weight: Regular, 400",
                    },
                    {
                      title: "Headline Large",
                      desc: "Font Size: 28px | Line Height: 40px | Weight: Medium, 500",
                    },
                    {
                      title: "Headline medium",
                      desc: "Font Size: 24px | Line Height: 36px | Weight: Medium, 500",
                    },
                    {
                      title: "Headline small",
                      desc: "Font Size: 20px | Line Height: 32px | Weight: Medium, 500",
                    },
                    {
                      title: "Title large",
                      desc: "Font Size: 17px | Line Height: 28px | Weight: Semibold, 600",
                    },
                    {
                      title: "Subtitle 1",
                      desc: "Font Size: 15px | Line Height: 24px | Weight: Semibold, 600",
                    },
                    {
                      title: "Body 1",
                      desc: "Font Size: 15px | Line Height: 24px | Weight: Regular, 400",
                    },
                    {
                      title: "Body 2",
                      desc: "Font Size: 13px | Line Height: 20px | Weight: Regular, 400",
                    },
                  ].map((item) => (
                    <div key={item.title} className="space-y-1">
                      <p className="text-foreground">
                        {item.title}
                      </p>
                      <p className="text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Slide 7: Color System */}
            <section className="bg-white px-8 md:px-16 lg:px-24 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Design & Prototype
              </div>

              <div className="space-y-6">
                <p className="text-foreground">Color System</p>
                <p className="text-muted-foreground">
                  The color system is designed to be consistent
                  with the brand identity and to provide a
                  modern and professional look and feel. The
                  color system includes primary, secondary, and
                  accent colors, as well as grayscale and
                  semantic colors for different UI elements and
                  states.
                </p>
              </div>

              <div className="rounded-[60px] overflow-hidden">
                <img
                  alt="Color System"
                  className="w-full h-auto"
                  src={imgColorSystem1}
                />
              </div>
            </section>

            {/* Slide 8: Light Theme */}
            <section className="bg-white px-8 md:px-16 lg:px-24 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Design & Prototype
              </div>

              <div className="space-y-6">
                <p className="text-foreground">Light Theme</p>
                <p className="text-muted-foreground">
                  The light theme provides a clean, modern
                  interface with excellent readability and
                  visual hierarchy. It uses the defined color
                  system to create a cohesive and professional
                  appearance across all UI components.
                </p>
              </div>

              <div className="rounded-[60px] overflow-hidden">
                <img
                  alt="Light Theme"
                  className="w-full h-auto"
                  src={imgLightTheme1}
                />
              </div>
            </section>

            {/* Final Design Section - Two Column Grid */}
            <div className="bg-white px-8 md:px-16 lg:px-24 py-16">
              {/* Section Title */}
              <div className="text-muted-foreground mb-12">Final Design</div>
              
              {/* Two Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                {[
                  {
                    title: "Customer Account",
                    img: imgCustomerAccount21,
                  },
                  {
                    title: "Marketplace List",
                    img: imgMaketplaceList21,
                  },
                  { title: "Filters", img: imgFilters1 },
                  { title: "Amendment", img: imgAmendment41 },
                  {
                    title: "Customer Accounts",
                    img: imgCustomerAccounts1,
                  },
                  { title: "Products", img: imgProducts1 },
                  {
                    title: "Subscription Management",
                    img: imgSubscription1,
                  },
                  {
                    title: "Revenue Recognition",
                    img: imgRevenueSection1,
                  },
                ].map((item) => (
                  <div key={item.title} className="space-y-6">
                    <p className="text-foreground">{item.title}</p>
                    <div className="rounded-[60px] overflow-hidden shadow-lg">
                      <img
                        alt={item.title}
                        className="w-full h-auto"
                        src={item.img}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}