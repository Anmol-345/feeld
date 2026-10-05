export default function Footer() {
  return (
    <footer className="bg-homepage-bg text-homepage-text footer lg:flex lg:lg:justify-center">
    <div className="max-w-[1440px] w-full px-[16px] lg:px-[44px] pb-8">
      <img alt="" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" className="mb-4" src="/assets/image/upload/v1739271609/Smile-light_j7aog4.svg" style={{ color: "transparent" }} />
      <div className="lg:flex gap-8">
        <div className="max-lg:mb-8">
          <form className="w-full xl:min-w-[500px] text-homepage-text ">
            <p className="mb-4 font-feeld-edge leading-10 text-[32px] ">
              {"Exclusive tips"}
              <br />
              {"and updates in your inbox!"}
            </p>
            <div>
              <input className="w-full h-[58px] bg-transparent border-0 border-b pl-2 focus:rounded focus:outline-none  focus:border-white focus:border-2 focus:ring-0 " placeholder="Get exclusive updates via email" type="email" value="" name="email" />
              <div className="flex justify-between flex-col xl:flex-row">
                <div className="my-4">
                  <div>
                    <iframe src={"https://newassets.hcaptcha.com/captcha/v1/05219f0822161da4c4a6f3aed6bf6d6fae1ba8e1/static/hcaptcha.html#frame=checkbox&id=0ter4jm10to&host=feeld.co&sentry=true&reportapi=https%3A%2F%2Faccounts.hcaptcha.com&recaptchacompat=true&custom=false&hl=en&tplinks=on&andint=off&pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&sitekey=759a1756-4234-4950-8c0c-a94cf252da52&theme=dark&origin=https%3A%2F%2Ffeeld.co&clientOptions=%7B%22sentry%22%3Atrue%2C%22reportapi%22%3A%22https%3A%2F%2Faccounts.hcaptcha.com%22%2C%22recaptchacompat%22%3A%22true%22%2C%22custom%22%3Afalse%2C%22hl%22%3A%22en-US%22%2C%22tplinks%22%3A%22on%22%2C%22andint%22%3A%22off%22%2C%22pat%22%3A%22on%22%2C%22pstissuer%22%3A%22https%3A%2F%2Fpst-issuer.hcaptcha.com%22%2C%22endpoint%22%3A%22https%3A%2F%2Fapi.hcaptcha.com%22%2C%22theme%22%3A%22light%22%2C%22size%22%3A%22normal%22%2C%22confirm-nav%22%3Afalse%7D"} tabIndex="0" frameBorder="0" scrolling="no" allow="private-state-token-redemption" title="Widget containing checkbox for hCaptcha security challenge" data-hcaptcha-widget-id="0ter4jm10to" data-hcaptcha-response="" style={{ pointerEvents: "auto", backgroundColor: "rgba(255, 255, 255, 0)", borderRadius: "4px", width: "302px", height: "76px", overflow: "hidden" }} />
                    <textarea id="g-recaptcha-response-0ter4jm10to" name="g-recaptcha-response" style={{ display: "none" }} />
                    <textarea id="h-captcha-response-0ter4jm10to" name="h-captcha-response" style={{ display: "none" }} />
                  </div>
                </div>
                <button type="submit" disabled className="self-center lg:w-fit border hover:transition-all duration-300 bg-primary-black text-primary-white hover:bg-primary-grey hover:text-primary-black hover:border-black text-md h-11 rounded-full w-full h-12 px-12 mb-4 disabled:hover:bg-[#7D7D7D] disabled:hover:border-[#7D7D7D] disabled:hover:text-primary-white disabled:cursor-not-allowed disabled:opacity-75 ">
                  {"Sign me up"}
                </button>
              </div>
            </div>
            <p className="text-rose-500 " />
            <p className="" />
          </form>
        </div>
        <div className="lg:flex lg:gap-8 lg:flex-1">
          <section className="border-b border-secondary-darkGray lg:w-1/4 lg:border-none">
            <header className="flex items-center place-content-between lg:pt-0 pt-5 mb-5 cursor-pointer after:w-[20px] after:h-[20px] after:bg-arrow-down-light lg:cursor-auto lg:after:bg-none lg:font-normal after:lg:hidden">
              {"Product"}
            </header>
            <ul className="ml-4 mb-9 hidden lg:ml-0 lg:mb-0 lg:block">
              <li className="my-2 font-light">
                <a id="footer-the-app" href="https://web.feeld.co/the-app-new" target="_blank">
                  {"The App"}
                </a>
              </li>
              <li className="my-2 font-light">
                <a href="/the-app/majestic">
                  {"Majestic Membership"}
                </a>
              </li>
              <li className="my-2 font-light">
                <a href="/the-app/pings-and-uplift">
                  {"Add-On Features"}
                </a>
              </li>
              <li className="my-2 font-light">
                <a id="footer-support" href="https://support.feeld.co/" target="_blank">
                  {"Support"}
                </a>
              </li>
              <li className="my-2 font-light">
                <a href="/the-app/trust-and-safety">
                  {"Safety & Privacy"}
                </a>
              </li>
              <li className="my-2 font-light">
                <a href="/about/faq">
                  {"FAQ"}
                </a>
              </li>
            </ul>
          </section>
          <section className="border-b border-secondary-darkGray lg:w-1/4 lg:border-none">
            <header className="flex items-center place-content-between lg:pt-0 pt-5 mb-5 cursor-pointer after:w-[20px] after:h-[20px] after:bg-arrow-down-light lg:cursor-auto lg:after:bg-none lg:font-normal after:lg:hidden">
              {"About Feeld"}
            </header>
            <ul className="ml-4 mb-9 hidden lg:ml-0 lg:mb-0 lg:block">
              <li className="my-2 font-light">
                <a href="/about">
                  {"Our Purpose"}
                </a>
              </li>
              <li className="my-2 font-light">
                <a href="/careers">
                  {"Careers"}
                </a>
              </li>
              <li className="my-2 font-light">
                <a href="/press">
                  {"Newsroom"}
                </a>
              </li>
              <li className="my-2 font-light">
                <a href="/freedomme">
                  {"Feeld X Kesha"}
                </a>
              </li>
            </ul>
          </section>
          <section className="border-b border-secondary-darkGray lg:w-1/4 lg:border-none">
            <header className="flex items-center place-content-between lg:pt-0 pt-5 mb-5 cursor-pointer after:w-[20px] after:h-[20px] after:bg-arrow-down-light lg:cursor-auto lg:after:bg-none lg:font-normal after:lg:hidden">
              {"Community"}
            </header>
            <ul className="ml-4 mb-9 hidden lg:ml-0 lg:mb-0 lg:block">
              <li className="my-2 font-light">
                <a href="/experiences">
                  {"Events & Socials"}
                </a>
              </li>
              <li className="my-2 font-light">
                <a href="/ambassadors">
                  {"Ambassadors"}
                </a>
              </li>
            </ul>
          </section>
          <section className="border-b border-secondary-darkGray lg:w-1/4 lg:border-none">
            <header className="flex items-center place-content-between lg:pt-0 pt-5 mb-5 cursor-pointer after:w-[20px] after:h-[20px] after:bg-arrow-down-light lg:cursor-auto lg:after:bg-none lg:font-normal after:lg:hidden">
              {"Discover"}
            </header>
            <ul className="ml-4 mb-9 hidden lg:ml-0 lg:mb-0 lg:block">
              <li className="my-2 font-light">
                <a href="/magazine">
                  {"Magazine"}
                </a>
              </li>
              <li className="my-2 font-light">
                <a href="/ask-feeld">
                  {"Not Just A Blog"}
                </a>
              </li>
              <li className="my-2 font-light">
                <a href="/glossary">
                  {"Glossary"}
                </a>
              </li>
              <li className="my-2 font-light">
                <a href="/uncharted-territory">
                  {"Uncharted Territory"}
                </a>
              </li>
              <li className="my-2 font-light">
                <a href="/ask-feeld/how-to/state-of-dating-volume-iii-the-rise-of-relationship-anarchy">
                  {"State of Dating Volume 3"}
                </a>
              </li>
              <li className="my-2 font-light">
                <a href="/press/releases/state-of-dating-vol-4">
                  {"State of Dating Volume 4"}
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="lg:ml-auto">
          <h3 className="text-[16px] font-feeld font-sans-serif mb-6 lg:mt-0 mt-6">
            {"Get The App"}
          </h3>
          <div className="flex lg:flex-col">
            <button className="group text-md font-normal rounded-full w-fit mr-2 lg:mb-2 m-0 border hover:transition-all duration-300 before:bg-play border-black bg-primary-white text-primary-black hover:border-white hover:text-primary-white hover:bg-dark-bg" title="App Store">
              <a id="footer-app-store" href="/download" className="before:bg-apple-dark group-hover:before:bg-apple-light before:w-[20px] before:h-[20px] before:bg-no-repeat before:bg-center before:mr-1 flex items-center py-3 px-4 block text-base font-normal leading-normal">
                {"App Store"}
              </a>
            </button>
            <button className="group text-md font-normal rounded-full w-fit border hover:transition-all duration-300 before:bg-play border-black bg-primary-white text-primary-black hover:border-white hover:text-primary-white hover:bg-dark-bg" title="Google Play">
              <a id="footer-play-store" href="/download" className="before:bg-google-play-dark group-hover:before:bg-google-play-light before:w-[20px] before:h-[20px] before:bg-no-repeat before:bg-center before:mr-1 flex items-center py-3 px-4 block text-base font-normal leading-normal">
                {"Google Play"}
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:pt-9 items-center lg:flex-row-reverse">
        <div className="my-8 lg:ml-10 flex lg:flex-row-reverse">
          <ul className="list-none flex flex-1 lg:flex-none">
            <li className="flex-1 flex items-center justify-center lg:flex-none lg:mx-2 xl:mx-4">
              <a href="https://www.tiktok.com/@feeldco" title="TikTok" target="_blank" className="h-[24px] w-[24px]">
                <img alt="" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="h-full w-full" src="/assets/image/upload/v1696591646/tiktok-black.svg" style={{ color: "transparent" }} />
              </a>
            </li>
            <li className="flex-1 flex items-center justify-center lg:flex-none lg:mx-2 xl:mx-4">
              <a href="https://www.instagram.com/feeldco/" title="Instagram" target="_blank" className="h-[24px] w-[24px]">
                <img alt="" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="h-full w-full" src="/assets/image/upload/v1696592244/instagram-black.svg" style={{ color: "transparent" }} />
              </a>
            </li>
            <li className="flex-1 flex items-center justify-center lg:flex-none lg:mx-2 xl:mx-4">
              <a href="https://www.facebook.com/feeldCo" title="Facebook" target="_blank" className="h-[24px] w-[24px]">
                <img alt="" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="h-full w-full" src="/assets/image/upload/v1699621160/facebook-black-icon.svg" style={{ color: "transparent" }} />
              </a>
            </li>
            <li className="flex-1 flex items-center justify-center lg:flex-none lg:mx-2 xl:mx-4">
              <a href="https://www.youtube.com/@Feeldapp" title="YouTube" target="_blank" className="h-[24px] w-[24px]">
                <img alt="" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" className="h-full w-full" src="/assets/image/upload/v1705064383/Global%20elements/Social/youtube_dark.svg" style={{ color: "transparent" }} />
              </a>
            </li>
            <li className="flex-1 flex items-center justify-center lg:flex-none lg:mx-2 xl:mx-4">
              <a href="https://twitter.com/feeldCo" title="Twitter" target="_blank" className="h-[24px] w-[24px]">
                <img alt="" loading="lazy" width="20" height="21" decoding="async" data-nimg="1" className="h-full w-full" src="/assets/image/upload/v1699620649/x-logo-black.svg" style={{ color: "transparent" }} />
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:flex lg:ml-auto items-baseline ">
          <ul className="text-sm m-auto w-fit list-none flex my-2 lg:m-0 lg:items-center">
            <li className="border-r border-primary-white px-[8px] max-lg:last-of-type:border-none first-of-type:mx-0">
              <span className="text-xs">
                <a href="/about/privacy">
                  {"Privacy policy"}
                </a>
              </span>
            </li>
            <li className="border-r border-primary-white px-[8px] max-lg:last-of-type:border-none first-of-type:mx-0">
              <span className="text-xs">
                <button className="optanon-show-settings cursor-pointer">
                  {"Cookies preferences"}
                </button>
              </span>
            </li>
            <li className="border-r border-primary-white px-[8px] max-lg:last-of-type:border-none first-of-type:mx-0">
              <span className="text-xs">
                <a href="/about/terms-of-use-uk">
                  {"Terms of use"}
                </a>
              </span>
            </li>
          </ul>
          <p className="text-center text-xs lg:mx-2 font-feeld-edge">
            <a href="/about/terms">
              {"Terms of use (US)"}
            </a>
          </p>
          <p className="text-center opacity-60 text-xs">
            {"All rights reserved Feeld Ltd © 2025"}
          </p>
        </div>
      </div>
    </div>
    </footer>
  );
}
