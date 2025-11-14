import svgPaths from "./svg-6guxwfnjut";
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

function MacbookPro() {
  return (
    <div className="absolute h-[835px] left-[332px] top-[86px] w-[1498px]" data-name="Macbook Pro">
      <div className="absolute inset-0 opacity-70" data-name="shadow">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgShadow} />
      </div>
      <div className="absolute bottom-[2%] left-[1.64%] right-[7.68%] top-0" data-name="main">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMain} />
      </div>
      <div className="absolute inset-[4.85%_9.62%_15.12%_30.03%]" data-name="Macbook Pro label">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMacbookProLabel} />
      </div>
      <div className="absolute inset-[5.39%_9.61%_15.09%_30.11%]" data-name="Shape">
        <div className="absolute inset-[-0.08%_-0.06%]">
          <img alt="" className="block max-w-none size-full" height="665.025" src={imgShape} width="904" />
        </div>
      </div>
    </div>
  );
}

function Scene() {
  return (
    <div className="absolute h-[1080px] left-0 overflow-clip top-[98px] w-[1920px]" data-name="Scene" style={{ backgroundImage: "linear-gradient(-71.8371deg, rgb(127, 135, 150) 4.3754%, rgb(211, 217, 230) 88.186%), linear-gradient(90deg, rgb(234, 236, 237) 0%, rgb(234, 236, 237) 100%)" }}>
      <div className="absolute h-[262.497px] left-[-291px] top-[872px] w-[2744.45px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2745 263">
          <g id="Vector 1">
            <path d={svgPaths.p260a5dc0} fill="var(--fill-0, #AAAEB6)" style={{ fill: "color(display-p3 0.6667 0.6824 0.7137)", fillOpacity: "1" }} />
            <path d={svgPaths.p260a5dc0} fill="url(#paint0_linear_1027_1307)" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1027_1307" x1="1254" x2="1391" y1="-191.503" y2="580.497">
              <stop offset="0.271122" stopColor="#8C94A4" style={{ stopColor: "color(display-p3 0.5508 0.5811 0.6417)", stopOpacity: "1" }} />
              <stop offset="1" stopColor="#AAAEB6" stopOpacity="0" style={{ stopColor: "none", stopOpacity: "0" }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[294.69px] left-[-279.24px] top-[715.37px] w-[2824.32px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2825 295">
          <path d={svgPaths.p3ccfa580} fill="var(--fill-0, #F3F3F5)" id="Vector 2" style={{ fill: "color(display-p3 0.9529 0.9529 0.9608)", fillOpacity: "1" }} />
        </svg>
      </div>
      <MacbookPro />
    </div>
  );
}

function Whats() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="What\'s">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-neutral-500 text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">What’s Zuora UI Restyle?</p>
      </div>
    </div>
  );
}

function Display() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Display">
      <p className="basis-0 font-['SF_Pro_Display:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[64px] text-black tracking-[-0.256px]">
        <span className="text-[#2f36d8]">Zuora UI Restyle</span>
        <span>{` project aims to redesign the user interface of the company’s billing and revenue system, to align with the modern design standards, brand redesign and enhance user experience and satisfaction. The project is part of the overall brand redesign of the company, which seeks to improve the company’s image and reputation in the market.`}</span>
      </p>
    </div>
  );
}

function ProjectName() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-nowrap" data-name="Project Name">
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center relative shrink-0 text-black uppercase">
        <p className="leading-[normal] text-nowrap whitespace-pre">Project</p>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center relative shrink-0 text-neutral-500 tracking-[-0.096px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Name / Zuora UI Restyle</p>
      </div>
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center relative shrink-0 text-neutral-500 tracking-[-0.096px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Duration / 9 months</p>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">UX design</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">UI design</p>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">Design Manage</p>
      </div>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Tags">
      <Tag />
      <Tag1 />
      <Tag2 />
    </div>
  );
}

function Role() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Role">
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-nowrap uppercase">
        <p className="leading-[normal] whitespace-pre">My Role</p>
      </div>
      <Tags />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Top">
      <ProjectName />
      <Role />
    </div>
  );
}

function Slide() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[1080px] items-start justify-between left-0 overflow-clip px-[108px] py-[80px] top-[1179px] w-[1920px]" data-name="Slide 16:9 - 1">
      <Whats />
      <Display />
      <Top />
    </div>
  );
}

function Whats1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="What\'s">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-neutral-500 text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">Problems</p>
      </div>
    </div>
  );
}

function PhQuestionLight() {
  return (
    <div className="bg-[#a1a6c0] box-border content-stretch flex gap-[10px] h-full items-start overflow-clip p-[26px] relative rounded-[100px] shrink-0" data-name="ph:question-light">
      <div className="relative shrink-0 size-[160px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 160">
          <path d={svgPaths.p19496680} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Light',sans-serif] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[72px] text-nowrap tracking-[-0.288px]">
        <p className="leading-[normal] whitespace-pre">01</p>
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[30px] text-black tracking-[-0.12px] w-[min-content]">Legacy UI is outdated and inconsistent. It does not follow the modern design standards, such as using clear and intuitive icons, labels, and menus, and applying a consistent color scheme and typography with new brand design.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Light',sans-serif] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[72px] text-nowrap tracking-[-0.288px]">
        <p className="leading-[normal] whitespace-pre">02</p>
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[30px] text-black tracking-[-0.12px] w-[min-content]">Legacy UI does not meet the user expectations and requirements. It also does not match the overall brand redesign of the company, which seeks to improve the company’s image and reputation in the market.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Light',sans-serif] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[72px] text-nowrap tracking-[-0.288px]">
        <p className="leading-[normal] whitespace-pre">03</p>
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[30px] text-black tracking-[-0.12px] w-[min-content]">Legacy UI does not support some of the features and functionalities that users need or want, such as customizing reports, exporting data, or integrating with other systems.</p>
    </div>
  );
}

