import { X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import svgPaths from "../imports/svg-2zbodpgazv";
import imgShadow from "figma:asset/4ac2a44c3cbd30bce32c43c4a1aa1be83d8eb35f.png";
import imgMain from "figma:asset/47682ed4aeaaac9a79a2e9b729b8b6da69011b18.png";
import imgIMacColor from "figma:asset/cc803cc3fd487a58f29f334ceacc2a17238a7a6d.png";
import imgIMacScreen from "figma:asset/527866d8d3f1a65e3862d018612c27aa5b4ffa56.png";
import imgVector6 from "figma:asset/40c27fe5d2805ca5ec0bcab50fc991340f495de4.png";
import img63Dd120F51144912914E5F2B578928A91 from "figma:asset/3fb41c9cda25bcd5b2f602a80fde8ebdc39397fa.png";
import imgAnalyticsAi1 from "figma:asset/38b1d1e58b9cab216e9d28b3520eda59505c4f95.png";
import img202404021337 from "figma:asset/8fcee5a268b2684562c332e3a2b90de90fb65ded.png";
import img202404021338 from "figma:asset/70515e1880081870962e4ac02dc204c0881c6277.png";
import img202404021507 from "figma:asset/35318efce8feb21f02a791e7737c1771c3d42a0c.png";
import img202404021508 from "figma:asset/5858c1b065a596436aff55ac894a663f770d3846.png";
import img2024040215101 from "figma:asset/9c366210f7242395feeead1f0b376af97c1502fe.png";
import imgAskAiModal01 from "figma:asset/c0aec1367d55dbf2fc1c3f4fe350a79e7d272dc7.png";
import imgAskAiModal1 from "figma:asset/50c19f9f463c956dfc10848be866150acac65925.png";
import img202404021535 from "figma:asset/f1bc077a4966b3e55bceb49205809c60fbeb0b8f.png";
import imgAskAiModalDropdown from "figma:asset/54824d446cb84cc86ce3d871856194fb86c1e11e.png";
import imgAskAiModalPopup from "figma:asset/12acf87483435cb3b0dcb30f608a8d50cd6c9d0f.png";
import imgAskAiModalSketelon from "figma:asset/e0ae24a9c14f7ad3214352a5507a8afddff116bc.png";
import imgSessionTimesOut from "figma:asset/25f6e9730f59439e46f3085b76a7012d01eefab3.png";

interface ProjectDetail3Props {
  open: boolean;
  onClose: () => void;
}

export function ProjectDetail3({
  open,
  onClose,
}: ProjectDetail3Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="!max-w-none w-[96vw] h-[96vh] !p-0 !rounded-xl border-0 overflow-y-auto overflow-x-hidden bg-white">
        {/* Accessible title */}
        <DialogTitle className="sr-only">
          Zuora Analytics AI Project - Full Case Study
        </DialogTitle>
        <DialogDescription className="sr-only">
          A comprehensive case study showcasing the Zuora
          Analytics AI project, including problems, solutions,
          design process, user personas, and final
          implementations.
        </DialogDescription>

        <div className="relative bg-white w-full">
          {/* Close Button - Sticky Header Bar */}
          <div className="sticky top-0 right-0 z-50 flex justify-between items-center p-4 md:p-6 bg-white/95 backdrop-blur-sm border-b border-gray-200">
            <h1 className="text-black">Zuora Analytics AI</h1>
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
          <div className="w-full max-w-[100vw] overflow-x-hidden">
            {/* Slide 1 - Project Overview */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-8 md:space-y-12">
              <div className="text-muted-foreground">
                What's Zuora Analytics AI?
              </div>

              <div className="space-y-8 md:space-y-10">
                <p className="text-3xl md:text-5xl lg:text-6xl leading-normal text-black">
                  <span className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent">
                    Zuora Analytics AI
                  </span>
                  <span>
                    {" "}
                    brings natural language queries to data analytics. Data analysts and financial analysts can now simply ask questions in plain English and instantly get the reports they need—no complex filtering, joining, or manual chart building required.
                  </span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 pt-8">
                <div className="space-y-6">
                  <h3 className="uppercase text-black">
                    Project
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Name / Zuora Analytics AI</p>
                    <p>Duration / 4 months</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="uppercase text-black">
                    My Role
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {["UX design", "UI design"].map((tag) => (
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

            {/* Slide 2 - Problems */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12 md:space-y-20">
              <div className="text-muted-foreground">
                Problems
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Icon */}
                <div className="flex-shrink-0 bg-[rgba(26,10,73,0.5)] rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100px] p-6 md:p-8 w-40 h-40 md:w-52 md:h-52 flex items-center justify-center">
                  <div className="w-28 h-28 md:w-40 md:h-40">
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

                {/* Problems List */}
                <div className="flex-1 space-y-8 md:space-y-12">
                  <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {[
                      {
                        num: "01",
                        text: "Analytics Explorer's workflow felt overwhelming—analysts spent hours just finding, filtering, joining, and visualizing the right data sources.",
                      },
                      {
                        num: "02",
                        text: "Every query required exact keywords and parameters. One typo or forgotten field meant starting over.",
                      },
                      {
                        num: "03",
                        text: "Creating charts meant manually selecting chart types, configuring data fields from limited options, and tweaking settings until they looked right.",
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

                  <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {[
                      {
                        num: "04",
                        text: "Sharing insights required switching between Explorer's card page and dashboards—a cumbersome process that broke workflow continuity.",
                      },
                      {
                        num: "05",
                        text: "The rigid interface couldn't adapt to how analysts actually work—they needed flexibility, not more clicks and context switching.",
                      },
                      {
                        num: "06",
                        text: "Time spent wrestling with the tool meant less time extracting valuable insights from the data.",
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
              </div>
            </section>

            {/* Slide 3 - Proposed Solutions */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12 md:space-y-20">
              <div className="text-muted-foreground">
                Proposed Solutions
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Solutions List */}
                <div className="flex-1 space-y-8 md:space-y-12">
                  <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {[
                      {
                        num: "01",
                        text: "Introduced natural language queries powered by OpenAI. Users now simply ask questions in plain English to access reports and data.",
                      },
                      {
                        num: "02",
                        text: "Integrated OpenAI's GPT technology to understand context, interpret intent, and deliver accurate results from natural language inputs.",
                      },
                      {
                        num: "03",
                        text: "Built an intuitive text interface where users describe what they need instead of constructing complex queries with exact syntax.",
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

                  <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {[
                      {
                        num: "04",
                        text: "Automated chart creation—describe the visualization you want and the system generates it with appropriate styling and data fields.",
                      },
                      {
                        num: "05",
                        text: "Streamlined sharing workflow. Pin and distribute charts directly from a single interface without switching contexts.",
                      },
                      {
                        num: "06",
                        text: "Added contextual prompts and helpful guidance throughout the interface to make AI interactions feel natural and approachable.",
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

                {/* Icon */}
                <div className="flex-shrink-0 bg-gradient-to-br from-[#4A3BE1] to-[#AD35CC] rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] p-6 md:p-8 w-40 h-40 md:w-52 md:h-52 flex items-center justify-center">
                  <div className="w-28 h-28 md:w-40 md:h-40">
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

            {/* Slide 4 - User Persona */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12 md:space-y-20">
              <div className="text-muted-foreground">
                Know Users
              </div>

              <div className="space-y-8">
                <p className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl">
                  User Persona
                </p>
              </div>

              {/* User Persona Row - Horizontal Layout */}
              <div className="bg-neutral-100 rounded-[80px] md:rounded-[100px] p-6 md:p-12 lg:p-16 w-full">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                  {/* Left: Persona Card - Fixed width, narrower */}
                  <div className="bg-gradient-to-br from-[#4A3BE1] to-[#AD35CC] rounded-[60px] md:rounded-[80px] p-6 md:p-10 lg:w-[420px] xl:w-[480px] flex-shrink-0">
                    <div className="space-y-5 md:space-y-6">
                      {/* Profile Picture with Circular Frame - Smaller */}
                      <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
                        {/* White Pill Border */}
                        <div className="absolute inset-0 border-2 border-white rounded-full pointer-events-none" />

                        {/* Gradient Circle Border */}
                        <div className="absolute inset-[5%] rounded-full">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 345 345"
                          >
                            <circle
                              cx="172.496"
                              cy="172.496"
                              r="170.032"
                              stroke="url(#paint0_linear_persona)"
                              strokeWidth="4.92635"
                            />
                            <circle
                              cx="172.496"
                              cy="172.496"
                              fill="url(#paint1_linear_persona)"
                              r="170.032"
                              stroke="url(#paint2_linear_persona)"
                              strokeWidth="4.92635"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_persona"
                                x1="53.3587"
                                x2="301.752"
                                y1="27.5993"
                                y2="310.952"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#4A3BE1" />
                                <stop
                                  offset="0.295"
                                  stopColor="#3626D9"
                                />
                                <stop
                                  offset="1"
                                  stopColor="#AD35CC"
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_persona"
                                x1="53.3587"
                                x2="301.752"
                                y1="27.5993"
                                y2="310.952"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#4A3BE1" />
                                <stop
                                  offset="0.295"
                                  stopColor="#3626D9"
                                />
                                <stop
                                  offset="1"
                                  stopColor="#AD35CC"
                                />
                              </linearGradient>
                              <linearGradient
                                id="paint2_linear_persona"
                                x1="53.3587"
                                x2="301.752"
                                y1="27.5993"
                                y2="310.952"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#4A3BE1" />
                                <stop
                                  offset="0.295"
                                  stopColor="#3626D9"
                                />
                                <stop
                                  offset="1"
                                  stopColor="#AD35CC"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>

                        {/* Profile Image - Black and White */}
                        <div className="absolute left-[7%] top-[6%] w-[86%] h-[88%] rounded-full overflow-hidden">
                          <img
                            alt="User Persona - David"
                            className="w-full h-full object-cover grayscale"
                            src={
                              img63Dd120F51144912914E5F2B578928A91
                            }
                          />
                        </div>
                      </div>

                      {/* User Info */}
                      <div className="space-y-3 md:space-y-4 text-white text-center">
                        <div className="space-y-1 md:space-y-2">
                          <p className="text-base md:text-lg">
                            Data Analyst
                          </p>
                          <p className="text-5xl md:text-6xl lg:text-7xl leading-[0.9]">
                            David
                          </p>
                        </div>
                        <div className="border-t-2 border-b-2 border-white py-2 md:py-3">
                          <p className="text-sm md:text-base">
                            33 years old // Washington, Virginia
                          </p>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="space-y-2 md:space-y-3 mt-4 md:mt-6">
                        <div className="w-16 h-12 md:w-20 md:h-14">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 115 66"
                          >
                            <path
                              d={svgPaths.p176b3f80}
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div className="text-white text-base md:text-lg leading-relaxed">
                          <p className="mb-3">
                            "I love finding insights from data
                            and communicating them to the
                            business stakeholders."
                          </p>
                          <p>
                            "Zuora helps me manage and analyze
                            the subscription data of our
                            customers more efficiently and
                            accurately."
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Persona Details - Two Column Grid - Takes remaining space */}
                  <div className="flex-1 grid md:grid-cols-2 gap-6 md:gap-8">
                    {/* Column 1 */}
                    <div className="space-y-5 md:space-y-6">
                      {/* Goals and challenges */}
                      <div className="space-y-3">
                        <div className="border-b-2 border-black pb-2">
                          <h3 className="text-black text-base md:text-lg">
                            Goals and challenges
                          </h3>
                        </div>
                        <ul className="space-y-2 text-black text-sm md:text-base list-disc pl-5">
                          <li>
                            To provide timely and reliable data
                            insights to support business
                            decisions and strategies
                          </li>
                          <li>
                            To keep up with the latest trends
                            and best practices in data analysis
                            and visualization
                          </li>
                          <li>
                            To collaborate with data engineers,
                            data scientists, and business
                            analysts to ensure data quality and
                            consistency
                          </li>
                          <li>
                            To deal with complex and large-scale
                            data sets from various sources and
                            platforms
                          </li>
                        </ul>
                      </div>

                      {/* Pain points and needs */}
                      <div className="space-y-3">
                        <div className="border-b-2 border-black pb-2">
                          <h3 className="text-black text-base md:text-lg">
                            Pain points and needs
                          </h3>
                        </div>
                        <ul className="space-y-2 text-black text-sm md:text-base list-disc pl-5">
                          <li>
                            Lack of standardized and automated
                            data pipelines and workflows
                          </li>
                          <li>
                            Difficulty in integrating and
                            reconciling data from different
                            systems and formats
                          </li>
                          <li>
                            Limited access and visibility to the
                            subscription data and metrics
                          </li>
                          <li>
                            High dependency on IT and data
                            engineering teams for data requests
                            and issues
                          </li>
                        </ul>
                      </div>

                      {/* Preferences and behaviors */}
                      <div className="space-y-3">
                        <div className="border-b-2 border-black pb-2">
                          <h3 className="text-black text-base md:text-lg">
                            Preferences and behaviors
                          </h3>
                        </div>
                        <ul className="space-y-2 text-black text-sm md:text-base list-disc pl-5">
                          <li>
                            Uses SQL, Python, and R for data
                            manipulation and analysis
                          </li>
                          <li>
                            Uses Google Sheets, Power BI, and
                            Tableau for data visualization and
                            reporting
                          </li>
                          <li>
                            Prefers self-service and cloud-based
                            solutions for data access and
                            management
                          </li>
                          <li>
                            Enjoys learning new skills and tools
                            through online courses, webinars,
                            and blogs
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-5 md:space-y-6">
                      {/* Motivations and values */}
                      <div className="space-y-3">
                        <div className="border-b-2 border-black pb-2">
                          <h3 className="text-black text-base md:text-lg">
                            Motivations and values
                          </h3>
                        </div>
                        <ul className="space-y-2 text-black text-sm md:text-base list-disc pl-5">
                          <li>
                            Curiosity and passion for data and
                            analytics
                          </li>
                          <li>
                            Desire to add value and impact to
                            the business through data insights
                          </li>
                          <li>
                            Appreciation for data quality,
                            accuracy, and integrity
                          </li>
                          <li>
                            Recognition and feedback for his
                            work and achievements
                          </li>
                        </ul>
                      </div>

                      {/* Scenarios and use cases */}
                      <div className="space-y-3">
                        <div className="border-b-2 border-black pb-2">
                          <h3 className="text-black text-base md:text-lg">
                            Scenarios and use cases
                          </h3>
                        </div>
                        <ul className="space-y-2 text-black text-sm md:text-base list-disc pl-5">
                          <li>
                            David uses Zuora to access and
                            analyze the subscription data of his
                            company's customers, such as churn
                            rate, retention rate, lifetime
                            value, and revenue recognition.
                          </li>
                          <li>
                            David creates dashboards and reports
                            using Zuora and Power BI to present
                            and share the data insights with the
                            business stakeholders and leaders.
                          </li>
                          <li>
                            David leverages Zuora's APIs and
                            integrations to connect and sync the
                            subscription data with other data
                            sources and platforms, such as
                            Salesforce, Google Analytics, and
                            Snowflake.
                          </li>
                          <li>
                            David attends Zuora's webinars and
                            events to learn more about Zuora's
                            features and best practices, and to
                            network with other data
                            professionals and Zuora users.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Slide 5 - User Journey Map */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Know Users
              </div>
              <p className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl text-right">
                User Journey Map
              </p>
              <div className="relative w-full mt-12">
                <img
                  alt="User Journey Map - Analytics AI"
                  className="w-full h-auto"
                  src={imgAnalyticsAi1}
                />
              </div>
            </section>

            {/* Slide 6 - Design Thinking: Mockup Options */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Design Thinking
              </div>

              <div className="space-y-8 md:space-y-12">
                {/* Icon */}
                <div className="bg-gradient-to-br from-[#4A3BE1] to-[#AD35CC] rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] p-8 md:p-10 w-fit">
                  <div className="w-32 h-32 md:w-40 md:h-40">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 160 160"
                    >
                      <path
                        d={svgPaths.p3fce6c00}
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-3xl md:text-5xl lg:text-6xl text-black leading-normal">
                  Created several mockups options for the
                  interface design of the Analytics AI feature.
                  Experimented with different layouts and styles
                  for the text input functionalities, as well as
                  the interaction guidance and prompt messages
                </p>
              </div>
            </section>

            {/* Slide 7 - Design Thinking: Full Width Search Bar Mode */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Design Thinking
              </div>

              <div className="space-y-8 md:space-y-12">
                <p className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl">
                  Full width search bar mode
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-black">
                  This mode allows the user to enter text input
                  on a full width search bar at the top of the
                  interface. The system responds with the chart
                  card and the prompt message below the search
                  bar.
                </p>

                {/* Design Screenshots Row */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-end">
                  <div className="bg-[#d9deec] rounded-[60px] p-8 md:p-12 overflow-hidden flex-shrink-0">
                    <div
                      className="rounded-tr-[40px] overflow-hidden"
                      style={{
                        height: "300px",
                        width: "100%",
                        maxWidth: "800px",
                      }}
                    >
                      <img
                        alt="Full width search bar - example 1"
                        className="w-full h-full object-cover object-top"
                        src={img202404021337}
                      />
                    </div>
                  </div>
                  <div className="flex-1 bg-[#d9deec] rounded-[60px] p-8 md:p-12 overflow-hidden">
                    <div
                      className="rounded-[40px] overflow-hidden"
                      style={{
                        height: "450px",
                        width: "100%",
                        maxWidth: "800px",
                      }}
                    >
                      <img
                        alt="Full width search bar - example 2"
                        className="w-full h-full object-cover object-top"
                        src={img202404021338}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Slide 8 - Design Thinking: Sidebar Mode */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Design Thinking
              </div>

              <div className="space-y-8 md:space-y-12">
                <p className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl">
                  Sidebar mode
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-black">
                  This mode allows the user to enter text input
                  on a side bar at the right of the interface.
                  The system responds with the chart card and
                  the prompt message on the right side of the
                  interface.
                </p>

                {/* Three Screenshots */}
                <div className="bg-[#d9deec] rounded-[60px] p-6 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    {[
                      img202404021507,
                      img202404021508,
                      img2024040215101,
                    ].map((img, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-[40px] overflow-hidden"
                        style={{ height: "500px" }}
                      >
                        <img
                          alt={`Sidebar mode - example ${index + 1}`}
                          className="w-full h-full object-cover object-bottom"
                          src={img}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Slide 9 - Design & Prototype: Popup Modal Mode */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Design & Prototype
              </div>

              <div className="space-y-8 md:space-y-12">
                {/* Icon */}
                <div className="bg-gradient-to-br from-[#4A3BE1] to-[#AD35CC] rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] p-8 md:p-10 w-fit">
                  <div className="w-32 h-32 md:w-40 md:h-40">
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

                <p className="text-3xl md:text-5xl lg:text-6xl text-black leading-normal">
                  The final high-fidelity prototype that I
                  created for the Analytics AI feature was using
                  a{" "}
                  <span className="bg-gradient-to-r from-[#4A3BE1] to-[#AD35CC] bg-clip-text text-transparent">
                    popup modal
                  </span>{" "}
                  mode. In this mode, the user can enter text
                  input on a popup window that appears on the
                  interface.
                </p>

                <div className="flex flex-wrap gap-4">
                  <h3 className="uppercase text-black w-full">
                    Tools
                  </h3>
                  {["Figma", "Jira"].map((tool) => (
                    <div
                      key={tool}
                      className="border border-black rounded-full px-6 py-4 text-black"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Slide 10 - Popup Modal Description */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <p className="text-3xl md:text-5xl lg:text-6xl text-black leading-normal">
                The system responds with the chart card and the
                prompt message on the same window.
              </p>
            </section>

            {/* Final Design Screenshots Grid */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="text-muted-foreground">
                Final Design
              </div>

              {/* 2x2 Grid Layout */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4">
                  <h4 className="text-black">
                    Ask AI Modal - Empty State
                  </h4>
                  <div className="rounded-3xl overflow-hidden shadow-lg">
                    <img
                      alt="Ask AI Modal - Empty State"
                      className="w-full h-auto"
                      src={imgAskAiModal01}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-black">
                    Ask AI Modal - Active State
                  </h4>
                  <div className="rounded-3xl overflow-hidden shadow-lg">
                    <img
                      alt="Ask AI Modal - Active State"
                      className="w-full h-auto"
                      src={imgAskAiModal1}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-black">
                    Ask AI Modal - Multiple Charts
                  </h4>
                  <div className="rounded-3xl overflow-hidden shadow-lg">
                    <img
                      alt="Ask AI Modal - Multiple Charts"
                      className="w-full h-auto"
                      src={img202404021535}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-black">
                    Ask AI Modal - Dropdown Options
                  </h4>
                  <div className="rounded-3xl overflow-hidden shadow-lg">
                    <img
                      alt="Ask AI Modal - Dropdown Options"
                      className="w-full h-auto"
                      src={imgAskAiModalDropdown}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* More Design Screenshots */}
            <section className="bg-white px-6 md:px-16 lg:px-28 py-16 md:py-20 space-y-12">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4">
                  <h4 className="text-black">
                    Ask AI Modal - Success Popup
                  </h4>
                  <div className="rounded-3xl overflow-hidden shadow-lg">
                    <img
                      alt="Ask AI Modal - Success Popup"
                      className="w-full h-auto"
                      src={imgAskAiModalPopup}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-black">
                    Ask AI Modal - Loading Skeleton
                  </h4>
                  <div className="rounded-3xl overflow-hidden shadow-lg">
                    <img
                      alt="Ask AI Modal - Loading Skeleton"
                      className="w-full h-auto"
                      src={imgAskAiModalSketelon}
                    />
                  </div>
                </div>
                <div className="space-y-4 md:col-span-2">
                  <h4 className="text-black">
                    Session Timeout Handling
                  </h4>
                  <div className="rounded-3xl overflow-hidden shadow-lg">
                    <img
                      alt="Session Timeout Handling"
                      className="w-full h-auto"
                      src={imgSessionTimesOut}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}