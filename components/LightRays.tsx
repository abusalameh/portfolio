"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LightRaysProps {
  raysOrigin?: 'top-center' | 'top-left' | 'top-right' | 'right' | 'left' | 'bottom-center' | 'bottom-right' | 'bottom-left';
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  pulsating?: boolean;
  fadeDistance?: number;
  saturation?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  className?: string;
}

const LightRays: React.FC<LightRaysProps> = ({
  raysOrigin = 'top-center',
  raysColor,
  raysSpeed = 1,
  lightSpread = 45,
  rayLength = 100,
  pulsating = true,
  fadeDistance = 80,
  saturation = 1,
  followMouse = false,
  mouseInfluence = 0.5,
  noiseAmount = 0.1,
  distortion = 0.05,
  className = '',
}) => {
  const effectiveRaysColor = raysColor || '#3b82f6';
  const containerRef = useRef<HTMLDivElement>(null);
  const raysRef = useRef<HTMLDivElement[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  const rayCount = 12;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rays = raysRef.current;

    // Create timeline for animations
    animationRef.current = gsap.timeline({ repeat: -1 });

    // Animate rays
    rays.forEach((ray, index) => {
      if (ray) {
        const delay = (index / rayCount) * 2;
        const rotation = (360 / rayCount) * index;
        
        gsap.set(ray, {
          rotation: rotation,
          transformOrigin: getOriginPoint(),
        });

        if (pulsating) {
          animationRef.current?.to(ray, {
            opacity: 0.3,
            duration: raysSpeed,
            delay: delay,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: -1,
          });
        }

        // Add rotation animation
        gsap.to(ray, {
          rotation: rotation + 360,
          duration: 20 / raysSpeed,
          ease: 'none',
          repeat: -1,
        });
      }
    });

    // Mouse follow effect
    if (followMouse) {
      const handleMouseMove = (e: MouseEvent) => {
        mousePosition.current = { x: e.clientX, y: e.clientY };
        
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
        
        rays.forEach((ray) => {
          if (ray) {
            gsap.to(ray, {
              rotation: `+=${angle * mouseInfluence}`,
              duration: 0.3,
              ease: 'power2.out',
            });
          }
        });
      };

      document.addEventListener('mousemove', handleMouseMove);
      return () => document.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [raysSpeed, pulsating, followMouse, mouseInfluence, raysOrigin]);

  const getOriginPoint = () => {
    switch (raysOrigin) {
      case 'top-left': return '0% 0%';
      case 'top-center': return '50% 0%';
      case 'top-right': return '100% 0%';
      case 'right': return '100% 50%';
      case 'bottom-right': return '100% 100%';
      case 'bottom-center': return '50% 100%';
      case 'bottom-left': return '0% 100%';
      case 'left': return '0% 50%';
      default: return '50% 0%';
    }
  };

  const getOriginPosition = () => {
    switch (raysOrigin) {
      case 'top-left': return { top: 0, left: 0 };
      case 'top-center': return { top: 0, left: '50%', transform: 'translateX(-50%)' };
      case 'top-right': return { top: 0, right: 0 };
      case 'right': return { top: '50%', right: 0, transform: 'translateY(-50%)' };
      case 'bottom-right': return { bottom: 0, right: 0 };
      case 'bottom-center': return { bottom: 0, left: '50%', transform: 'translateX(-50%)' };
      case 'bottom-left': return { bottom: 0, left: 0 };
      case 'left': return { top: '50%', left: 0, transform: 'translateY(-50%)' };
      default: return { top: 0, left: '50%', transform: 'translateX(-50%)' };
    }
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        filter: `saturate(${saturation}) blur(${distortion}px)`,
      }}
    >
      <div
        className="absolute"
        style={getOriginPosition()}
      >
        {Array.from({ length: rayCount }).map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) raysRef.current[index] = el;
            }}
            className="absolute"
            style={{
              width: '2px',
              height: `${rayLength}vh`,
              background: `linear-gradient(to bottom, ${effectiveRaysColor}, transparent)`,
              opacity: 0.6,
              filter: `blur(${noiseAmount}px)`,
            }}
          />
        ))}
      </div>
      
      {/* Radial gradient overlay for fade effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${getOriginPoint()}, transparent 0%, rgba(0,0,0,${1 - fadeDistance / 100}) 70%)`,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default LightRays;