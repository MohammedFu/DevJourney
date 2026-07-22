import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  targetValue: string;
  duration?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  targetValue,
  duration = 2000,
}) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  // Extract prefix, numeric part, and suffix
  // Examples: "12+" -> num=12, suffix="+" | "99.9%" -> num=99.9, suffix="%" | "1.5k+" -> num=1.5, suffix="k+"
  const match = targetValue.match(/^([^\d]*)([\d.]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const numericValue = match ? parseFloat(match[2]) : 0;
  const suffix = match ? match[3] : '';
  const isFloat = match ? match[2].includes('.') : false;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentNumber = numericValue * easeProgress;

      const formattedNumber = isFloat
        ? currentNumber.toFixed(1)
        : Math.floor(currentNumber).toString();

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasAnimated, numericValue, duration, prefix, suffix, isFloat]);

  return <span ref={elementRef}>{displayValue}</span>;
};
