import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface LoaderProps {
  children?: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ children }) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const circle = circleRef.current;
    const container = containerRef.current;
    if (!circle || !container) return;

    const circumference = 2 * Math.PI * 54; // 2πr
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference * 0.25}`; // 25% gap

    // Spin animation
    gsap.to(circle, {
      rotation: 360,
      transformOrigin: "50% 50%",
      repeat: -1,
      duration: 2,
      ease: "linear",
    });

    // After 3s, expand the loader container
    const timer = setTimeout(() => {
      gsap.to(container, {
        scale: 10,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => setLoading(false),
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50 overflow-visible">
          <div
            ref={containerRef}
            className="relative flex justify-center items-center w-32 h-32"
          >
            {/* Circle Loader */}
            <svg width="120" height="120" viewBox="0 0 120 120" className="absolute">
              <circle
                ref={circleRef}
                cx="60"
                cy="60"
                r="54"
                stroke="#A855F7"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Center Text */}
            <div className="text-white text-4xl font-bold z-10">GR</div>
          </div>
        </div>
      )}

      {/* Page content */}
      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default Loader;
