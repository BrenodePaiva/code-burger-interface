import React from 'react'
import { motion } from 'motion/react'
import { Container } from './styles'

export function LoadScreen() {
  return (
    <Container>
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </Container>
  )
}
