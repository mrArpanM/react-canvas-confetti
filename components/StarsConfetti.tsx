import React, { useCallback, useEffect, useRef, useState } from 'react'
import ReactCanvasConfetti from '@/components/ui/confetti';

export function StarsConfettiCanvas({fire}:{fire:boolean}) {
    const refAnimationInstance = useRef(null);
  
    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
      }, []);

      const makeShot = useCallback((particleRatio, opts) => {
        refAnimationInstance.current &&
          refAnimationInstance?.current({
            ...opts,
            origin: { y: 0.5 },
            particleCount: Math.floor(200 * particleRatio)
          });
      }, []);

      const shoot = useCallback(() => {
        makeShot(0.25, {
          spread: 360,
          ticks: 50,
          gravity: 0,
          decay: 0.94,
          startVelocity: 30,
          shapes: ['star'],
          colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
          particleCount: 40,
          scalar: 1.2
        });
    
        makeShot(0.2, {
          spread: 360,
          ticks: 50,
          gravity: 0,
          decay: 0.94,
          startVelocity: 30,
          colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
          particleCount: 10,
          scalar: 0.75,
          shapes: ['circle']
        });
      }, [makeShot]);

      if(fire == true){
        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
      }
  
    return (
      <>
        <ReactCanvasConfetti refConfetti={getInstance} className='fixed top-0 left-0 h-full w-full select-none pointer-events-none' />
      </>
    );
}