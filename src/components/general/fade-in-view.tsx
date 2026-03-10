"use client";

import { motion } from "framer-motion";

type FadeInViewProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
  amount?: number;
};

const FadeInView = ({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
  amount = 0.2,
}: FadeInViewProps) => {
  const directionOffset = {
    up: 40,
    down: -40,
    left: 40,
    right: -40,
  };

  const x = direction === "left" ? -directionOffset.left : direction === "right" ? directionOffset.right : 0;
  const y = direction === "up" ? directionOffset.up : direction === "down" ? -directionOffset.down : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;
