"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/app/context/ThemeContext"; // Importa el contexto de tema

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted
  const { theme } = useTheme(); // Obtén el tema actual (dark o light)

  useEffect(() => {
    setIsMounted(true); // Mark the component as mounted
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setProgress(v * 100);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Define las paletas de colores para los temas
  const gradientColors =
    theme === "dark"
      ? `linear-gradient(180deg, #18CCFC, #6344F5, #AE48FF)` // Paleta para modo oscuro
      : `linear-gradient(180deg, #A0E9FF, #B4A5FF, #FFD6FF)`; // Paleta para modo claro

  if (!isMounted) {
    // Avoid rendering the motion.div until the component is mounted
    return null;
  }

  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 h-32 w-0.5 bg-gray-300 rounded-full overflow-hidden">
      <motion.div
        className="w-full"
        style={{
          height: `${progress}%`,
          backgroundImage: gradientColors, // Usa backgroundImage en lugar de background
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 50%", // Define explícitamente la posición inicial
          animation: "gradient-animation 3s ease infinite",
        }}
      />
      <style jsx>{`
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollProgress;