export default function AnimatedLogoFooter() {
  return (
    <section className="animatedLogoFooter w-full pt-0 pb-12 tablet:py-[62px] laptop:py-[62px] relative flex flex-col items-center">
    <div className="px-4 tablet:px-[58px] laptop:px-[58px] w-full h-full max-w-[1440px] flex flex-col items-center">
      <div className="animated-logo-footer-container w-full h-auto max-h-[400px] max-w-[1440px]  relative overflow-visible">
        <svg className="w-full h-full min-h-[150px] tablet:min-h-[220px] laptop:min-h-[320px]" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <mask id="animated-logo-mask" x="0" y="0" width="100%" height="100%">
                <text fill="#ffffff" x="50%" y="55%" text-anchor="middle" dominant-baseline="central" className="font-feeld-edge" style={{fontSize: 'clamp(96px, 24vw, 312px)', fontWeight: 'bold', letterSpacing: '-0.05em'}}>MINGLE</text>
            </mask>
          </defs>
        </svg>
        <video src="/feeld/media/Aura_BG_011_mc7slw.webm" autoplay muted loop playsInline className="animatedBackground w-full h-full object-cover absolute top-0" preload="none" />
      </div>
    </div>
    </section>
  );
}
