'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface ParticlesProps {
  count?: number;
  className?: string;
  color?: string;
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
}

const Particles = ({
  count = 50,
  className = '',
  color = 'rgba(59, 130, 246, 0.1)', // blue-500 with low opacity
  minSize = 2,
  maxSize = 6,
  minDuration = 10,
  maxDuration = 20
}: ParticlesProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const checkMotionPreference = () => {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };

    updateDimensions();
    checkMobile();
    checkMotionPreference();
    
    const handleResize = () => {
      updateDimensions();
      checkMobile();
    };
    
    window.addEventListener('resize', handleResize);
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionMediaQuery.addEventListener('change', checkMotionPreference);

    return () => {
      window.removeEventListener('resize', handleResize);
      motionMediaQuery.removeEventListener('change', checkMotionPreference);
    };
  }, []);

  // Reduce particle count on mobile and for reduced motion preference
  const responsiveCount = useMemo(() => {
    if (prefersReducedMotion) return 0;
    return isMobile ? Math.floor(count * 0.5) : count;
  }, [count, isMobile, prefersReducedMotion]);

  // Don't render particles if user prefers reduced motion
  if (prefersReducedMotion) return null;

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const generateParticles = (): Particle[] => {
      return Array.from({ length: responsiveCount }, (_, i) => ({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * (maxDuration - minDuration) + minDuration,
        delay: Math.random() * 5
      }));
    };

    setParticles(generateParticles());
  }, [responsiveCount, dimensions, minSize, maxSize, minDuration, maxDuration]);

  if (particles.length === 0) return null;

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: color,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity
          }}
          initial={{
            x: particle.x,
            y: particle.y
          }}
          animate={{
            x: [particle.x, particle.x + (Math.random() - 0.5) * 200],
            y: [particle.y, particle.y - 100 - Math.random() * 200],
            opacity: [particle.opacity, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
};

export default Particles;