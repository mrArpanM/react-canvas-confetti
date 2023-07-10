import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactCanvasConfetti from '@/components/ui/confetti';

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  function getAnimationSettings(angle, originX) {
    return {
      particleCount: 1,
      startVelocity: 0,
      ticks: 200,
      gravity: 0.3,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.999 - 0.2
      },
      colors: ["#ffffff"],
      shapes: ["star","circle"],
      scalar: randomInRange(0.4, 1)
    };
  }

export function SnowfallConfettiCanvas({fire}:{fire:boolean}) {
    const refAnimationInstance = useRef(null);
    const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  
    const getInstance = useCallback((instance) => {
      refAnimationInstance.current = instance;
    }, []);
  
    const nextTickAnimation = useCallback(() => {
      if (refAnimationInstance.current) {
        refAnimationInstance.current(getAnimationSettings(60, 0));
        refAnimationInstance.current(getAnimationSettings(120, 1));
      }
    }, []);
  
    const startAnimation = useCallback(() => {
      if (!intervalId) {
        setIntervalId(setInterval(nextTickAnimation, 16));
      }
    }, [nextTickAnimation, intervalId]);
  
    const pauseAnimation = useCallback(() => {
      clearInterval(intervalId);
      setIntervalId(null);
    }, [intervalId]);
  
    const stopAnimation = useCallback(() => {
      clearInterval(intervalId);
      setIntervalId(null);
      refAnimationInstance.current && refAnimationInstance.current.reset();
    }, [intervalId]);
  
    useEffect(() => {
      return () => {
        clearInterval(intervalId);
      };
    }, [intervalId]);

    useEffect(() => {
        if (fire == true){
            startAnimation()
        }
        if (fire == false){
            pauseAnimation()
            // or `stopAnimation()`
        }
    });

  
    return (
      <>
        <ReactCanvasConfetti refConfetti={getInstance} className='fixed top-0 left-0 h-full w-full select-none pointer-events-none' />
      </>
    );
}