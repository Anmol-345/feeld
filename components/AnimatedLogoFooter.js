export default function AnimatedLogoFooter() {
  return (
    <section className="animatedLogoFooter w-full pt-0 pb-12 tablet:py-[62px] laptop:py-[62px] relative flex flex-col items-center">
    <div className="px-4 tablet:px-[58px] laptop:px-[58px] w-full h-full max-w-[1440px] flex flex-col items-center">
      <div className="animated-logo-footer-container w-full h-auto max-h-[262px] max-w-[1440px]  relative">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
          <defs>
            <mask id="animated-logo-mask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox" x="0" y="0" width="1" height="1">
              <g transform="scale(0.00076687, 0.00381679)" fill="#ffffff">
                <g transform="translate(0, 0)">
                  <path d="M222.316 58.1182H95.6319C81.4613 58.1182 70.8373 65.8433 70.8373 81.2771C70.8373 96.711 77.9147 104.436 95.6319 104.436H215.239V157.759H70.8373V261.818H0V13.4043C0 5.99017 5.78489 0 12.9096 0H222.3V58.1018L222.316 58.1182Z" />
                </g>
                <g transform="translate(247, 0)">
                  <path d="M229.851 58.1346H95.6004C81.4298 58.1346 70.8058 65.8597 70.8058 81.2936C70.8058 96.7274 77.8832 104.452 95.6004 104.452H222.773V157.775H70.8216V203.733H229.867V261.835H0V0H229.867V58.1018L229.851 58.1346Z" />
                </g>
                <g transform="translate(501, 0)">
                  <path d="M229.851 58.1346H95.6004C81.4298 58.1346 70.8058 65.8597 70.8058 81.2936C70.8058 96.7274 77.8832 104.452 95.6004 104.452H222.773V157.775H70.8216V203.733H229.867V261.835H0V0H229.867V58.1018L229.851 58.1346Z" />
                </g>
                <g transform="translate(755, 0)">
                  <path d="M111.221 203.962H221.024V261.835H0V0H70.8374L73.6903 158.43C73.6903 189.838 78.4823 203.962 111.221 203.962Z" />
                </g>
                <g transform="translate(1001, 0)">
                  <path d="M0 0.0163328H166.012C223.388 0.0163328 303.32 42.308 303.32 128.724C303.32 222.866 223.388 261.835 166.012 261.835H0V0V0.0163328ZM99.1626 203.749H163.884C192.21 203.749 230.718 169.919 230.718 128.741C230.718 93.4377 195.756 58.1346 163.884 58.1346H99.1626C83.9359 58.1346 70.8372 65.4832 70.8372 91.2281V166.973C70.8372 187.203 76.8585 203.749 99.1626 203.749Z" />
                </g>
              </g>
            </mask>
          </defs>
        </svg>
        <video src="/feeld/media/Aura_BG_011_mc7slw.webm" autoplay muted loop playsInline className="animatedBackground w-full h-full object-cover absolute top-0" preload="none" />
      </div>
    </div>
    </section>
  );
}
