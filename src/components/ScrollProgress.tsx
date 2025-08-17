import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = ({ position = "left", height = 5, smoothness = true }) => {
  const { scrollYProgress } = useScroll();
  const [barPosition, setBarPosition] = useState(position);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (position === "left") setBarPosition("0%");
    else if (position === "center") setBarPosition("50%");
    else if (position === "right") setBarPosition("100%");
  }, [position]);

  const barAnimation = smoothness ? { scaleX } : { scaleX: scrollYProgress };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        ...barAnimation,
        height,
        backgroundColor: "#471396",
        originX: barPosition,
      }}
    />
  );
};
