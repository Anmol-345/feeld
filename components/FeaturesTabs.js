
"use client";
import React, { useState } from 'react';

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="featuresSection w-full flex flex-col items-center pt-12 pb-12 tablet:pb-24 laptop:pb-24">
      <div className="featuresContainer px-4 laptop:px-[58px] w-full max-w-[1440px] min-h-[650px]">
        <div className="header">
          <div className="headerContainer pb-4">
            <div className="header">
              <h5 className="font-feeld-edge text-[18px] tablet:text-[24px] laptop:text-[24px] font-extralight leading-[120%] tracking-[-0.24px] text-secondary-lightGray">
                {"Curated for TOKEN2049"}
              </h5>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="tabsContainer">
            <div className="tabsContentContainer flex flex-col gap-5 tablet:gap-9 laptop:gap-9">
              <div className="relative w-full">
                <style>{`
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                  .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                `}</style>
                <div className="tabs flex flex-row overflow-x-auto hide-scrollbar whitespace-nowrap snap-x">
                  
  <div id="tab-interests" className="tabContainer flex-none snap-start">
    <button type="button" onClick={() => setActiveTab(0)} className="tab py-4 cursor-pointer px-8 laptop:px-5 group w-full border-solid border-[#2B263A] border-b">
      <div className={"textContainer flex items-center justify-center whitespace-nowrap font-feeld text-[14px] laptop:text-[16px] font-normal leading-[150%] " + (activeTab === 0 ? "text-secondary-onSurface" : "text-secondary-onSurfaceTertiary") + " group-hover:text-primary-white"}>
        {"Find your crowd"}
      </div>
      <div className="active-border absolute bottom-0 left-0 w-full h-[1px]" id="interests" style={{ backgroundColor: "rgb(216, 119, 234)", transformOrigin: "0% 50%", transform: activeTab === 0 ? "scale(1, 1)" : "scale(0, 1)", transition: "transform 0.3s ease" }} />
    </button>
  </div>
  
                  
  <div id="tab-desire tags" className="tabContainer flex-none snap-start">
    <button type="button" onClick={() => setActiveTab(1)} className="tab py-4 cursor-pointer px-8 laptop:px-5 group w-full border-solid border-[#2B263A] border-b">
      <div className={"textContainer flex items-center justify-center whitespace-nowrap font-feeld text-[14px] laptop:text-[16px] font-normal leading-[150%] " + (activeTab === 1 ? "text-secondary-onSurface" : "text-secondary-onSurfaceTertiary") + " group-hover:text-primary-white"}>
        {"Event tags"}
      </div>
      <div className="active-border absolute bottom-0 left-0 w-full h-[1px]" id="desire tags" style={{ backgroundColor: "rgb(216, 119, 234)", transformOrigin: "0% 50%", transform: activeTab === 1 ? "scale(1, 1)" : "scale(0, 1)", transition: "transform 0.3s ease" }} />
    </button>
  </div>
  
                  
  <div id="tab-longform bios" className="tabContainer flex-none snap-start">
    <button type="button" onClick={() => setActiveTab(2)} className="tab py-4 cursor-pointer px-8 laptop:px-5 group w-full border-solid border-[#2B263A] border-b">
      <div className={"textContainer flex items-center justify-center whitespace-nowrap font-feeld text-[14px] laptop:text-[16px] font-normal leading-[150%] " + (activeTab === 2 ? "text-secondary-onSurface" : "text-secondary-onSurfaceTertiary") + " group-hover:text-primary-white"}>
        {"Startup bios"}
      </div>
      <div className="active-border absolute bottom-0 left-0 w-full h-[1px]" id="longform bios" style={{ backgroundColor: "rgb(216, 119, 234)", transformOrigin: "0% 50%", transform: activeTab === 2 ? "scale(1, 1)" : "scale(0, 1)", transition: "transform 0.3s ease" }} />
    </button>
  </div>
  
                  
  <div id="tab-always ad-free" className="tabContainer flex-none snap-start">
    <button type="button" onClick={() => setActiveTab(3)} className="tab py-4 cursor-pointer px-8 laptop:px-5 group w-full border-solid border-[#2B263A] border-b">
      <div className={"textContainer flex items-center justify-center whitespace-nowrap font-feeld text-[14px] laptop:text-[16px] font-normal leading-[150%] " + (activeTab === 3 ? "text-secondary-onSurface" : "text-secondary-onSurfaceTertiary") + " group-hover:text-primary-white"}>
        {"Verified attendees"}
      </div>
      <div className="active-border absolute bottom-0 left-0 w-full h-[1px]" id="always ad-free" style={{ backgroundColor: "rgb(216, 119, 234)", transformOrigin: "0% 50%", transform: activeTab === 3 ? "scale(1, 1)" : "scale(0, 1)", transition: "transform 0.3s ease" }} />
    </button>
  </div>
  
                  
  <div id="tab-hidden bios" className="tabContainer flex-none snap-start">
    <button type="button" onClick={() => setActiveTab(4)} className="tab py-4 cursor-pointer px-8 laptop:px-5 group w-full border-solid border-[#2B263A] border-b">
      <div className={"textContainer flex items-center justify-center whitespace-nowrap font-feeld text-[14px] laptop:text-[16px] font-normal leading-[150%] " + (activeTab === 4 ? "text-secondary-onSurface" : "text-secondary-onSurfaceTertiary") + " group-hover:text-primary-white"}>
        {"Private mode"}
      </div>
      <div className="active-border absolute bottom-0 left-0 w-full h-[1px]" id="hidden bios" style={{ backgroundColor: "rgb(216, 119, 234)", transformOrigin: "0% 50%", transform: activeTab === 4 ? "scale(1, 1)" : "scale(0, 1)", transition: "transform 0.3s ease" }} />
    </button>
  </div>
  
                </div>
                <div className="scrim absolute top-0 right-0 w-[32px] h-full bg-[linear-gradient(90deg,_rgba(9,_5,_22,_0.00)_5.49%,_#090516_100%)] laptop:hidden pointer-events-none" />
              </div>
              <div className="contentContainer flex w-full relative h-auto min-h-[420px] tablet:min-h-[420px] laptop:min-h-[420px] laptop:max-h-[520px]">
                <div className="flex relative w-full">
                  <div className={"featurePanel flex flex-row w-full gap-6 laptop:gap-16 items-stretch h-min absolute top-0 left-0 right-0 bottom-0 transition-all duration-500 " + (activeTab === 0 ? "" : "invisible")} style={{ opacity: activeTab === 0 ? 1 : 0, zIndex: activeTab === 0 ? 10 : 0 }}>
                    <div className="leftContent flex-1 h-min">
                      <div className="mediaContainer h-min relative w-full flex m-0">
                        <video src="/feeld/media/01_Features-Interests_1308x1040_j2rzyz.webm" autoplay muted loop playsInline className="relative object-cover rounded-b-[16px] rounded-tr-[16px] aspect-5/4" preload="none" />
                      </div>
                    </div>
                    <div className="rightContent flex flex-row flex-1 items-start gap-4 h-auto">
                      <div className="icon w-[48px]">
                        <div className="iconContainer w-[48px] h-[48px] relative desktop-feature-icon" style={{ transition: "all 0.5s ease" }}>
                          <img alt="Magenta pink icon outline of two circles together" loading="lazy" decoding="async" data-nimg="fill" src="/assets/image/upload/v1779486243/Icon-3_oiwj2x.svg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                        </div>
                      </div>
                      <div className="content flex flex-col items-start justify-between h-full w-[80%]">
                        <div className="headerContainer desktop-feature-header" style={{ transition: "all 0.5s ease" }}>
                          <div className="header">
                            <h2 className="font-feeld-edge text-[48px] font-extralight leading-[100%] tracking-[-0.48px] text-primary-grey">
                              {"More than just a"}
                            </h2>
                            <h2 className="font-feeld-edge text-[48px] font-extralight leading-[100%] tracking-[-0.48px] text-primary-grey">
                              {"business card"}
                            </h2>
                          </div>
                        </div>
                        <div className="textContent flex flex-col items-start gap-4 w-full">
                          <div className="textContainer desktop-feature-text" style={{ transition: "all 0.5s ease" }}>
                            <p className="font-feeld-light text-[16px] font-light leading-[150%] text-secondary-onSurface">
                              {"Connect over shared interests, side events, and after-parties. Your conference experience shouldn't end at the exhibitor booths."}
                            </p>
                          </div>
                          <div className="ctaContainer desktop-feature-cta w-full" style={{ transition: "all 0.5s ease" }}>
                            <button className="text-md font-normal rounded-full my-4 border hover:transition-all duration-300 border-black hover:border-white w-full bg-primary-white text-primary-black cta-hover-shadow-white hover:transform=[scale(1.1)] hover:text-primary-black hover:bg-primary-white mt-0 mb-0">
                              <a id="features-cta" className="block font-feeld text-[18px] font-normal leading-normal px-7 py-4" href="/download">
                                {"Join early"}
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"featurePanel flex flex-row w-full gap-6 laptop:gap-16 items-stretch h-min absolute top-0 left-0 right-0 bottom-0 transition-all duration-500 " + (activeTab === 1 ? "" : "invisible")} style={{ opacity: activeTab === 1 ? 1 : 0, zIndex: activeTab === 1 ? 10 : 0 }}>
                    <div className="leftContent flex-1 h-min">
                      <div className="mediaContainer h-min relative w-full flex m-0">
                        <video src="/feeld/media/02-features-desires.av1_kgytg3.mp4" autoplay muted loop playsInline className="relative object-cover rounded-b-[16px] rounded-tr-[16px] aspect-5/4" preload="none" />
                      </div>
                    </div>
                    <div className="rightContent flex flex-row flex-1 items-start gap-4 h-auto">
                      <div className="icon w-[48px]">
                        <div className="iconContainer w-[48px] h-[48px] relative desktop-feature-icon" style={{ transition: "all 0.5s ease" }}>
                          <img alt="BLue icon outline of a smiling face" loading="lazy" decoding="async" data-nimg="fill" src="/assets/image/upload/v1779486243/Icon-1_rgu6us.svg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                        </div>
                      </div>
                      <div className="content flex flex-col items-start justify-between h-full w-[80%]">
                        <div className="headerContainer desktop-feature-header" style={{ transition: "all 0.5s ease" }}>
                          <div className="header">
                            <h2 className="font-feeld-edge text-[48px] font-extralight leading-[100%] tracking-[-0.48px] text-primary-grey">
                              {"Openly share"}
                            </h2>
                            <h2 className="font-feeld-edge text-[48px] font-extralight leading-[100%] tracking-[-0.48px] text-primary-grey">
                              {"your desires"}
                            </h2>
                          </div>
                        </div>
                        <div className="textContent flex flex-col items-start gap-4 w-full">
                          <div className="textContainer desktop-feature-text" style={{ transition: "all 0.5s ease" }}>
                            <p className="font-feeld-light text-[16px] font-light leading-[150%] text-secondary-onSurface">
                              {"Into hackathons—but nothing else? Networking dinners—but maybe something more casual? Whether it's VC pitching, scaling startups, or deep technical discussions, here, you can explore your professional interests. And there’s no shame in saying exactly what you are looking for."}
                            </p>
                          </div>
                          <div className="ctaContainer desktop-feature-cta w-full" style={{ transition: "all 0.5s ease" }}>
                            <button className="text-md font-normal rounded-full my-4 border hover:transition-all duration-300 border-black hover:border-white w-full bg-primary-white text-primary-black cta-hover-shadow-white hover:transform=[scale(1.1)] hover:text-primary-black hover:bg-primary-white mt-0 mb-0">
                              <a id="features-cta" className="block font-feeld text-[18px] font-normal leading-normal px-7 py-4" href="/download">
                                {"Join early"}
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"featurePanel flex flex-row w-full gap-6 laptop:gap-16 items-stretch h-min absolute top-0 left-0 right-0 bottom-0 transition-all duration-500 " + (activeTab === 2 ? "" : "invisible")} style={{ opacity: activeTab === 2 ? 1 : 0, zIndex: activeTab === 2 ? 10 : 0 }}>
                    <div className="leftContent flex-1 h-min">
                      <div className="mediaContainer h-min relative w-full flex m-0">
                        <video src="/feeld/media/03-features-long-bios.av1_fprh7y.mp4" autoplay muted loop playsInline className="relative object-cover rounded-b-[16px] rounded-tr-[16px] aspect-5/4" preload="none" />
                      </div>
                    </div>
                    <div className="rightContent flex flex-row flex-1 items-start gap-4 h-auto">
                      <div className="icon w-[48px]">
                        <div className="iconContainer w-[48px] h-[48px] relative desktop-feature-icon" style={{ transition: "all 0.5s ease" }}>
                          <img alt="Green icon outline of a pencil" loading="lazy" decoding="async" data-nimg="fill" src="/assets/image/upload/v1779486243/Icon-4_mcs9d5.svg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                        </div>
                      </div>
                      <div className="content flex flex-col items-start justify-between h-full w-[80%]">
                        <div className="headerContainer desktop-feature-header" style={{ transition: "all 0.5s ease" }}>
                          <div className="header">
                            <h2 className="font-feeld-edge text-[48px] font-extralight leading-[100%] tracking-[-0.48px] text-primary-grey">
                              {"Express yourself"}
                            </h2>
                            <h2 className="font-feeld-edge text-[48px] font-extralight leading-[100%] tracking-[-0.48px] text-primary-grey">
                              {"freely"}
                            </h2>
                          </div>
                        </div>
                        <div className="textContent flex flex-col items-start gap-4 w-full">
                          <div className="textContainer desktop-feature-text" style={{ transition: "all 0.5s ease" }}>
                            <p className="font-feeld-light text-[16px] font-light leading-[150%] text-secondary-onSurface">
                              {"Connections require context—and that starts in your bio. With a generous character count, you have the space to write a full overview of your project, fund, or what you’re looking to build."}
                            </p>
                          </div>
                          <div className="ctaContainer desktop-feature-cta w-full" style={{ transition: "all 0.5s ease" }}>
                            <button className="text-md font-normal rounded-full my-4 border hover:transition-all duration-300 border-black hover:border-white w-full bg-primary-white text-primary-black cta-hover-shadow-white hover:transform=[scale(1.1)] hover:text-primary-black hover:bg-primary-white mt-0 mb-0">
                              <a id="features-cta" className="block font-feeld text-[18px] font-normal leading-normal px-7 py-4" href="/download">
                                {"Join early"}
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"featurePanel flex flex-row w-full gap-6 laptop:gap-16 items-stretch h-min absolute top-0 left-0 right-0 bottom-0 transition-all duration-500 " + (activeTab === 3 ? "" : "invisible")} style={{ opacity: activeTab === 3 ? 1 : 0, zIndex: activeTab === 3 ? 10 : 0 }}>
                    <div className="leftContent flex-1 h-min">
                      <div className="mediaContainer h-min relative w-full flex m-0">
                        <video src="/feeld/media/04-features-images.av1_rqkehn.mp4" autoplay muted loop playsInline className="relative object-cover rounded-b-[16px] rounded-tr-[16px] aspect-5/4" preload="none" />
                      </div>
                    </div>
                    <div className="rightContent flex flex-row flex-1 items-start gap-4 h-auto">
                      <div className="icon w-[48px]">
                        <div className="iconContainer w-[48px] h-[48px] relative desktop-feature-icon" style={{ transition: "all 0.5s ease" }}>
                          <img alt="Red icon outline of a shield" loading="lazy" decoding="async" data-nimg="fill" src="/assets/image/upload/v1779486243/Icon-2_hbciuw.svg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                        </div>
                      </div>
                      <div className="content flex flex-col items-start justify-between h-full w-[80%]">
                        <div className="headerContainer desktop-feature-header" style={{ transition: "all 0.5s ease" }}>
                          <div className="header">
                            <h2 className="font-feeld-edge text-[48px] font-extralight leading-[100%] tracking-[-0.48px] text-primary-grey">
                              {"No interruption"}
                            </h2>
                            <h2 className="font-feeld-edge text-[48px] font-extralight leading-[100%] tracking-[-0.48px] text-primary-grey">
                              {"from ads"}
                            </h2>
                          </div>
                        </div>
                        <div className="textContent flex flex-col items-start gap-4 w-full">
                          <div className="textContainer desktop-feature-text" style={{ transition: "all 0.5s ease" }}>
                            <p className="font-feeld-light text-[16px] font-light leading-[150%] text-secondary-onSurface">
                              {"You’re here to find connection—not spam. TokenMingle ensures that all attendees are verified, protecting your inbox and opening up space for genuine professional conversations."}
                            </p>
                          </div>
                          <div className="ctaContainer desktop-feature-cta w-full" style={{ transition: "all 0.5s ease" }}>
                            <button className="text-md font-normal rounded-full my-4 border hover:transition-all duration-300 border-black hover:border-white w-full bg-primary-white text-primary-black cta-hover-shadow-white hover:transform=[scale(1.1)] hover:text-primary-black hover:bg-primary-white mt-0 mb-0">
                              <a id="features-cta" className="block font-feeld text-[18px] font-normal leading-normal px-7 py-4" href="/download">
                                {"Join early"}
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"featurePanel flex flex-row w-full gap-6 laptop:gap-16 items-stretch h-min absolute top-0 left-0 right-0 bottom-0 transition-all duration-500 " + (activeTab === 4 ? "" : "invisible")} style={{ opacity: activeTab === 4 ? 1 : 0, zIndex: activeTab === 4 ? 10 : 0 }}>
                    <div className="leftContent flex-1 h-min">
                      <div className="mediaContainer h-min relative w-full flex m-0">
                        <video src="/feeld/media/05_Features-Hidden_Bio_1308x1040_mwik5k.webm" autoplay muted loop playsInline className="relative object-cover rounded-b-[16px] rounded-tr-[16px] aspect-5/4" preload="none" />
                      </div>
                    </div>
                    <div className="rightContent flex flex-row flex-1 items-start gap-4 h-auto">
                      <div className="icon w-[48px]">
                        <div className="iconContainer w-[48px] h-[48px] relative desktop-feature-icon" style={{ transition: "all 0.5s ease" }}>
                          <img alt="Yellow icon outline of an eye with a cross through it" loading="lazy" decoding="async" data-nimg="fill" src="/assets/image/upload/v1779486243/Icon_ojv58k.svg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                        </div>
                      </div>
                      <div className="content flex flex-col items-start justify-between h-full w-[80%]">
                        <div className="headerContainer desktop-feature-header" style={{ transition: "all 0.5s ease" }}>
                          <div className="header">
                            <h2 className="font-feeld-edge text-[48px] font-extralight leading-[100%] tracking-[-0.48px] text-primary-grey">
                              {"Keep a public profile—"}
                            </h2>
                            <h2 className="font-feeld-edge text-[48px] font-extralight leading-[100%] tracking-[-0.48px] text-primary-grey">
                              {"and a hidden one"}
                            </h2>
                          </div>
                        </div>
                        <div className="textContent flex flex-col items-start gap-4 w-full">
                          <div className="textContainer desktop-feature-text" style={{ transition: "all 0.5s ease" }}>
                            <p className="font-feeld-light text-[16px] font-light leading-[150%] text-secondary-onSurface">
                              {"Public bios are for everyone, hidden bios are only for the people you connect with. Use this space to control what you share: whether it be startup ideas, fundraising goals, or networking preferences. Reveal yourself at your own pace."}
                            </p>
                          </div>
                          <div className="ctaContainer desktop-feature-cta w-full" style={{ transition: "all 0.5s ease" }}>
                            <button className="text-md font-normal rounded-full my-4 border hover:transition-all duration-300 border-black hover:border-white w-full bg-primary-white text-primary-black cta-hover-shadow-white hover:transform=[scale(1.1)] hover:text-primary-black hover:bg-primary-white mt-0 mb-0">
                              <a id="features-cta" className="block font-feeld text-[18px] font-normal leading-normal px-7 py-4" href="/download">
                                {"Join early"}
                              </a>
                            </button>
                          </div>
                        </div>
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
  );
}
