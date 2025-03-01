"use client";
import { AnimatePresence } from 'framer-motion'

export default function AnimationWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  )
} 