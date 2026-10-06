"use client";
import React, { useState } from 'react';
import { navbarContent, TELEGRAM_URL } from '../app/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="navbar" className="fixed z-20 w-full nav-container" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1", visibility: "inherit" }}>
    <div className="navbar flex flex-col items-center py-6 relative z-40 bg-homepage-bg text-homepage-text" data-testid="navbar" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
      <div className="max-w-[1440px] w-full px-[16px] lg:px-[44px] flex items-center h-[40px] justify-between max-lg:flex-row-reverse">
        <a id="mobile-nav-cta" href={TELEGRAM_URL} className="bg-[#E72ABD] text-[#131313] font-medium px-3 py-2 text-[14px] rounded-full lg:hidden" aria-label="Join TokenMingle">
          {navbarContent.mobileCta}
        </a>
        <div className="absolute left-1/2 transform -translate-x-1/2 lg:relative pr-6 lg:left-auto lg:transform-none">
          <a className="flex lg:justify-start items-center" aria-label="Homepage" href="/">
            <span className="nav-logo z-10 font-feeld-edge text-2xl font-extralight tracking-tight text-white">{navbarContent.logoText}</span>
          </a>
        </div>
        <div className="glass-bg p-2 flex justify-start max-lg:w-[56px] max-lg:h-[56px] relative rounded-[12px]">
          <button onClick={() => setIsOpen(!isOpen)} data-testid="toggle_button_open" className="bg-nav-dark w-[40px] h-[40px] bg-no-repeat bg-center lg:hidden" aria-label="Navigation menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 m-auto text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          <nav className={`${isOpen ? 'fixed inset-0 top-[88px] w-full h-[calc(100vh-88px)] bg-[#181424] p-6 z-50 border-t border-[#2B263A] overflow-y-auto' : 'hidden'} lg:block lg:static lg:bg-transparent lg:p-0 lg:border-none lg:w-auto lg:h-auto lg:overflow-visible`}>
            <ul className={`flex ${isOpen ? 'flex-col gap-4' : 'flex-row'}`}>
              {navbarContent.links.map((link, idx) => (
                <li key={idx} className="nav-link px-1 false first-of-type:ml-0 text-l cursor-pointer" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1" }}>
                  <a href={link.href} className="py-2 inline-block rounded-[4px] px-3 hover:text-primary-white hover:bg-black/40">
                    {link.label}
                  </a>
                </li>
              ))}
              <li className={`mx-4 h-[1.5em] w-px self-center bg-white/20 ${isOpen ? 'hidden' : 'block'}`} aria-hidden="true" />
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
