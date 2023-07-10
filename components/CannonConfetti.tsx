import React, { useCallback, useRef } from 'react'
import ReactCanvasConfetti from '@/components/ui/confetti';

export default function CannonConfettiCanvas({fire}:{fire:boolean}) {
    const refAnimationInstance = useRef(null);

    const getInstance = useCallback((instance) => {
      refAnimationInstance.current = instance;
    }, []);
  
    const makeShot = useCallback((particleRatio, opts) => {
      refAnimationInstance.current &&
        refAnimationInstance?.current({
          ...opts,
          origin: { y: 0.8 },
          particleCount: Math.floor(200 * particleRatio)
        });
    }, []);
  
    const burst = useCallback(() => {
      makeShot(0.25, {
        spread: 26,
        startVelocity: 55
      });
  
      makeShot(0.2, {
        spread: 60
      });
  
      makeShot(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
  
      makeShot(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
  
      makeShot(0.1, {
        spread: 120,
        startVelocity: 45
      });
    }, [makeShot]);

    // Call the `fire()` function to render confetti
    // Example: Adding side effects to changing the state of `fire`

    if(fire == true){
      burst()
    }
  
    return (
      <>
        <ReactCanvasConfetti refConfetti={getInstance} className='fixed top-0 left-0 h-full w-full select-none pointer-events-none' />
      </>
    );
}

