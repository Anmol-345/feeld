export default function Navbar() {
  return (
    <div id="navbar" className="fixed z-20 w-full nav-container" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1", visibility: "inherit" }}>
    <div className="navbar flex flex-col items-center py-6 relative z-40 bg-homepage-bg text-homepage-text" data-testid="navbar" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
      <div className="max-w-[1440px] w-full px-[16px] lg:px-[44px] flex items-center h-[40px] justify-between max-lg:flex-row-reverse">
        <a id="mobile-nav-cta" href={"https://feeld.onelink.me/TRZt?af_js_web=true&af_ss_ver=2_10_0&pid=Website&c=Homepage&af_channel=Website&deep_link_value=download&af_sub3=/&af_sub4=b6de2e1e-aae8-481e-8d1d-c580e89786e4&af_siteid=Website&af_ss_ui=true&af_ss_gtm_ui=true&af_sub_siteid=mobile-nav-cta"} className="bg-[#E72ABD] text-[#131313] font-medium px-3 py-2 text-[14px] rounded-full lg:hidden" aria-label="Download Feeld">
          {"Download"}
        </a>
        <div className="absolute left-1/2 transform -translate-x-1/2 lg:relative pr-6 lg:left-auto lg:transform-none">
          <a className="flex lg:justify-start" aria-label="Homepage" href="/">
            {" "}
            <img alt="logo" width="150" height="29" decoding="async" data-nimg="1" className="nav-logo false z-10" src="https://a.storyblok.com/f/244962/110x21/1c4392992c/logo.svg" style={{ color: "transparent", maxWidth: "100%", height: "auto", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1" }} />
          </a>
        </div>
        <div className="glass-bg p-2 flex justify-start max-lg:w-[56px] max-lg:h-[56px] relative rounded-[12px]">
          <button data-testid="toggle_button_open" className="bg-nav-dark w-[40px] h-[40px] bg-no-repeat bg-center lg:hidden" aria-label="Navigation menu" />
          <nav className="hidden lg:block">
            <ul className="flex">
              <li className="nav-link px-1 false   first-of-type:ml-0 text-l cursor-pointer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1" }}>
                <button className="py-2  rounded-[4px] px-3 hover:text-primary-white hover:bg-black/40" tabIndex="0" data-nav-item-id="c9d1ccba-4726-4826-a3e9-736aec091944" aria-expanded="false" aria-haspopup="true">
                  {"The App"}
                </button>
              </li>
              <li className="nav-link px-1 false   first-of-type:ml-0 text-l cursor-pointer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1" }}>
                <button className="py-2  rounded-[4px] px-3 hover:text-primary-white hover:bg-black/40" tabIndex="0" data-nav-item-id="58cdf170-4b67-47f3-bebd-65c1545460e6" aria-expanded="false" aria-haspopup="true">
                  {"About Feeld"}
                </button>
              </li>
              <li className="nav-link px-1 false   first-of-type:ml-0 text-l cursor-pointer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1" }}>
                <button className="py-2  rounded-[4px] px-3 hover:text-primary-white hover:bg-black/40" tabIndex="0" data-nav-item-id="7b46fe8b-1418-4c07-ab8c-0c86ed6e7dc5" aria-expanded="false" aria-haspopup="true">
                  {"In-Person"}
                </button>
              </li>
              <li className="nav-link px-1 false   first-of-type:ml-0 text-l cursor-pointer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1" }}>
                <button className="py-2  rounded-[4px] px-3 hover:text-primary-white hover:bg-black/40" tabIndex="0" data-nav-item-id="8766a3dd-04e8-4444-a854-641f47d199b9" aria-expanded="false" aria-haspopup="true">
                  {"Magazine"}
                </button>
              </li>
              <li className="nav-link px-1 false   first-of-type:ml-0 text-l cursor-pointer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1" }}>
                <button className="py-2  rounded-[4px] px-3 hover:text-primary-white hover:bg-black/40" tabIndex="0" data-nav-item-id="9475e4b8-b4a7-4e67-a1ab-53581efb310f" aria-expanded="false" aria-haspopup="true">
                  {"Not Just A Blog"}
                </button>
              </li>
              <li className="mx-4 h-[1.5em] w-px self-center bg-white/20" aria-hidden="true" />
              <li className="nav-link false text-secondary-darkGray p-2 pr-6 first-of-type:ml-0 text-l" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1" }}>
                <a href="/search">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" className="svg-inline--fa fa-magnifying-glass w-[20px] hover:!text-[#7d7d7d]" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ color: "rgb(237, 237, 237)" }}>
                    <path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </div>
  );
}
