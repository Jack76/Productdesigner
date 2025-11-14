import svgPaths from "./svg-px6vx1h0bi";

function Heading() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[48px] text-nowrap text-white top-[0.5px] tracking-[0.3516px] whitespace-pre">Qianli Zhang</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-indigo-100 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">{`Principal UI/UX Designer & AI Product Developer`}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #E0E7FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.8780 0.9059 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p17781bc0} id="Vector_2" stroke="var(--stroke-0, #E0E7FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.8780 0.9059 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[83.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[83.805px]">
        <Icon />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[14px] text-indigo-100 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Shanghai</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2f8e7e80} id="Vector" stroke="var(--stroke-0, #E0E7FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.8780 0.9059 1.0000)", strokeOpacity: "1" }} />
          <path d={svgPaths.p17070980} id="Vector_2" stroke="var(--stroke-0, #E0E7FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.8780 0.9059 1.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[198.367px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[198.367px]">
        <Icon1 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[14px] text-indigo-100 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Jackpassingby@gmail.com</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1041_466)" id="Icon">
          <path d={svgPaths.p26187580} id="Vector" stroke="var(--stroke-0, #E0E7FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.8780 0.9059 1.0000)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1041_466">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[142.961px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[142.961px]">
        <Icon2 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[24px] not-italic text-[14px] text-indigo-100 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">+86 13918443136</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[24px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-gradient-to-r from-[#4f39f6] h-[212px] relative shrink-0 to-[#9810fa] w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[212px] items-start pb-0 pt-[48px] px-[64px] relative w-full">
          <Heading />
          <Paragraph />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#4f39f6] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Core Strengths</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 top-[0.5px] tracking-[-0.1504px] w-[361px]">10+ years UI/UX design experience in enterprise SaaS products, plus 8+ years designing 50+ digital marketing websites while managing teams of 3-4 designers.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="[grid-area:1_/_1] bg-neutral-50 relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#4f39f6] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[20px] pr-[16px] pt-[16px] relative size-full">
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 top-[0.5px] tracking-[-0.1504px] w-[353px]">Recent focus on AI product development - built an AI-powered digital marketing platform and produced multiple AI-generated videos using cutting-edge tools.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="[grid-area:1_/_2] bg-neutral-50 relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[20px] pr-[16px] pt-[16px] relative size-full">
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 top-[0.5px] tracking-[-0.1504px] w-[352px]">Built complete subscription billing system from ground up, covering customer accounts, product catalogs, subscriptions, invoicing, payments, and reporting.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="[grid-area:2_/_1] bg-neutral-50 relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#4f39f6] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[20px] pr-[16px] pt-[16px] relative size-full">
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 top-[0.5px] tracking-[-0.1504px] w-[349px]">Strong expertise in design system development and maintenance, ensuring brand consistency and optimal user experience across products.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="[grid-area:2_/_2] bg-neutral-50 relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[20px] pr-[16px] pt-[16px] relative size-full">
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 top-[0.5px] tracking-[-0.1504px] w-[332px]">Designed Salesforce-based CPQ interface enabling flexible subscription, product, and service quoting.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="[grid-area:3_/_1] bg-neutral-50 relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#4f39f6] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[20px] pr-[16px] pt-[16px] relative size-full">
          <Paragraph5 />
        </div>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 top-[0.5px] tracking-[-0.1504px] w-[360px]">Early adopter of AI in design workflow - pioneered GPT-based Analytics AI for advanced data analysis and predictions.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="[grid-area:3_/_2] bg-neutral-50 relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9810fa] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pl-[20px] pr-[16px] pt-[16px] relative size-full">
          <Paragraph6 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[308px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[366px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading1 />
      <Container8 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#4f39f6] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Key Skills</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-indigo-100 h-[36px] left-0 rounded-[1.67772e+07px] top-0 w-[117.953px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#432dd7] text-[14px] text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">UI/UX Design</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-purple-100 h-[36px] left-[129.95px] rounded-[1.67772e+07px] top-0 w-[107.289px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#8200db] text-[14px] text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">Prototyping</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-indigo-100 h-[36px] left-[249.24px] rounded-[1.67772e+07px] top-0 w-[189.008px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#432dd7] text-[14px] text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">AI Product Development</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute bg-purple-100 h-[36px] left-[450.25px] rounded-[1.67772e+07px] top-0 w-[159.977px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#8200db] text-[14px] text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">AI Video Production</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute bg-indigo-100 h-[36px] left-[622.23px] rounded-[1.67772e+07px] top-0 w-[130.383px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#432dd7] text-[14px] text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">SaaS Platforms</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-purple-100 h-[36px] left-0 rounded-[1.67772e+07px] top-[48px] w-[135.563px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#8200db] text-[14px] text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">Design Systems</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute bg-indigo-100 h-[36px] left-[147.56px] rounded-[1.67772e+07px] top-[48px] w-[126.156px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#432dd7] text-[14px] text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">User Research</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-purple-100 h-[36px] left-[285.72px] rounded-[1.67772e+07px] top-[48px] w-[141.789px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#8200db] text-[14px] text-nowrap top-[8.5px] tracking-[-0.1504px] whitespace-pre">Team Leadership</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
      <Text5 />
      <Text6 />
      <Text7 />
      <Text8 />
      <Text9 />
      <Text10 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[142px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading3 />
      <Container9 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[34px] left-0 top-0 w-[825px]" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#4f39f6] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Work Experience</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">{`AI Product Designer & Developer`}</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4f39f6] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Independent</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[44px] relative shrink-0 w-[238.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[238.344px]">
        <Heading2 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-indigo-50 h-[28px] relative rounded-[4px] shrink-0 w-[141.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[141.445px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[12px] not-italic text-[#432dd7] text-[14px] text-nowrap top-[4.5px] tracking-[-0.1504px] whitespace-pre">2024.02 - Present</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[34px] top-0 w-[791px]" data-name="Container">
      <Container10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[36px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4f39f6] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[40px] left-[14.45px] top-0 w-[776.547px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 top-[0.5px] tracking-[-0.1504px] w-[723px]">Designed and built AI-driven digital marketing platform integrating content generation, analytics, and automated workflows.</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[36px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4f39f6] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[40px] left-[14.45px] top-0 w-[776.547px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 top-[0.5px] tracking-[-0.1504px] w-[717px]">Produced several AI videos using tools like Midjourney, Sora, Jimeng AI, Kling, and Tongyi for various marketing campaigns.</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4f39f6] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[734.969px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Explored AI coding assistants (Cursor, GitHub Copilot) to accelerate product development and prototype iteration.</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4f39f6] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[677.305px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Researched emerging AI technologies and their practical applications in design and marketing workflows.</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text18 />
      <Text19 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[152px] items-start left-[34px] top-[56px] w-[791px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[#4f39f6] left-[-7px] rounded-[1.67772e+07px] size-[16px] top-0" data-name="Container" />;
}

function Container13() {
  return (
    <div className="absolute h-[208px] left-0 top-[58px] w-[825px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c6d2ff] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <Container11 />
      <List />
      <Container12 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Principal UI/UX Designer</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#9810fa] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Zuora Inc.</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[44px] relative shrink-0 w-[177.617px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[177.617px]">
        <Heading5 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="bg-purple-50 h-[28px] relative rounded-[4px] shrink-0 w-[144.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[144.18px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[12px] not-italic text-[#8200db] text-[14px] text-nowrap top-[4.5px] tracking-[-0.1504px] whitespace-pre">2019.03 - 2024.02</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[34px] top-0 w-[791px]" data-name="Container">
      <Container14 />
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[36px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#9810fa] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[40px] left-[14.45px] top-0 w-[776.547px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 top-[0.5px] tracking-[-0.1504px] w-[758px]">Owned design for Zuora Billing, Payments, Finance, Reporting, Analytics, and CPQ products while establishing design system standards.</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <Text21 />
      <Text22 />
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#9810fa] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[612.844px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">{`Core contributor to Zuora Billing from inception, shaping the product's entire UI/UX foundation.`}</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text23 />
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute h-[36px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#9810fa] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute h-[40px] left-[14.45px] top-0 w-[776.547px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 top-[0.5px] tracking-[-0.1504px] w-[731px]">Designed billing and payment workflows including customer accounts, product catalogs, subscriptions, invoicing, payment processing, refunds, and hosted payment pages.</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <Text25 />
      <Text26 />
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#9810fa] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[733.828px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Created interface for Zuora Finance covering accounting cycles, journal entries, and revenue recognition features.</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text27 />
      <Text28 />
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#9810fa] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[693.93px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Built data management interfaces for Zuora Platform, improving admin workflows and system configuration.</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text29 />
      <Text30 />
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#9810fa] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[604.18px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Designed Reporting product and pioneered Analytics AI features powered by GPT technology.</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text31 />
      <Text32 />
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#9810fa] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[744.242px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Coordinated with third-party teams and internal devs on Restyle project to modernize legacy UI across all products.</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text33 />
      <Text34 />
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#9810fa] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[696.156px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Designed CPQ interface on Salesforce platform for flexible quoting of subscriptions, products, and services.</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text35 />
      <Text36 />
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#9810fa] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[469.727px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Created dashboards and reporting views for Zuora Revenue product line.</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text37 />
      <Text38 />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[312px] items-start left-[34px] top-[56px] w-[791px]" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Container16() {
  return <div className="absolute bg-[#9810fa] left-[-7px] rounded-[1.67772e+07px] size-[16px] top-0" data-name="Container" />;
}

function Container17() {
  return (
    <div className="absolute h-[368px] left-0 top-[298px] w-[825px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c6d2ff] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <Container15 />
      <List1 />
      <Container16 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Staff UI/UX Designer</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4f39f6] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Zuora Inc.</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[44px] relative shrink-0 w-[150.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[150.188px]">
        <Heading6 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="bg-indigo-50 h-[28px] relative rounded-[4px] shrink-0 w-[138.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[138.094px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[12px] not-italic text-[#432dd7] text-[14px] text-nowrap top-[4.5px] tracking-[-0.1504px] whitespace-pre">2011.01 - 2019.03</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[34px] top-0 w-[791px]" data-name="Container">
      <Container18 />
      <Text39 />
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4f39f6] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[668.336px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Owned design for multiple Zuora products including Billing, Payments, Finance, and Reporting modules.</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text40 />
      <Text41 />
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute h-[36px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4f39f6] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute h-[40px] left-[14.45px] top-0 w-[776.547px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 top-[0.5px] tracking-[-0.1504px] w-[727px]">Designed billing workflows covering customer accounts, product catalogs, subscriptions, invoicing, and payment processing.</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="List Item">
      <Text42 />
      <Text43 />
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4f39f6] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[612.172px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Built Finance module interfaces for accounting cycles, journal entries, and revenue recognition.</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text44 />
      <Text45 />
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4f39f6] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[544.141px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Created data management pages for Zuora Platform to streamline admin operations.</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text46 />
      <Text47 />
    </div>
  );
}

function List2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[136px] items-start left-[34px] top-[56px] w-[791px]" data-name="List">
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
      <ListItem16 />
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-[#4f39f6] left-[-7px] rounded-[1.67772e+07px] size-[16px] top-0" data-name="Container" />;
}

function Container21() {
  return (
    <div className="absolute h-[192px] left-0 top-[698px] w-[825px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c6d2ff] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <Container19 />
      <List2 />
      <Container20 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Senior UI Designer</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#9810fa] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Protime Consulting</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[44px] relative shrink-0 w-[135.039px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[135.039px]">
        <Heading7 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="bg-purple-50 h-[28px] relative rounded-[4px] shrink-0 w-[140.586px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[140.586px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[12px] not-italic text-[#8200db] text-[14px] text-nowrap top-[4.5px] tracking-[-0.1504px] whitespace-pre">2003.04 - 2011.01</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[34px] top-0 w-[791px]" data-name="Container">
      <Container22 />
      <Text48 />
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#9810fa] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[626.266px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Managed team of 3-4 designers and delivered 50+ website design projects for enterprise clients.</p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text49 />
      <Text50 />
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#9810fa] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text52() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[643.344px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Implemented Reddot CMS platform for dynamic content management and multi-channel publishing.</p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text51 />
      <Text52 />
    </div>
  );
}

function Text53() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#9810fa] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[457.883px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Key clients: Sony, Estée Lauder, Shanghai Tobacco, Xintiandi, and HRS.</p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Text53 />
      <Text54 />
    </div>
  );
}

function List3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88px] items-start left-[34px] top-[56px] w-[791px]" data-name="List">
      <ListItem17 />
      <ListItem18 />
      <ListItem19 />
    </div>
  );
}

function Container24() {
  return <div className="absolute bg-[#9810fa] left-[-7px] rounded-[1.67772e+07px] size-[16px] top-0" data-name="Container" />;
}

function Container25() {
  return (
    <div className="absolute h-[144px] left-0 top-[922px] w-[825px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c6d2ff] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <Container23 />
      <List3 />
      <Container24 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Web Designer</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4f39f6] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Yifei Group</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[44px] relative shrink-0 w-[101.836px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[44px] items-start relative w-[101.836px]">
        <Heading8 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Text55() {
  return (
    <div className="bg-indigo-50 h-[28px] relative rounded-[4px] shrink-0 w-[145.023px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[145.023px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[12px] not-italic text-[#432dd7] text-[14px] text-nowrap top-[4.5px] tracking-[-0.1504px] whitespace-pre">2000.01 - 2003.04</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-start justify-between left-[34px] top-0 w-[791px]" data-name="Container">
      <Container26 />
      <Text55 />
    </div>
  );
}

function Text56() {
  return (
    <div className="absolute h-[20px] left-0 top-[4px] w-[6.453px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4f39f6] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">•</p>
    </div>
  );
}

function Text57() {
  return (
    <div className="absolute h-[24px] left-[14.45px] top-0 w-[640.367px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-700 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Designed marketing websites for Yifei Group, Shaolin Temple, Jiyitang, and other enterprise clients.</p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="absolute h-[24px] left-[34px] top-[56px] w-[791px]" data-name="List Item">
      <Text56 />
      <Text57 />
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[#4f39f6] left-[-7px] rounded-[1.67772e+07px] size-[16px] top-0" data-name="Container" />;
}

function Container29() {
  return (
    <div className="absolute h-[80px] left-0 top-[1098px] w-[825px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c6d2ff] border-[0px_0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <Container27 />
      <ListItem20 />
      <Container28 />
    </div>
  );
}

function Section2() {
  return (
    <div className="h-[1178px] relative shrink-0 w-full" data-name="Section">
      <Heading4 />
      <Container13 />
      <Container17 />
      <Container21 />
      <Container25 />
      <Container29 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Heading 2">
      <div aria-hidden="true" className="absolute border-[#4f39f6] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Education</p>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-neutral-900 text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">{`Bachelor's Degree in Environmental Planning and Management`}</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4f39f6] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Nanjing University</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-neutral-600 text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">1993 - 1997</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-gradient-to-r from-[#eef2ff] h-[124px] relative rounded-[10px] shrink-0 to-[#faf5ff] w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[124px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Heading10 />
          <Paragraph12 />
          <Paragraph13 />
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[182px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading9 />
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[2108px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[2108px] items-start pb-0 pt-[48px] px-[64px] relative w-full">
          <Section />
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </div>
    </div>
  );
}

function ModernResume() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[2320px] items-start left-0 top-0 w-[953px]" data-name="ModernResume">
      <Container1 />
      <Container31 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[24px] size-[20px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25c13200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function ModernResume1() {
  return (
    <div className="absolute bg-[#4f39f6] h-[48px] left-[760.77px] rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[16px] w-[176.234px]" data-name="ModernResume">
      <Icon3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[52px] not-italic text-[16px] text-nowrap text-white top-[11.5px] tracking-[-0.3125px] whitespace-pre">Export to PDF</p>
    </div>
  );
}

export default function AiDigitalMarketingPlatform() {
  return (
    <div className="bg-white relative size-full" data-name="AI Digital Marketing Platform">
      <ModernResume />
      <ModernResume1 />
    </div>
  );
}