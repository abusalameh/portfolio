'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ShuffleTextProps {
  text: string;
  className?: string;
  speed?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
  onShuffleComplete?: () => void;
  characters?: string;
}

const ShuffleText: React.FC<ShuffleTextProps> = ({
  text,
  className = '',
  speed = 50,
  triggerOnce = false,
  rootMargin = '0px',
  onShuffleComplete,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasTriggered(true);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        rootMargin,
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [rootMargin, triggerOnce, hasTriggered]);

  useEffect(() => {
    if (!isVisible) {
      setDisplayText('');
      return;
    }

    let currentIndex = 0;
    const targetText = text;
    const shuffleIterations = 10;

    const animate = () => {
      if (currentIndex <= targetText.length) {
        let newText = '';
        
        // Build the text character by character
        for (let i = 0; i < targetText.length; i++) {
          if (i < currentIndex) {
            // Character is finalized
            newText += targetText[i];
          } else if (i === currentIndex) {
            // Current character being shuffled
            if (Math.random() < 0.7) {
              newText += targetText[i];
              currentIndex++;
            } else {
              newText += characters[Math.floor(Math.random() * characters.length)];
            }
          } else {
            // Future characters - show random or space
            newText += Math.random() < 0.3 ? characters[Math.floor(Math.random() * characters.length)] : ' ';
          }
        }
        
        setDisplayText(newText);
        
        if (currentIndex <= targetText.length) {
          animationRef.current = setTimeout(animate, speed);
        } else {
          onShuffleComplete?.();
        }
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [isVisible, text, speed, characters, onShuffleComplete]);

  return (
    <span ref={elementRef} className={`font-mono ${className}`}>
      {displayText || text}
    </span>
  );
};

export default ShuffleText;