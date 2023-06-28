'use client'
import { motion } from 'framer-motion'

import Image from 'next/image'

import FAQs from '../assets/FAQs'
import { useState, useRef, useEffect } from 'react'

export function FAQ() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth)
  }, [])

  return (
    <section className="flex w-full flex-col items-center justify-center p-16 px-32 font-quick text-gray-50">
      <h3 className="text-5xl">Perguntas frequêntes</h3>
      <motion.div
        ref={carousel}
        className="mt-16 flex w-full cursor-grab overflow-hidden"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex w-full gap-12"
        >
          {FAQs.map((image) => {
            return (
              <motion.div key={image} className="min-w-fit">
                <Image
                  src={image}
                  alt=""
                  className="pointer-events-none w-80"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
