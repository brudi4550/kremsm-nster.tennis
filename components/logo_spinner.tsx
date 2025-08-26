import React, { useEffect, useState } from "react";

export default function LogoSpinnerLoader({
  logoUrl,
  size = 200, // px
  onFadeOut,
  className = "w-full h-screen",
}: {
  logoUrl: string;
  size?: number;
  onFadeOut?: () => void;
  className?: string;
}) {
  const [fade, setFade] = useState(false);
  const [hide, setHide] = useState(false);
  const [spinning, setSpinning] = useState(true);
  const [rotation, setRotation] = useState(0);

  // Spin for 3 turns, then slow down and fade out
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 3000; // ms for 3 turns
    const haltDuration = 1200; // ms to slow down
    const totalDuration = duration + haltDuration;
    const initialSpeed = (3 * 360) / duration; // deg/ms for 3 turns in duration
    const slowSpeed = 30 / haltDuration; // deg/ms for slow end

    function animate(ts: number) {
      if (start === null) start = ts;
      const elapsed = ts - start;

      let deg = 0;
      if (elapsed < duration) {
        deg = elapsed * initialSpeed;
      } else if (elapsed < totalDuration) {
        const t = (elapsed - duration) / haltDuration;
        const speed = initialSpeed * (1 - t) + slowSpeed * t;
        deg = duration * initialSpeed + (elapsed - duration) * speed;
      } else {
        deg = duration * initialSpeed + haltDuration * slowSpeed;
        setSpinning(false);
        setFade(true);
        setTimeout(() => {
          setHide(true);
          if (onFadeOut) onFadeOut();
        }, 700);
        return;
      }
      setRotation(deg);
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line
  }, []);

  if (hide) return null;

  return (
    <div
      className={className}
      style={{
        transition: "opacity 0.7s",
        opacity: fade ? 0 : 1,
        pointerEvents: "none",
        background: "#fff",
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={logoUrl}
        alt="Logo"
        style={{
          width: size,
          height: size,
          objectFit: "contain",
          display: "block",
          transform: `rotateY(${rotation}deg)`,
          transition: spinning
            ? "none"
            : "transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)",
          willChange: "transform",
          filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.10))",
        }}
      />
    </div>
  );
}