'use client'
import { motion } from 'framer-motion'

import Image from 'next/image'

import FAQs from '../data/FAQ'
import { useState, useRef, useEffect } from 'react'

export function FAQ() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth)
  }, [])

  return (
    // flex w-full flex-col items-center justify-center gap-6 p-2 px-4 font-quick text-gray-50 md:px-32 lg:gap-12 lg:p-16
    <section className="flex w-full flex-col items-center justify-center gap-6 p-2 font-quick text-gray-50 lg:gap-12 lg:p-16 lg:px-16">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl">Perguntas frequêntes</h3>
      <motion.div
        ref={carousel}
        className="flex w-full cursor-grab overflow-hidden"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex w-full gap-6 lg:gap-12"
        >
          {FAQs.map((image) => {
            return (
              <motion.div key={image} className="min-w-fit">
                <Image
                  src={image}
                  alt=""
                  className="pointer-events-none w-44 md:w-52 lg:w-64 xl:w-72"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
