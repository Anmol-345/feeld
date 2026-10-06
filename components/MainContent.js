import FeaturesTabs from './FeaturesTabs';
import SafetySection from './SafetySection';
import { heroContent, exploreContent, eventsContent, TELEGRAM_URL } from '../app/content';

export default function MainContent() {
  return (
    <div className="theme-change flex flex-col items-center bg-homepage-bg text-homepage-text" style={{ paddingTop: "88px" }}>
    <div className="w-full h-full relative rounded-b-[32px] mt-[-88px] min-h-[770px] tablet:min-h-[900px] laptop:min-h-[900px]" data-hero="true">
      <div className="inner-container z-[0] relative flex justify-center items-center h-screen min-h-[770px] tablet:min-h-[900px] laptop:min-h-[900px]">
        <div className="contentContainer absolute flex flex-col items-center z-[1] py-[100px] px-4 laptop:px-[44px] h-full w-full">
          <div className="flex flex-col items-start relative w-full overflow-visible max-w-[1440px] desktop:px-[44px] pt-[18vh] tablet:pt-[25vh] laptop:pt-[25vh]">
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col gap-7 tablet:gap-8 laptop:gap-5 desktop:gap-8 w-full">
                <div className="titleContainer flex flex-col">
                  <div className="w-full pb-1 tablet:pb-6 laptop:pb-6  titleItem1" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", filter: "none", transform: "translate(0px, 0px)" }}>
                    <h1 className="font-extralight tablet:font-light laptop:font-light text-center tablet:text-left laptop:text-left text-[#EDEDED] text-[48px] tablet:text-[111px] laptop:text-[111px] h-[48px] tablet:h-[111px] laptop:h-[111px] tracking-[-0.01em] tablet:tracking-[-1%] laptop:tracking-[-1%]">
                      {heroContent.headlineLines[0]}
                    </h1>
                  </div>
                  <div className="w-full pb-1 tablet:pb-6 laptop:pb-6 flex justify-center titleItem2" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", filter: "none", transform: "translate(0px, 0px)" }}>
                    <h2 className="font-extralight tablet:font-light laptop:font-light text-center tablet:text-left laptop:text-left text-[#EDEDED] text-[48px] tablet:text-[111px] laptop:text-[111px] h-[48px] tablet:h-[111px] laptop:h-[111px] tracking-[-0.01em] tablet:tracking-[-1%] laptop:tracking-[-1%]">
                      {heroContent.headlineLines[1]}
                    </h2>
                  </div>
                  <div className="w-full h-[48px] tablet:h-[111px] laptop:h-[111px] overflow-visible relative inline-block feeld-edge-bold">
                    <div id="word-1" className="normal-case font-feeld-edge-bold font-normal text-center tablet:text-left laptop:text-left text-[#EDEDED] text-[48px] tablet:text-[111px] laptop:text-[111px] h-[48px] tablet:h-[111px] laptop:h-[111px] absolute left-0 tablet:top-[-11px] laptop:top-[-11px] w-full flex justify-center tablet:justify-end laptop:justify-end align-middle tracking-[-1%] opacity-100" style={{ translate: "none", rotate: "none", scale: "none", opacity: "0", transform: "translate(0%, -100%)", filter: "blur(8px)" }}>
                      {heroContent.rotatingWords[0]}
                    </div>
                    <div id="word-2" className="normal-case font-feeld-edge-bold font-normal text-center tablet:text-left laptop:text-left text-[#EDEDED] text-[48px] tablet:text-[111px] laptop:text-[111px] h-[48px] tablet:h-[111px] laptop:h-[111px] absolute left-0 tablet:top-[-11px] laptop:top-[-11px] w-full flex justify-center tablet:justify-end laptop:justify-end align-middle tracking-[-1%]" style={{ translate: "none", rotate: "none", scale: "none", filter: "blur(0px)", opacity: "1", transform: "translate(0px, 0px)" }}>
                      {heroContent.rotatingWords[0]}
                    </div>
                  </div>
                </div>
                <div className="subTitleContainer flex flex-col-reverse gap-10 lg:gap-0 tablet:flex-row laptop:flex-row w-full justify-between">
                  <div className="leftSubSection items-center tablet:items-start laptop:items-start basis-full grow-0 shrink flex flex-col gap-5 justify-center" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", filter: "none", transform: "translate(0px, 0px)", display: "flex" }}>
                    <div className="flex flex-row">
                      <a className="flex flex-row items-center" href={TELEGRAM_URL}>
                        <img alt="Group of avatar pictures" loading="lazy" width="107" height="34" decoding="async" data-nimg="1" className="mr-4" src="/assets/image/upload/v1771597449/AvatarsGroup_qmdamq.png" style={{ color: "transparent" }} />
                        <span className="mr-1 text-base font-normal leading-[140%] text-primary-white font-feeld">
                          {heroContent.avatarLabel}
                        </span>
                      </a>
                      <span>
                        <a href="#sources-list">
                          <sup className="text-secondary-darkGray font-feeld font-extralight leading-[140%] ml-1">
                            {"1"}
                          </sup>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="hidden middleSubSection laptop:basis-full laptop:grow-0 laptop:shrink tablet:flex laptop:flex flex-col pt-5 tablet:items-center laptop:items-center">
                    <div className="downButton bg-bouncing-arrow-solid w-6 h-6 bg-contain" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", filter: "none", transform: "translate3d(0px, 2.753px, 0px)" }} />
                  </div>
                  <div className="rightSubSection items-center basis-full grow-0 shrink flex flex-col tablet:items-end laptop:items-end" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", filter: "none", transform: "translate(0px, 0px)", display: "flex" }}>
                    <button className="text-md font-normal rounded-full w-fit border hover:transition-all duration-300 border-black text-primary-black hover:border-white border-none my-0 py-4 px-7 bg-primary-white hover:bg-primary-white cta-hover-shadow-white hover:transform=[scale(1.1)] hover:text-primary-black">
                      <a id="home-hero-cta" className="font-feeld text-[18px] font-normal leading-normal flex items-center px-0 py-0" href={TELEGRAM_URL}>
                        <div className="flex flex-col items-center">
                          <span className="text-xs text-gray-500 mb-1">{heroContent.smallLineAboveCta}</span>
                          <span className="after:bg-arrow-left-light after:rotate-180 after:inline-block after:bg-center after:bg-no-repeat flex items-center after:ml-2 after:w-[18px] after:h-[18px] group-hover:text-[#090516]">{heroContent.ctaText}</span>
                        </div>
                      </a>
                    </button>
                  </div>
                </div>
                <div className=" tablet:hidden laptop:hidden flex justify-center  place-self-center">
                  <button id="mobile-pause-button" className="play-button h-[50px] w-[50px] self-center bg-no-repeat bg-pause" title="Get TokenMingle" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="videoContainer w-full h-full relative">
          <video data-testid="hero-video" data-title="hero-video" loop autoplay playsInline className="w-screen object-cover h-full rounded-[16px] rounded-t-none brightness-75" style={{ opacity: "1" }} src="/feeld/media/hero-16x9-small.av1_cju2bz.mp4" muted>
            <source src="/feeld/media/hero-16x9-small.av1_cju2bz.webm" type="video/webm" />
            <source src="/feeld/media/hero-16x9-small.av1_cju2bz.mp4" type="video/mp4" />
            {"Your browser does not support the video tag."}
          </video>
        </div>
      </div>
      <button className="hidden tablet:block laptop:block tablet:play-button laptop:play-button absolute h-[50px] w-[50px] bottom-[20px] right-[calc(50%-25px)] tablet:bottom-[35px] tablet:right-[30px] laptop:bottom-[35px] laptop:right-[30px] bg-no-repeat bg-pause" title="Get TokenMingle" />
    </div>
    <section className="flex flex-col items-center w-full relative h-min overflow-clip pb-20 pt-28">
      <div className="scale-up-container container flex flex-col items-center w-full p-0 relative gap-6 tablet:gap-14 laptop:gap-14 max-w-5xl h-min overflow-visible">
        <div className="headerContainer flex flex-col items-center w-full h-min tablet:max-w-2xl laptop:max-w-2xl" style={{ translate: "none", rotate: "none", scale: "none", filter: "none", opacity: "1", transform: "translate(0px, 0px)" }}>
          <div className="headerLine flex flex-row gap-1 tablet:gap-2 laptop:gap-2 w-full justify-center">
            <div className="textContainer">
              <h2 className="font-feeld-edge text-[40px] tablet:text-[56px] laptop:text-[56px] font-extralight tracking-[-0.5px] leading-[100%] ">
                {exploreContent.headingLines[0]}
              </h2>
            </div>
            <div className="iconContainer w-10 h-full flex m-0 tablet:my-auto laptop:my-auto justify-center relative" style={{ translate: "none", rotate: "none", scale: "none", filter: "blur(0px)", opacity: "1", transform: "translate(0px, 0px)" }}>
              <div className="svgContainer w-[30px] h-[30px] flex items-center justify-center">
                <svg className="text-secondary-highlight w-[24px] h-[24px] tablet:w-[32px] tablet:h-[32px] laptop:w-[32px] laptop:h-[32px]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.0611 20.9693C17.3016 20.3546 18.8512 20.3948 19.8299 21.3749L28.9971 30.5557L29.7752 29.7764C29.7748 29.7768 29.7756 29.7761 29.7752 29.7764C29.7756 29.7761 29.7771 29.7746 29.7775 29.7742L30.5555 28.995L29.7775 28.2158C29.7771 28.2154 29.7778 28.2161 29.7775 28.2158L21.3738 19.7997C20.3993 18.8238 20.355 17.2803 20.9606 16.0405C21.657 14.6147 22.048 13.0119 22.048 11.3176C22.048 5.37396 17.2367 0.555664 11.3018 0.555664C5.36679 0.555664 0.555542 5.37396 0.555542 11.3176C0.555542 17.2613 5.36679 22.0796 11.3018 22.0796C13.0107 22.0796 14.6265 21.6801 16.0611 20.9693ZM11.3018 19.8725C16.0195 19.8725 19.8441 16.0423 19.8441 11.3176C19.8441 6.59293 16.0195 2.7628 11.3018 2.7628C6.58397 2.7628 2.75945 6.59293 2.75945 11.3176C2.75945 16.0423 6.58397 19.8725 11.3018 19.8725Z" fill="currentColor" />
                  <path d="M29.7752 29.7764L28.9971 30.5557L19.8299 21.3749C18.8512 20.3948 17.3016 20.3546 16.0611 20.9693C14.6265 21.6801 13.0107 22.0796 11.3018 22.0796C5.36679 22.0796 0.555542 17.2613 0.555542 11.3176C0.555542 5.37396 5.36679 0.555664 11.3018 0.555664C17.2367 0.555664 22.048 5.37396 22.048 11.3176C22.048 13.0119 21.657 14.6147 20.9606 16.0405C20.355 17.2803 20.3993 18.8238 21.3738 19.7997L29.7775 28.2158M29.7752 29.7764C29.7748 29.7768 29.7756 29.7761 29.7752 29.7764ZM29.7752 29.7764C29.7756 29.7761 29.7771 29.7746 29.7775 29.7742L30.5555 28.995L29.7775 28.2158M29.7775 28.2158C29.7778 28.2161 29.7771 28.2154 29.7775 28.2158ZM19.8441 11.3176C19.8441 16.0423 16.0195 19.8725 11.3018 19.8725C6.58397 19.8725 2.75945 16.0423 2.75945 11.3176C2.75945 6.59293 6.58397 2.7628 11.3018 2.7628C16.0195 2.7628 19.8441 6.59293 19.8441 11.3176Z" stroke="currentColor" strokeWidth="1.11111" />
                </svg>
              </div>
            </div>
            <div className="textContainer">
              <h2 className="font-feeld-edge text-[40px] tablet:text-[56px] laptop:text-[56px] font-extralight tracking-[-0.5px] leading-[100%] ">
                {exploreContent.headingLines[1]}
              </h2>
            </div>
          </div>
          <div className="headerLine flex flex-row gap-1 tablet:gap-2 laptop:gap-2 w-full justify-center">
            <div className="textContainer">
              <h2 className="font-feeld-edge text-[40px] tablet:text-[56px] laptop:text-[56px] font-extralight tracking-[-0.5px] leading-[100%] ">
                {exploreContent.headingLines[2]}
              </h2>
            </div>
          </div>
        </div>
        <div className="scale-up-target phoneContainer z-[2] relative scale-[0.7]" style={{ translate: "none", rotate: "none", scale: "none", transform: "scale(0.7, 0.7)" }}>
          <div className="videoContainer absolute rounded-[40px] tablet:rounded-[50px] laptop:rounded-[50px] w-[190px] h-[400px] tablet:w-[284px] laptop:w-[284px] tablet:h-[578px] laptop:h-[578px] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] overflow-clip">
            <div className="innerContainer w-[190px] h-[400px] tablet:w-[273px] laptop:w-[273px] tablet:h-[600px] laptop:h-[600px] absolute top-[52%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <video loop playsInline autoplay src="/assets/video/upload/v1787064084/desires-homepage-826x1812.av1_fqodhh.mp4" className="w-full h-full object-[50%50%] bg-transparent block" />
            </div>
          </div>
          <div className="imageContainer relative w-[200px] tablet:w-[295px] laptop:w-[295px] h-[400px] tablet:h-[600px] laptop:h-[600px]">
            <div className="innerContainer">
              <img alt="Iphone 14 pro image" loading="lazy" width="305" height="620" decoding="async" data-nimg="1" className="w-full h-full object-cover object-center" src="/assets/image/upload/v1776260627/iPhone_14_Pro_kl2dxs.png" style={{ color: "transparent" }} />
            </div>
          </div>
        </div>
          <div className="tagsContainer w-full max-w-full flex flex-col items-center gap-1 tablet:gap-4 laptop:gap-4 h-min absolute top-[60%] tablet:top-[50%] laptop:top-[50%] overflow-visible z-[1]">
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          <div className="maskContainer w-screen absolute h-[130px] hidden tablet:flex laptop:flex">
            <div className="rightMask mask-gradient absolute w-full h-full top-0 right-0 opacity-100 max-w-[100px] tablet:max-w-[200px] laptop:max-w-[200px] z-[1]" style={{ "--gradient-side": "90deg", "--gradient-color-rgb": "9,5,22" }} />
            <div className="leftMask mask-gradient absolute w-full h-full top-0 left-0 opacity-100 max-w-[100px] tablet:max-w-[200px] laptop:max-w-[200px] z-[1]" style={{ "--gradient-side": "270deg", "--gradient-color-rgb": "9,5,22" }} />
          </div>
                    <div data-direction="left" className="tagLineContainer flex flex-row items-center gap-2 tablet:gap-4 laptop:gap-4 h-9 tablet:h-14 laptop:h-14 relative z-1 overflow-x-auto hide-scrollbar whitespace-nowrap snap-x w-full px-4" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "Coffee" }
              </div>
            </div>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "Networking" }
              </div>
            </div>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "Dinners" }
              </div>
            </div>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "Side Events" }
              </div>
            </div>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "Parties" }
              </div>
            </div>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "+1" }
              </div>
            </div>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "IRL" }
              </div>
            </div>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "Singapore" }
              </div>
            </div>
          </div>
          <div data-direction="right" className="tagLineContainer flex flex-row items-center gap-2 tablet:gap-4 laptop:gap-4 h-9 tablet:h-14 laptop:h-14 relative z-1 overflow-x-auto hide-scrollbar whitespace-nowrap snap-x w-full px-4" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "TOKEN2049" }
              </div>
            </div>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "Web3" }
              </div>
            </div>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "Crypto Events" }
              </div>
            </div>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "Private Gatherings" }
              </div>
            </div>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "After Dark" }
              </div>
            </div>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "Skyline" }
              </div>
            </div>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "Day to Night" }
              </div>
            </div>
            <div className="taglineItemContainer flex flex-row h-min w-min py-1 px-4 tablet:py-3 tablet:px-8 laptop:py-3 laptop:px-8 gap-2 tablet:gap-4 laptop:gap-4 items-center border-[1.8px] rounded-[200px] border-solid border-[#2b263a] bg-[#181424] opacity-100 ">
              <div className="tagLineItem text-nowrap text-center font-feeld font-normal tracking-[-0.14px] tablet:tracking-[-0.25px] laptop:tracking-[-0.25px] leading-[140%] text-[14px] tablet:text-[22px] laptop:text-[22px] text-primary-onSurface">
                { "Telegram Circle" }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="flex flex-col items-center gap-6 tablet:gap-6 laptop:gap-6 w-full h-min py-20 tablet:py-24 laptop:py-24 px-0 relative overflow-hidden">
      <section className="header">
        <div className="headerContainer flex flex-col items-center m-auto tablet:m-0 laptop:m-0 w-full h-min tablet:max-w-3xl laptop:max-w-3xl tablet:pb-8 laptop:pb-8" style={{ translate: "none", rotate: "none", scale: "none", filter: "none", opacity: "1", transform: "translate(0px, 0px)" }}>
          <div className="headerLine flex flex-row gap-1 tablet:gap-2 laptop:gap-2 w-full justify-center">
            <div className="textContainer">
              <h2 className="font-feeld-edge text-[40px] tablet:text-[56px] laptop:text-[56px] font-extralight tracking-[-0.5px] leading-[100%] ">
                {"Join"}
              </h2>
            </div>
            <div className="iconContainer w-10 h-full flex m-0 tablet:my-auto laptop:my-auto justify-center relative" style={{ translate: "none", rotate: "none", scale: "none", filter: "blur(0px)", opacity: "1", transform: "translate(0px, 0px)" }}>
              <div className="svgContainer w-[30px] h-[30px] flex items-center justify-center">
                <svg className="text-secondary-highlight w-[24px] h-[24px] tablet:w-[32px] tablet:h-[32px] laptop:w-[32px] laptop:h-[32px]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.2761 0C10.65 0 6.91574 3.87591 6.91574 8.63721C6.91574 8.75872 6.91817 8.87964 6.92298 8.99994C6.99552 10.814 7.60964 12.4846 8.60371 13.8427C8.8661 14.2178 8.95653 14.7293 8.86985 15.2147C8.78316 15.7002 8.52718 16.1205 8.14437 16.3403C3.28825 18.9891 0 24.2545 0 30.2778V30.5556H2.76586V30.2778C2.76586 29.9249 2.77935 29.5756 2.80583 29.2301L2.80922 29.1933C3.2973 23.048 7.89377 18.1636 13.6825 17.3964C14.2054 17.3271 14.7381 17.2914 15.2783 17.2914C15.6858 17.2914 16.089 17.3117 16.487 17.3515C22.7963 17.9814 27.7897 23.4911 27.7897 30.2778V30.5556H30.5556V30.2778C30.5556 29.9124 30.5435 29.5498 30.5196 29.1903L30.5176 29.1524C30.1373 23.6108 26.9715 18.8363 22.431 16.3509C22.0362 16.1348 21.7721 15.7079 21.6837 15.2133C21.5952 14.7186 21.6907 14.1968 21.9648 13.8198C22.8128 12.6535 23.3813 11.2585 23.5688 9.7412C23.6134 9.37967 23.6364 9.0112 23.6364 8.63721C23.6364 3.87591 19.9021 0 15.2761 0ZM9.68159 8.63721C9.68159 5.32037 12.2609 2.76891 15.2761 2.76891C18.2913 2.76891 20.8706 5.32037 20.8706 8.63721C20.8706 11.9541 18.2913 14.5055 15.2761 14.5055C12.2609 14.5055 9.68159 11.9541 9.68159 8.63721Z" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="textContainer">
              <h2 className="font-feeld-edge text-[40px] tablet:text-[56px] laptop:text-[56px] font-extralight tracking-[-0.5px] leading-[100%] ">
                {"of"}
              </h2>
            </div>
          </div>
          <div className="headerLine flex flex-row gap-1 tablet:gap-2 laptop:gap-2 w-full justify-center">
            <div className="textContainer">
              <h2 className="font-feeld-edge text-[40px] tablet:text-[56px] laptop:text-[56px] font-extralight tracking-[-0.5px] leading-[100%] text-secondary-yellow">
                {"25,000+"}
              </h2>
            </div>
            <div className="textContainer">
              <h2 className="font-feeld-edge text-[40px] tablet:text-[56px] laptop:text-[56px] font-extralight tracking-[-0.5px] leading-[100%] ">
                {"crypto"}
              </h2>
            </div>
            <div className="iconContainer w-10 h-full flex m-0 tablet:my-auto laptop:my-auto justify-center relative" style={{ translate: "none", rotate: "none", scale: "none", filter: "blur(0px)", opacity: "1", transform: "translate(0px, 0px)" }}>
              <div className="svgContainer w-[30px] h-[30px] flex items-center justify-center">
                <svg className="text-secondary-highlight w-[24px] h-[24px] tablet:w-[32px] tablet:h-[32px] laptop:w-[32px] laptop:h-[32px]" xmlns="http://www.w3.org/2000/svg" width="37" height="23" viewBox="0 0 37 23" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.6991 0C5.24514 0 0 5.09182 0 11.3889C0 17.686 5.24514 22.7778 11.6991 22.7778C13.479 22.7778 15.167 22.3907 16.6783 21.6977C17.5448 21.3005 18.5663 21.3005 19.4328 21.6977C20.9441 22.3907 22.6321 22.7778 24.412 22.7778C30.866 22.7778 36.1111 17.686 36.1111 11.3889C36.1111 5.09182 30.866 0 24.412 0C22.6321 0 20.9441 0.387116 19.4328 1.08004C18.5663 1.47732 17.5448 1.47732 16.6783 1.08004C15.167 0.387116 13.479 0 11.6991 0ZM2.91644 11.3889C2.91644 6.68143 6.84133 2.85231 11.6991 2.85231C12.1493 2.85231 12.5914 2.88521 13.0231 2.94863C13.7217 3.05127 14.1322 3.50452 14.2945 4.11243C14.4605 4.73407 14.36 5.5103 14.0064 6.17825C13.1797 7.73976 12.7128 9.51154 12.7128 11.3889C12.7128 13.2662 13.1797 15.038 14.0064 16.5995C14.36 17.2675 14.4605 18.0437 14.2945 18.6653C14.1322 19.2733 13.7217 19.7265 13.0231 19.8291C12.5914 19.8926 12.1493 19.9255 11.6991 19.9255C6.84133 19.9255 2.91644 16.0963 2.91644 11.3889ZM23.088 2.94863C23.5197 2.88521 23.9618 2.85231 24.412 2.85231C29.2698 2.85231 33.1947 6.68143 33.1947 11.3889C33.1947 16.0963 29.2698 19.9255 24.412 19.9255C23.9618 19.9255 23.5197 19.8926 23.088 19.8291C22.3894 19.7265 21.979 19.2733 21.8166 18.6653C21.6506 18.0437 21.7511 17.2675 22.1047 16.5995C22.9315 15.038 23.3983 13.2662 23.3983 11.3889C23.3983 9.51154 22.9315 7.73976 22.1047 6.17825C21.7511 5.5103 21.6506 4.73407 21.8166 4.11243C21.9789 3.50452 22.3894 3.05127 23.088 2.94863ZM16.7655 7.1863C17.3482 6.18687 18.7629 6.18687 19.3456 7.1863C20.069 8.42701 20.4818 9.86083 20.4818 11.3889C20.4818 12.917 20.069 14.3508 19.3456 15.5915C18.7629 16.5909 17.3482 16.5909 16.7655 15.5915C16.0421 14.3508 15.6293 12.917 15.6293 11.3889C15.6293 9.86083 16.0421 8.42701 16.7655 7.1863Z" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="textContainer">
              <h2 className="font-feeld-edge text-[40px] tablet:text-[56px] laptop:text-[56px] font-extralight tracking-[-0.5px] leading-[100%] ">
                {"people"}
              </h2>
            </div>
            <div className="iconContainer w-10 h-full flex m-0 tablet:my-auto laptop:my-auto justify-center relative" style={{ translate: "none", rotate: "none", scale: "none", filter: "blur(0px)", opacity: "1", transform: "translate(0px, 0px)" }}>
              <div className="svgContainer w-[30px] h-[30px] flex items-center justify-center">
                <svg className="text-secondary-highlight w-[24px] h-[24px] tablet:w-[32px] tablet:h-[32px] laptop:w-[32px] laptop:h-[32px]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.84921 0C3.51421 0 0 3.51421 0 7.84921C0 9.33916 0.415407 10.7329 1.13684 11.92C1.14477 11.9509 1.15807 11.981 1.177 12.009L13.7498 30.5556H16.8058L29.3786 12.0089C29.3975 11.981 29.4108 11.9509 29.4187 11.92C30.1402 10.7329 30.5556 9.33916 30.5556 7.84921C30.5556 3.51421 27.0413 0 22.7064 0C19.9558 0 17.5359 1.41499 16.1346 3.55546C16.0971 3.61275 16.0064 3.68337 15.8411 3.73934C15.6816 3.79334 15.4831 3.82295 15.2778 3.82295C15.0725 3.82295 14.874 3.79334 14.7145 3.73934C14.5492 3.68337 14.4584 3.61275 14.4209 3.55546C13.0197 1.41499 10.5997 0 7.84921 0ZM2.84127 7.84921C2.84127 5.0834 5.0834 2.84127 7.84921 2.84127C10.449 2.84127 12.6287 5.08261 13.2071 7.48563L13.2583 7.69841H17.2973L17.3485 7.48563C17.9269 5.08261 20.1065 2.84127 22.7064 2.84127C25.4722 2.84127 27.7143 5.0834 27.7143 7.84921C27.7143 8.46162 27.5123 9.09659 27.2037 9.7389C26.8952 10.381 26.4911 11.0089 26.1032 11.6112L26.0442 11.7027C24.9142 13.4583 24.7897 13.6455 24.4675 14.13C24.2388 14.4739 23.9104 14.9677 23.0606 16.2652L16.9106 25.3373C16.4486 26.026 15.8481 26.3393 15.2778 26.3393C14.7075 26.3393 14.1062 26.0249 13.6442 25.3362L7.49491 16.2652C6.64497 14.9674 6.31595 14.4727 6.08729 14.1288C5.76495 13.6441 5.64157 13.4586 4.51135 11.7027L4.45238 11.6112C4.06444 11.0089 3.6604 10.381 3.35189 9.7389C3.04328 9.09659 2.84127 8.46162 2.84127 7.84921Z" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="tablet:ml-[-8px] laptop:ml-[-8px]">
              <a href="#sources-list">
                <sup className="text-secondary-darkGray font-feeld-edge font-extralight leading-[120%] tracking-[1.5px]">
                  {"1"}
                </sup>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="carouselSection flex flex-col items-center gap-[100px] w-full h-min pt-0 pb-6 tablet:py-6 laptop:py-6 px-0 relative overflow-hidden">
        <div className="carouselContainer relative w-full h-[360px] tablet:h-[420px] laptop:h-[420px]">
          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            .carouselList li.carouselItem { transform: none !important; }
          `}</style>
          <div className="flex w-full h-full items-center m-0 p-0 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
            <ul className="carouselList flex flex-row relative w-max h-full items-center m-0 px-4 py-0 gap-6 list-none will-change-transform">
              <li className="carouselItem snap-center w-[260px] min-w-[260px] tablet:w-80 tablet:min-w-80 laptop:w-80 laptop:min-w-80 h-full will-change-transform" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(945.672%, 0%) translate3d(0px, 0px, 0px)" }}>
                <div className="communityCarouselItemContainer h-full relative block rounded-b-xl rounded-tl-xl border-inherit will-change-transform bg-transparent">
                  <div className="carouselImage absolute h-full inset-0 block rounded-[inherit] top-0 bottom-0 right-0 left-0">
                    <img alt="user profile image" decoding="async" data-nimg="fill" className="block h-full object-cover object-center rounded-[inherit] rounded-b-[16px]" src="/assets/image/upload/v1778019432/Testimonial_bgn1ne.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                  </div>
                  <div className="carouselItemDetails w-full flex flex-col gap-1 absolute top-0 bottom-0 right-0 justify-end px-5 pb-4">
                    <div className="topRows">
                      <div className="topRow flex flex-row gap-[2px] items-center">
                        <div className="name mr-1">
                          <h5 className="font-feeld-edge text-[20px] tablet:text-2xl laptop:text-2xl font-extralight leading-[120%] tracking-[-0.24px]">
                            {"Mateo"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] tablet:w-6 tablet:h-6 laptop:w-6 laptop:h-6 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] tablet:w-6 tablet:h-6 laptop:w-6 laptop:h-6 flex items-center justify-center">
                          <svg className="text-prism-majestic" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="middleRow flex flex-row gap-[6px] font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] items-center text-secondary-onSurface">
                        <div className="textContainer">
                          {"34"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Man"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Straight"}
                        </div>
                      </div>
                    </div>
                    <div className="bottomRow flex flex-row gap-1">
                      <div className="iconContainer h-[14px] w-[14px] tablet:h-[18px] tablet:w-[18px] laptop:h-[18px] laptop:w-[18px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.75225 3.31857C4.58413 3.31857 3.63586 4.27171 3.63586 5.44357C3.63586 6.61542 4.58413 7.56856 5.75225 7.56856C6.92038 7.56856 7.86865 6.61542 7.86865 5.44357C7.86865 4.27171 6.92038 3.31857 5.75225 3.31857ZM4.86165 5.44357C4.86165 4.97562 5.24638 4.56608 5.75225 4.56608C6.25812 4.56608 6.64286 4.97562 6.64286 5.44357C6.64286 5.91151 6.25812 6.32106 5.75225 6.32106C5.24638 6.32106 4.86165 5.91151 4.86165 5.44357Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.74981 0C2.46257 0 0 2.76618 0 6.39637C0 8.61125 0.96359 10.824 2.77086 12.7958C4.11969 14.2668 5.45099 15.0889 5.51842 15.1297L5.75024 15.2716L5.982 15.1295C6.04872 15.0891 7.37995 14.2689 8.72919 12.7958C10.5364 10.824 11.5 8.61128 11.5 6.39641C11.5 3.0304 9.38373 0.407074 6.45198 0.0431034C6.2225 0.014597 5.98822 0 5.74981 0ZM1.28088 6.38848C1.28088 3.35559 3.28029 1.29048 5.74975 1.29048C8.21921 1.29048 10.2186 3.35559 10.2186 6.38848C10.2186 8.07485 9.53922 9.84683 8.12334 11.5318C7.47035 12.3089 6.71432 13.0052 5.7082 13.0052C4.67343 13.0052 4.04199 12.3242 3.37617 11.5318C1.96029 9.84683 1.28088 8.07485 1.28088 6.38848Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="textContainer font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] text-secondary-onSurface">
                        {"London, UK"}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="carouselItem snap-center w-[260px] min-w-[260px] tablet:w-80 tablet:min-w-80 laptop:w-80 laptop:min-w-80 h-full will-change-transform" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(-129.64%, 0%) translate3d(0px, 0px, 0px)" }}>
                <div className="communityCarouselItemContainer h-full relative block rounded-b-xl rounded-tl-xl border-inherit will-change-transform bg-transparent">
                  <div className="carouselImage absolute h-full inset-0 block rounded-[inherit] top-0 bottom-0 right-0 left-0">
                    <img alt="user profile image" decoding="async" data-nimg="fill" className="block h-full object-cover object-center rounded-[inherit] rounded-b-[16px]" src="/assets/image/upload/v1778019432/Testimonial-1_bk7bgb.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                  </div>
                  <div className="carouselItemDetails w-full flex flex-col gap-1 absolute top-0 bottom-0 right-0 justify-end px-5 pb-4">
                    <div className="topRows">
                      <div className="topRow flex flex-row gap-[2px] items-center">
                        <div className="name mr-1">
                          <h5 className="font-feeld-edge text-[20px] tablet:text-2xl laptop:text-2xl font-extralight leading-[120%] tracking-[-0.24px]">
                            {"A whole vibe"}
                          </h5>
                        </div>
                      </div>
                      <div className="middleRow flex flex-row gap-[6px] font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] items-center text-secondary-onSurface">
                        <div className="textContainer">
                          {"25"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Gender fluid"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Designer"}
                        </div>
                      </div>
                    </div>
                    <div className="bottomRow flex flex-row gap-1">
                      <div className="iconContainer h-[14px] w-[14px] tablet:h-[18px] tablet:w-[18px] laptop:h-[18px] laptop:w-[18px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.75225 3.31857C4.58413 3.31857 3.63586 4.27171 3.63586 5.44357C3.63586 6.61542 4.58413 7.56856 5.75225 7.56856C6.92038 7.56856 7.86865 6.61542 7.86865 5.44357C7.86865 4.27171 6.92038 3.31857 5.75225 3.31857ZM4.86165 5.44357C4.86165 4.97562 5.24638 4.56608 5.75225 4.56608C6.25812 4.56608 6.64286 4.97562 6.64286 5.44357C6.64286 5.91151 6.25812 6.32106 5.75225 6.32106C5.24638 6.32106 4.86165 5.91151 4.86165 5.44357Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.74981 0C2.46257 0 0 2.76618 0 6.39637C0 8.61125 0.96359 10.824 2.77086 12.7958C4.11969 14.2668 5.45099 15.0889 5.51842 15.1297L5.75024 15.2716L5.982 15.1295C6.04872 15.0891 7.37995 14.2689 8.72919 12.7958C10.5364 10.824 11.5 8.61128 11.5 6.39641C11.5 3.0304 9.38373 0.407074 6.45198 0.0431034C6.2225 0.014597 5.98822 0 5.74981 0ZM1.28088 6.38848C1.28088 3.35559 3.28029 1.29048 5.74975 1.29048C8.21921 1.29048 10.2186 3.35559 10.2186 6.38848C10.2186 8.07485 9.53922 9.84683 8.12334 11.5318C7.47035 12.3089 6.71432 13.0052 5.7082 13.0052C4.67343 13.0052 4.04199 12.3242 3.37617 11.5318C1.96029 9.84683 1.28088 8.07485 1.28088 6.38848Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="textContainer font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] text-secondary-onSurface">
                        {"Sydney, Australia"}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="carouselItem snap-center w-[260px] min-w-[260px] tablet:w-80 tablet:min-w-80 laptop:w-80 laptop:min-w-80 h-full will-change-transform" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(-129.328%, 0%) translate3d(0px, 0px, 0px)" }}>
                <div className="communityCarouselItemContainer h-full relative block rounded-b-xl rounded-tl-xl border-inherit will-change-transform bg-transparent">
                  <div className="carouselImage absolute h-full inset-0 block rounded-[inherit] top-0 bottom-0 right-0 left-0">
                    <img alt="user profile image" decoding="async" data-nimg="fill" className="block h-full object-cover object-center rounded-[inherit] rounded-b-[16px]" src="/assets/image/upload/v1778019432/Testimonial-2_mukxts.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                  </div>
                  <div className="carouselItemDetails w-full flex flex-col gap-1 absolute top-0 bottom-0 right-0 justify-end px-5 pb-4">
                    <div className="topRows">
                      <div className="topRow flex flex-row gap-[2px] items-center">
                        <div className="name mr-1">
                          <h5 className="font-feeld-edge text-[20px] tablet:text-2xl laptop:text-2xl font-extralight leading-[120%] tracking-[-0.24px]">
                            {"Kam"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] tablet:w-6 tablet:h-6 laptop:w-6 laptop:h-6 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] tablet:w-6 tablet:h-6 laptop:w-6 laptop:h-6 flex items-center justify-center">
                          <svg className="text-prism-majestic" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="middleRow flex flex-row gap-[6px] font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] items-center text-secondary-onSurface">
                        <div className="textContainer">
                          {"23"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Transmasculine"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Designer"}
                        </div>
                      </div>
                    </div>
                    <div className="bottomRow flex flex-row gap-1">
                      <div className="iconContainer h-[14px] w-[14px] tablet:h-[18px] tablet:w-[18px] laptop:h-[18px] laptop:w-[18px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.75225 3.31857C4.58413 3.31857 3.63586 4.27171 3.63586 5.44357C3.63586 6.61542 4.58413 7.56856 5.75225 7.56856C6.92038 7.56856 7.86865 6.61542 7.86865 5.44357C7.86865 4.27171 6.92038 3.31857 5.75225 3.31857ZM4.86165 5.44357C4.86165 4.97562 5.24638 4.56608 5.75225 4.56608C6.25812 4.56608 6.64286 4.97562 6.64286 5.44357C6.64286 5.91151 6.25812 6.32106 5.75225 6.32106C5.24638 6.32106 4.86165 5.91151 4.86165 5.44357Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.74981 0C2.46257 0 0 2.76618 0 6.39637C0 8.61125 0.96359 10.824 2.77086 12.7958C4.11969 14.2668 5.45099 15.0889 5.51842 15.1297L5.75024 15.2716L5.982 15.1295C6.04872 15.0891 7.37995 14.2689 8.72919 12.7958C10.5364 10.824 11.5 8.61128 11.5 6.39641C11.5 3.0304 9.38373 0.407074 6.45198 0.0431034C6.2225 0.014597 5.98822 0 5.74981 0ZM1.28088 6.38848C1.28088 3.35559 3.28029 1.29048 5.74975 1.29048C8.21921 1.29048 10.2186 3.35559 10.2186 6.38848C10.2186 8.07485 9.53922 9.84683 8.12334 11.5318C7.47035 12.3089 6.71432 13.0052 5.7082 13.0052C4.67343 13.0052 4.04199 12.3242 3.37617 11.5318C1.96029 9.84683 1.28088 8.07485 1.28088 6.38848Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="textContainer font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] text-secondary-onSurface">
                        {"New York City, USA"}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="carouselItem snap-center w-[260px] min-w-[260px] tablet:w-80 tablet:min-w-80 laptop:w-80 laptop:min-w-80 h-full will-change-transform" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(-129.175%, 0%) translate3d(0px, 0px, 0px)" }}>
                <div className="communityCarouselItemContainer h-full relative block rounded-b-xl rounded-tl-xl border-inherit will-change-transform bg-transparent">
                  <div className="carouselImage absolute h-full inset-0 block rounded-[inherit] top-0 bottom-0 right-0 left-0">
                    <img alt="user profile image" decoding="async" data-nimg="fill" className="block h-full object-cover object-center rounded-[inherit] rounded-b-[16px]" src="/assets/image/upload/v1778019432/Testimonial-3_jbjgqm.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                  </div>
                  <div className="carouselItemDetails w-full flex flex-col gap-1 absolute top-0 bottom-0 right-0 justify-end px-5 pb-4">
                    <div className="topRows">
                      <div className="topRow flex flex-row gap-[2px] items-center">
                        <div className="name mr-1">
                          <h5 className="font-feeld-edge text-[20px] tablet:text-2xl laptop:text-2xl font-extralight leading-[120%] tracking-[-0.24px]">
                            {"Rio"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] tablet:w-6 tablet:h-6 laptop:w-6 laptop:h-6 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                      <div className="middleRow flex flex-row gap-[6px] font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] items-center text-secondary-onSurface">
                        <div className="textContainer">
                          {"31"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Man"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Straight"}
                        </div>
                      </div>
                    </div>
                    <div className="bottomRow flex flex-row gap-1">
                      <div className="iconContainer h-[14px] w-[14px] tablet:h-[18px] tablet:w-[18px] laptop:h-[18px] laptop:w-[18px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.75225 3.31857C4.58413 3.31857 3.63586 4.27171 3.63586 5.44357C3.63586 6.61542 4.58413 7.56856 5.75225 7.56856C6.92038 7.56856 7.86865 6.61542 7.86865 5.44357C7.86865 4.27171 6.92038 3.31857 5.75225 3.31857ZM4.86165 5.44357C4.86165 4.97562 5.24638 4.56608 5.75225 4.56608C6.25812 4.56608 6.64286 4.97562 6.64286 5.44357C6.64286 5.91151 6.25812 6.32106 5.75225 6.32106C5.24638 6.32106 4.86165 5.91151 4.86165 5.44357Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.74981 0C2.46257 0 0 2.76618 0 6.39637C0 8.61125 0.96359 10.824 2.77086 12.7958C4.11969 14.2668 5.45099 15.0889 5.51842 15.1297L5.75024 15.2716L5.982 15.1295C6.04872 15.0891 7.37995 14.2689 8.72919 12.7958C10.5364 10.824 11.5 8.61128 11.5 6.39641C11.5 3.0304 9.38373 0.407074 6.45198 0.0431034C6.2225 0.014597 5.98822 0 5.74981 0ZM1.28088 6.38848C1.28088 3.35559 3.28029 1.29048 5.74975 1.29048C8.21921 1.29048 10.2186 3.35559 10.2186 6.38848C10.2186 8.07485 9.53922 9.84683 8.12334 11.5318C7.47035 12.3089 6.71432 13.0052 5.7082 13.0052C4.67343 13.0052 4.04199 12.3242 3.37617 11.5318C1.96029 9.84683 1.28088 8.07485 1.28088 6.38848Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="textContainer font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] text-secondary-onSurface">
                        {"Madrid, Spain"}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="carouselItem snap-center w-[260px] min-w-[260px] tablet:w-80 tablet:min-w-80 laptop:w-80 laptop:min-w-80 h-full will-change-transform" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(-129.328%, 0%) translate3d(0px, 0px, 0px)" }}>
                <div className="communityCarouselItemContainer h-full relative block rounded-b-xl rounded-tl-xl border-inherit will-change-transform bg-transparent">
                  <div className="carouselImage absolute h-full inset-0 block rounded-[inherit] top-0 bottom-0 right-0 left-0">
                    <img alt="user profile image" decoding="async" data-nimg="fill" className="block h-full object-cover object-center rounded-[inherit] rounded-b-[16px]" src="/assets/image/upload/v1778019433/Testimonial-4_svedeo.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                  </div>
                  <div className="carouselItemDetails w-full flex flex-col gap-1 absolute top-0 bottom-0 right-0 justify-end px-5 pb-4">
                    <div className="topRows">
                      <div className="topRow flex flex-row gap-[2px] items-center">
                        <div className="name mr-1">
                          <h5 className="font-feeld-edge text-[20px] tablet:text-2xl laptop:text-2xl font-extralight leading-[120%] tracking-[-0.24px]">
                            {"Ami"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] tablet:w-6 tablet:h-6 laptop:w-6 laptop:h-6 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] tablet:w-6 tablet:h-6 laptop:w-6 laptop:h-6 flex items-center justify-center">
                          <svg className="text-prism-majestic" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="middleRow flex flex-row gap-[6px] font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] items-center text-secondary-onSurface">
                        <div className="textContainer">
                          {"27"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Woman"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Straight"}
                        </div>
                      </div>
                    </div>
                    <div className="bottomRow flex flex-row gap-1">
                      <div className="iconContainer h-[14px] w-[14px] tablet:h-[18px] tablet:w-[18px] laptop:h-[18px] laptop:w-[18px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.75225 3.31857C4.58413 3.31857 3.63586 4.27171 3.63586 5.44357C3.63586 6.61542 4.58413 7.56856 5.75225 7.56856C6.92038 7.56856 7.86865 6.61542 7.86865 5.44357C7.86865 4.27171 6.92038 3.31857 5.75225 3.31857ZM4.86165 5.44357C4.86165 4.97562 5.24638 4.56608 5.75225 4.56608C6.25812 4.56608 6.64286 4.97562 6.64286 5.44357C6.64286 5.91151 6.25812 6.32106 5.75225 6.32106C5.24638 6.32106 4.86165 5.91151 4.86165 5.44357Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.74981 0C2.46257 0 0 2.76618 0 6.39637C0 8.61125 0.96359 10.824 2.77086 12.7958C4.11969 14.2668 5.45099 15.0889 5.51842 15.1297L5.75024 15.2716L5.982 15.1295C6.04872 15.0891 7.37995 14.2689 8.72919 12.7958C10.5364 10.824 11.5 8.61128 11.5 6.39641C11.5 3.0304 9.38373 0.407074 6.45198 0.0431034C6.2225 0.014597 5.98822 0 5.74981 0ZM1.28088 6.38848C1.28088 3.35559 3.28029 1.29048 5.74975 1.29048C8.21921 1.29048 10.2186 3.35559 10.2186 6.38848C10.2186 8.07485 9.53922 9.84683 8.12334 11.5318C7.47035 12.3089 6.71432 13.0052 5.7082 13.0052C4.67343 13.0052 4.04199 12.3242 3.37617 11.5318C1.96029 9.84683 1.28088 8.07485 1.28088 6.38848Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="textContainer font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] text-secondary-onSurface">
                        {"Amsterdam, Netherlands"}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="carouselItem w-[260px] min-w-[260px] tablet:w-80 tablet:min-w-80 laptop:w-80 laptop:min-w-80 h-full will-change-transform" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(-129.227%, 0%) translate3d(0px, 0px, 0px)" }}>
                <div className="communityCarouselItemContainer h-full relative block rounded-b-xl rounded-tl-xl border-inherit will-change-transform bg-transparent">
                  <div className="carouselImage absolute h-full inset-0 block rounded-[inherit] top-0 bottom-0 right-0 left-0">
                    <img alt="user profile image" decoding="async" data-nimg="fill" className="block h-full object-cover object-center rounded-[inherit] rounded-b-[16px]" src="/assets/image/upload/v1778019432/Testimonial-5_ccr8ir.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                  </div>
                  <div className="carouselItemDetails w-full flex flex-col gap-1 absolute top-0 bottom-0 right-0 justify-end px-5 pb-4">
                    <div className="topRows">
                      <div className="topRow flex flex-row gap-[2px] items-center">
                        <div className="name mr-1">
                          <h5 className="font-feeld-edge text-[20px] tablet:text-2xl laptop:text-2xl font-extralight leading-[120%] tracking-[-0.24px]">
                            {"Bubbles"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] tablet:w-6 tablet:h-6 laptop:w-6 laptop:h-6 flex items-center justify-center">
                          <svg className="text-prism-majestic" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="middleRow flex flex-row gap-[6px] font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] items-center text-secondary-onSurface">
                        <div className="textContainer">
                          {"26"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Non-binary"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Developer"}
                        </div>
                      </div>
                    </div>
                    <div className="bottomRow flex flex-row gap-1">
                      <div className="iconContainer h-[14px] w-[14px] tablet:h-[18px] tablet:w-[18px] laptop:h-[18px] laptop:w-[18px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.75225 3.31857C4.58413 3.31857 3.63586 4.27171 3.63586 5.44357C3.63586 6.61542 4.58413 7.56856 5.75225 7.56856C6.92038 7.56856 7.86865 6.61542 7.86865 5.44357C7.86865 4.27171 6.92038 3.31857 5.75225 3.31857ZM4.86165 5.44357C4.86165 4.97562 5.24638 4.56608 5.75225 4.56608C6.25812 4.56608 6.64286 4.97562 6.64286 5.44357C6.64286 5.91151 6.25812 6.32106 5.75225 6.32106C5.24638 6.32106 4.86165 5.91151 4.86165 5.44357Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.74981 0C2.46257 0 0 2.76618 0 6.39637C0 8.61125 0.96359 10.824 2.77086 12.7958C4.11969 14.2668 5.45099 15.0889 5.51842 15.1297L5.75024 15.2716L5.982 15.1295C6.04872 15.0891 7.37995 14.2689 8.72919 12.7958C10.5364 10.824 11.5 8.61128 11.5 6.39641C11.5 3.0304 9.38373 0.407074 6.45198 0.0431034C6.2225 0.014597 5.98822 0 5.74981 0ZM1.28088 6.38848C1.28088 3.35559 3.28029 1.29048 5.74975 1.29048C8.21921 1.29048 10.2186 3.35559 10.2186 6.38848C10.2186 8.07485 9.53922 9.84683 8.12334 11.5318C7.47035 12.3089 6.71432 13.0052 5.7082 13.0052C4.67343 13.0052 4.04199 12.3242 3.37617 11.5318C1.96029 9.84683 1.28088 8.07485 1.28088 6.38848Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="textContainer font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] text-secondary-onSurface">
                        {"Toronto, Canada"}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="carouselItem w-[260px] min-w-[260px] tablet:w-80 tablet:min-w-80 laptop:w-80 laptop:min-w-80 h-full will-change-transform" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(-129.328%, 0%) translate3d(0px, 0px, 0px)" }}>
                <div className="communityCarouselItemContainer h-full relative block rounded-b-xl rounded-tl-xl border-inherit will-change-transform bg-transparent">
                  <div className="carouselImage absolute h-full inset-0 block rounded-[inherit] top-0 bottom-0 right-0 left-0">
                    <img alt="user profile image" decoding="async" data-nimg="fill" className="block h-full object-cover object-center rounded-[inherit] rounded-b-[16px]" src="/assets/image/upload/v1778019432/Testimonial-6_b4ool2.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                  </div>
                  <div className="carouselItemDetails w-full flex flex-col gap-1 absolute top-0 bottom-0 right-0 justify-end px-5 pb-4">
                    <div className="topRows">
                      <div className="topRow flex flex-row gap-[2px] items-center">
                        <div className="name mr-1">
                          <h5 className="font-feeld-edge text-[20px] tablet:text-2xl laptop:text-2xl font-extralight leading-[120%] tracking-[-0.24px]">
                            {"Margaux"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] tablet:w-6 tablet:h-6 laptop:w-6 laptop:h-6 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] tablet:w-6 tablet:h-6 laptop:w-6 laptop:h-6 flex items-center justify-center">
                          <svg className="text-prism-majestic" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="middleRow flex flex-row gap-[6px] font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] items-center text-secondary-onSurface">
                        <div className="textContainer">
                          {"25"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Woman"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Founder"}
                        </div>
                      </div>
                    </div>
                    <div className="bottomRow flex flex-row gap-1">
                      <div className="iconContainer h-[14px] w-[14px] tablet:h-[18px] tablet:w-[18px] laptop:h-[18px] laptop:w-[18px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.75225 3.31857C4.58413 3.31857 3.63586 4.27171 3.63586 5.44357C3.63586 6.61542 4.58413 7.56856 5.75225 7.56856C6.92038 7.56856 7.86865 6.61542 7.86865 5.44357C7.86865 4.27171 6.92038 3.31857 5.75225 3.31857ZM4.86165 5.44357C4.86165 4.97562 5.24638 4.56608 5.75225 4.56608C6.25812 4.56608 6.64286 4.97562 6.64286 5.44357C6.64286 5.91151 6.25812 6.32106 5.75225 6.32106C5.24638 6.32106 4.86165 5.91151 4.86165 5.44357Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.74981 0C2.46257 0 0 2.76618 0 6.39637C0 8.61125 0.96359 10.824 2.77086 12.7958C4.11969 14.2668 5.45099 15.0889 5.51842 15.1297L5.75024 15.2716L5.982 15.1295C6.04872 15.0891 7.37995 14.2689 8.72919 12.7958C10.5364 10.824 11.5 8.61128 11.5 6.39641C11.5 3.0304 9.38373 0.407074 6.45198 0.0431034C6.2225 0.014597 5.98822 0 5.74981 0ZM1.28088 6.38848C1.28088 3.35559 3.28029 1.29048 5.74975 1.29048C8.21921 1.29048 10.2186 3.35559 10.2186 6.38848C10.2186 8.07485 9.53922 9.84683 8.12334 11.5318C7.47035 12.3089 6.71432 13.0052 5.7082 13.0052C4.67343 13.0052 4.04199 12.3242 3.37617 11.5318C1.96029 9.84683 1.28088 8.07485 1.28088 6.38848Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="textContainer font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] text-secondary-onSurface">
                        {"London, UK"}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="carouselItem w-[260px] min-w-[260px] tablet:w-80 tablet:min-w-80 laptop:w-80 laptop:min-w-80 h-full will-change-transform" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(-129.252%, 0%) translate3d(0px, 0px, 0px)" }}>
                <div className="communityCarouselItemContainer h-full relative block rounded-b-xl rounded-tl-xl border-inherit will-change-transform bg-transparent">
                  <div className="carouselImage absolute h-full inset-0 block rounded-[inherit] top-0 bottom-0 right-0 left-0">
                    <img alt="user profile image" decoding="async" data-nimg="fill" className="block h-full object-cover object-center rounded-[inherit] rounded-b-[16px]" src="/assets/image/upload/v1778019432/Testimonial-7_cxykru.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                  </div>
                  <div className="carouselItemDetails w-full flex flex-col gap-1 absolute top-0 bottom-0 right-0 justify-end px-5 pb-4">
                    <div className="topRows">
                      <div className="topRow flex flex-row gap-[2px] items-center">
                        <div className="name mr-1">
                          <h5 className="font-feeld-edge text-[20px] tablet:text-2xl laptop:text-2xl font-extralight leading-[120%] tracking-[-0.24px]">
                            {"Mikkel"}
                          </h5>
                        </div>
                      </div>
                      <div className="middleRow flex flex-row gap-[6px] font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] items-center text-secondary-onSurface">
                        <div className="textContainer">
                          {"29"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Man"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Straight"}
                        </div>
                      </div>
                    </div>
                    <div className="bottomRow flex flex-row gap-1">
                      <div className="iconContainer h-[14px] w-[14px] tablet:h-[18px] tablet:w-[18px] laptop:h-[18px] laptop:w-[18px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.75225 3.31857C4.58413 3.31857 3.63586 4.27171 3.63586 5.44357C3.63586 6.61542 4.58413 7.56856 5.75225 7.56856C6.92038 7.56856 7.86865 6.61542 7.86865 5.44357C7.86865 4.27171 6.92038 3.31857 5.75225 3.31857ZM4.86165 5.44357C4.86165 4.97562 5.24638 4.56608 5.75225 4.56608C6.25812 4.56608 6.64286 4.97562 6.64286 5.44357C6.64286 5.91151 6.25812 6.32106 5.75225 6.32106C5.24638 6.32106 4.86165 5.91151 4.86165 5.44357Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.74981 0C2.46257 0 0 2.76618 0 6.39637C0 8.61125 0.96359 10.824 2.77086 12.7958C4.11969 14.2668 5.45099 15.0889 5.51842 15.1297L5.75024 15.2716L5.982 15.1295C6.04872 15.0891 7.37995 14.2689 8.72919 12.7958C10.5364 10.824 11.5 8.61128 11.5 6.39641C11.5 3.0304 9.38373 0.407074 6.45198 0.0431034C6.2225 0.014597 5.98822 0 5.74981 0ZM1.28088 6.38848C1.28088 3.35559 3.28029 1.29048 5.74975 1.29048C8.21921 1.29048 10.2186 3.35559 10.2186 6.38848C10.2186 8.07485 9.53922 9.84683 8.12334 11.5318C7.47035 12.3089 6.71432 13.0052 5.7082 13.0052C4.67343 13.0052 4.04199 12.3242 3.37617 11.5318C1.96029 9.84683 1.28088 8.07485 1.28088 6.38848Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="textContainer font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] text-secondary-onSurface">
                        {"Paris, France"}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="carouselItem w-[260px] min-w-[260px] tablet:w-80 tablet:min-w-80 laptop:w-80 laptop:min-w-80 h-full will-change-transform" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(-129.328%, 0%) translate3d(0px, 0px, 0px)" }}>
                <div className="communityCarouselItemContainer h-full relative block rounded-b-xl rounded-tl-xl border-inherit will-change-transform bg-transparent">
                  <div className="carouselImage absolute h-full inset-0 block rounded-[inherit] top-0 bottom-0 right-0 left-0">
                    <img alt="user profile image" decoding="async" data-nimg="fill" className="block h-full object-cover object-center rounded-[inherit] rounded-b-[16px]" src="/assets/image/upload/v1778019432/Testimonial-8_uaj4oo.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                  </div>
                  <div className="carouselItemDetails w-full flex flex-col gap-1 absolute top-0 bottom-0 right-0 justify-end px-5 pb-4">
                    <div className="topRows">
                      <div className="topRow flex flex-row gap-[2px] items-center">
                        <div className="name mr-1">
                          <h5 className="font-feeld-edge text-[20px] tablet:text-2xl laptop:text-2xl font-extralight leading-[120%] tracking-[-0.24px]">
                            {"AnnieBananie"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] tablet:w-6 tablet:h-6 laptop:w-6 laptop:h-6 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] tablet:w-6 tablet:h-6 laptop:w-6 laptop:h-6 flex items-center justify-center">
                          <svg className="text-prism-majestic" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="middleRow flex flex-row gap-[6px] font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] items-center text-secondary-onSurface">
                        <div className="textContainer">
                          {"30"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Woman"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Investor"}
                        </div>
                      </div>
                    </div>
                    <div className="bottomRow flex flex-row gap-1">
                      <div className="iconContainer h-[14px] w-[14px] tablet:h-[18px] tablet:w-[18px] laptop:h-[18px] laptop:w-[18px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.75225 3.31857C4.58413 3.31857 3.63586 4.27171 3.63586 5.44357C3.63586 6.61542 4.58413 7.56856 5.75225 7.56856C6.92038 7.56856 7.86865 6.61542 7.86865 5.44357C7.86865 4.27171 6.92038 3.31857 5.75225 3.31857ZM4.86165 5.44357C4.86165 4.97562 5.24638 4.56608 5.75225 4.56608C6.25812 4.56608 6.64286 4.97562 6.64286 5.44357C6.64286 5.91151 6.25812 6.32106 5.75225 6.32106C5.24638 6.32106 4.86165 5.91151 4.86165 5.44357Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.74981 0C2.46257 0 0 2.76618 0 6.39637C0 8.61125 0.96359 10.824 2.77086 12.7958C4.11969 14.2668 5.45099 15.0889 5.51842 15.1297L5.75024 15.2716L5.982 15.1295C6.04872 15.0891 7.37995 14.2689 8.72919 12.7958C10.5364 10.824 11.5 8.61128 11.5 6.39641C11.5 3.0304 9.38373 0.407074 6.45198 0.0431034C6.2225 0.014597 5.98822 0 5.74981 0ZM1.28088 6.38848C1.28088 3.35559 3.28029 1.29048 5.74975 1.29048C8.21921 1.29048 10.2186 3.35559 10.2186 6.38848C10.2186 8.07485 9.53922 9.84683 8.12334 11.5318C7.47035 12.3089 6.71432 13.0052 5.7082 13.0052C4.67343 13.0052 4.04199 12.3242 3.37617 11.5318C1.96029 9.84683 1.28088 8.07485 1.28088 6.38848Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="textContainer font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] text-secondary-onSurface">
                        {"Berlin, Germany"}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="carouselItem w-[260px] min-w-[260px] tablet:w-80 tablet:min-w-80 laptop:w-80 laptop:min-w-80 h-full will-change-transform" style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(-129.268%, 0%) translate3d(0px, 0px, 0px)" }}>
                <div className="communityCarouselItemContainer h-full relative block rounded-b-xl rounded-tl-xl border-inherit will-change-transform bg-transparent">
                  <div className="carouselImage absolute h-full inset-0 block rounded-[inherit] top-0 bottom-0 right-0 left-0">
                    <img alt="user profile image" decoding="async" data-nimg="fill" className="block h-full object-cover object-center rounded-[inherit] rounded-b-[16px]" src="/assets/image/upload/v1778019432/Testimonial-9_fujc1t.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                  </div>
                  <div className="carouselItemDetails w-full flex flex-col gap-1 absolute top-0 bottom-0 right-0 justify-end px-5 pb-4">
                    <div className="topRows">
                      <div className="topRow flex flex-row gap-[2px] items-center">
                        <div className="name mr-1">
                          <h5 className="font-feeld-edge text-[20px] tablet:text-2xl laptop:text-2xl font-extralight leading-[120%] tracking-[-0.24px]">
                            {"Team"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] tablet:w-6 tablet:h-6 laptop:w-6 laptop:h-6 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                      <div className="middleRow flex flex-row gap-[6px] font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] items-center text-secondary-onSurface">
                        <div className="textContainer">
                          {"22"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Non-binary"}
                        </div>
                        <div className="iconContainer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                            <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="textContainer">
                          {"Designer"}
                        </div>
                      </div>
                    </div>
                    <div className="bottomRow flex flex-row gap-1">
                      <div className="iconContainer h-[14px] w-[14px] tablet:h-[18px] tablet:w-[18px] laptop:h-[18px] laptop:w-[18px] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.75225 3.31857C4.58413 3.31857 3.63586 4.27171 3.63586 5.44357C3.63586 6.61542 4.58413 7.56856 5.75225 7.56856C6.92038 7.56856 7.86865 6.61542 7.86865 5.44357C7.86865 4.27171 6.92038 3.31857 5.75225 3.31857ZM4.86165 5.44357C4.86165 4.97562 5.24638 4.56608 5.75225 4.56608C6.25812 4.56608 6.64286 4.97562 6.64286 5.44357C6.64286 5.91151 6.25812 6.32106 5.75225 6.32106C5.24638 6.32106 4.86165 5.91151 4.86165 5.44357Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M5.74981 0C2.46257 0 0 2.76618 0 6.39637C0 8.61125 0.96359 10.824 2.77086 12.7958C4.11969 14.2668 5.45099 15.0889 5.51842 15.1297L5.75024 15.2716L5.982 15.1295C6.04872 15.0891 7.37995 14.2689 8.72919 12.7958C10.5364 10.824 11.5 8.61128 11.5 6.39641C11.5 3.0304 9.38373 0.407074 6.45198 0.0431034C6.2225 0.014597 5.98822 0 5.74981 0ZM1.28088 6.38848C1.28088 3.35559 3.28029 1.29048 5.74975 1.29048C8.21921 1.29048 10.2186 3.35559 10.2186 6.38848C10.2186 8.07485 9.53922 9.84683 8.12334 11.5318C7.47035 12.3089 6.71432 13.0052 5.7082 13.0052C4.67343 13.0052 4.04199 12.3242 3.37617 11.5318C1.96029 9.84683 1.28088 8.07485 1.28088 6.38848Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="textContainer font-feeld text-[11px] tablet:text-[13px] laptop:text-[13px] font-normal leading-[140%] text-secondary-onSurface">
                        {"Chicago, USA"}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="lookingFor flex flex-col items-center gap-0 w-full min-h-min tablet:h-[56px] laptop:h-[56px] p-0 relative overflow-visible">
        <div className="lookingForContainer flex flex-col tablet:flex-row laptop:flex-row items-center gap-8 tablet:gap-[72px] laptop:gap-[72px] max-w-[1352px] w-full h-min p-0 relative overflow-clip">
          <div className="maskContainer w-full absolute h-[60px] pl-[180px] justify-between hidden tablet:flex laptop:flex">
            <div className="leftMask mask-gradient w-full h-full opacity-100 max-w-[100px] tablet:max-w-[200px] laptop:max-w-[200px] z-[1]" style={{ "--gradient-side": "270deg", "--gradient-color-rgb": "9,5,22" }} />
            <div className="rightMask mask-gradient w-full h-full opacity-100 max-w-[100px] tablet:max-w-[200px] laptop:max-w-[200px] z-[1]" style={{ "--gradient-side": "90deg", "--gradient-color-rgb": "9,5,22" }} />
          </div>
          <div className="textContainer whitespace-pre uppercase font-feeld-mono text-[12px] tablet:text-[14px] laptop:text-[14px] font-medium leading-[120%] tracking-[5%] opacity-80 text-primary-grey">
            {"Looking for..."}
          </div>
          <div className="slideContainer flex relative m-w-[900px]">
            <div className="flex w-full h-full max-w-[100%] max-h-[100%] items-center m-0 p-0 overflow-hidden">
              <ul className="slideList flex flex-row gap-8 tablet:gap-20 laptop:gap-20 relative w-full h-full max-w-[100%] max-h-[100%] items-center m-0 p-0 list-none">
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(1115.31%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Finding friends with benefits"}
                  </div>
                </li>
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(4794.28%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Networking"}
                  </div>
                </li>
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(1636.48%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Casual play and fun"}
                  </div>
                </li>
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(1328.15%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Man and woman couple"}
                  </div>
                </li>
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(-620.848%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Finding community"}
                  </div>
                </li>
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(-626.074%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Open to everything"}
                  </div>
                </li>
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(-683.998%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Startups and scaleups"}
                  </div>
                </li>
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(-569.373%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Man and man couple"}
                  </div>
                </li>
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(-509.604%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Long-term connections"}
                  </div>
                </li>
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(-1557.37%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Woman"}
                  </div>
                </li>
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(-736.454%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Non-monogamy"}
                  </div>
                </li>
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(-440.397%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Woman and woman couple"}
                  </div>
                </li>
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(-747.322%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Monogamy only"}
                  </div>
                </li>
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(-606.082%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Making new friends"}
                  </div>
                </li>
                <li className="tagItemContainer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(-500.664%, 0%) translate3d(0px, 0px, 0px)" }}>
                  <div className="textContainer h-min overflow-clip flex flex-row items-center w-min p-0 relative opacity-60 whitespace-pre text-nowrap text-[14px] tablet:text-[18px] laptop:text-[18px] font-feeld font-normal tracking-[0.18px] text-secondary-onSurface leading-[normal]">
                    {"Short-term connections"}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <FeaturesTabs />
    <section className="w-full flex flex-col relative items-center py-12">
      <div className="exploreTogetherContainer w-full min-h-min flex flex-col relative max-w-[1440px] px-4 tablet:px-[58px] laptop:px-[58px]">
        <div className="w-full min-h-min flex flex-col gap-6 laptop:gap-0 laptop:flex-row items-start justify-between">
          <div className="titleContainer flex flex-col gap-4">
            <div className="flex flex-col w-full h-min tablet:max-w-2xl laptop:max-w-2xl">
              <div className="headerLine flex flex-row gap-1 tablet:gap-2 laptop:gap-2 w-full flex-wrap">
                <div className="textContainer">
                  <h2 className="font-feeld-edge text-[32px] tablet:text-[48px] laptop:text-[48px] font-extralight tracking-[-0.32px] tablet:tracking-[-0.5px] laptop:tracking-[-0.5px] leading-[100%] ">
                    {"Navigate TOKEN2049"}
                  </h2>
                </div>
              </div>
              <div className="headerLine flex flex-row gap-1 tablet:gap-2 laptop:gap-2 w-full flex-wrap">
                <div className="textContainer">
                  <h2 className="font-feeld-edge text-[32px] tablet:text-[48px] laptop:text-[48px] font-extralight tracking-[-0.32px] tablet:tracking-[-0.5px] laptop:tracking-[-0.5px] leading-[100%] ">
                    {"with your team,"}
                  </h2>
                </div>
              </div>
              <div className="headerLine flex flex-row gap-1 tablet:gap-2 laptop:gap-2 w-full flex-wrap">
                <div className="textContainer">
                  <h2 className="font-feeld-edge text-[32px] tablet:text-[48px] laptop:text-[48px] font-extralight tracking-[-0.32px] tablet:tracking-[-0.5px] laptop:tracking-[-0.5px] leading-[100%] ">
                    {"and"}
                  </h2>
                </div>
                <div className="textContainer">
                  <h2 className="font-feeld-edge text-[32px] tablet:text-[48px] laptop:text-[48px] font-extralight tracking-[-0.32px] tablet:tracking-[-0.5px] laptop:tracking-[-0.5px] leading-[100%] ">
                    {"friends"}
                  </h2>
                </div>
                <div className="iconContainer w-10 h-full flex justify-center relative self-end">
                  <div className="svgContainer w-[32px] h-[32px] tablet:w-[40px] tablet:h-[40px] laptop:w-[40px] laptop:h-[40px] flex items-center justify-center pb-1 laptop:pb-2">
                    <svg className="text-prism-twilight_200 w-[32px] h-[32px] tablet:w-[40px] tablet:h-[40px] laptop:w-[40px] laptop:h-[40px]" xmlns="http://www.w3.org/2000/svg" width="40" height="23" viewBox="0 0 40 23" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.642 0C8.88595 0 5.81583 2.85509 5.81583 6.40716C5.81583 6.76918 5.84782 7.12414 5.90927 7.46969C6.09362 8.50633 6.54303 9.45823 7.18875 10.2618C7.53261 10.6898 7.40653 11.3753 6.93062 11.6336C2.69715 13.6037 -0.222168 17.6995 -0.222168 22.4442V22.6665H0.903358L0.925004 22.6667H1.63169L1.65369 22.6665H2.7725V22.4442C2.7725 22.1876 2.78373 21.9334 2.80574 21.682C2.81009 21.656 2.81356 21.6297 2.81613 21.6032C3.26931 16.9124 7.48539 13.2159 12.6445 13.2159C12.897 13.2159 13.1473 13.2248 13.395 13.2422L13.4651 13.2473C14.7134 13.3437 15.8948 13.657 16.9665 14.1465C17.3243 14.3298 17.4041 14.7915 17.1239 15.1359C15.6528 16.9443 14.7135 19.1558 14.5282 21.5644C14.5272 21.5784 14.5264 21.5924 14.5259 21.6063C14.5056 21.8831 14.4953 22.1625 14.4953 22.4442V22.6665H15.624L15.6385 22.6666H16.3452L16.36 22.6665H17.49V22.4442C17.49 20.3307 18.2515 18.3793 19.5339 16.8206C19.7742 16.5573 20.2024 16.5513 20.4513 16.8025C21.7428 18.3642 22.5101 20.3225 22.5101 22.4442V22.6665H23.6353L23.6573 22.6667H24.364L24.3856 22.6665H25.5048V22.4442C25.5048 22.1767 25.4955 21.9111 25.4772 21.648C25.4774 21.6205 25.4764 21.5926 25.4742 21.5645C25.289 19.1559 24.3496 16.9443 22.8785 15.1359C22.5909 14.7824 22.6825 14.3055 23.0645 14.1326C24.362 13.5454 25.8192 13.2157 27.3588 13.2157C27.6409 13.2157 27.9203 13.2268 28.1963 13.2484C32.9677 13.623 36.7579 17.1688 37.1863 21.6031L37.1908 21.642C37.2152 21.9064 37.2276 22.174 37.2276 22.4442V22.6665H38.356L38.3708 22.6666H39.0775L39.092 22.6665H40.2223V22.4442C40.2223 17.7078 37.3132 13.6181 33.0918 11.6441C32.6072 11.3989 32.4687 10.7193 32.7952 10.2839C33.6668 9.20889 34.186 7.86595 34.186 6.40716C34.186 2.85509 31.1159 0 27.3599 0C23.6038 0 20.5337 2.85509 20.5337 6.40716C20.5337 6.53438 20.5377 6.66071 20.5455 6.78607C20.6262 8.0872 21.12 9.28356 21.9049 10.2608C22.2586 10.7011 22.1147 11.414 21.6043 11.6538C21.2099 11.839 20.8272 12.0426 20.4572 12.2635C20.1805 12.4288 19.8218 12.4288 19.5451 12.2635C19.1749 12.0425 18.7918 11.8387 18.3972 11.6534C17.902 11.4209 17.7504 10.7417 18.068 10.2979L18.086 10.2737C18.855 9.32104 19.3477 8.15909 19.4488 6.89313C19.4616 6.73274 19.4682 6.57068 19.4682 6.40716C19.4682 2.85509 16.398 0 12.642 0ZM8.813 6.40716C8.813 8.36729 10.5138 9.98079 12.6432 9.98145C14.7726 9.98079 16.4735 8.36729 16.4735 6.40716C16.4735 4.44667 14.7721 2.83293 12.6421 2.83287C10.5132 2.83407 8.813 4.44736 8.813 6.40716ZM23.5284 6.40716C23.5284 4.44663 25.2299 2.83287 27.3599 2.83287C29.4899 2.83287 31.1914 4.44663 31.1914 6.40716C31.1914 8.36769 29.4899 9.98145 27.3599 9.98145C25.2299 9.98145 23.5284 8.36769 23.5284 6.40716Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <button className="text-md font-normal rounded-full w-fit border hover:transition-all duration-300 border-black text-primary-black my-0 bg-prism-twilight_200 hover:border-prism-twilight_200 hover:bg-prism-twilight_200 cta-hover-shadow hover:transform=[scale(1.1)] hover:text-primary-black">
              <a className="block font-feeld text-[18px] font-normal leading-normal px-[28px] py-[18px]" href="/download">
                {"Group up"}
              </a>
            </button>
          </div>
          <div className="contentContainer flex flex-col items-stretch tablet:flex-row laptop:flex-row tablet:items-start laptop:items-start gap-10 tablet:gap-[14px] laptop:gap-[14px] min-w-min mx-auto laptop:mx-0">
            <div className="leftContent flex flex-1 laptop:flex flex-col gap-8 laptop:w-[320px] min-h-min">
              <div className="mediaContent rounded-t-[16px] rounded-bl-[16px] w-full laptop:h-[324px] aspect-square tablet:aspect-auto laptop:aspect-auto">
                <div className="videoContainer w-full h-full">
                  <video loop playsInline autoplay src="/assets/video/upload/v1778782121/2X_Constellation_Partner_V03_1_qvuhqb.webm" className="w-full h-full relative object-cover rounded-t-[16px] rounded-bl-[16px] object-[50%_50%] aspect-square" />
                </div>
              </div>
              <div className="textContent flex flex-col gap-4 tablet:gap-6 laptop:gap-6">
                <h4 className="font-feeld-edge text-[24px] font-extralight leading-[120%] tracking-[-0.2px] tablet:tracking-[-0.24px] laptop:tracking-[-0.24px] text-primary-gray">
                  {"Coordinate with your team"}
                </h4>
                <p className="font-feeld-light text-[16px] font-light leading-[150%] text-secondary-onSurface">
                  {"Group up with your colleagues or friends and navigate the side events together."}
                </p>
              </div>
            </div>
            <div className="rightContent flex flex-1 laptop:flex flex-col gap-8 laptop:w-[320px] min-h-min">
              <div className="mediaContent rounded-t-[16px] rounded-bl-[16px] w-full laptop:h-[324px] aspect-square tablet:aspect-auto laptop:aspect-auto">
                <div className="videoContainer w-full h-full">
                  <video loop playsInline autoplay src="/assets/video/upload/v1778782121/2X_Constellation_Group_V03_1_spok4b.webm" className="w-full h-full relative object-cover rounded-t-[16px] rounded-bl-[16px] object-[50%_50%] aspect-square" />
                </div>
              </div>
              <div className="textContent flex flex-col gap-4 tablet:gap-6 laptop:gap-6">
                <h4 className="font-feeld-edge text-[24px] font-extralight leading-[120%] tracking-[-0.2px] tablet:tracking-[-0.24px] laptop:tracking-[-0.24px] text-primary-gray">
                  {"Chat before you meet"}
                </h4>
                <p className="font-feeld-light text-[16px] font-light leading-[150%] text-secondary-onSurface">
                  {"Coordinate coffee catchups and share event locations seamlessly within the TokenMingle network."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full flex flex-col relative items-center py-12">
      <div className="ctaBlockContainer w-full h-[500px] relative max-w-[1440px] rounded-b-[16px] rounded-tl-[16px] px-4 tablet:px-[58px] laptop:px-[58px]">
        <div className="ctaContainer relative w-full h-full flex flex-col items-center justify-center">
          <div className="contentContainer flex flex-col gap-8 items-center justify-center relative z-[2]">
            <div className="textContainer flex flex-col items-center gap-4 max-w-[400px] text-center">
              <h2 className="font-feeld-edge text-[40px] tablet:text-[56px] laptop:text-[56px] font-extralight leading-[100%] tracking-[-0.4px] tablet:tracking-[-0.56px] laptop:tracking-[-0.56px] text-primary-white">
                {"Join the TokenMingle circle"}
              </h2>
              <p className="font-feeld text-[16px] font-normal leading-[140%] text-primary-white">
                {"Your ultimate TOKEN2049 companion."}
              </p>
            </div>
            <div className="cta">
              <div className="flex flex-row gap-2">
                <button type="button" className="group text-md font-normal rounded-full w-fit hover:transition-all duration-300 bg-primary-white text-primary-black cta-hover-shadow hover:transform=[scale(1.1)] hover:text-primary-black" title="Register on Luma" style={{ "--cta-shadow-color": "#fff" }}>
                  <a id="homepage-mid-cta-block-luma" href="https://luma.com/event/evt-h1pliwiKCfI15xJ" target="_blank" className="flex items-center py-3 px-6 block">
                    <span>
                      <svg className="w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 133 134"><path fill="currentColor" d="M133 67C96.282 67 66.5 36.994 66.5 0c0 36.994-29.782 67-66.5 67 36.718 0 66.5 30.006 66.5 67 0-36.994 29.782-67 66.5-67"></path></svg>
                    </span>
                    <span className="ml-2 text-[18px] font-normal leading-[130%] font-feeld">
                      {"Register on Luma"}
                    </span>
                  </a>
                </button>
              </div>
            </div>
            <div className="avatars flex flex-col gap-4 tablet:gap-0 laptop:gap-0 tablet:flex-row laptop:flex-row items-center">
              <img alt="/assets/image/upload/v1771597449/AvatarsGroup_qmdamq.png" loading="lazy" width="107" height="34" decoding="async" data-nimg="1" className="tablet:mr-4 laptop:mr-4" src="/assets/image/upload/v1771597449/AvatarsGroup_qmdamq.png" style={{ color: "transparent" }} />
              <div>
                <span className="mr-1 text-[14px] leading-[140%] font-feeld text-primary-white font-normal">
                  {"Join the network alongside"}
                </span>
                <span className="mr-1 text-[14px] leading-[140%] font-feeld text-secondary-yellow font-medium">
                  {"14M+ people"}
                </span>
                <span>
                  <a href="#sources-list">
                    <sup className="text-secondary-lightGray font-feeld font-extralight leading-[140%] text-[40%] top-[-1em]">
                      {"1"}
                    </sup>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="imageContainer absolute top-0 left-0 h-[500px] w-full z-[0] overflow-hidden rounded-b-[16px] rounded-tl-[16px]">
            <img alt="background image" loading="lazy" decoding="async" data-nimg="fill" className="object-cover background-image will-change-transform" src="/assets/image/upload/v1778534354/Mid-CTA-compressed_wyiazc.webp" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
          </div>
        </div>
      </div>
    </section>
    <section className="w-full flex flex-col items-center overflow-hidden py-12">
      <div className="testimonialsContainer px-4 laptop:px-[58px] w-full max-w-[1440px] flex flex-col gap-5">
        <div className="headerContainer">
          <h5 className="font-feeld-edge text-[20px] tablet:text-[24px] laptop:text-[24px] text-primary-grey font-extralight leading-[120%] tracking-[-0.24px]">
            {"Stories from our community"}
          </h5>
        </div>
        <div className="contentContainer">
          <div className="embla__viewport overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4">
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            <div className="embla__container w-max flex gap-4 tablet:gap-5 laptop:gap-5" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
              <div className="testimonialCarouselItemContainer w-[260px] min-w-[260px] rounded-t-[12px] rounded-bl-[12px] h-min p-3 tablet:p-4 laptop:p-4 flex flex-col gap-14 justify-between will-change-transform snap-center" style={{ backgroundColor: "rgb(101, 33, 132)", translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}>
                <div className="textContent">
                  <p className="text-primary-white font-feeld text-[18px] tablet:text-[20px] latop:text-[20px] leading-[150%]">
                    {"“I met someone on TokenMingle who opened a new partnership door and gave me hope for networking. Totally did not expect it, nor was I ready for it (oh, and their office is ten minutes away from me!) Sometimes the most beautiful collaborations arise when you least expect it.”"}
                  </p>
                </div>
                <div className="bottomContainer">
                  <div className="content flex flex-row gap-2">
                    <div className="avatar w-[42px] h-[42px] tablet:w-[48px] tablet:h-[48px] laptop:w-[48px] laptop:h-[48px] relative">
                      <img alt="avatar image of user" loading="lazy" decoding="async" data-nimg="fill" className="rounded-[1000px] object-cover" src="/assets/image/upload/v1783523676/e4dbaff734ee-IMG_7895-_1_-_1_bl3g2f.jpg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                    </div>
                    <div className="details flex flex-col justify-between tablet:justify-around laptop:justify-around">
                      <div className="topRow flex flex-row items-center gap-1">
                        <div className="name">
                          <h5 className="font-feeld text-[16px] leading-[140%] tracking-[-0.16px]" style={{ color: "rgb(238, 202, 255)" }}>
                            {"Emily"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="text-prism-majestic w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="bottomRow">
                        <div className="middleRow flex flex-row gap-[4px] font-feeld text-[12px] font-normal leading-[140%] tracking-[-0.12px] items-center" style={{ color: "rgb(238, 202, 255)" }}>
                          <div className="textContainer">
                            {"26"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Woman"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Investor"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonialCarouselItemContainer w-[260px] min-w-[260px] rounded-t-[12px] rounded-bl-[12px] h-min p-3 tablet:p-4 laptop:p-4 flex flex-col gap-14 justify-between will-change-transform snap-center" style={{ backgroundColor: "rgb(57, 74, 203)", translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}>
                <div className="textContent">
                  <p className="text-primary-white font-feeld text-[18px] tablet:text-[20px] latop:text-[20px] leading-[150%]">
                    {"“I recently recommended TokenMingle to a founder who was struggling to find the right early-stage investors. It really allows for open communication where there is less pressure to pitch perfectly.”"}
                  </p>
                </div>
                <div className="bottomContainer">
                  <div className="content flex flex-row gap-2">
                    <div className="avatar w-[42px] h-[42px] tablet:w-[48px] tablet:h-[48px] laptop:w-[48px] laptop:h-[48px] relative">
                      <img alt="avatar image of user" loading="lazy" decoding="async" data-nimg="fill" className="rounded-[1000px] object-cover" src="/assets/image/upload/v1783529854/maia96D89CDE-E7E0-4D3E-B9E8-7D786A9A31B5_pniwi8.jpg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                    </div>
                    <div className="details flex flex-col justify-between tablet:justify-around laptop:justify-around">
                      <div className="topRow flex flex-row items-center gap-1">
                        <div className="name">
                          <h5 className="font-feeld text-[16px] leading-[140%] tracking-[-0.16px]" style={{ color: "rgb(201, 206, 248)" }}>
                            {"Maia"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="text-prism-majestic w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="bottomRow">
                        <div className="middleRow flex flex-row gap-[4px] font-feeld text-[12px] font-normal leading-[140%] tracking-[-0.12px] items-center" style={{ color: "rgb(201, 206, 248)" }}>
                          <div className="textContainer">
                            {"28"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Woman"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Lesbian"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonialCarouselItemContainer w-[260px] min-w-[260px] rounded-t-[12px] rounded-bl-[12px] h-min p-3 tablet:p-4 laptop:p-4 flex flex-col gap-14 justify-between will-change-transform snap-center" style={{ backgroundColor: "rgb(0, 140, 86)", translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}>
                <div className="textContent">
                  <p className="text-primary-white font-feeld text-[18px] tablet:text-[20px] latop:text-[20px] leading-[150%]">
                    {"“TokenMingle, in my opinion, is the one app that allows you to lose any expectations around networking. I’ve met investors and investors-turned friends for life, and my next connection could be one of the above or something completely new, and that’s the beauty of being here.”"}
                  </p>
                </div>
                <div className="bottomContainer">
                  <div className="content flex flex-row gap-2">
                    <div className="avatar w-[42px] h-[42px] tablet:w-[48px] tablet:h-[48px] laptop:w-[48px] laptop:h-[48px] relative">
                      <img alt="avatar image of user" loading="lazy" decoding="async" data-nimg="fill" className="rounded-[1000px] object-cover" src="/assets/image/upload/v1783523954/B89CC85B-CEA3-40C2-9997-B7E2F3F5E866-_1_jgjpz5.jpg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                    </div>
                    <div className="details flex flex-col justify-between tablet:justify-around laptop:justify-around">
                      <div className="topRow flex flex-row items-center gap-1">
                        <div className="name">
                          <h5 className="font-feeld text-[16px] leading-[140%] tracking-[-0.16px]" style={{ color: "rgb(176, 255, 209)" }}>
                            {"Leo"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="text-prism-majestic w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="bottomRow">
                        <div className="middleRow flex flex-row gap-[4px] font-feeld text-[12px] font-normal leading-[140%] tracking-[-0.12px] items-center" style={{ color: "rgb(176, 255, 209)" }}>
                          <div className="textContainer">
                            {"33"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Transmasculine"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Investor"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonialCarouselItemContainer w-[260px] min-w-[260px] rounded-t-[12px] rounded-bl-[12px] h-min p-3 tablet:p-4 laptop:p-4 flex flex-col gap-14 justify-between will-change-transform snap-center" style={{ backgroundColor: "rgb(99, 12, 0)", translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}>
                <div className="textContent">
                  <p className="text-primary-white font-feeld text-[18px] tablet:text-[20px] latop:text-[20px] leading-[150%]">
                    {"“My first TokenMingle experience; I was fortunate to be asked by someone who was organising a private side event to attend. I met some amazing builders and it opened up my eyes to a multitude of partnership possibilities and how people feel open enough to share their big ideas.”"}
                  </p>
                </div>
                <div className="bottomContainer">
                  <div className="content flex flex-row gap-2">
                    <div className="avatar w-[42px] h-[42px] tablet:w-[48px] tablet:h-[48px] laptop:w-[48px] laptop:h-[48px] relative">
                      <img alt="avatar image of user" loading="lazy" decoding="async" data-nimg="fill" className="rounded-[1000px] object-cover" src="/assets/image/upload/v1783530320/7f3cd958841c-IMG_6179-_1_-_1_dejmwl.jpg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                    </div>
                    <div className="details flex flex-col justify-between tablet:justify-around laptop:justify-around">
                      <div className="topRow flex flex-row items-center gap-1">
                        <div className="name">
                          <h5 className="font-feeld text-[16px] leading-[140%] tracking-[-0.16px]" style={{ color: "rgb(255, 132, 105)" }}>
                            {"Stuart"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="text-prism-majestic w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="bottomRow">
                        <div className="middleRow flex flex-row gap-[4px] font-feeld text-[12px] font-normal leading-[140%] tracking-[-0.12px] items-center" style={{ color: "rgb(255, 132, 105)" }}>
                          <div className="textContainer">
                            {"37"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Man"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Straight"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonialCarouselItemContainer w-[260px] min-w-[260px] rounded-t-[12px] rounded-bl-[12px] h-min p-3 tablet:p-4 laptop:p-4 flex flex-col gap-14 justify-between will-change-transform" style={{ backgroundColor: "rgb(101, 33, 132)", translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}>
                <div className="textContent">
                  <p className="text-primary-white font-feeld text-[18px] tablet:text-[20px] latop:text-[20px] leading-[150%]">
                    {"“I got on TokenMingle after going through a breakup shortly after moving to a new city, a gorgeous woman reached out with an offer of friendship saying she knew what it was like to try to get settled somewhere new. It was so sweet and we’re still friends to this day! I’ve probably made just as many new friends as potential co-founders on TokenMingle.”"}
                  </p>
                </div>
                <div className="bottomContainer">
                  <div className="content flex flex-row gap-2">
                    <div className="avatar w-[42px] h-[42px] tablet:w-[48px] tablet:h-[48px] laptop:w-[48px] laptop:h-[48px] relative">
                      <img alt="avatar image of user" loading="lazy" decoding="async" data-nimg="fill" className="rounded-[1000px] object-cover" src="/assets/image/upload/v1783530279/46c9de5c742fe-IMG_9885-_1_-_1_rrw4vn.jpg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                    </div>
                    <div className="details flex flex-col justify-between tablet:justify-around laptop:justify-around">
                      <div className="topRow flex flex-row items-center gap-1">
                        <div className="name">
                          <h5 className="font-feeld text-[16px] leading-[140%] tracking-[-0.16px]" style={{ color: "rgb(238, 202, 255)" }}>
                            {"Sarah"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="text-prism-majestic w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="bottomRow">
                        <div className="middleRow flex flex-row gap-[4px] font-feeld text-[12px] font-normal leading-[140%] tracking-[-0.12px] items-center" style={{ color: "rgb(238, 202, 255)" }}>
                          <div className="textContainer">
                            {"35"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Woman"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Founder"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonialCarouselItemContainer w-[260px] min-w-[260px] rounded-t-[12px] rounded-bl-[12px] h-min p-3 tablet:p-4 laptop:p-4 flex flex-col gap-14 justify-between will-change-transform" style={{ backgroundColor: "rgb(57, 74, 203)", translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}>
                <div className="textContent">
                  <p className="text-primary-white font-feeld text-[18px] tablet:text-[20px] latop:text-[20px] leading-[150%]">
                    {"“My first experience on TokenMingle was with a founder that we connected amazingly intellectually (hours and hours of good brainstorming). Our paths changed but we still talk deeply and share our inmost thoughts. We are still meeting up for coffee syncs! I’m really grateful for this first connection.”"}
                  </p>
                </div>
                <div className="bottomContainer">
                  <div className="content flex flex-row gap-2">
                    <div className="avatar w-[42px] h-[42px] tablet:w-[48px] tablet:h-[48px] laptop:w-[48px] laptop:h-[48px] relative">
                      <img alt="avatar image of user" loading="lazy" decoding="async" data-nimg="fill" className="rounded-[1000px] object-cover" src="/assets/image/upload/v1783531378/9eb544d0f213-F4468E59_5A7F_4671_992F_ECD646C233C0-_3_-_1_epkg9l.jpg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                    </div>
                    <div className="details flex flex-col justify-between tablet:justify-around laptop:justify-around">
                      <div className="topRow flex flex-row items-center gap-1">
                        <div className="name">
                          <h5 className="font-feeld text-[16px] leading-[140%] tracking-[-0.16px]" style={{ color: "rgb(201, 206, 248)" }}>
                            {"Mina"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="text-prism-majestic w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="bottomRow">
                        <div className="middleRow flex flex-row gap-[4px] font-feeld text-[12px] font-normal leading-[140%] tracking-[-0.12px] items-center" style={{ color: "rgb(201, 206, 248)" }}>
                          <div className="textContainer">
                            {"41"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Woman"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Founder"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonialCarouselItemContainer w-[260px] min-w-[260px] rounded-t-[12px] rounded-bl-[12px] h-min p-3 tablet:p-4 laptop:p-4 flex flex-col gap-14 justify-between will-change-transform" style={{ backgroundColor: "rgb(0, 140, 86)", translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}>
                <div className="textContent">
                  <p className="text-primary-white font-feeld text-[18px] tablet:text-[20px] latop:text-[20px] leading-[150%]">
                    {"“I last recommended TokenMingle to my co-founder! They're looking to make more connections in their city and I suggested TokenMingle would be a great place to find like-minded builders.”"}
                  </p>
                </div>
                <div className="bottomContainer">
                  <div className="content flex flex-row gap-2">
                    <div className="avatar w-[42px] h-[42px] tablet:w-[48px] tablet:h-[48px] laptop:w-[48px] laptop:h-[48px] relative">
                      <img alt="avatar image of user" loading="lazy" decoding="async" data-nimg="fill" className="rounded-[1000px] object-cover" src="/assets/image/upload/v1783531015/8422ecb90183-_c__El_Dodds_1-_2_-_1_rrgokr.jpg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                    </div>
                    <div className="details flex flex-col justify-between tablet:justify-around laptop:justify-around">
                      <div className="topRow flex flex-row items-center gap-1">
                        <div className="name">
                          <h5 className="font-feeld text-[16px] leading-[140%] tracking-[-0.16px]" style={{ color: "rgb(176, 255, 209)" }}>
                            {"Tabby"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="text-prism-majestic w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="bottomRow">
                        <div className="middleRow flex flex-row gap-[4px] font-feeld text-[12px] font-normal leading-[140%] tracking-[-0.12px] items-center" style={{ color: "rgb(176, 255, 209)" }}>
                          <div className="textContainer">
                            {"26"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Trans Woman"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Founder"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonialCarouselItemContainer w-[260px] min-w-[260px] rounded-t-[12px] rounded-bl-[12px] h-min p-3 tablet:p-4 laptop:p-4 flex flex-col gap-14 justify-between will-change-transform" style={{ backgroundColor: "rgb(99, 12, 0)", translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}>
                <div className="textContent">
                  <p className="text-primary-white font-feeld text-[18px] tablet:text-[20px] latop:text-[20px] leading-[150%]">
                    {"“TokenMingle has become such an important platform for me and my team to explore our connections to other people with an immense amount of transparency and safety. The ability to find like minded individuals who are able to communicate with emotional intelligence is unparalleled.”"}
                  </p>
                </div>
                <div className="bottomContainer">
                  <div className="content flex flex-row gap-2">
                    <div className="avatar w-[42px] h-[42px] tablet:w-[48px] tablet:h-[48px] laptop:w-[48px] laptop:h-[48px] relative">
                      <img alt="avatar image of user" loading="lazy" decoding="async" data-nimg="fill" className="rounded-[1000px] object-cover" src="/assets/image/upload/v1783530752/Diana-3_ggu7wl.jpg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                    </div>
                    <div className="details flex flex-col justify-between tablet:justify-around laptop:justify-around">
                      <div className="topRow flex flex-row items-center gap-1">
                        <div className="name">
                          <h5 className="font-feeld text-[16px] leading-[140%] tracking-[-0.16px]" style={{ color: "rgb(255, 132, 105)" }}>
                            {"Diana"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="text-prism-majestic w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="bottomRow">
                        <div className="middleRow flex flex-row gap-[4px] font-feeld text-[12px] font-normal leading-[140%] tracking-[-0.12px] items-center" style={{ color: "rgb(255, 132, 105)" }}>
                          <div className="textContainer">
                            {"36"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Agender"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Designer"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonialCarouselItemContainer w-[260px] min-w-[260px] rounded-t-[12px] rounded-bl-[12px] h-min p-3 tablet:p-4 laptop:p-4 flex flex-col gap-14 justify-between will-change-transform" style={{ backgroundColor: "rgb(101, 33, 132)", translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}>
                <div className="textContent">
                  <p className="text-primary-white font-feeld text-[18px] tablet:text-[20px] latop:text-[20px] leading-[150%]">
                    {"“My last TokenMingle experience was I met a really cool developer who shares a lot of similar views on scaling distributed systems, and the conversations we had about it helped me learn so much.”"}
                  </p>
                </div>
                <div className="bottomContainer">
                  <div className="content flex flex-row gap-2">
                    <div className="avatar w-[42px] h-[42px] tablet:w-[48px] tablet:h-[48px] laptop:w-[48px] laptop:h-[48px] relative">
                      <img alt="avatar image of user" loading="lazy" decoding="async" data-nimg="fill" className="rounded-[1000px] object-cover" src="/assets/image/upload/v1783532238/7700e24fc144-IMG_6276-_1_evyhju.jpg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                    </div>
                    <div className="details flex flex-col justify-between tablet:justify-around laptop:justify-around">
                      <div className="topRow flex flex-row items-center gap-1">
                        <div className="name">
                          <h5 className="font-feeld text-[16px] leading-[140%] tracking-[-0.16px]" style={{ color: "rgb(238, 202, 255)" }}>
                            {"Daria"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="text-prism-majestic w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="bottomRow">
                        <div className="middleRow flex flex-row gap-[4px] font-feeld text-[12px] font-normal leading-[140%] tracking-[-0.12px] items-center" style={{ color: "rgb(238, 202, 255)" }}>
                          <div className="textContainer">
                            {"26"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Genderfluid"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Designer"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonialCarouselItemContainer w-[260px] min-w-[260px] rounded-t-[12px] rounded-bl-[12px] h-min p-3 tablet:p-4 laptop:p-4 flex flex-col gap-14 justify-between will-change-transform" style={{ backgroundColor: "rgb(57, 74, 203)", translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" }}>
                <div className="textContent">
                  <p className="text-primary-white font-feeld text-[18px] tablet:text-[20px] latop:text-[20px] leading-[150%]">
                    {"“On TokenMingle I found my first technical co-founder. He was a senior engineer and the best person to start this startup journey with. He guided me through the early architecture and helped me build an incredible product.”"}
                  </p>
                </div>
                <div className="bottomContainer">
                  <div className="content flex flex-row gap-2">
                    <div className="avatar w-[42px] h-[42px] tablet:w-[48px] tablet:h-[48px] laptop:w-[48px] laptop:h-[48px] relative">
                      <img alt="avatar image of user" loading="lazy" decoding="async" data-nimg="fill" className="rounded-[1000px] object-cover" src="/assets/image/upload/v1783530567/cbed2e57a15f-0e517f74_c3fb_4482_b18f_75f896066995-_1_-_1_rjbxyw.jpg" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
                    </div>
                    <div className="details flex flex-col justify-between tablet:justify-around laptop:justify-around">
                      <div className="topRow flex flex-row items-center gap-1">
                        <div className="name">
                          <h5 className="font-feeld text-[16px] leading-[140%] tracking-[-0.16px]" style={{ color: "rgb(201, 206, 248)" }}>
                            {"Uschi"}
                          </h5>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.57915 16.0513C2.5932 16.9531 2.60754 17.8729 3.16731 18.4327C3.72188 18.9873 4.61585 18.9995 5.50598 19.0117C6.14932 19.0204 6.79065 19.0292 7.30038 19.2427C7.81141 19.4567 8.28202 19.9077 8.7524 20.3585C9.40037 20.9795 10.0479 21.6 10.8 21.6C11.5571 21.6 12.2223 20.9642 12.8781 20.3373C13.3468 19.8894 13.8106 19.4461 14.2996 19.2427C14.7855 19.0406 15.4139 19.0308 16.0513 19.0209C16.9531 19.0068 17.8729 18.9925 18.4327 18.4327C18.9873 17.8781 18.9995 16.9841 19.0117 16.094C19.0204 15.4507 19.0292 14.8093 19.2427 14.2996C19.4567 13.7886 19.9077 13.318 20.3585 12.8476C20.9795 12.1996 21.6 11.5521 21.6 10.8C21.6 10.0429 20.9642 9.37768 20.3373 8.72187C19.8894 8.25325 19.4461 7.78944 19.2427 7.30038C19.0406 6.81446 19.0308 6.18608 19.0209 5.54871C19.0068 4.64689 18.9925 3.72707 18.4327 3.16731C17.8781 2.61274 16.9841 2.60052 16.094 2.58835C15.4507 2.57955 14.8093 2.57078 14.2996 2.35731C13.7886 2.14329 13.318 1.69229 12.8476 1.24151C12.1996 0.620541 11.5521 0 10.8 0C10.0429 0 9.37768 0.635844 8.72187 1.26267C8.25325 1.71058 7.78944 2.15389 7.30038 2.35731C6.81446 2.55942 6.18608 2.56921 5.54871 2.57915C4.64689 2.5932 3.72707 2.60754 3.16731 3.16731C2.61274 3.72188 2.60052 4.61585 2.58835 5.50598C2.57955 6.14932 2.57078 6.79065 2.35731 7.30038C2.14329 7.81141 1.69229 8.28202 1.24151 8.7524C0.620541 9.40037 0 10.0479 0 10.8C0 11.5571 0.635843 12.2223 1.26267 12.8781C1.71058 13.3468 2.15389 13.8106 2.35731 14.2996C2.55942 14.7855 2.56921 15.4139 2.57915 16.0513ZM10.3027 11.1451L14.738 6.79997L16.1335 8.16714L15.8848 8.39726L9.34935 14.8L5.4668 10.9962L5.7155 10.7661L6.6136 9.87273L6.86231 9.64261L7.11101 9.87273L8.39598 11.1451C8.92103 11.6595 9.77768 11.6595 10.3027 11.1451Z" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="iconContainer w-[16px] h-[16px] flex items-center justify-center">
                          <svg className="text-prism-majestic w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 22.6666C17.8911 22.6666 22.6667 17.891 22.6667 11.9999C22.6667 6.10888 17.8911 1.33325 12 1.33325C6.109 1.33325 1.33337 6.10888 1.33337 11.9999C1.33337 17.891 6.109 22.6666 12 22.6666ZM9.9292 7.99992H8.00004V15.9999H9.31884V11.1097C9.31884 11.025 9.34064 10.9633 9.38424 10.9248C9.4351 10.8862 9.48596 10.8824 9.53683 10.9132C9.59495 10.9363 9.63855 10.9903 9.66762 11.0751L11.3243 15.9999H12.6758L14.3325 11.0866C14.3615 10.9941 14.4051 10.9325 14.4633 10.9017C14.5214 10.8708 14.5722 10.8747 14.6158 10.9132C14.6594 10.9517 14.6812 11.0173 14.6812 11.1097V15.9999H16V7.99992H14.06L12.2943 13.3756C12.258 13.4835 12.1962 13.5568 12.109 13.5953C12.0291 13.6338 11.9492 13.6338 11.8693 13.5953C11.7893 13.5568 11.7312 13.4797 11.6949 13.3641L9.9292 7.99992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.92916 8H8V16H9.3188V11.1098C9.3188 11.025 9.3406 10.9634 9.3842 10.9249C9.43506 10.8863 9.48592 10.8825 9.53678 10.9133C9.59491 10.9364 9.63851 10.9904 9.66758 11.0751L11.3243 16H12.6757L14.3324 11.0867C14.3615 10.9942 14.4051 10.9326 14.4632 10.9017C14.5213 10.8709 14.5722 10.8748 14.6158 10.9133C14.6594 10.9518 14.6812 11.0173 14.6812 11.1098V16H16V8H14.0599L12.2943 13.3757C12.2579 13.4836 12.1962 13.5568 12.109 13.5954C12.0291 13.6339 11.9491 13.6339 11.8692 13.5954C11.7893 13.5568 11.7312 13.4798 11.6948 13.3642L9.92916 8Z" fill="#FAFAFA" />
                          </svg>
                        </div>
                      </div>
                      <div className="bottomRow">
                        <div className="middleRow flex flex-row gap-[4px] font-feeld text-[12px] font-normal leading-[140%] tracking-[-0.12px] items-center" style={{ color: "rgb(201, 206, 248)" }}>
                          <div className="textContainer">
                            {"34"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Woman"}
                          </div>
                          <div className="iconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="2" viewBox="0 0 2 2" fill="none">
                              <circle cx="0.869141" cy="0.869141" r="0.869141" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="textContainer">
                            {"Investor"}
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
        <div className="carouselDots flex gap-1 pt-8">
          <button type="button" className="features-carousel-dot active" />
          <button type="button" className="features-carousel-dot " />
          <button type="button" className="features-carousel-dot " />
          <button type="button" className="features-carousel-dot " />
          <button type="button" className="features-carousel-dot " />
          <button type="button" className="features-carousel-dot " />
          <button type="button" className="features-carousel-dot " />
        </div>
      </div>
    </section>
    <SafetySection />


    </div>
    </div>
  );
}