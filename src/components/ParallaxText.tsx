// @ts-nocheck

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Link } from "react-router-dom";
import { sideBarLeftSocials, liveTickerData } from "../assets/lib/data";

function ParallaxText({ children, baseVelocity = 100 }) {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenuActive(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap m-0">
      <motion.div
        className="font-semibold text-9xl flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        {isMobileMenuActive ? (
          <>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
            <p className="block mr-12 text-black">{children}</p>
          </>
        ) : (
          <>
            {Array.from({ length: 16 }).map((_, idx) => (
              <p key={idx} className="block mr-12 text-black">
                {children}
              </p>
            ))}
          </>
        )}
      </motion.div>
    </div>
  );
}

export default function LiveTicker() {
  return (
    <div className="bg-[--lightblue] h-[4.8vh] -rotate-3 flex justify-center items-center scale-110 relative z-[1] w-full min-[1921px]:h-[3.3vh]">
      <ParallaxText baseVelocity={-2}>
        <Link
          to={sideBarLeftSocials[1].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-[#471396]">&lt;</span>
          <span className="text-[#471396]">{liveTickerData.content.en}</span>
          <span className="text-[#471396]">/&gt;</span>
        </Link>
      </ParallaxText>
    </div>
  );
}
