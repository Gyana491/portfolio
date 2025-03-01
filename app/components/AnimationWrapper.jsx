"use client";
import { AnimatePresence, motion } from 'framer-motion'

const AnimationWrapper = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="main-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default AnimationWrapper; 