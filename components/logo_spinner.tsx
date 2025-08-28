"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function LogoSpinnerLoader({
  logoUrl,
  size = 200,
  className = "w-full h-screen",
}: {
  logoUrl: string;
  size?: number;
  className?: string;
}) {
  const [fade, setFade] = useState(false);
  const [spinning, setSpinning] = useState(true);
  const [rotation, setRotation] = useState(0);

  // Spin animation (client only)
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 3000;
    const haltDuration = 1200;
    const totalDuration = duration + haltDuration;
    const initialSpeed = (3 * 360) / duration;
    const slowSpeed = 30 / haltDuration;

    function animate(ts: number) {
      if (start === null) start = ts;
      const elapsed = ts - start;

      let deg = 0;
      if (elapsed < duration) deg = elapsed * initialSpeed;
      else if (elapsed < totalDuration) {
        const t = (elapsed - duration) / haltDuration;
        const speed = initialSpeed * (1 - t) + slowSpeed * t;
        deg = duration * initialSpeed + (elapsed - duration) * speed;
      } else {
        deg = duration * initialSpeed + haltDuration * slowSpeed;
        setSpinning(false);
        setFade(true);
        return;
      }
      setRotation(deg);
      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={className}
      style={{
        transition: "opacity 0.7s, background 0.3s",
        opacity: fade ? 0 : 1,
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        width={size / 2}
        height={size / 2}
        src={logoUrl}
        alt="Logo"
        style={{
          objectFit: "contain",
          display: "block",
          transform: `rotateY(${rotation}deg)`,
          transition: spinning
            ? "none"
            : "transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
