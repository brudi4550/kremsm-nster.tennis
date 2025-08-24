"use client";

import { ModeToggle } from "@/components/mode-toggle";
import TennisBallNav from "../components/ball";
import SpinAlert from "@/components/spin-alert";
import { useState } from "react";
import GeneralInformation from "@/components/general-information";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionTitles = ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6", "Section 7", "Section 8"];

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <SpinAlert />
      {activeSection == 0 && <div>Content for Section 1</div>}
      {activeSection == 1 && <div>Content for Section 2</div>}
      {activeSection == 2 && <div>Content for Section 3</div>}
      {activeSection == 3 && <GeneralInformation />}
      {activeSection == 4 && <>Content for Section 5</>}
      {activeSection == 5 && <div>Content for Section 6</div>}
      {activeSection == 6 && <div>Content for Section 7</div>}
      {activeSection == 7 && <div>Content for Section 8</div>}

      <div
        style={{
          paddingBottom: "calc(20vh + 100px)", // enough space for ball + band + gradient
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Your scrollable content here */}
      </div>

      {/* Gradient overlay (already in ball.tsx) */}
      {/* Solid background behind band and ball */}
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100vw",
          height: "calc(20vh + 40px)", // ball + band
          background: "#fff",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* TennisBall component */}
      <TennisBallNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sectionTitles={sectionTitles}
      />
    </div>
  );
}
