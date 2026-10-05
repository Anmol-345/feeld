import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import AnimatedLogoFooter from '../components/AnimatedLogoFooter';
import BodyExtras from '../components/BodyExtras';
import Head from 'next/head';
import { useEffect } from 'react';
import { ldJson } from '../lib/inlineScripts';

export default function Home() {
  useEffect(() => {
    const targets = document.querySelectorAll('section, h1, h2, h3, li, article, .safetyAsset, .assetContainer, [class*="safetyContentContainer"] > *');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('anim-up');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((t, idx) => {
      t.style.animationDelay = (idx % 6) * 90 + 'ms';
      obs.observe(t);
    });
    document.querySelectorAll('video').forEach(v => {
      v.muted = true;
      v.setAttribute('playsinline', '');
      v.play().catch(() => {});
    });
  }, []);

  return (
    <>
      <Head>
        <title>Feeld: The Dating App for Open-Minded Individuals</title>
      </Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson }} />
      <Navbar />
      <MainContent />
      <Footer />
      <AnimatedLogoFooter />
      <BodyExtras />
    </>
  );
}
