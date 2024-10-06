'use client';
import { motion } from "framer-motion";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function RunningLine() {
  const lineRef = useRef()

  useGSAP(() => {
     gsap.fromTo(lineRef.current, {yPercent: -200, opacity: 0}, {yPercent: 0, opacity: 1, duration: 1});
   });

  const runningText = [
    'Безкоштовна доставка від 2500 UAH',
    'Безкоштовна доставка від 2500 UAH',
    'Безкоштовна доставка від 2500 UAH',
    'Безкоштовна доставка від 2500 UAH',
    'Безкоштовна доставка від 2500 UAH',
    'Безкоштовна доставка від 2500 UAH',
    'Безкоштовна доставка від 2500 UAH',
  ]


  return (
    <div ref={lineRef} className="sticky  top-0 z-50 h-12 bg-[#121212] max-w-screen overflow-hidden flex">
      <motion.div
        animate={{ x: ['2%', '-48%'] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="flex gap-5 text-nowrap whitespace-nowrap items-center">
        {runningText.map((item, index) => (
          <p key={index} className="font-mont text-[#FDFDFD] font-medium text-base text-nowrap">
            {item}
          </p>
        ))}
      </motion.div>
    </div>
  )
}