"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { useProgress } from "@react-three/drei";
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
  const { loaded } = useProgress();
  const [showSpinner, setShowSpinner] = useState(true);
  const [activeSection, setActiveSection] = useState(2);
  const [showBallNav, setShowBallNav] = useState(true);
  const sectionTitles = [
    "clubhaus.", "aktuelles.", "seit 1977.",
    "socials.", "nextGen.", "du+platz.", "w fragen."
  ];

  // Theme logic
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const ballBg = isDark ? "#18181b" : "#fff";

  // Spinner logic
  useEffect(() => {
    const timer = setTimeout(() => setShowSpinner(false), 4000);
    return () => clearTimeout(timer);
  }, [loaded]);

  // Hide TennisBallNav on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY + 10) {
            setShowBallNav(false);
          } else if (window.scrollY < lastScrollY - 10) {
            setShowBallNav(true);
          }
          lastScrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (showSpinner || !loaded) {
    return (
      <>
        <LogoSpinnerLoader logoUrl="/tus_logo.png" />
        <div style={{ visibility: "hidden", height: 0 }}>
          <TennisBallNav
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            sectionTitles={sectionTitles}
          />
        </div>
      </>
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
      {activeSection == 0 && <Clubhaus />}
      {activeSection == 1 && <Planmaesig />}
      {activeSection == 2 && <Seit1977 />}
      {activeSection == 3 && <Socials />}
      {activeSection == 4 && <NextGen />}
      {activeSection == 5 && <PlatzUndDu />}
      {activeSection == 6 && <WFragen />}

      <div
        style={{
          paddingBottom: "calc(20vh + 100px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Your scrollable content here */}
      </div>

      {/* Only show the background when the ball nav is visible */}
      {showBallNav && (
        <div
          style={{
            position: "fixed",
            left: 0,
            bottom: 0,
            width: "100vw",
            height: "calc(20vh + 40px)",
            background: ballBg,
            zIndex: 10,
            pointerEvents: "none",
            transition: "background 0.3s",
          }}
        />
      )}

      {/* Gradient at the top of the ball nav */}
      {showBallNav && (
        <div
          style={{
            position: "fixed",
            left: 0,
            bottom: "calc(20vh + 40px)", // 24px tall gradient
            width: "100vw",
            height: "40px",
            zIndex: 21,
            pointerEvents: "none",
            background: isDark
              ? "linear-gradient(to top, #18181b 0%, rgba(24,24,27,0) 100%)"
              : "linear-gradient(to top, #fff 0%, rgba(255,255,255,0) 100%)",
            transition: "background 0.3s",
          }}
        />
      )}

      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100vw",
          zIndex: 20,
          transition: "opacity 0.4s, transform 0.4s",
          opacity: showBallNav ? 1 : 0,
          transform: showBallNav
            ? "translateY(0)"
            : "translateY(40px)",
          pointerEvents: showBallNav ? "auto" : "none",
        }}
      >
        <TennisBallNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sectionTitles={sectionTitles}
          isDark={isDark}
        />
      </div>
    </div>
  );
}
