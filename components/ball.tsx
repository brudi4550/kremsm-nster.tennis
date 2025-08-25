"use client";

import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { OrbitControls as ThreeOrbitControls } from "three-stdlib";
import * as THREE from "three";

// TennisBallModel now only takes url as prop
function TennisBallModel({ url, ...props }: { url: string } & React.ComponentProps<"group">) {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!ref.current) return;
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
    ref.current.add(scene);
  }, [scene]);

  return <group ref={ref} {...props} />;
}

export default function TennisBall({
  activeSection,
  setActiveSection,
  sectionTitles
}: {
  activeSection: number;
  setActiveSection: (idx: number) => void;
  sectionTitles: string[];
}) {
  const controlsRef = useRef<ThreeOrbitControls>(null);
  const lastAngleRef = useRef<number | null>(null);
  const accumulatedRef = useRef<number>(0);
  const { active: loading } = useProgress();
  const [snap, setSnap] = useState(false);

  // Only switch section when user spins the ball a full 360° (2π radians)
  const handleControlsChange = () => {
    if (!controlsRef.current) return;
    const angle = controlsRef.current.getAzimuthalAngle(); // -PI to PI

    if (lastAngleRef.current === null) {
      lastAngleRef.current = angle;
      return;
    }

    // Calculate delta, handling wrap-around
    let delta = angle - lastAngleRef.current;
    if (delta > Math.PI) delta -= 2 * Math.PI;
    if (delta < -Math.PI) delta += 2 * Math.PI;

    accumulatedRef.current += delta;
    lastAngleRef.current = angle;

    // If user spun right (positive) a full turn
    if (accumulatedRef.current >= Math.PI) {
      setActiveSection((activeSection + 1) % sectionTitles.length);
      accumulatedRef.current = 0;
      setSnap(true);
    }
    // If user spun left (negative) a full turn
    if (accumulatedRef.current <= -Math.PI) {
      setActiveSection((activeSection - 1 + sectionTitles.length) % sectionTitles.length);
      accumulatedRef.current = 0;
      setSnap(true);
    }
  };

  // Reset tracking when autorotate is active so it doesn't affect section switching
  useEffect(() => {
    if (!controlsRef.current) return;
    controlsRef.current.addEventListener("start", () => {
      lastAngleRef.current = null;
      accumulatedRef.current = 0;
    });
  }, []);

  // Remove snap effect after animation
  useEffect(() => {
    if (snap) {
      const timer = setTimeout(() => setSnap(false), 300);
      return () => clearTimeout(timer);
    }
  }, [snap]);


  const sectionWidth = 175;
  const containerWidth = sectionWidth * sectionTitles.length;

  const perSectionMiddleOfBand = sectionWidth / 2;
  const bandOffset = `calc(${(containerWidth / 2 - perSectionMiddleOfBand) - activeSection * sectionWidth}px)`;

  // Make section clickable for desktop users
  const handleSectionClick = (idx: number) => {
    setActiveSection(idx);
    setSnap(true);
    if (controlsRef.current) {
      controlsRef.current.setAzimuthalAngle(
        ((idx + 0.15) * (2 * Math.PI)) / sectionTitles.length
      );
    }
    accumulatedRef.current = 0;
    lastAngleRef.current = null;
  };

  return (
    <div>
      {/* Band of sections above the ball */}
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: "20vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 20,
          pointerEvents: "none",
          height: "40px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            transition: snap
              ? "transform 0.3s cubic-bezier(.68,-0.55,.27,1.55)"
              : "transform 0.3s",
            transform: `translateX(${bandOffset})`,
          }}
        >
          {sectionTitles.map((title, idx) => (
            <span
              key={title}
              onClick={() => handleSectionClick(idx)}
              style={{
                fontSize: "2rem",
                fontWeight: idx === activeSection ? "bold" : "normal",
                color: idx === activeSection ? "#222" : "#aaa",
                opacity: idx === activeSection ? 1 : 0.6,
                textShadow:
                  idx === activeSection ? "0 2px 8px rgba(0,0,0,0.12)" : "none",
                transition: "all 0.2s",
                width: `${sectionWidth}px`,
                textAlign: "center",
                pointerEvents: "auto", // allow clicking
                userSelect: "none",
                cursor: "pointer",
              }}
            >
              {title}
            </span>
          ))}
        </div>
      </div>

      {/* Ball at the bottom */}
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100vw",
          height: "20vh",
          zIndex: 10,
        }}
      >
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 5, 5]} intensity={1.2} />
          <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            target={[0, 0, 0]}
            enableDamping
            dampingFactor={0.05}
            //autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            rotateSpeed={0.5}
            onChange={handleControlsChange}
          />
          <Suspense fallback={null}>
            <TennisBallModel url={"./tennis_ball/ball.glb"} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