function Display1() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="Display">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Light',sans-serif] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[72px] text-nowrap tracking-[-0.288px]">
        <p className="leading-[normal] whitespace-pre">04</p>
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[30px] text-black tracking-[-0.12px] w-[min-content]">Legacy UI has not been tested or optimized for user satisfaction. It may result in errors, bugs, or usability issues that affect the reliability, security, and compatibility of the product.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow h-[75px] items-start min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Light',sans-serif] justify-center leading-[0] relative shrink-0 text-[#bfbfbf] text-[72px] text-nowrap tracking-[-0.288px]">
        <p className="leading-[normal] whitespace-pre">05</p>
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[30px] text-black tracking-[-0.12px] w-[min-content]">Legacy UI is not accessible to users with disabilities or impairments. It does not follow the accessibility guidelines and standards, such as providing alternative text for images, using sufficient contrast and font size.</p>
    </div>
  );
}

function Display2() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="Display">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Right() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[80px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Right">
      <Display1 />
      <Display2 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[48px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <PhQuestionLight />
      <Right />
    </div>
  );
}

function Slide1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[80px] h-[1080px] items-start left-0 overflow-clip px-[108px] py-[80px] top-[2260px] w-[1920px]" data-name="Slide 16:9 - 2">
      <Whats1 />
      <Content />
    </div>
  );
}

function Whats2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="What\'s">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-neutral-500 text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">Proposed Solutions</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Light',sans-serif] justify-center leading-[0] relative shrink-0 text-[#2f36d8] text-[72px] text-nowrap tracking-[-0.288px]">
        <p className="leading-[normal] whitespace-pre">01</p>
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[30px] text-black tracking-[-0.12px] w-[min-content]">Redesign the interface to follow the modern design standards, such as using clear and intuitive icons, labels, and menus, applying a consistent color scheme and typography, and simplifying the interface layout and elements.</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Light',sans-serif] justify-center leading-[0] relative shrink-0 text-[#2f36d8] text-[72px] text-nowrap tracking-[-0.288px]">
        <p className="leading-[normal] whitespace-pre">02</p>
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[30px] text-black tracking-[-0.12px] w-[min-content]">Engage in in-depth communication with internal teams and key stakeholders to fully understand the user needs and preferences for the system interface, and incorporate them into the design proposals.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Light',sans-serif] justify-center leading-[0] relative shrink-0 text-[#2f36d8] text-[72px] text-nowrap tracking-[-0.288px]">
        <p className="leading-[normal] whitespace-pre">03</p>
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[30px] text-black tracking-[-0.12px] w-[min-content]">Collaborate closely with third-party and internal development teams to ensure that the design proposals can support the desired features and functionalities, and that they can be smoothly translated into operational interfaces.</p>
    </div>
  );
}

function Display3() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="Display">
      <Frame13 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Light',sans-serif] justify-center leading-[0] relative shrink-0 text-[#2f36d8] text-[72px] text-nowrap tracking-[-0.288px]">
        <p className="leading-[normal] whitespace-pre">04</p>
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[30px] text-black tracking-[-0.12px] w-[min-content]">Continuously conduct user testing, collect feedback, and optimize the design proposals until they meet the standards of user satisfaction, and ensure that the new interface is reliable, secure, and compatible with different devices and browsers.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow h-[75px] items-start min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Light',sans-serif] justify-center leading-[0] relative shrink-0 text-[#2f36d8] text-[72px] text-nowrap tracking-[-0.288px]">
        <p className="leading-[normal] whitespace-pre">05</p>
      </div>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[30px] text-black tracking-[-0.12px] w-[min-content]">Follow the accessibility guidelines and standards, such as providing alternative text for images, using sufficient contrast and font size, or supporting keyboard navigation.</p>
    </div>
  );
}

function Display4() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-full" data-name="Display">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Left() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[80px] grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Left">
      <Display3 />
      <Display4 />
    </div>
  );
}

