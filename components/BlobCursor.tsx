'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface BlobCursorProps {
  blobType?: 'circle' | 'square';
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
}

const BlobCursor: React.FC<BlobCursorProps> = ({
  blobType = 'circle',
  fillColor = '#5227FF',
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = 'rgba(255,255,255,0.8)',
  opacities = [0.6, 0.6, 0.6],
  shadowColor = 'rgba(0,0,0,0.75)',
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = 'blob',
  filterStdDeviation = 30,
  filterColorMatrixValues = '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.75 0',
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = 'power3.out',
  slowEase = 'power1.out',
  zIndex = 100,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Clear the timeout if it exists
      const timeoutId = setTimeout(() => setIsMoving(false), 100);
      return () => clearTimeout(timeoutId);
    };

    const handleMouseLeave = () => {
      setIsMoving(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    blobsRef.current.forEach((blob, index) => {
      if (!blob) return;

      const duration = isMoving ? fastDuration : slowDuration;
      const ease = isMoving ? fastEase : slowEase;
      const delay = index * 0.05;

      gsap.to(blob, {
        x: mousePos.x - sizes[index] / 2,
        y: mousePos.y - sizes[index] / 2,
        duration,
        ease,
        delay,
      });
    });
  }, [mousePos, isMoving, sizes, fastDuration, slowDuration, fastEase, slowEase]);

  const createBlob = (index: number) => {
    const size = sizes[index] || sizes[0];
    const innerSize = innerSizes[index] || innerSizes[0];
    const opacity = opacities[index] || opacities[0];

    const blobStyle: React.CSSProperties = {
      position: 'fixed',
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: blobType === 'circle' ? '50%' : '10%',
      backgroundColor: fillColor,
      opacity,
      pointerEvents: 'none',
      zIndex,
      filter: useFilter ? `blur(${filterStdDeviation}px)` : 'none',
      boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowColor}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    const innerBlobStyle: React.CSSProperties = {
      width: `${innerSize}px`,
      height: `${innerSize}px`,
      borderRadius: blobType === 'circle' ? '50%' : '10%',
      backgroundColor: innerColor,
    };

    return (
      <div
        key={index}
        ref={(el) => {
          if (el) blobsRef.current[index] = el;
        }}
        style={blobStyle}
      >
        <div style={innerBlobStyle} />
      </div>
    );
  };

  return (
    <>
      {useFilter && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id={filterId}>
              <feGaussianBlur stdDeviation={filterStdDeviation} />
              <feColorMatrix values={filterColorMatrixValues} />
            </filter>
          </defs>
        </svg>
      )}
      <div ref={cursorRef} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}>
        {Array.from({ length: trailCount }, (_, index) => createBlob(index))}
      </div>
    </>
  );
};

export default BlobCursor;