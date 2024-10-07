'use client'
import { motion } from "framer-motion";


export default function RunningLine() {

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
    <div className="sticky  top-0 z-50 h-12 bg-[#121212] max-w-screen overflow-hidden flex">
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