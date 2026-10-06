"use client";
import React, { useState } from 'react';
import { footerContent } from '../app/content';

export default function Footer() {
  const [openSections, setOpenSections] = useState({});
  return (
    <footer className="bg-homepage-bg text-homepage-text footer lg:flex lg:lg:justify-center">
    <div className="max-w-[1440px] w-full px-[16px] lg:px-[44px] pb-8">
      <img alt="" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" className="mb-4" src="/assets/image/upload/v1739271609/Smile-light_j7aog4.svg" style={{ color: "transparent" }} />
      <div className="lg:flex gap-8">
        <div className="max-lg:mb-8">
          <form className="w-full xl:min-w-[500px] text-homepage-text ">
            <p className="mb-4 font-feeld-edge leading-10 text-[32px] ">
              {footerContent.newsletterHeading}
              <br />
              {footerContent.newsletterHelper}
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
                <button type="submit" disabled className="self-center lg:w-fit border hover:transition-all duration-300 bg-primary-black text-primary-white hover:bg-primary-grey hover:text-primary-black hover:border-black text-md h-11 rounded-full w-full px-12 mb-4 disabled:hover:bg-[#7D7D7D] disabled:hover:border-[#7D7D7D] disabled:hover:text-primary-white disabled:cursor-not-allowed disabled:opacity-75 ">
                  {footerContent.newsletterButton}
                </button>
              </div>
            </div>
            <p className="text-rose-500 " />
            <p className="" />
          </form>
        </div>
        <div className="lg:flex lg:gap-8 lg:flex-1">
          {footerContent.columns.map((col, idx) => {
            const isOpen = !!openSections[idx];
            return (
            <section key={idx} className="border-b border-secondary-darkGray lg:w-1/4 lg:border-none">
              <header onClick={() => setOpenSections(prev => ({ ...prev, [idx]: !prev[idx] }))} className="flex items-center place-content-between lg:pt-0 pt-5 mb-5 cursor-pointer lg:cursor-auto lg:font-normal">
                {col.title}
                <svg className="w-5 h-5 lg:hidden transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </header>
              <ul className={`ml-4 mb-9 ${isOpen ? 'block' : 'hidden'} lg:ml-0 lg:mb-0 lg:block`}>
                {col.links.map((link, lidx) => (
                  <li key={lidx} className="my-2 font-light">
                    <a href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )})}
        </div>
        <div className="lg:ml-auto">
          <h3 className="text-[16px] font-feeld font-sans-serif mb-6 lg:mt-0 mt-6">
            {"Get Connected"}
          </h3>
          <div className="flex lg:flex-col">
            <button className="group text-md font-normal rounded-full w-fit mr-2 lg:mb-2 m-0 border hover:transition-all duration-300 border-black bg-primary-white text-primary-black hover:border-white hover:text-primary-white hover:bg-dark-bg" title={footerContent.storePills.appStoreLabel}>
              <a href={footerContent.socials.telegram} target="_blank" className="flex items-center py-3 px-4 text-base font-normal leading-normal gap-2">
                {footerContent.storePills.appStoreLabel}
              </a>
            </button>
            <button className="group text-md font-normal rounded-full w-fit border hover:transition-all duration-300 border-black bg-primary-white text-primary-black hover:border-white hover:text-primary-white hover:bg-dark-bg" title={footerContent.storePills.googlePlayLabel}>
              <a href={footerContent.socials.luma} target="_blank" className="flex items-center py-3 px-4 text-base font-normal leading-normal gap-2">
                <svg className="w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 133 134"><path fill="currentColor" d="M133 67C96.282 67 66.5 36.994 66.5 0c0 36.994-29.782 67-66.5 67 36.718 0 66.5 30.006 66.5 67 0-36.994 29.782-67 66.5-67"></path></svg>
                {footerContent.storePills.googlePlayLabel}
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:pt-9 items-center lg:flex-row-reverse">
        <div className="my-8 lg:ml-10 flex lg:flex-row-reverse">
          <ul className="list-none flex flex-1 lg:flex-none">
            <li className="flex-1 flex items-center justify-center lg:flex-none lg:mx-2 xl:mx-4">
              <a href={footerContent.socials.x} title="X" target="_blank" className="h-[24px] w-[24px]">
                <img alt="" loading="lazy" width="20" height="21" decoding="async" data-nimg="1" className="h-full w-full" src="/assets/image/upload/v1699620649/x-logo-black.svg" style={{ color: "transparent" }} />
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:flex lg:ml-auto items-baseline ">
          <p className="text-center opacity-60 text-xs">
            {"All rights reserved TokenMingle © 2025"}
          </p>
        </div>
      </div>
    </div>
    </footer>
  );
}
