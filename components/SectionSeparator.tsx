'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionSeparatorProps {
  variant?: 'gradient' | 'geometric' | 'waves' | 'dots' | 'mesh';
  className?: string;
}

const SectionSeparator = ({ variant = 'gradient', className = '' }: SectionSeparatorProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const renderSeparator = () => {
    switch (variant) {
      case 'gradient':
        return (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/40 to-pink-50/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        );
      
      case 'geometric':
        return (
          <>
            <motion.div
              className="absolute inset-0 bg-gray-50/20"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 border border-gray-200/40 rotate-45"
                  style={{
                    left: `${(i % 4) * 25 + 10}%`,
                    top: `${Math.floor(i / 4) * 33 + 10}%`,
                  }}
                  initial={{ scale: 0, rotate: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, rotate: 45, opacity: 1 } : { scale: 0, rotate: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                />
              ))}
            </div>
          </>
        );
      
      case 'waves':
        return (
          <>
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-50/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            />
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 100"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <path
                d="M0,50 Q100,20 200,50 T400,50"
                stroke="rgb(59, 130, 246)"
                strokeWidth="1"
                fill="none"
                opacity="0.4"
              />
              <path
                d="M0,60 Q150,30 300,60 T400,60"
                stroke="rgb(147, 51, 234)"
                strokeWidth="1"
                fill="none"
                opacity="0.3"
              />
            </motion.svg>
          </>
        );
      
      case 'dots':
        return (
          <>
            <motion.div
              className="absolute inset-0 bg-gray-50/15"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gray-300/60 rounded-full"
                  style={{
                    left: `${(i % 5) * 20 + 10}%`,
                    top: `${Math.floor(i / 5) * 25 + 20}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
                />
              ))}
            </div>
          </>
        );
      
      case 'mesh':
        return (
          <>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 via-purple-50/30 to-pink-50/20"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <motion.div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgb(99, 102, 241) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, rgb(168, 85, 247) 0%, transparent 50%),
                  radial-gradient(circle at 75% 25%, rgb(236, 72, 153) 0%, transparent 50%)
                `,
                filter: 'blur(40px)'
              }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.15 } : { opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div 
      ref={ref}
      className={`relative w-full h-24 overflow-hidden ${className}`}
    >
      {renderSeparator()}
    </div>
  );
};

export default SectionSeparator;