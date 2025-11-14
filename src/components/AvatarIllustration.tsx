import { useEffect, useState } from "react";
import svgPaths from "../imports/svg-dz98u3w6le";
import { imgBody } from "../imports/svg-aena9";

export function AvatarIllustration() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax values based on scroll - reduced for more subtle effect
  const bgY = scrollY * 0.03;
  const bodyY = scrollY * 0.08;
  const outfitY = scrollY * 0.07;
  const headY = scrollY * 0.09;
  const hairY = scrollY * 0.08;
  const eyesY = scrollY * 0.12;
  const mouthY = scrollY * 0.10;
  const glassesY = scrollY * 0.11;
  const rotation = scrollY * 0.025;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Circular mask container */}
      <div
        className="relative w-full max-w-md aspect-square rounded-full overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 shadow-2xl"
        style={{
          clipPath: "circle(50% at 50% 50%)",
        }}
      >
        {/* Inner content with circular border */}
        <div className="absolute inset-0 rounded-full border-4 border-background/20 pointer-events-none z-10" />

        <div className="relative w-full h-full">
          {/* Background - slowest parallax - MUST BE FIRST (bottom layer) */}
          <div
            className="absolute inset-0 z-0"
            style={{
              transform: `translateY(${bgY}px) rotate(${rotation * 0.5}deg)`,
              transformOrigin: "center",
              transition: "transform 0.1s ease-out",
            }}
          >
            <div
              className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1196.07px_1196.07px]"
              style={{ maskImage: `url('${imgBody}')` }}
            >
              <div className="absolute bottom-[0.06%] left-[0.03%] right-[0.1%] top-0">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 1199 1200"
                >
                  <g id="Bg">
                    <path
                      d={svgPaths.p3728a600}
                      fill="var(--fill-0, black)"
                      style={{
                        fill: "black",
                        fillOpacity: "1",
                      }}
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Body - slow parallax */}
          <div
            className="absolute inset-0 z-10"
            style={{
              transform: `translateY(${outfitY}px) rotate(${rotation * 0.6}deg)`,
              transformOrigin: "center",
              transition: "transform 0.1s ease-out",
            }}
          >
            <div
              className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1196.07px_1196.07px]"
              style={{ maskImage: `url('${imgBody}')` }}
            >
              <div className="absolute inset-[68.85%_19.66%_0.13%_13.3%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 805 373"
                >
                  <g id="Revised_Shoulder_1_">
                    <path
                      d={svgPaths.p1cf46970}
                      fill="var(--fill-0, white)"
                      style={{
                        fill: "white",
                        fillOpacity: "1",
                      }}
                    />
                    <g id="Group">
                      <path
                        d={svgPaths.p5872980}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Outfit - medium parallax */}
          <div
            className="absolute inset-0 z-20"
            style={{
              transform: `translateY(${outfitY}px) rotate(${rotation * 0.6}deg)`,
              transformOrigin: "center",
              transition: "transform 0.1s ease-out",
            }}
          >
            <div
              className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1196.07px_1196.07px]"
              style={{ maskImage: `url('${imgBody}')` }}
            >
              <div className="absolute inset-[60.33%_11.49%_-11.73%_3.1%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 1025 617"
                >
                  <g id="outfit_1_1_">
                    <g id="Group">
                      <path
                        d={svgPaths.p7adf600}
                        fill="var(--fill-0, white)"
                        style={{
                          fill: "white",
                          fillOpacity: "1",
                        }}
                      />
                      <g id="Group_2">
                        <path
                          d={svgPaths.p3dde6d80}
                          fill="var(--fill-0, black)"
                          style={{
                            fill: "black",
                            fillOpacity: "1",
                          }}
                        />
                      </g>
                    </g>
                    <g id="Group_3">
                      <path
                        d={svgPaths.p10583980}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                    <g id="Group_4">
                      <path
                        d={svgPaths.p18ed2e00}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                    <g id="Group_5">
                      <path
                        d={svgPaths.p27f80cc0}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                    <g id="Group_6">
                      <path
                        d={svgPaths.p1dc1de70}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                    <g id="Group_7">
                      <path
                        d={svgPaths.p5985c80}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                    <path
                      d={svgPaths.p21c59f70}
                      fill="var(--fill-0, black)"
                      style={{
                        fill: "black",
                        fillOpacity: "1",
                      }}
                    />
                    <path
                      d={svgPaths.p3ee7ae00}
                      fill="var(--fill-0, black)"
                      style={{
                        fill: "black",
                        fillOpacity: "1",
                      }}
                    />
                    <path
                      d={svgPaths.p1ea99370}
                      stroke="var(--stroke-0, black)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="5.1257"
                      style={{
                        stroke: "black",
                        strokeOpacity: "1",
                      }}
                    />
                    <path
                      d={svgPaths.p37fa0060}
                      stroke="var(--stroke-0, black)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="5.1257"
                      style={{
                        stroke: "black",
                        strokeOpacity: "1",
                      }}
                    />
                    <path
                      d={svgPaths.p19cf7800}
                      stroke="var(--stroke-0, black)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="5.1257"
                      style={{
                        stroke: "black",
                        strokeOpacity: "1",
                      }}
                    />
                    <g id="Group_8">
                      <path
                        d={svgPaths.p2c5ace00}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                    <g id="Group_9">
                      <path
                        d={svgPaths.p33ef5180}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Head - medium-fast parallax */}
          <div
            className="absolute inset-0 z-30"
            style={{
              transform: `translateY(${headY}px) rotate(${rotation * 0.4}deg)`,
              transformOrigin: "center",
              transition: "transform 0.1s ease-out",
            }}
          >
            <div
              className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1196.07px_1196.07px]"
              style={{ maskImage: `url('${imgBody}')` }}
            >
              <div className="absolute inset-[19.31%_27.32%_15.34%_29.67%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 517 785"
                >
                  <g id="Group">
                    <g id="Neck_1_5_">
                      <path
                        d={svgPaths.p33060cf0}
                        fill="var(--fill-0, white)"
                        style={{
                          fill: "white",
                          fillOpacity: "1",
                        }}
                      />
                      <g id="Group_2">
                        <path
                          d={svgPaths.p3245af00}
                          fill="var(--fill-0, black)"
                          style={{
                            fill: "black",
                            fillOpacity: "1",
                          }}
                        />
                      </g>
                      <g id="Group_3">
                        <path
                          d={svgPaths.p348b4700}
                          fill="var(--fill-0, black)"
                          style={{
                            fill: "black",
                            fillOpacity: "1",
                          }}
                        />
                      </g>
                      <path
                        d={svgPaths.p2b345080}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                      <g id="Group_4">
                        <path
                          d={svgPaths.p2f7a6470}
                          fill="var(--fill-0, black)"
                          style={{
                            fill: "black",
                            fillOpacity: "1",
                          }}
                        />
                      </g>
                    </g>
                    <path
                      d={svgPaths.p3e52d00}
                      fill="var(--fill-0, white)"
                      style={{
                        fill: "white",
                        fillOpacity: "1",
                      }}
                    />
                    <g id="Group_5">
                      <path
                        d={svgPaths.p1d737f80}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                    <path
                      d={svgPaths.p1a56b900}
                      fill="var(--fill-0, white)"
                      style={{
                        fill: "white",
                        fillOpacity: "1",
                      }}
                    />
                    <g id="Group_6">
                      <path
                        d={svgPaths.p23eab000}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                    <g id="Group_7">
                      <path
                        d={svgPaths.p23629080}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                    <g id="Group_8">
                      <path
                        d={svgPaths.p10ee6580}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Hair - medium parallax */}
          <div
            className="absolute inset-0 z-40"
            style={{
              transform: `translateY(${hairY}px) rotate(${rotation * 0.35}deg)`,
              transformOrigin: "center",
              transition: "transform 0.1s ease-out",
            }}
          >
            <div
              className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1196.07px_1196.07px]"
              style={{ maskImage: `url('${imgBody}')` }}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 1200 1200"
              >
                <g id="Hair">
                  <path
                    d={svgPaths.pabb2980}
                    fill="var(--fill-0, black)"
                    style={{ fill: "black", fillOpacity: "1" }}
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Mouth - follows head */}
          <div
            className="absolute inset-0 z-50"
            style={{
              transform: `translateY(${mouthY}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div
              className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1196.07px_1196.07px]"
              style={{ maskImage: `url('${imgBody}')` }}
            >
              <div className="absolute inset-[56.14%_38.31%_40.47%_54.48%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 87 41"
                >
                  <g id="Group">
                    <path
                      d={svgPaths.p7fc37c0}
                      fill="var(--fill-0, black)"
                      style={{
                        fill: "black",
                        fillOpacity: "1",
                      }}
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Eyes - fast parallax */}
          <div
            className="absolute inset-0 z-60"
            style={{
              transform: `translateY(${eyesY}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div
              className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1196.07px_1196.07px]"
              style={{ maskImage: `url('${imgBody}')` }}
            >
              <div className="absolute inset-[36.98%_28.93%_52.06%_49.14%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 264 132"
                >
                  <g id="normal_1_">
                    <path
                      d={svgPaths.p2e33700}
                      fill="var(--fill-0, black)"
                      style={{
                        fill: "black",
                        fillOpacity: "1",
                      }}
                    />
                    <path
                      d={svgPaths.p2abd9680}
                      fill="var(--fill-0, black)"
                      style={{
                        fill: "black",
                        fillOpacity: "1",
                      }}
                    />
                    <g id="Group">
                      <path
                        d={svgPaths.pe286800}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                    <g id="Group_2">
                      <path
                        d={svgPaths.p211de900}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                    <path
                      d={svgPaths.p32902a00}
                      fill="var(--fill-0, black)"
                      style={{
                        fill: "black",
                        fillOpacity: "1",
                      }}
                    />
                    <path
                      d={svgPaths.p3f9eb300}
                      fill="var(--fill-0, black)"
                      style={{
                        fill: "black",
                        fillOpacity: "1",
                      }}
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Glasses - fastest parallax */}
          <div
            className="absolute inset-0 z-70"
            style={{
              transform: `translateY(${glassesY}px) rotate(${rotation * 0.4}deg)`,
              transformOrigin: "center",
              transition: "transform 0.1s ease-out",
            }}
          >
            <div
              className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1196.07px_1196.07px]"
              style={{ maskImage: `url('${imgBody}')` }}
            >
              <div className="absolute inset-[40.78%_26.24%_46.63%_38.25%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 427 152"
                >
                  <g id="Stylish_Glasses_1_">
                    <path
                      d={svgPaths.p3dd7400}
                      fill="var(--fill-0, black)"
                      style={{
                        fill: "black",
                        fillOpacity: "1",
                      }}
                    />
                    <path
                      d={svgPaths.p24225f00}
                      fill="var(--fill-0, black)"
                      style={{
                        fill: "black",
                        fillOpacity: "1",
                      }}
                    />
                    <g id="Group">
                      <path
                        d={svgPaths.p367b8b00}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                    <g id="Group_2">
                      <path
                        d={svgPaths.p273f7660}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                    <g id="Group_3">
                      <path
                        d={svgPaths.p23430d80}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                    <g id="Group_4">
                      <path
                        d={svgPaths.p3ba2a40}
                        fill="var(--fill-0, black)"
                        style={{
                          fill: "black",
                          fillOpacity: "1",
                        }}
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}