function PhSketchLogoLight() {
  return (
    <div className="relative shrink-0 size-[160px]" data-name="ph:sketch-logo-light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 160">
        <g id="ph:sketch-logo-light">
          <path d={svgPaths.p26df8100} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function PhQuestionLight1() {
  return (
    <div className="bg-[#2f36d8] box-border content-stretch flex gap-[10px] h-full items-start overflow-clip p-[26px] relative rounded-[100px] shrink-0" data-name="ph:question-light">
      <PhSketchLogoLight />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex gap-[48px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <Left />
      <PhQuestionLight1 />
    </div>
  );
}

function Slide2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[80px] h-[1080px] items-start left-0 overflow-clip px-[108px] py-[80px] top-[3341px] w-[1920px]" data-name="Slide 16:9 - 3">
      <Whats2 />
      <Content1 />
    </div>
  );
}

function Whats3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="What\'s">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-neutral-500 text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">Design Thinking</p>
      </div>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#1b1b1b] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">Design Thinking</p>
      </div>
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-[#1b1b1b] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">{`Design & Prototype`}</p>
      </div>
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-[#1b1b1b] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">Deliver</p>
      </div>
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-[#1b1b1b] box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">{`Tweak & Evolve`}</p>
      </div>
    </div>
  );
}

function DesignProcess() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Design Process">
      <Tag3 />
      <div className="h-0 relative shrink-0 w-[106px]">
        <div className="absolute bottom-[-11.05px] left-0 right-[-1.42%] top-[-11.05px]">
          <img alt="" className="block max-w-none size-full" height="22.092" src={imgArrow1} width="107.5" />
        </div>
      </div>
      <Tag4 />
      <div className="h-0 relative shrink-0 w-[106px]">
        <div className="absolute bottom-[-11.05px] left-0 right-[-1.42%] top-[-11.05px]">
          <img alt="" className="block max-w-none size-full" height="22.092" src={imgArrow1} width="107.5" />
        </div>
      </div>
      <Tag5 />
      <div className="h-0 relative shrink-0 w-[106px]">
        <div className="absolute bottom-[-11.05px] left-0 right-[-1.42%] top-[-11.05px]">
          <img alt="" className="block max-w-none size-full" height="22.092" src={imgArrow1} width="107.5" />
        </div>
      </div>
      <Tag6 />
    </div>
  );
}

function Display5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Display">
      <p className="basis-0 font-['SF_Pro_Display:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[64px] text-black tracking-[-0.256px]">Generate and evaluate design ideas for the Restyle UI, based on the design objectives. Create low-fidelity prototypes that show the layout and structure of the interface. Define the features, functionalities, and content that the interface should include.</p>
    </div>
  );
}

function Display6() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex gap-[48px] h-[522px] items-start justify-center pb-0 pt-[40px] px-0 relative rounded-[100px] shrink-0 w-full" data-name="Display">
      <div className="h-[1299px] relative shrink-0 w-[1000px]" data-name="Misc 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMisc1} />
      </div>
    </div>
  );
}

function Slide3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[80px] h-[1080px] items-start left-0 overflow-clip px-[108px] py-[80px] top-[4422px] w-[1920px]" data-name="Slide 16:9 - 4">
      <Whats3 />
      <DesignProcess />
      <Display5 />
      <Display6 />
    </div>
  );
}

function Whats4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="What\'s">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-neutral-500 text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">{`Design & Prototype`}</p>
      </div>
    </div>
  );
}

function PhDevicesLight() {
  return (
    <div className="relative shrink-0 size-[160px]" data-name="ph:devices-light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 160">
        <g id="ph:devices-light">
          <path d={svgPaths.p17159600} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#2f36d8] box-border content-stretch flex gap-[10px] items-center justify-center p-[40px] relative rounded-[1000px] shrink-0" data-name="Icon">
      <PhDevicesLight />
    </div>
  );
}

function Display7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] not-italic relative shrink-0 text-black w-full" data-name="Display">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[64px] tracking-[-0.256px] w-full">
        <span>{`Create `}</span>
        <span className="text-[#2f36d8]">over 100</span>
        <span>{` high-fidelity prototypes and mockups that show the final appearance of the interface.`}</span>
      </p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] relative shrink-0 text-[30px] tracking-[-0.12px] w-full">Define the color system, typography, and UI elements for the interface, following the brand identity and the modern design standards. Document the UI components, specifications, and guidelines for the development team.</p>
    </div>
  );
}

function Tag7() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">Figma</p>
      </div>
    </div>
  );
}

function Tag8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[16px] relative rounded-[100px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">Jira</p>
      </div>
    </div>
  );
}

function Tags1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Tags">
      <Tag7 />
      <Tag8 />
    </div>
  );
}

function Tools() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[106px] items-start relative shrink-0 w-[546.667px]" data-name="Tools">
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-nowrap uppercase">
        <p className="leading-[normal] whitespace-pre">Tools</p>
      </div>
      <Tags1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
      <Icon />
      <Display7 />
      <Tools />
    </div>
  );
}

function Slide4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[1080px] items-start justify-between left-0 overflow-clip px-[108px] py-[80px] top-[5503px] w-[1920px]" data-name="Slide 16:9 - 5">
      <Whats4 />
      <Content2 />
    </div>
  );
}

