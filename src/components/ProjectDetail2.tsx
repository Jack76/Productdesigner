import { X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import svgPaths from "../imports/svg-v4ujyxpb02";
import { img2024022514371 } from "../imports/svg-yfxl3";
import img2024022514372 from "figma:asset/ca3784b3b2c0d21e3327c805e6b4fc491b7b800e.png";
import img202402251437 from "figma:asset/b5ac326cf82dc47409b64494fe16ff48b388d3c7.png";
import imgFlatFeeExpanded1 from "figma:asset/611eafb2a124e6b8e003c640668d5296494cb62e.png";
import imgAddRatePlan8 from "figma:asset/7109da6031216d2e7674ca7e7160454f1254c88f.png";
import imgEditCharge from "figma:asset/b18804c877bb031b294912658bb4d1f002d0c76b.png";
import img202402251440 from "figma:asset/e4e2a79a724bafc7e2297bff6ccb12952f7e1472.png";
import img202402251441 from "figma:asset/c1c15f0159eb80593d4b0dee8795bdbdbb065268.png";
import img202402251442 from "figma:asset/f69e9f597caad30099c9b89f4ba5ea5d3fb5423f.png";
import imgDesigner31 from "figma:asset/49e298f95d890d82a1f57506960b6e68d2507fe6.png";

interface ProjectDetail2Props {
  open: boolean;
  onClose: () => void;
}

export function ProjectDetail2({
  open,
  onClose,
}: ProjectDetail2Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="!max-w-none w-[96vw] h-[96vh] !p-0 !rounded-xl border-0 overflow-y-auto overflow-x-hidden">
        {/* Accessible title */}
        <DialogTitle className="sr-only">
          Zuora Offer & Price Book Project - Full Case Study
        </DialogTitle>
        <DialogDescription className="sr-only">
          A comprehensive case study showcasing the Zuora Offer
          & Price Book project, including problems, solutions,
          design process, and final implementations.
        </DialogDescription>

        <div className="relative bg-white w-full">
          {/* Close Button - Sticky Header Bar */}
          <div className="sticky top-0 right-0 z-50 flex justify-between items-center p-4 md:p-6 bg-white/95 backdrop-blur-sm border-b border-gray-200">
            <h1 className="text-black">
              Zuora Offer & Price Book
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
            {/* Project Overview */}
            <section className="bg-[rgba(0,0,0,0.9)] px-8 md:px-16 lg:px-24 py-20 space-y-12">
              <div className="text-muted-foreground">
                What's Zuora Offer & Price Book?
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl text-white leading-normal">
                  <span className="text-[#caf178]">
                    Zuora Offer & Price Book
                  </span>
                  <span>
                    {" "}
                    transformed how users create and manage product pricing and offers. By delivering a flexible, intuitive interface, we helped customers unlock new revenue streams and streamline their complex pricing strategies.
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 pt-8">
                <div className="space-y-4">
                  <h3 className="uppercase text-white">
                    Project
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Name / Zuora Offer & Price Book</p>
                    <p>Duration / 7 months</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="uppercase text-white">
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
                        className="border border-white rounded-full px-6 py-3 text-white"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Problems */}
            <section className="bg-[rgba(0,0,0,0.9)] px-8 md:px-16 lg:px-24 py-20 space-y-12">
              <div className="text-muted-foreground">
                Problems
              </div>

              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-shrink-0 bg-[#b1b1a3] rounded-full p-8 w-52 h-52 flex items-center justify-center">
                  <div className="w-40 h-40">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 160 160"
                    >
                      <path
                        d={svgPaths.p19496680}
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 space-y-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        num: "01",
                        text: "The existing catalog was rigid and couldn't adapt to diverse business models. Users struggled to create offers that matched their varied pricing strategies.",
                      },
                      {
                        num: "02",
                        text: "Teams resorted to managing multiple catalogs across platforms or creating workarounds just to handle different packaging scenarios—a frustrating and error-prone process.",
                      },
                      {
                        num: "03",
                        text: "The interface felt clunky and inefficient, slowing down operations and creating friction for users trying to manage their product catalog.",
                      },
                    ].map((item) => (
                      <div key={item.num} className="space-y-4">
                        <div className="text-[#bfbfbf] text-5xl md:text-6xl opacity-50">
                          {item.num}
                        </div>
                        <p className="text-white text-lg">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Proposed Solutions */}
            <section className="bg-[rgba(0,0,0,0.9)] px-8 md:px-16 lg:px-24 py-20 space-y-12">
              <div className="text-muted-foreground">
                Proposed Solutions
              </div>

              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-1 space-y-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        num: "01",
                        text: "Built the Offer and Price Book interface to give users complete control over pricing. They can now create static and dynamic offers, bundle products, and set context-specific prices based on market, channel, or customer segment.",
                      },
                      {
                        num: "02",
                        text: "Enhanced the catalog with features that make complex pricing straightforward. The intuitive workflow guides users through offer creation without the need for workarounds or multiple systems.",
                      },
                      {
                        num: "03",
                        text: "Redesigned the entire experience around user workflows. What used to take multiple steps across platforms now happens in one streamlined interface.",
                      },
                    ].map((item) => (
                      <div key={item.num} className="space-y-4">
                        <div className="text-[#caf178] text-5xl md:text-6xl">
                          {item.num}
                        </div>
                        <p className="text-white text-lg">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 bg-[#caf178] rounded-full p-8 w-52 h-52 flex items-center justify-center">
                  <div className="w-40 h-40">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 160 160"
                    >
                      <path
                        d={svgPaths.p26df8100}
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </section>

            {/* Design Thinking - User Persona */}
            <section className="bg-[rgba(0,0,0,0.9)] px-8 md:px-16 lg:px-24 py-20 space-y-12">
              <div className="text-muted-foreground">
                Design Thinking
              </div>

              <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* User Persona Card */}
                <div className="bg-[#caf178] rounded-[100px] p-8 md:p-12 w-full max-w-[500px] space-y-8">
                  {/* Profile Picture - Simple Circle */}
                  <div className="flex justify-center">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-black">
                      <img
                        alt="User Persona - Anna"
                        className="absolute inset-0 w-full h-full object-cover grayscale"
                        src={imgDesigner31}
                      />
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="space-y-4 text-center">
                    <div className="space-y-2">
                      <p className="text-xl text-black">
                        Product
                      </p>
                      <p className="text-6xl md:text-7xl leading-[0.9] text-black">
                        Anna
                      </p>
                    </div>
                    <div className="border-t-2 border-b-2 border-black py-4">
                      <p className="text-lg text-black">
                        40 years old // Berlin, Germany
                      </p>
                    </div>
                  </div>
                </div>

                {/* User Quote */}
                <div className="flex-1">
                  <p className="text-4xl md:text-5xl text-white leading-normal">
                    "I want to create different prices for the
                    same charge depending on where it's sold,
                    how it's sold, who it's sold by, and / or
                    who it's sold to."
                  </p>
                </div>
              </div>
            </section>

            {/* User Flow */}
            <section className="bg-[rgba(0,0,0,0.9)] px-8 md:px-16 lg:px-24 py-20 space-y-12">
              <div className="text-muted-foreground">
                Design Thinking
              </div>

              <h3 className="text-4xl md:text-5xl text-white">
                User Flow
              </h3>

              <div className="bg-white/5 rounded-[60px] p-8 md:p-12 overflow-x-auto">
                <div className="min-w-[900px] max-w-[1000px] mx-auto">
                  {/* Flow Container */}
                  <div className="flex gap-6 items-start justify-center">
                    {/* Offer List Page */}
                    <div className="flex-shrink-0 w-[220px]">
                      <div className="bg-white rounded-[20px] p-4 border-2 border-dashed border-black h-[480px]">
                        <h4 className="text-black text-2xl mb-6">
                          Offer List
                        </h4>
                        <div className="space-y-3">
                          <div className="space-y-2">
                            <p className="text-black text-sm">
                              Action
                            </p>
                            <div className="bg-[rgba(134,177,241,0.1)] rounded-lg p-3">
                              <p className="text-[#0052cc] text-sm uppercase">
                                New Offer
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-black text-sm">
                              Table Action
                            </p>
                            <div className="space-y-2">
                              <div className="bg-[rgba(134,177,241,0.1)] rounded-lg p-3">
                                <p className="text-[#0052cc] text-sm uppercase">
                                  Filter
                                </p>
                              </div>
                              <div className="bg-[rgba(134,177,241,0.1)] rounded-lg p-3">
                                <p className="text-[#0052cc] text-sm uppercase">
                                  Import
                                </p>
                              </div>
                              <div className="bg-[rgba(134,177,241,0.1)] rounded-lg p-3">
                                <p className="text-[#0052cc] text-sm uppercase">
                                  Export
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-black text-sm">
                              Row Actions
                            </p>
                            <div className="space-y-2">
                              <div className="bg-[rgba(134,177,241,0.1)] rounded-lg p-3">
                                <p className="text-[#0052cc] text-sm uppercase">
                                  Edit
                                </p>
                              </div>
                              <div className="bg-[rgba(134,177,241,0.1)] rounded-lg p-3">
                                <p className="text-[#0052cc] text-sm uppercase">
                                  Clone
                                </p>
                              </div>
                              <div className="bg-[rgba(134,177,241,0.1)] rounded-lg p-3">
                                <p className="text-[#0052cc] text-sm uppercase">
                                  Delete
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center justify-center h-[480px]">
                      <svg
                        width="32"
                        height="20"
                        viewBox="0 0 40 24"
                        fill="none"
                        className="text-white"
                      >
                        <path
                          d="M1 12H39M39 12L28 1M39 12L28 23"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Step 2: Add Rate Plan */}
                    <div className="flex-shrink-0 w-[220px]">
                      <div className="bg-white rounded-[20px] p-4 border-2 border-dashed border-black h-[480px]">
                        <h4 className="text-black text-2xl mb-6">
                          New Offer
                        </h4>
                        <div className="space-y-3">
                          <div className="space-y-2">
                            <p className="text-black text-sm">
                              Step 2: Add Rate Plan
                            </p>
                            <div className="bg-white border border-dashed border-[#454545] rounded-lg p-3">
                              <p className="text-black text-xs">
                                Products and Rate Plans table
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-black text-sm">
                              Table Actions
                            </p>
                            <div className="bg-[rgba(134,177,241,0.1)] rounded-lg p-3">
                              <p className="text-[#0052cc] text-sm uppercase">
                                Add Rate Plan
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-black text-sm">
                              Row Actions
                            </p>
                            <div className="space-y-2">
                              <div className="bg-[rgba(134,177,241,0.1)] rounded-lg p-3">
                                <p className="text-[#0052cc] text-sm uppercase">
                                  Select/Unselect
                                </p>
                              </div>
                              <div className="bg-[rgba(134,177,241,0.1)] rounded-lg p-3">
                                <p className="text-[#0052cc] text-sm uppercase">
                                  Remove
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-black text-sm">
                              Page Actions
                            </p>
                            <div className="space-y-2">
                              <div className="bg-[rgba(134,177,241,0.1)] rounded-lg p-3">
                                <p className="text-[#0052cc] text-sm uppercase">
                                  Save
                                </p>
                              </div>
                              <div className="bg-[rgba(134,177,241,0.1)] rounded-lg p-3">
                                <p className="text-[#0052cc] text-xs uppercase">
                                  Save and Create Another
                                </p>
                              </div>
                              <div className="bg-[rgba(134,177,241,0.1)] rounded-lg p-3">
                                <p className="text-[#0052cc] text-sm uppercase">
                                  Save and Clone
                                </p>
                              </div>
                              <div className="bg-[rgba(134,177,241,0.1)] rounded-lg p-3">
                                <p className="text-[#0052cc] text-sm uppercase">
                                  Cancel
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Design Screenshots */}
            {[
              {
                title: "Product Catalog",
                img: img202402251437,
              },
              {
                title: "Flat Fee Expanded",
                img: imgFlatFeeExpanded1,
              },
              { title: "Add Rate Plan", img: imgAddRatePlan8 },
              { title: "Edit Charge", img: imgEditCharge },
              { title: "Offer List", img: img202402251440 },
              { title: "Pricing Detail", img: img202402251441 },
              {
                title: "Bundle Configuration",
                img: img202402251442,
              },
            ].map((item) => (
              <section
                key={item.title}
                className="bg-[rgba(0,0,0,0.9)] px-8 md:px-16 lg:px-24 py-16 space-y-8"
              >
                <div className="text-muted-foreground">
                  Final Design
                </div>
                <h3 className="text-white">{item.title}</h3>
                <div className="rounded-[60px] overflow-hidden shadow-2xl bg-white p-4">
                  <img
                    alt={item.title}
                    className="w-full h-auto rounded-[40px]"
                    src={item.img}
                  />
                </div>
              </section>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}