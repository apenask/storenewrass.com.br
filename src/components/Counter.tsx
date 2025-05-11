import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
  icon: React.ReactNode;
}

const Counter: React.FC<CounterProps> = ({ 
  end, 
  duration = 2000, 
  label, 
  icon 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  
  // Format number with commas (e.g., 1,234,567)
  const formatNumber = (num: number): string => {
    return num.toLocaleString('pt-BR');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    // If end is 0, don't animate
    if (end === 0) return;

    // Calculate increment per frame
    const frames = 60;
    const increment = end / (duration / 1000 * frames);
    let currentCount = 0;
    
    // Start animation
    const interval = setInterval(() => {
      currentCount += increment;
      
      if (currentCount >= end) {
        // Instead of stopping, start over from the beginning
        currentCount = 0;
        // Continue the animation
        setCount(Math.floor(currentCount));
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 1000 / frames);
    
    return () => {
      clearInterval(interval);
    };
  }, [end, duration, isVisible]);

  return (
    <div className="counter-container" ref={counterRef}>
      <div className="counter-icon">{icon}</div>
      <div className="counter-content">
        <div className="counter-number">{formatNumber(count)}+</div>
        <div className="counter-label">{label}</div>
      </div>
    </div>
  );
};

export default Counter;