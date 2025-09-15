'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface GlareHoverProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
}

const GlareHover: React.FC<GlareHoverProps> = ({
  children,
  width = '100%',
  height = '100%',
  background = 'transparent',
  borderRadius = '8px',
  borderColor = '#e5e7eb',
  glareColor = '#ffffff',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const glare = glareRef.current;

    if (!container || !glare) return;

    const handleMouseEnter = (e: MouseEvent) => {
      if (playOnce && hasPlayed) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Position the glare effect
      gsap.set(glare, {
        x: x - glareSize / 2,
        y: y - glareSize / 2,
        opacity: 0,
        scale: 0.5,
      });

      // Animate the glare effect
      gsap.to(glare, {
        opacity: glareOpacity,
        scale: 1,
        duration: transitionDuration / 1000 / 2,
        ease: 'power2.out',
      });

      gsap.to(glare, {
        opacity: 0,
        scale: 1.5,
        duration: transitionDuration / 1000 / 2,
        delay: transitionDuration / 1000 / 2,
        ease: 'power2.in',
        onComplete: () => {
          if (playOnce) setHasPlayed(true);
        },
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (playOnce && hasPlayed) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update glare position smoothly
      gsap.to(glare, {
        x: x - glareSize / 2,
        y: y - glareSize / 2,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(glare, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [glareOpacity, glareSize, transitionDuration, playOnce, hasPlayed]);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width,
    height,
    background,
    borderRadius,
    border: `1px solid ${borderColor}`,
    overflow: 'hidden',
    cursor: 'pointer',
  };

  const glareStyle: React.CSSProperties = {
    position: 'absolute',
    width: `${glareSize}px`,
    height: `${glareSize}px`,
    background: `radial-gradient(circle, ${glareColor} 0%, transparent 70%)`,
    borderRadius: '50%',
    pointerEvents: 'none',
    opacity: 0,
    transform: `rotate(${glareAngle}deg)`,
    zIndex: 10,
  };

  return (
    <div ref={containerRef} style={containerStyle} className={className}>
      <div ref={glareRef} style={glareStyle} />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
};

export default GlareHover;