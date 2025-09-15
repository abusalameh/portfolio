"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface SplashCursorProps {
  color?: string;
  size?: number;
  splashCount?: number;
  splashSize?: number;
  animationDuration?: number;
  className?: string;
}

const SplashCursor: React.FC<SplashCursorProps> = ({
  color = '#3b82f6',
  size = 20,
  splashCount = 8,
  splashSize = 4,
  animationDuration = 0.6,
  className = '',
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const splashesRef = useRef<HTMLDivElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      createSplash();
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: mousePosition.x - size / 2,
        y: mousePosition.y - size / 2,
        duration: 0.1,
        ease: 'power2.out',
      });
    }
  }, [mousePosition, size]);

  const createSplash = () => {
    splashesRef.current.forEach((splash, index) => {
      if (splash) {
        const angle = (360 / splashCount) * index;
        const distance = 30 + Math.random() * 20;
        const x = Math.cos((angle * Math.PI) / 180) * distance;
        const y = Math.sin((angle * Math.PI) / 180) * distance;

        gsap.set(splash, {
          x: mousePosition.x - splashSize / 2,
          y: mousePosition.y - splashSize / 2,
          scale: 0,
          opacity: 1,
        });

        gsap.to(splash, {
          x: mousePosition.x - splashSize / 2 + x,
          y: mousePosition.y - splashSize / 2 + y,
          scale: 1,
          opacity: 0,
          duration: animationDuration,
          ease: 'power2.out',
        });
      }
    });
  };

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 ${className}`}>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="absolute rounded-full transition-transform duration-100"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          transform: isClicking ? 'scale(0.8)' : 'scale(1)',
          opacity: 0.8,
        }}
      />
      
      {/* Splash particles */}
      {Array.from({ length: splashCount }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) splashesRef.current[index] = el;
          }}
          className="absolute rounded-full"
          style={{
            width: splashSize,
            height: splashSize,
            backgroundColor: color,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
};

export default SplashCursor;