function Whats5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="What\'s">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-neutral-500 text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">{`Design & Prototype`}</p>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px not-italic relative shrink-0 text-black" data-name="Left">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] relative shrink-0 text-[64px] text-nowrap tracking-[-0.256px] whitespace-pre">Typography</p>
      <div className="font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] min-w-full relative shrink-0 text-[24px] tracking-[-0.096px] w-[min-content]">
        <p className="mb-0">{`--zui-font-system: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;`}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`--zui-font-monospace: 'IBM Plex Mono', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace;`}</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['SF_Pro_Display:Light',sans-serif] leading-[44px] relative shrink-0 text-[36px] text-[rgba(0,0,0,0.9)]">Display</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.6)] tracking-[0.1px]">Font Size: 36px | Line Height: 44px | Weight: Regular, 400</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[40px] relative shrink-0 text-[28px] text-[rgba(0,0,0,0.9)]">Headline Large</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.6)] tracking-[0.1px]">Font Size: 28px | Line Height: 40px | Weight: Medium, 500</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[36px] relative shrink-0 text-[24px] text-[rgba(0,0,0,0.9)]">Headline medium</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.6)] tracking-[0.1px]">Font Size: 24px | Line Height: 36px | Weight: Medium, 500</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['SF_Pro_Display:Medium',sans-serif] leading-[32px] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.9)]">Headline small</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.6)] tracking-[0.1px]">Font Size: 20px | Line Height: 32px | Weight: Medium, 500</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-nowrap tracking-[0.1px] whitespace-pre">
      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[28px] relative shrink-0 text-[17px] text-[rgba(0,0,0,0.9)]">Title large</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.6)]">Font Size: 17px | Line Height: 28px | Weight: Semibold, 600</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.9)] tracking-[0.15px]">Subtitle 1</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.6)] tracking-[0.1px]">Font Size: 15px | Line Height: 24px | Weight: Semibold, 600</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[13px] text-nowrap whitespace-pre">
      <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[18px] relative shrink-0 text-[#467645] tracking-[0.15px]">Subtitle 2</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(0,0,0,0.6)] tracking-[0.1px]">Font Size: 13px | Line Height: 20px | Weight: Bold, 700</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] not-italic relative shrink-0 text-[13px] text-nowrap tracking-[0.1px] whitespace-pre">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] relative shrink-0 text-[#467645]">Tab</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[rgba(0,0,0,0.6)]">Font Size: 13px | Line Height: 20px | Weight: Medium, 500</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Text:Regular',sans-serif] items-start not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[24px] relative shrink-0 text-[15px] text-[rgba(0,0,0,0.9)]">Body 1</p>
      <p className="leading-[20px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.6)] tracking-[0.1px]">Font Size: 15px | Line Height: 24px | Weight: Regular, 400</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Text:Regular',sans-serif] items-start leading-[20px] not-italic relative shrink-0 text-[13px] text-nowrap tracking-[0.1px] whitespace-pre">
      <p className="relative shrink-0 text-[rgba(0,0,0,0.9)]">Body 2</p>
      <p className="relative shrink-0 text-[rgba(0,0,0,0.6)]">Font Size: 13px | Line Height: 20px | Weight: Regular, 400</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] not-italic relative shrink-0 text-[13px] text-nowrap tracking-[0.1px] whitespace-pre">
      <p className="capitalize font-['SF_Pro_Text:Medium',sans-serif] relative shrink-0 text-[rgba(0,0,0,0.9)]">Button</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[rgba(0,0,0,0.6)]">Font Size: 13px | Line Height: 20px | Weight: Medium, 500</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[16px] relative shrink-0 text-[11px] text-[rgba(0,0,0,0.9)] tracking-[1px] uppercase">Overline</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.6)] tracking-[0.1px]">Font Size: 11px | Line Height: 16px | Weight: Semibold, 600</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[16px] relative shrink-0 text-[#467645] text-[12px] tracking-[0.2px]">Table Header (Subtitle 3)</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.6)] tracking-[0.1px]">Font Size: 12px | Line Height: 16px | Weight: Semibold, 600</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[16px] relative shrink-0 text-[#467645] text-[12px] tracking-[0.2px]">Label</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.6)] tracking-[0.1px]">Font Size: 13px | Line Height: 20px | Weight: Regular, 400</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col font-['SF_Pro_Text:Regular',sans-serif] items-start not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="leading-[16px] relative shrink-0 text-[11px] text-[rgba(0,0,0,0.9)] tracking-[0.2px]">Caption</p>
      <p className="leading-[20px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.6)] tracking-[0.1px]">Font Size: 11px | Line Height: 16px | Weight: Regular, 400</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[14px] relative shrink-0 text-[#467645] text-[10px] tracking-[0.6px] uppercase">CHIP</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[13px] text-[rgba(0,0,0,0.6)] tracking-[0.1px]">Font Size: 10px | Line Height: 16px | Weight: Regular, 400</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[13px] text-nowrap whitespace-pre">
      <p className="font-['SF_Mono:Regular',sans-serif] leading-[18px] relative shrink-0 text-[rgba(0,0,0,0.9)] tracking-[0.2px]">Code Text/Code(Source Code Pro - SF NOMO)</p>
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[20px] relative shrink-0 text-[rgba(0,0,0,0.6)] tracking-[0.1px]">Font Size: 13px | Line Height: 18px | Weight: Regular, 400</p>
    </div>
  );
}

function Fonts() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex flex-col gap-[32px] h-[986px] items-start px-[100px] py-[80px] relative rounded-[100px] shrink-0" data-name="Fonts">
      <Frame22 />
      <Frame21 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame33 />
      <Frame34 />
      <Frame32 />
      <Frame31 />
      <Frame30 />
      <Frame29 />
      <Frame28 />
      <Frame27 />
      <Frame26 />
      <Frame25 />
      <Frame24 />
      <Frame23 />
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex gap-[48px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Content">
      <Left1 />
      <Fonts />
    </div>
  );
}

function Slide5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[80px] h-[1080px] items-start left-0 overflow-clip px-[108px] py-[80px] top-[6584px] w-[1920px]" data-name="Slide 16:9 - 6">
      <Whats5 />
      <Content3 />
    </div>
  );
}

function Whats6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="What\'s">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-neutral-500 text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">{`Design & Prototype`}</p>
      </div>
    </div>
  );
}

