"use client";
import { motion } from "framer-motion";
import { assests } from '@/public/assests/assest';
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center my-20 sm:my-40'>

      {/* Left Content */}
      <motion.div className="flex flex-col"  
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, type: "spring" }}
        viewport={{ once: false, amount: 0.3 }} 
      >
          <p className='text-xl text-gray-400'>Hi I am</p>
          <p className='text-xl text-gray-400'>Aitbar Ali</p>

        {/* Title */}
        <motion.h1
          className='text-5xl sm:text-7xl font-bold text-orange-col my-6'
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          UI/UX Designer
        </motion.h1>

        {/* Social Icons */}
        <div className="icons flex gap-3">
          {[assests.instagram_icon, assests.linkdin_icon, assests.internet_icon, assests.instagram_icon].map((icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: false }}
            >
              <Image src={icon} alt='' width={30} />
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="buttons flex gap-3 my-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className='px-8 py-1 bg-orange-col text-white rounded-md cursor-pointer'
          >
            Hire Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className='px-8 py-1 border border-gray-300 bg-transparent text-gray-400 rounded-md cursor-pointer'
          >
            Download CV
          </motion.button>
        </div>

        {/* Stats */}
        <div className="flex gap-2 sm:gap-6 py-4 px-3 sm:px-8 rounded-md font-semibold bg-gray-col mt-8 w-full">
          {[
            { number: "5+", label: "Experience" },
            { number: "20+", label: "Projects Done" },
            { number: "80+", label: "Happy Clients" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: false }}
              className={i !== 2 ? 'border-r border-gray-300 px-2' : 'px-2'}
            >
              <p className='text-xl font-semibold text-orange-col'>{stat.number}</p>
              <p className='text-sm sm:text-base'>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: false, amount: 0.3 }}
        className='h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] rounded-full bg-gray-col flex justify-center items-end my-10 sm:my-0'
      >
        <motion.div whileHover={{ y: -10 }}>
          <Image className='w-64 sm:w-80' src={assests.Man} alt='' width={330} />
        </motion.div>
      </motion.div>
    </div>
  );
}
