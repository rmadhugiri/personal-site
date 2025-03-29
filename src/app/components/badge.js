"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import ProfileTile from "./profile-tile";

export default function Badge() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rotateZ = useMotionValue(0);

  const smoothX = useSpring(rotateX, { stiffness: 20, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 20, damping: 20 });
  const smoothZ = useSpring(rotateZ, { stiffness: 20, damping: 20 });

  const [hasWaved, setHasWaved] = useState(false);

  useEffect(() => {
    const waveTimeout = setTimeout(() => {
      rotateZ.set(15);
      setTimeout(() => rotateZ.set(-15), 150);
      setTimeout(() => rotateZ.set(10), 300);
      setTimeout(() => rotateZ.set(-8), 450);
      setTimeout(() => rotateZ.set(5), 600);
      setTimeout(() => rotateZ.set(0), 750);
      setHasWaved(true);
    }, 1800);

    return () => clearTimeout(waveTimeout);
  }, [rotateZ]);

  useEffect(() => {
    if (!hasWaved) return;

    const interval = setInterval(() => {
      const randomX = (Math.random() - 0.5) * 6;
      const randomY = (Math.random() - 0.5) * 6;
      const randomZ = (Math.random() - 0.5) * 4;

      rotateX.set(randomX);
      rotateY.set(randomY);
      rotateZ.set(randomZ);
    }, 4000);

    return () => clearInterval(interval);
  }, [hasWaved, rotateX, rotateY, rotateZ]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -80,
        rotateX: -35,
        rotateZ: -10,
        scale: 0.92,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        rotateZ: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.6,
        delay: 0.2,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className="lanyard-wrapper"
    >
      <motion.div
        style={{
          rotateX: smoothX,
          rotateY: smoothY,
          rotateZ: smoothZ,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="lanyard-strap" />
        <div className="lanyard-latch" />
        <div className="lanyard-connector" />
        <div className="lanyard-cutout" />
        <div className="badge-card">
          <div className="badge-inner-box">
            <ProfileTile />
            {/* Add more content here if needed, it will stack below the ProfileTile */}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}