function Display8() {
  return (
    <div className="bg-neutral-100 content-stretch flex gap-[48px] h-[522px] items-start justify-center relative rounded-[100px] shrink-0 w-full" data-name="Display">
      <div className="h-[1297px] relative shrink-0 w-[1921px]" data-name="Color System 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgColorSystem1} />
      </div>
    </div>
  );
}

function Slide15() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[80px] h-[1080px] items-start left-0 overflow-clip px-[108px] py-[80px] top-[7665px] w-[1920px]" data-name="Slide 16:9 - 16">
      <Whats6 />
      <Display8 />
    </div>
  );
}

function Whats7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="What\'s">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-neutral-500 text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">{`Design & Prototype`}</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative shrink-0">
      <div className="absolute h-[1843px] left-[-59px] top-[-9px] w-[2131px]" data-name="Light Theme 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLightTheme1} />
      </div>
      <div className="absolute bg-white h-[38px] left-px top-[117px] w-[431px]" />
    </div>
  );
}

function Display9() {
  return (
    <div className="basis-0 bg-neutral-100 content-stretch flex gap-[48px] grow items-start min-h-px min-w-px relative rounded-[100px] shrink-0 w-full" data-name="Display">
      <Frame3 />
    </div>
  );
}

function Slide6() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[80px] h-[1080px] items-start left-0 overflow-clip px-[108px] py-[80px] top-[8746px] w-[1920px]" data-name="Slide 16:9 - 7">
      <Whats7 />
      <Display9 />
    </div>
  );
}

function Whats8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="What\'s">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-neutral-500 text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">{`Design & Prototype`}</p>
      </div>
    </div>
  );
}

function Controls() {
  return (
    <div className="h-[12px] relative shrink-0 w-[52px]" data-name="Controls">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 12">
        <g id="Controls">
          <g id="Close">
            <g filter="url(#filter0_i_1027_1284)">
              <circle cx="6" cy="6" fill="var(--fill-0, #EE6A5F)" r="6" style={{ fill: "color(display-p3 0.9333 0.4157 0.3725)", fillOpacity: "1" }} />
            </g>
            <circle cx="6" cy="6" r="5.75" stroke="var(--stroke-0, #CE5347)" strokeWidth="0.5" style={{ stroke: "color(display-p3 0.8078 0.3255 0.2784)", strokeOpacity: "1" }} />
          </g>
          <g id="Maximise">
            <g filter="url(#filter1_i_1027_1284)">
              <circle cx="26" cy="6" fill="var(--fill-0, #F5BD4F)" r="6" style={{ fill: "color(display-p3 0.9608 0.7412 0.3098)", fillOpacity: "1" }} />
            </g>
            <circle cx="26" cy="6" r="5.75" stroke="var(--stroke-0, #D6A243)" strokeWidth="0.5" style={{ stroke: "color(display-p3 0.8392 0.6353 0.2627)", strokeOpacity: "1" }} />
          </g>
          <g id="Minimise">
            <g filter="url(#filter2_i_1027_1284)">
              <circle cx="46" cy="6" fill="var(--fill-0, #61C454)" r="6" style={{ fill: "color(display-p3 0.3804 0.7686 0.3294)", fillOpacity: "1" }} />
            </g>
            <circle cx="46" cy="6" r="5.75" stroke="var(--stroke-0, #58A942)" strokeWidth="0.5" style={{ stroke: "color(display-p3 0.3451 0.6627 0.2588)", strokeOpacity: "1" }} />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter0_i_1027_1284" width="12" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.427451 0 0 0 0 0.384314 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1027_1284" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter1_i_1027_1284" width="12" x="20" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.768627 0 0 0 0 0.317647 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1027_1284" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter2_i_1027_1284" width="12" x="40" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.407843 0 0 0 0 0.8 0 0 0 0 0.345098 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1027_1284" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function BrowserToolbar() {
  return (
    <div className="backdrop-blur-[20px] backdrop-filter bg-[rgba(255,255,255,0.5)] box-border content-stretch flex flex-col items-start px-[16px] py-[10px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[1440px]" data-name="Browser toolbar">
      <Controls />
    </div>
  );
}

function ToolbarAndMockup() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1440px]" data-name="Toolbar and mockup">
      <BrowserToolbar />
      <div className="h-[2632px] relative shrink-0 w-[1440px]" data-name="CustomerAccount 2 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCustomerAccount21} />
      </div>
    </div>
  );
}

function MockupWrap() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center overflow-clip relative rounded-[12px] shrink-0" data-name="Mockup wrap">
      <ToolbarAndMockup />
    </div>
  );
}

function Display10() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex gap-[48px] h-[968px] items-start justify-center overflow-clip pb-0 pt-[40px] px-0 relative rounded-[80px] shrink-0 w-full" data-name="Display">
      <div className="absolute bg-white h-[1024px] left-1/2 shadow-[0px_100px_200px_0px_rgba(52,64,84,0.18)] top-[40px] translate-x-[-50%] w-[1440px]" data-name="Shadow" />
      <MockupWrap />
    </div>
  );
}

function Slide7() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[80px] h-[1080px] items-start left-0 overflow-clip px-[108px] py-[80px] top-[9827px] w-[1920px]" data-name="Slide 16:9 - 8">
      <Whats8 />
      <Display10 />
    </div>
  );
}

