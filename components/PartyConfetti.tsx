import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactCanvasConfetti from '@/components/ui/confetti';
  
  function getAnimationSettings(angle, originX) {
    return {
      particleCount: 3,
      angle,
      spread: 55,
      origin: { x: originX },
      colors: ["#bb0000", "#ffffff"]
    };
  }

export function PartyConfettiCanvas({fire}:{fire:boolean}) {
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