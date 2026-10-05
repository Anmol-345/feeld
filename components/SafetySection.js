'use client';

import { useEffect, useRef, useState } from 'react';

import { safetySectionContent } from '../app/content';

const items = safetySectionContent.items;

export default function SafetySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    // On desktop (laptop), use scroll-trigger sticky behavior
    const mq = window.matchMedia('(min-width: 1024px)');

    if (!mq.matches) {
      // Mobile: simple IntersectionObserver per item
      const observers = itemRefs.current.map((el, idx) => {
        if (!el) return null;
        const obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveIndex(idx);
          },
          { threshold: 0.6 }
        );
        obs.observe(el);
        return obs;
      });
      return () => observers.forEach((o) => o && o.disconnect());
    }

    // Desktop: scroll-driven sticky accordion
    const section = sectionRef.current;
    if (!section) return;

    const ITEM_HEIGHT = 950 / items.length; // distribute evenly across scroll range

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = section.offsetTop;
      const scrollY = window.scrollY;
      const sectionH = section.offsetHeight;
      const viewH = window.innerHeight;

      // Progress from 0 (section enters) to 1 (section leaves)
      const progress = Math.max(
        0,
        Math.min(1, (scrollY - sectionTop) / (sectionH - viewH))
      );
      const idx = Math.min(
        items.length - 1,
        Math.floor(progress * items.length)
      );
      setActiveIndex(idx);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="safetySection-wrapper w-full flex flex-col items-center"
      // Extra height on desktop creates the scroll travel that drives the sticky effect
      style={{ minHeight: 'var(--safety-scroll-height, auto)' }}
    >
      <style>{`
        @media (min-width: 1024px) {
          .safetySection-wrapper {
            --safety-scroll-height: calc(950px + ${items.length} * 200px);
            min-height: var(--safety-scroll-height);
          }
          .safetySection-sticky {
            position: sticky;
            top: 0;
          }
        }
      `}</style>

      <div
        ref={stickyRef}
        className="safetySection-sticky w-full flex flex-col items-center pb-12 pt-12 laptop:pt-36"
      >
        <div className="safetyContainer px-4 laptop:px-[58px] w-full max-w-[1440px] flex flex-col h-auto min-h-[950px] laptop:h-[950px] laptop:min-h-[850px] gap-10 tablet:gap-14 laptop:gap-14">
          {/* Header */}
          <div className="headerContainer flex flex-row justify-between">
            <div className="header">
              <div className="headerLine flex flex-row gap-[2px] tablet:gap-2 laptop:gap-2 w-full justify-start items-center">
                <div className="textContainer">
                  <h2 className="font-feeld-edge text-[40px] tablet:text-[56px] laptop:text-[56px] font-extralight tracking-[-0.4px] tablet:tracking-[-0.56px] laptop:tracking-[-0.56px] leading-[100%]">{safetySectionContent.headerLine1}</h2>
                </div>
                <div className="iconContainer w-10 h-full flex m-0 tablet:my-auto laptop:my-auto justify-center relative">
                  <div className="svgContainer w-[30px] h-[30px] flex items-center justify-center">
                    <svg className="text-secondary-highlight w-[24px] h-[24px] tablet:w-[30px] tablet:h-[30px] laptop:w-[30px] laptop:h-[30px]" xmlns="http://www.w3.org/2000/svg" width="27" height="33" viewBox="0 0 27 33" fill="none">
                      <path d="M13.333 0C18.3457 0 22.4491 3.90606 22.7588 8.84473C22.7709 9.03805 22.777 9.23351 22.7773 9.42969C22.7774 9.47164 22.7722 9.51241 22.7637 9.55176L22.7705 10.5557H26.666L26.667 32.7773H0.000976562L0 10.5557H3.89648L3.90332 9.55176C3.89476 9.51237 3.88862 9.47167 3.88867 9.42969L3.89355 9.13672C3.89668 9.03916 3.90115 8.94156 3.90723 8.84473C3.9451 8.24117 4.04027 7.65226 4.18652 7.08398C4.22534 6.93316 4.26749 6.78356 4.31348 6.63574C5.50957 2.79112 9.0955 0.000150945 13.333 0ZM5.61523 13.3906C4.32152 13.3907 3.23263 14.2746 2.91797 15.4736L2.82715 16.6279V26.582L2.89453 27.7793C3.17402 29.0179 4.27885 29.9432 5.59766 29.9434H21.0518C22.3452 29.9431 23.4333 29.0591 23.748 27.8604L23.8398 26.7051V16.751L23.7715 15.5537C23.4918 14.3152 22.3872 13.3906 21.0684 13.3906H5.61523ZM13.333 2.84082C10.3678 2.84095 7.85891 4.79284 7.02246 7.48047C6.99035 7.58368 6.9607 7.68863 6.93359 7.79395C6.83974 8.15868 6.77531 8.53594 6.74512 8.92285C6.73171 9.0947 6.72559 9.26879 6.72559 9.44434L6.73633 10.5557H19.9414V9.44434C19.9414 9.26882 19.9343 9.09472 19.9209 8.92285C19.6551 5.52137 16.8086 2.84082 13.333 2.84082Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div className="textContainer">
                  <h2 className="font-feeld-edge text-[40px] tablet:text-[56px] laptop:text-[56px] font-extralight tracking-[-0.4px] tablet:tracking-[-0.56px] laptop:tracking-[-0.56px] leading-[100%]">{safetySectionContent.headerLine2}</h2>
                </div>
              </div>
              <div className="headerLine flex flex-row gap-[2px] tablet:gap-2 laptop:gap-2 w-full justify-start items-center">
                
                <div className="iconContainer w-10 h-full flex m-0 tablet:my-auto laptop:my-auto justify-center relative">
                  <div className="svgContainer w-[30px] h-[30px] flex items-center justify-center">
                    <svg className="text-secondary-highlight w-[24px] h-[24px] tablet:w-[30px] tablet:h-[30px] laptop:w-[30px] laptop:h-[30px]" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <g clipPath="url(#clip0_6036_8602)">
                        <path d="M35.4032 16.0762H35.3524C35.3524 16.0762 35.3016 15.9746 35.2508 15.9238C35.1746 15.8222 35.0476 15.6698 34.8952 15.4413C34.5651 15.0095 34.1333 14.3492 33.6762 13.5111C32.7619 11.8603 31.746 9.44762 31.4159 6.47619V6.24762L31.2381 6.09524L29.4603 4.31746L29.2825 4.13968H29.0286L28.8254 4.11429C28.6984 4.08889 28.4952 4.06349 28.2159 4.03809C27.6825 3.93651 26.9206 3.80952 26.0063 3.53016C24.1778 2.99683 21.7651 2.00635 19.4286 0.126984L19.2762 0H16.2794L16.0762 0.152381C16.0762 0.152381 16.0762 0.177778 16.0508 0.203175C16.0254 0.203175 15.9746 0.253968 15.9238 0.304762C15.8222 0.380952 15.6698 0.507936 15.4413 0.660317C15.0095 0.990476 14.3492 1.42222 13.5111 1.87936C11.8603 2.79365 9.44762 3.80952 6.47619 4.13968H6.24762L6.09524 4.31746L4.31746 6.09524L4.13968 6.27302V6.52698L4.11429 6.73016C4.08889 6.85714 4.06349 7.06032 4.03809 7.33968C3.93651 7.87302 3.80952 8.63492 3.53016 9.54921C2.99683 11.3778 2.00635 13.7905 0.126984 16.127L0 16.2794V19.2762L0.152381 19.4794H0.203175C0.203175 19.4794 0.253968 19.581 0.304762 19.6317C0.380952 19.7333 0.507936 19.8857 0.660317 20.1143C0.990476 20.546 1.42222 21.2063 1.87936 22.0444C2.79365 23.6952 3.80952 26.1079 4.13968 29.0794V29.3079L6.09524 31.2381L6.27302 31.4159H6.52698L6.73016 31.4413C6.85714 31.4667 7.06032 31.4921 7.33968 31.5175C7.87302 31.619 8.63492 31.746 9.54921 32.0254C11.3778 32.5587 13.7905 33.5492 16.127 35.4286L16.2794 35.5556H19.2762L19.4794 35.4032C19.4794 35.4032 19.4794 35.3778 19.5048 35.3524C19.5302 35.3524 19.581 35.3016 19.6317 35.2508C19.7333 35.1746 19.8857 35.0476 20.1143 34.8952C20.546 34.5651 21.2063 34.1333 22.0444 33.6762C23.6952 32.7619 26.1079 31.746 29.0794 31.4159H29.3079L31.4159 29.2825V29.0286L31.4413 28.8254C31.4667 28.6984 31.4921 28.4952 31.5175 28.2159C31.619 27.6825 31.746 26.9206 32.0254 26.0063C32.5587 24.1778 33.5492 21.7651 35.4286 19.4286L35.5556 19.2762V16.2794L35.4032 16.0762ZM31.746 18.2603C30.2476 20.3429 29.0794 22.7048 28.3683 25.1936C28.0635 26.2095 27.8857 27.0984 27.8095 27.7587L27.5048 28.0635C24.9651 28.4698 22.4508 29.3333 20.1905 30.5778C19.2508 31.1111 18.4889 31.5937 17.9556 32H17.5492C15.4667 30.5016 13.1048 29.3333 10.6159 28.6222C9.5746 28.3175 8.68571 28.1143 8.0254 28.0127L7.74603 27.7587C7.33968 25.2444 6.47619 22.7302 5.23175 20.4444C4.69841 19.5048 4.19048 18.7429 3.80952 18.2095V17.3206C5.30794 15.2381 6.47619 12.8762 7.1873 10.3873C7.49206 9.37143 7.66984 8.48254 7.74603 7.82222L8.05079 7.51746C10.5905 7.11111 13.1048 6.24762 15.3651 5.00317C16.2794 4.49524 17.0413 3.9873 17.6 3.58095H17.981C21.7651 6.29841 25.5746 7.23809 27.5302 7.54286L27.8095 7.82222C28.2159 10.3619 29.0794 12.8762 30.3238 15.1365C30.8317 16.0508 31.3397 16.8127 31.746 17.3714V18.2603Z" fill="currentColor" />
                        <path d="M24.5841 11.0476L16.8889 18.7429C15.9238 19.7079 14.3492 19.7079 13.3841 18.7429L11.0222 16.3556L10.5651 15.9238L10.1079 16.3556L8.45714 18.0318L8 18.4635L8.45714 18.9206L14.6794 25.1429L15.1365 25.6L27.1492 13.5873L27.6063 13.1556L25.0413 10.5905L24.5841 11.0476Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath id="clip0_6036_8602">
                          <rect width="35.5556" height="35.5556" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="textContainer">
                  <h2 className="font-feeld-edge text-[40px] tablet:text-[56px] laptop:text-[56px] font-extralight tracking-[-0.4px] tablet:tracking-[-0.56px] laptop:tracking-[-0.56px] leading-[100%]">{safetySectionContent.headerLine3}</h2>
                </div>
              </div>
            </div>
            <div className="ctaContainer hidden tablet:flex laptop:flex">
              <button className="text-md font-normal rounded-full w-fit border hover:transition-all duration-300 border-black hover:border-white m-0 h-min bg-primary-white text-primary-black cta-hover-shadow-white hover:text-primary-black hover:bg-primary-white">
                <a className="block font-feeld text-[18px] font-normal leading-normal px-[28px] py-[18px]" href={safetySectionContent.ctaHref} target="_blank" rel="noopener noreferrer">{safetySectionContent.ctaText}</a>
              </button>
            </div>
          </div>

          {/* Content area */}
          <div className="safetyContentContainer w-full h-full relative overflow-hidden">
            <div className="sectionContainer w-full h-full flex flex-col">
              <div className="contentRow flex flex-col tablet:flex-row laptop:flex-row h-full w-full shrink-0 gap-6 tablet:gap-4 laptop:gap-4 justify-between">

                {/* Left: Phone image */}
                <div className="assetContainer relative h-[80%] tablet:h-full laptop:h-full w-full max-w-full tablet:max-w-[550px] laptop:max-w-[550px] flex">
                  {items.map((item, idx) => (
                    <img
                      key={item.id}
                      alt={item.imgAlt}
                      loading="lazy"
                      decoding="async"
                      className="safetyAsset !h-auto rounded-t-[16px] rounded-bl-[16px] max-h-[100%] object-cover"
                      src={item.imgSrc}
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        inset: '0px',
                        color: 'transparent',
                        visibility: idx === activeIndex ? 'visible' : 'hidden',
                        opacity: idx === activeIndex ? 1 : 0,
                        transition: 'opacity 0.4s ease, visibility 0.4s ease',
                      }}
                    />
                  ))}
                </div>

                {/* Right: Accordion list */}
                <div className="contentContainer h-full w-full max-w-full tablet:max-w-[612px] laptop:max-w-[612px]">
                  <div className="sectionsWrapper flex flex-col gap-3 tablet:gap-5 laptop:gap-5">
                    {items.map((item, idx) => {
                      const isActive = idx === activeIndex;
                      return (
                        <div
                          key={item.id}
                          ref={(el) => (itemRefs.current[idx] = el)}
                          className="accordionItem flex flex-col gap-2"
                          onClick={() => setActiveIndex(idx)}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="flex flex-col tablet:flex-row laptop:flex-row gap-0 tablet:gap-4 laptop:gap-4">
                            {/* Desktop icon (only visible when active) */}
                            <div
                              className="safetyIconContainer w-[40px] h-[40px] relative shrink-0 hidden tablet:flex laptop:flex"
                              style={{
                                height: isActive ? '40px' : '0px',
                                visibility: isActive ? 'visible' : 'hidden',
                                overflow: 'hidden',
                                transition: 'height 0.3s ease, visibility 0.3s ease',
                              }}
                            >
                              <img
                                alt={item.iconAlt}
                                loading="lazy"
                                decoding="async"
                                src={item.iconSrc}
                                style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
                              />
                            </div>

                            <div className="border-solid border-[#2B263A] border-b pb-3 flex-1">
                              <div className="accordionHeader flex flex-row tablet:flex-row laptop:flex-row gap-2 tablet:gap-2 laptop:gap-2">
                                {/* Mobile icon (always visible) */}
                                <div className="safetyIconContainerMobile w-[24px] h-[24px] relative shrink-0 flex tablet:hidden laptop:hidden">
                                  <img
                                    alt={item.iconAlt}
                                    loading="lazy"
                                    decoding="async"
                                    src={item.iconSrc}
                                    style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
                                  />
                                </div>
                                <h3
                                  className="font-feeld-edge text-[30px] tablet:text-[48px] laptop:text-[48px] font-extralight leading-[100%] tablet:tracking-[-0.48px] laptop:tracking-[-0.32px] accordionHeading"
                                  style={{
                                    opacity: isActive ? 1 : 0.2,
                                    color: isActive ? 'rgb(255, 255, 255)' : 'rgb(151, 151, 151)',
                                    transition: 'opacity 0.4s ease, color 0.4s ease',
                                    paddingTop: '0px',
                                  }}
                                >
                                  {item.heading}
                                </h3>
                              </div>

                              {/* Accordion body */}
                              <div
                                className="accordionContent overflow-hidden"
                                style={{
                                  height: isActive ? 'auto' : '0px',
                                  maxHeight: isActive ? '200px' : '0px',
                                  transition: 'max-height 0.4s ease',
                                }}
                              >
                                <div className="contentInner">
                                  <p className="font-feeld-light text-[16px] tablet:text-[18px] laptop:text-[18px] font-light leading-[150%] text-secondary-onSurface pt-2 tablet:pt-2 laptop:pt-2">
                                    {item.body}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="ctaContainer flex tablet:hidden laptop:hidden">
            <button className="text-md font-normal rounded-full border hover:transition-all duration-300 border-black hover:border-white m-0 h-min bg-primary-white text-primary-black cta-hover-shadow-white hover:text-primary-black hover:bg-primary-white w-full">
              <a className="block font-feeld text-[18px] font-normal leading-normal px-[28px] py-[18px]" href={safetySectionContent.ctaHref} target="_blank" rel="noopener noreferrer">{safetySectionContent.ctaText}</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
