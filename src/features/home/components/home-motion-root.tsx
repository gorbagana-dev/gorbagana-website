"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HomeMotionRoot({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const select = gsap.utils.selector(root);
      const revealItems = select("[data-gsap-reveal]");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(revealItems, {
          autoAlpha: 0,
          y: 12,
          willChange: "transform, opacity",
        });

        ScrollTrigger.batch(revealItems, {
          start: "top 88%",
          once: true,
          batchMax: 6,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.38,
              ease: "power2.out",
              stagger: 0.018,
              overwrite: true,
              onComplete: () => {
                gsap.set(batch, { clearProps: "willChange" });
              },
            });
          },
        });

        const originProgress = select("[data-origin-progress]");

        if (originProgress.length > 0) {
          gsap.fromTo(
            originProgress,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              transformOrigin: "left center",
              scrollTrigger: {
                trigger: root,
                start: "top top",
                end: "max",
                scrub: true,
              },
            },
          );
        }

        requestAnimationFrame(() => ScrollTrigger.refresh(true));
      });

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const heroStage = select("[data-hero-stage]")[0];
          const heroStats = select("[data-hero-stats]");
          const heroCopy = select("[data-hero-copy]");

          if (heroStage && heroStats.length > 0) {
            gsap.to(heroStats, {
              yPercent: -7,
              scale: 0.985,
              ease: "none",
              scrollTrigger: {
                trigger: heroStage,
                start: "top top+=80",
                end: "bottom top",
                scrub: 0.85,
              },
            });
          }

          if (heroStage && heroCopy.length > 0) {
            gsap.to(heroCopy, {
              yPercent: 4,
              autoAlpha: 0.82,
              ease: "none",
              scrollTrigger: {
                trigger: heroStage,
                start: "top top+=80",
                end: "bottom top",
                scrub: 0.85,
              },
            });
          }

          requestAnimationFrame(() => ScrollTrigger.refresh(true));
        },
      );

      return () => {
        mm.revert();
      };
    },
    { scope: rootRef },
  );

  return (
    <main
      ref={rootRef}
      id="main-content"
      className="min-h-dvh overflow-x-hidden bg-[#050505] text-white"
    >
      {children}
    </main>
  );
}
