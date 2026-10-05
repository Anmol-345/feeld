'use client';

import { useEffect } from 'react';

export default function AnimationInit() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      'section, h1, h2, h3, li, article, .safetyAsset, .assetContainer, [class*="safetyContentContainer"] > *'
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('anim-up');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((t, idx) => {
      t.style.animationDelay = (idx % 6) * 90 + 'ms';
      obs.observe(t);
    });

    document.querySelectorAll('video').forEach((v) => {
      v.muted = true;
      v.setAttribute('playsinline', '');
      v.play().catch(() => {});
    });

    return () => obs.disconnect();
  }, []);

  return null;
}