function Controls1() {
  return (
    <div className="h-[12px] relative shrink-0 w-[52px]" data-name="Controls">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 12">
        <g id="Controls">
          <g id="Close">
            <g filter="url(#filter0_i_1027_1284)">
              <circle cx="6" cy="6" fill="var(--fill-0, #EE6A5F)" r="6" style={{ fill: "color(display-p3 0.9333 0.4157 0.3725)", fillOpacity: "1" }} />
            </g>
            <circle cx="6" cy="6" r="5.75" stroke="var(--stroke-0, #CE5347)" strokeWidth="0.5" style={{ stroke: "color(display-p3 0.8078 0.3255 0.2784)", strokeOpacity: "1" }} />
          </g>
          <g id="Maximise">
            <g filter="url(#filter1_i_1027_1284)">
              <circle cx="26" cy="6" fill="var(--fill-0, #F5BD4F)" r="6" style={{ fill: "color(display-p3 0.9608 0.7412 0.3098)", fillOpacity: "1" }} />
            </g>
            <circle cx="26" cy="6" r="5.75" stroke="var(--stroke-0, #D6A243)" strokeWidth="0.5" style={{ stroke: "color(display-p3 0.8392 0.6353 0.2627)", strokeOpacity: "1" }} />
          </g>
          <g id="Minimise">
            <g filter="url(#filter2_i_1027_1284)">
              <circle cx="46" cy="6" fill="var(--fill-0, #61C454)" r="6" style={{ fill: "color(display-p3 0.3804 0.7686 0.3294)", fillOpacity: "1" }} />
            </g>
            <circle cx="46" cy="6" r="5.75" stroke="var(--stroke-0, #58A942)" strokeWidth="0.5" style={{ stroke: "color(display-p3 0.3451 0.6627 0.2588)", strokeOpacity: "1" }} />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter0_i_1027_1284" width="12" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.427451 0 0 0 0 0.384314 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1027_1284" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter1_i_1027_1284" width="12" x="20" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.768627 0 0 0 0 0.317647 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1027_1284" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter2_i_1027_1284" width="12" x="40" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.407843 0 0 0 0 0.8 0 0 0 0 0.345098 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1027_1284" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function BrowserToolbar1() {
  return (
    <div className="backdrop-blur-[20px] backdrop-filter bg-[rgba(255,255,255,0.5)] box-border content-stretch flex flex-col items-start px-[16px] py-[10px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[1440px]" data-name="Browser toolbar">
      <Controls1 />
    </div>
  );
}

function ToolbarAndMockup1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1440px]" data-name="Toolbar and mockup">
      <BrowserToolbar1 />
      <div className="h-[1106.14px] relative shrink-0 w-[1440px]" data-name="Maketplace list 2 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMaketplaceList21} />
      </div>
    </div>
  );
}

function MockupWrap1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center overflow-clip relative rounded-[12px] shrink-0" data-name="Mockup wrap">
      <ToolbarAndMockup1 />
    </div>
  );
}

function Display11() {
  return (
    <div className="bg-[#2f36d8] box-border content-stretch flex gap-[48px] h-[1270px] items-start justify-center overflow-clip pb-0 pt-[40px] px-0 relative rounded-[80px] shrink-0 w-full" data-name="Display">
      <div className="absolute bg-white h-[1024px] left-1/2 shadow-[0px_100px_200px_0px_rgba(52,64,84,0.18)] top-[40px] translate-x-[-50%] w-[1440px]" data-name="Shadow" />
      <MockupWrap1 />
    </div>
  );
}

function Slide8() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[80px] h-[1080px] items-start left-0 overflow-clip px-[108px] py-[80px] top-[10908px] w-[1920px]" data-name="Slide 16:9 - 9">
      <Display11 />
    </div>
  );
}

function Controls2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[52px]" data-name="Controls">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 12">
        <g id="Controls">
          <g id="Close">
            <g filter="url(#filter0_i_1027_1284)">
              <circle cx="6" cy="6" fill="var(--fill-0, #EE6A5F)" r="6" style={{ fill: "color(display-p3 0.9333 0.4157 0.3725)", fillOpacity: "1" }} />
            </g>
            <circle cx="6" cy="6" r="5.75" stroke="var(--stroke-0, #CE5347)" strokeWidth="0.5" style={{ stroke: "color(display-p3 0.8078 0.3255 0.2784)", strokeOpacity: "1" }} />
          </g>
          <g id="Maximise">
            <g filter="url(#filter1_i_1027_1284)">
              <circle cx="26" cy="6" fill="var(--fill-0, #F5BD4F)" r="6" style={{ fill: "color(display-p3 0.9608 0.7412 0.3098)", fillOpacity: "1" }} />
            </g>
            <circle cx="26" cy="6" r="5.75" stroke="var(--stroke-0, #D6A243)" strokeWidth="0.5" style={{ stroke: "color(display-p3 0.8392 0.6353 0.2627)", strokeOpacity: "1" }} />
          </g>
          <g id="Minimise">
            <g filter="url(#filter2_i_1027_1284)">
              <circle cx="46" cy="6" fill="var(--fill-0, #61C454)" r="6" style={{ fill: "color(display-p3 0.3804 0.7686 0.3294)", fillOpacity: "1" }} />
            </g>
            <circle cx="46" cy="6" r="5.75" stroke="var(--stroke-0, #58A942)" strokeWidth="0.5" style={{ stroke: "color(display-p3 0.3451 0.6627 0.2588)", strokeOpacity: "1" }} />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter0_i_1027_1284" width="12" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.427451 0 0 0 0 0.384314 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1027_1284" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter1_i_1027_1284" width="12" x="20" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.768627 0 0 0 0 0.317647 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1027_1284" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter2_i_1027_1284" width="12" x="40" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.407843 0 0 0 0 0.8 0 0 0 0 0.345098 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1027_1284" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function BrowserToolbar2() {
  return (
    <div className="backdrop-blur-[20px] backdrop-filter bg-[rgba(255,255,255,0.5)] box-border content-stretch flex flex-col items-start px-[16px] py-[10px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[1440px]" data-name="Browser toolbar">
      <Controls2 />
    </div>
  );
}

