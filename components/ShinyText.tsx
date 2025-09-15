'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface ShinyTextProps {
  children: React.ReactNode;
  speed?: number;
  disabled?: boolean;
  className?: string;
  shimmerColor?: string;
  textColor?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  children,
  speed = 3,
  disabled = false,
  className = '',
  shimmerColor = 'rgba(255, 255, 255, 0.8)',
  textColor = 'inherit',
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled || !textRef.current || !shimmerRef.current) return;

    const shimmer = shimmerRef.current;
    const textElement = textRef.current;

    // Set up the shimmer animation
    gsap.set(shimmer, {
      x: '-100%',
      opacity: 0,
    });

    // Create the repeating shimmer animation
    const tl = gsap.timeline({ repeat: -1, repeatDelay: speed });
    
    tl.to(shimmer, {
      x: '100%',
      opacity: 1,
      duration: 1.5,
      ease: 'power2.inOut',
    })
    .to(shimmer, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out',
    }, '-=0.3');

    return () => {
      tl.kill();
    };
  }, [speed, disabled]);

  if (disabled) {
    return <span className={className} style={{ color: textColor }}>{children}</span>;
  }

  return (
    <span 
      ref={textRef}
      className={`relative inline-block overflow-hidden ${className}`}
      style={{ color: textColor }}
    >
      {children}
      <div
        ref={shimmerRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${shimmerColor} 50%, transparent 100%)`,
          transform: 'translateX(-100%)',
        }}
      />
    </span>
  );
};

export default ShinyText;