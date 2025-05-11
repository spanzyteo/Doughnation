'use client'

import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-parallax'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const animationVariants = [
  {
    initial: { scale: 1.2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  },
  {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: '0%', opacity: 1 },
    exit: { x: '100%', opacity: 0 },
  },
  {
    initial: { rotate: -10, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 10, opacity: 0 },
  },
  {
    initial: { scale: 1.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: '0%', opacity: 1 },
    exit: { y: '100%', opacity: 0 },
  },
  {
    initial: { filter: 'blur(10px)', opacity: 0 },
    animate: { filter: 'blur(0px)', opacity: 1 },
    exit: { filter: 'blur(10px)', opacity: 0 },
  },
  {
    initial: { skewX: '-10deg', opacity: 0 },
    animate: { skewX: '0deg', opacity: 1 },
    exit: { skewX: '10deg', opacity: 0 },
  },
  {
    initial: { rotateY: 180, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    exit: { rotateY: -180, opacity: 0 },
  },
  {
    initial: { scaleX: 0, opacity: 0 },
    animate: { scaleX: 1, opacity: 1 },
    exit: { scaleX: 0, opacity: 0 },
  },
]

const Banner = () => {
  const slides = [
    {
      src: '/slide-1.webp',
      text: 'Raising money has never been so easy',
      text1: 'Crowdfunding Projects',
      text2: 'Start A Project',
    },
    {
      src: '/slide-2.avif',
      text: 'Raising money has never been so easy',
      text1: 'We help surface innovations in tech',
      text2: 'Start A Project',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [animationIndex, setAnimationIndex] = useState(
    Math.floor(Math.random() * animationVariants.length)
  )
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000) // 8 seconds loading

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex)
      setCurrentIndex((prev) => (prev + 1) % slides.length)
      setAnimationIndex(Math.floor(Math.random() * animationVariants.length)) // 🆕 Randomize animation per slide
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex]) // Depend on `currentIndex` to trigger changes

  if (!mounted) return null

  return (
    <div className="mt-[90px] relative">
      {loading ? (
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
          <div className="w-full h-[560px] flex flex-col justify-center items-center bg-white px-4 relative overflow-hidden">
            {/* Background-like skeleton */}
            <Skeleton
              height={560}
              width="100%"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                maxWidth: '100%',
              }}
            />

            {/* Foreground content skeletons */}
            <div className="z-10 text-center space-y-4 flex flex-col gap-4 w-full items-center px-4">
              <div className="w-full max-w-xs">
                <Skeleton height={24} borderRadius={8} />
              </div>
              <div className="w-full max-w-xl">
                <Skeleton height={48} borderRadius={12} />
              </div>
              <div className="w-full max-w-[160px]">
                <Skeleton height={40} borderRadius={8} />
              </div>
            </div>
          </div>
        </SkeletonTheme>
      ) : (
        <Parallax strength={300}>
          <AnimatePresence mode="wait">
            {prevIndex !== currentIndex && (
              <motion.div
                key={currentIndex}
                {...animationVariants[animationIndex]}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${slides[currentIndex].src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            )}
          </AnimatePresence>

          <div className="w-full h-[560px] relative bg-[#838694]/40 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                {...animationVariants[animationIndex]}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="absolute w-full h-full flex flex-col items-center justify-center"
              >
                <div>
                  <h1 className="text-white md:text-2xl text-[16px] lg:font-semibold">
                    {slides[currentIndex].text}
                  </h1>
                  <div className="w-full border-t border-t-white"></div>
                </div>
                <h1 className="text-white font-bold md:text-7xl text-3xl mt-8 text-center">
                  {slides[currentIndex].text1}
                </h1>
                <Link
                  href={'/add-project'}
                  className="uppercase mt-8 bg-[#674DF0] px-9 py-5 text-white hover:bg-black cursor-pointer transition-all duration-500 ease-in-out"
                >
                  Start A Project
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-10 flex gap-3 justify-center w-full">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-[20px] w-[20px] border-3 border-white rounded-full cursor-pointer transition-all duration-300 ${
                  currentIndex === index ? 'bg-white' : 'bg-transparent'
                }`}
                onClick={() => {
                  setPrevIndex(currentIndex)
                  setCurrentIndex(index)
                  setAnimationIndex(
                    Math.floor(Math.random() * animationVariants.length)
                  )
                }}
              >
                <span className="sr-only">index</span>
              </button>
            ))}
          </div>
        </Parallax>
      )}
    </div>
  )
}

export default Banner