function ToolbarAndMockup2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1440px]" data-name="Toolbar and mockup">
      <BrowserToolbar2 />
      <div className="h-[1224.8px] relative shrink-0 w-[1440px]" data-name="Filters 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFilters1} />
      </div>
    </div>
  );
}

function MockupWrap2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center overflow-clip relative rounded-[12px] shrink-0" data-name="Mockup wrap">
      <ToolbarAndMockup2 />
    </div>
  );
}

function Display12() {
  return (
    <div className="bg-[#bfbfbf] box-border content-stretch flex gap-[48px] h-[1270px] items-start justify-center overflow-clip pb-0 pt-[40px] px-0 relative rounded-[80px] shrink-0 w-full" data-name="Display">
      <div className="absolute bg-white h-[1024px] left-1/2 shadow-[0px_100px_200px_0px_rgba(52,64,84,0.18)] top-[40px] translate-x-[-50%] w-[1440px]" data-name="Shadow" />
      <MockupWrap2 />
    </div>
  );
}

function Slide9() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[80px] h-[1080px] items-start left-0 overflow-clip px-[108px] py-[80px] top-[11989px] w-[1920px]" data-name="Slide 16:9 - 10">
      <Display12 />
    </div>
  );
}

function Controls3() {
  return (
    <div className="h-[12px] relative shrink-0 w-[52px]" data-name="Controls">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 12">
        <g id="Controls">
          <g id="Close">
            <g filter="url(#filter0_i_1027_1284)">
              <circle cx="6" cy="6" fill="var(--fill-0, #EE6A5F)" r="6" style={{ fill: "color(display-p3 0.9333 0.4157 0.3725)", fillOpacity: "1" }} />
            </g>
            <circle cx="6" cy="6" r="5.75" stroke="var(--stroke-0, #CE5347)" strokeWidth="0.5" style={{ stroke: "color(display-p3 0.8078 0.3255 0.2784)", strokeOpacity: "1" }} />
          </g>
          <g id="Maximise">
            <g filter="url(#filter1_i_1027_1284)">
              <circle cx="26" cy="6" fill="var(--fill-0, #F5BD4F)" r="6" style={{ fill: "color(display-p3 0.9608 0.7412 0.3098)", fillOpacity: "1" }} />
            </g>
            <circle cx="26" cy="6" r="5.75" stroke="var(--stroke-0, #D6A243)" strokeWidth="0.5" style={{ stroke: "color(display-p3 0.8392 0.6353 0.2627)", strokeOpacity: "1" }} />
          </g>
          <g id="Minimise">
            <g filter="url(#filter2_i_1027_1284)">
              <circle cx="46" cy="6" fill="var(--fill-0, #61C454)" r="6" style={{ fill: "color(display-p3 0.3804 0.7686 0.3294)", fillOpacity: "1" }} />
            </g>
            <circle cx="46" cy="6" r="5.75" stroke="var(--stroke-0, #58A942)" strokeWidth="0.5" style={{ stroke: "color(display-p3 0.3451 0.6627 0.2588)", strokeOpacity: "1" }} />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter0_i_1027_1284" width="12" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.427451 0 0 0 0 0.384314 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1027_1284" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter1_i_1027_1284" width="12" x="20" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.960784 0 0 0 0 0.768627 0 0 0 0 0.317647 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1027_1284" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12" id="filter2_i_1027_1284" width="12" x="40" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.407843 0 0 0 0 0.8 0 0 0 0 0.345098 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1027_1284" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function BrowserToolbar3() {
  return (
    <div className="backdrop-blur-[20px] backdrop-filter bg-[rgba(255,255,255,0.5)] box-border content-stretch flex flex-col items-start px-[16px] py-[10px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-[1440px]" data-name="Browser toolbar">
      <Controls3 />
    </div>
  );
}

function ToolbarAndMockup3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1440px]" data-name="Toolbar and mockup">
      <BrowserToolbar3 />
      <div className="h-[946px] relative shrink-0 w-[1440px]" data-name="Amendment 4 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAmendment41} />
      </div>
    </div>
  );
}

function MockupWrap3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start justify-center overflow-clip relative rounded-[12px] shrink-0" data-name="Mockup wrap">
      <ToolbarAndMockup3 />
    </div>
  );
}

function Display13() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex gap-[48px] h-[1270px] items-start justify-center overflow-clip pb-0 pt-[40px] px-0 relative rounded-[80px] shrink-0 w-full" data-name="Display">
      <div className="absolute bg-white h-[1024px] left-1/2 shadow-[0px_100px_200px_0px_rgba(52,64,84,0.18)] top-[40px] translate-x-[-50%] w-[1440px]" data-name="Shadow" />
      <MockupWrap3 />
    </div>
  );
}

function Slide10() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[80px] h-[1080px] items-start left-0 overflow-clip px-[108px] py-[80px] top-[13070px] w-[1920px]" data-name="Slide 16:9 - 11">
      <Display13 />
    </div>
  );
}

