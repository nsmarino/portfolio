import React, { useState } from 'react'

import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn";
import styles from './Slideshow.module.css'

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 250 : -250,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 250 : -250,
        opacity: 0
      };
    }
  };

const Slideshow = ({ project }) => {
  const images = [
    `/${project}/1.jpg`,
    `/${project}/2.jpg`,
    `/${project}/3.jpg`,
  ]
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
      };

    return (
    <div className={styles.container}>
      
      <div className={styles.slideContainer}>
        <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className={styles.image}
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "linear"},
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
        </AnimatePresence>
      
      <div className={styles.buttonsContainer}>
        <button 
          className={styles.prev} 
          onClick={() => paginate(-1)} 
          onKeyDown={() => paginate(-1)}
        >prv</button>

        <button 
          className={styles.next} 
          onClick={() => paginate(1)} 
          onKeyDown={() => paginate(1)}
        >nxt</button>
      </div>
    </div>

      <div className={styles.pageDots}>
        <div style={{background: imageIndex===0 ? 'black' : 'white'}}></div>
        <div style={{background: imageIndex===1 ? 'black' : 'white'}}></div>
        <div style={{background: imageIndex===2 ? 'black' : 'white'}}></div>
      </div>

    </div>
  )
}

export default Slideshow