import { motion } from 'framer-motion'
import React from 'react'
import Pasta from '../components/Pasta'
import Popular from '../components/Popular'

const Home = () => {
  return (
    <div>
      <motion.div
      animate={{ opacity: 1}}
      initial={{ opacity: 0}}
      exit={{ opacity: 0}}
      transition={{ dutaion : 0.5}}
      >
        <Pasta />
        <Popular />
        </motion.div>
    </div>
  )
}

export default Home;