function Whats9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="What\'s">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-neutral-500 text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">Deliver</p>
      </div>
    </div>
  );
}

function PhPaperPlaneTiltLight() {
  return (
    <div className="relative shrink-0 size-[160px]" data-name="ph:paper-plane-tilt-light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 160">
        <g id="ph:paper-plane-tilt-light">
          <path d={svgPaths.p17a56480} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#2f36d8] box-border content-stretch flex gap-[10px] items-center justify-center p-[40px] relative rounded-[1000px] shrink-0" data-name="Icon">
      <PhPaperPlaneTiltLight />
    </div>
  );
}

function Display14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] not-italic relative shrink-0 text-black w-full" data-name="Display">
      <p className="font-['SF_Pro_Display:Regular',sans-serif] relative shrink-0 text-[64px] tracking-[-0.256px] w-full">{`Collaborate with the development team to ensure that the design can be smoothly translated into operational interfaces. `}</p>
      <p className="font-['Helvetica_Neue:Regular',sans-serif] relative shrink-0 text-[30px] tracking-[-0.12px] w-full">Test the interface for reliability, security, and compatibility. Launch the Restyle UI to the users and stakeholders. Create over 200 Jira issues to track the development progress and issues. Manage and collaborate with 3rd party developers to ensure the quality and consistency of the interface.</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
      <Icon1 />
      <Display14 />
    </div>
  );
}

function Slide11() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[1080px] items-start justify-between left-0 overflow-clip px-[108px] py-[80px] top-[14151px] w-[1920px]" data-name="Slide 16:9 - 12">
      <Whats9 />
      <Content4 />
    </div>
  );
}

function Whats10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="What\'s">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-neutral-500 text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">Deliver</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[1972px] relative shrink-0 w-[541.333px]">
      <div className="absolute bottom-[-11px] h-[2512px] left-[calc(50%+10.33px)] translate-x-[-50%] w-[600px]" data-name="Customer Accounts 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCustomerAccounts1} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 bg-white content-stretch flex gap-[10px] grow items-start min-h-px min-w-px overflow-clip relative rounded-[40px] shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[2837px] relative shrink-0 w-[541.333px]">
      <div className="absolute h-[2898px] left-[-0.33px] top-[-61px] w-[794px]" data-name="Products 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgProducts1} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 bg-white content-stretch flex gap-[10px] grow items-start justify-center min-h-px min-w-px overflow-clip relative rounded-[40px] shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[2051px] relative shrink-0 w-[541.333px]">
      <div className="absolute h-[1302px] left-[-45.67px] top-[-197px] w-[778px]" data-name="Subscription 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSubscription1} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 bg-white content-stretch flex gap-[10px] grow items-start min-h-px min-w-px overflow-clip relative rounded-[40px] shrink-0">
      <Frame9 />
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex gap-[40px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Slide12() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[60px] h-[1080px] items-start left-0 overflow-clip px-[108px] py-[80px] top-[15232px] w-[1920px]" data-name="Slide 16:9 - 13">
      <Whats10 />
      <Content5 />
    </div>
  );
}

function Whats11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="What\'s">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-neutral-500 text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">{`Tweak & Evolve`}</p>
      </div>
    </div>
  );
}

function PhSmileyWinkLight() {
  return (
    <div className="relative shrink-0 size-[160px]" data-name="ph:smiley-wink-light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 160">
        <g id="ph:smiley-wink-light">
          <path d={svgPaths.pb0c0e80} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#2f36d8] box-border content-stretch flex gap-[10px] items-center justify-center p-[40px] relative rounded-[1000px] shrink-0" data-name="Icon">
      <PhSmileyWinkLight />
    </div>
  );
}

function Display15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Display">
      <div className="font-['SF_Pro_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[64px] text-black tracking-[-0.256px] w-full">
        <p className="mb-0">Collect feedback and data from the users and stakeholders, and measure the performance and satisfaction of the Restyle UI. Identify any issues, gaps, or opportunities for improvement, and iterate on the design until it meets the user needs and expectations.</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Content">
      <Icon2 />
      <Display15 />
    </div>
  );
}

function Slide13() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[1080px] items-start justify-between left-0 overflow-clip px-[108px] py-[80px] top-[16313px] w-[1920px]" data-name="Slide 16:9 - 14">
      <Whats11 />
      <Content6 />
    </div>
  );
}

function Whats12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="What\'s">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-neutral-500 text-nowrap tracking-[-0.096px]">
        <p className="leading-[normal] whitespace-pre">{`Tweak & Evolve`}</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-full">
      <div className="absolute h-[3124px] left-[-65px] top-[-15px] w-[1824px]" data-name="Revenue Section 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRevenueSection1} />
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[48px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <Frame10 />
    </div>
  );
}

function Slide14() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[60px] h-[1080px] items-start left-0 overflow-clip px-[108px] py-[80px] top-[17394px] w-[1920px]" data-name="Slide 16:9 - 15">
      <Whats12 />
      <Content7 />
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="relative size-full" data-name="Portfolio 1">
      <Scene />
      <Slide />
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide15 />
      <Slide6 />
      <Slide7 />
      <Slide8 />
      <Slide9 />
      <Slide10 />
      <Slide11 />
      <Slide12 />
      <Slide13 />
      <Slide14 />
    </div>
  );
}