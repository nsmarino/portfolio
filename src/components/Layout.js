import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'gatsby'

import '../styles/style.css'

const duration = 0.25

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children, location }) => (
    <div
      style={{
        margin: '1rem auto',
        maxWidth: '1400px',
      }}
    >
      <div style={{
          margin: '1rem',
          position: 'sticky',
          top: '1rem',
          display: 'flex',
          alignItems: 'center'
      }}>
      <Link to="/">
      <div
        style={{
          border: '1px solid black',
          width: '1rem',
          height: '1rem',
          background: '#0f0'
        }}
      ></div>
      </Link>
      <div
        style={{
          paddingLeft: '0.25rem',
          fontVariant: 'small-caps',
          fontSize: '60%'

        }}
      >INDEX</div>      
      </div>


      <AnimatePresence>
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
)

export default Layout
