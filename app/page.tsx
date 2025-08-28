"use client";

import { ModeToggle } from "@/components/mode-toggle";
import TennisBallNav from "@/components/ball";
import { useState, useEffect } from "react";
import Seit1977 from "@/components/seit1977";
import LogoSpinnerLoader from "@/components/logo_spinner";
import { useTheme } from "next-themes";
import Clubhaus from "@/components/clubhaus";
import Planmaesig from "@/components/planmaesig";
import Socials from "@/components/socials";
import NextGen from "@/components/next-gen";
import WFragen from "@/components/w-fragen";
import PlatzUndDu from "@/components/platz-und-du";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const [activeSection, setActiveSection] = useState(3);
  const [showBallNav, setShowBallNav] = useState(true);
  const [inAnimationPhase, setInAnimationPhase] = useState(true);

  const sectionTitles = [
    "clubhaus.", "aktuelles.", "socials.",
    "seit 1977.", "nextGen.", "du+platz.", "w fragen."
  ];

  useEffect(() => setMounted(true), []);

  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const ballBg = isDark ? "#18181b" : "#fff";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInAnimationPhase(false);
    }, 3700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowBallNav(true);
      } else if (currentScrollY > lastScrollY) {
        setShowBallNav(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  if (!mounted) return null;

  if (showSpinner) {
    return (
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          background: ballBg,
          transition: "background 0.3s",
        }}
        className={isDark ? "dark" : ""}
      >
        <LogoSpinnerLoader logoUrl="/tus_logo.png" />
        <div style={{ visibility: "hidden", height: 0 }}>
          <TennisBallNav
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            sectionTitles={sectionTitles}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: ballBg,
        transition: "background 0.3s",
      }}
      className={isDark ? "dark" : ""}
    >
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {activeSection === 0 && <Clubhaus />}
      {activeSection === 1 && <Planmaesig />}
      {activeSection === 2 && <Socials />}
      {activeSection === 3 && <Seit1977 animate={inAnimationPhase} />}
      {activeSection === 4 && <NextGen />}
      {activeSection === 5 && <PlatzUndDu />}
      {activeSection === 6 && <WFragen />}

      <div style={{ paddingBottom: "calc(20vh + 100px)", position: "relative", zIndex: 1 }} />

      {/* Glass blur effect with increasing blur */}
      {showBallNav && (
        <div
          style={{
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100vw",
            height: "35vh",
            zIndex: 19,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {/* Bottom stronger blur */}
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              mask: "linear-gradient(to top, black, black 55%, transparent 100%)",
              background: isDark
                ? "rgba(24,24,27,0.65)"
                : "rgba(255,255,255,0.65)",
              boxShadow: isDark
                ? "0 -2px 32px 0 rgba(0,0,0,0.12)"
                : "0 -2px 32px 0 rgba(0,0,0,0.04)",
            }}
          />
        </div>
      )}

      {/* Ball nav */}
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100vw",
          zIndex: 20,
          transition: "opacity 0.4s, transform 0.4s",
          opacity: showBallNav && !inAnimationPhase ? 1 : 0,
          transform: showBallNav  && !inAnimationPhase ? "translateY(0)" : "translateY(40px)",
          pointerEvents: showBallNav ? "auto" : "none",
        }}
      >
        <TennisBallNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sectionTitles={sectionTitles}
        />
      </div>
    </div>
  );
}
