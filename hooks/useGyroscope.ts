// hooks/useGyroscope.ts
import { useState, useEffect } from "react";
import { MotionValue } from "framer-motion";

export function useGyroscope(mouseX: MotionValue<number>, mouseY: MotionValue<number>) {
  const [showGyroButton, setShowGyroButton] = useState(false);

  useEffect(() => {
    if (
      typeof window !== 'undefined' && 
      typeof (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission === 'function'
    ) {
      setShowGyroButton(true);
    }

    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { beta, gamma } = event;
      if (beta === null || gamma === null) return;

      const maxGamma = 30;
      const clampedGamma = Math.max(-maxGamma, Math.min(maxGamma, gamma));
      const mappedX = ((clampedGamma + maxGamma) / (maxGamma * 2)) * window.innerWidth;

      const minBeta = 20;
      const maxBeta = 70;
      const clampedBeta = Math.max(minBeta, Math.min(maxBeta, beta));
      const mappedY = ((clampedBeta - minBeta) / (maxBeta - minBeta)) * window.innerHeight;

      mouseX.set(mappedX);
      mouseY.set(mappedY);
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [mouseX, mouseY]);

  const requestGyroPermission = async () => {
    try {
      const permission = await (DeviceOrientationEvent as unknown as { requestPermission: () => Promise<string> }).requestPermission();
      if (permission === 'granted') {
        setShowGyroButton(false);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Gyro Permission Error:", error);
      return false;
    }
  };

  return { showGyroButton, requestGyroPermission };
}