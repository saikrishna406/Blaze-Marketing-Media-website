import React, { useEffect, useState } from 'react';
export function FloatingCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, input, select, textarea') !== null;
      setIsPointer(isClickable);
    };
    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', mouseOver);
    document.addEventListener('mouseenter', mouseEnter);
    document.addEventListener('mouseleave', mouseLeave);
    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', mouseOver);
      document.removeEventListener('mouseenter', mouseEnter);
      document.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);
  if (!isVisible) return null;
  return <>
      <div className="fixed pointer-events-none z-50 transition-transform duration-100 mix-blend-difference" style={{
      left: position.x,
      top: position.y,
      transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`
    }}>
        <div className={`h-4 w-4 rounded-full bg-white opacity-50 ${isPointer ? 'animate-ping' : ''}`} />
      </div>
      <div className="fixed pointer-events-none z-50 mix-blend-difference" style={{
      left: position.x,
      top: position.y,
      transform: 'translate(-50%, -50%)'
    }}>
        <div className="h-1 w-1 rounded-full bg-white" />
      </div>
    </>;
}