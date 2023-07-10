import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactCanvasConfetti from '@/components/ui/confetti';

function randomInRange(min:number, max: number) {
    return Math.random() * (max - min) + min;
  }

function getAnimationSettings(originXA:number, originXB:number) {
    return {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 150,
      origin: {
        x: randomInRange(originXA, originXB),
        y: Math.random() - 0.2
      }
    };
  }

export function FireworksConfettiCanvas({fire}:{fire:boolean}) {
    const refAnimationInstance = useRef(null);
    const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

    const getInstance = useCallback((instance) => {
      refAnimationInstance.current = instance;
    }, []);

    const nextTickAnimation = useCallback(() => {
        if (refAnimationInstance.current) {
          refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
          refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
        }
      }, []);

    const startAnimation = useCallback(() => {
    if (!intervalId) {
        setIntervalId(setInterval(nextTickAnimation, 400));
    }
    }, [intervalId, nextTickAnimation]);

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