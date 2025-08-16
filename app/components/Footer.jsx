"use client"
import React from 'react'
import { K2D } from 'next/font/google';
import { assests } from '@/public/assests/assest';
import Image from 'next/image';
import { motion } from 'framer-motion';

const k2d = K2D({ subsets: ['latin'], weight: ['400', '700'], })

export default function Footer() {
  return (
    <div className='bg-gray-col p-4 w-full'>
      <motion.nav
        className='flex flex-col items-center justify-center py-6 gap-6'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className={`${k2d.className} text-[30px] text-orange-col font-bold`}
        >
          AITBAR ALI
        </motion.h1>

        {/* Links */}
        <ul className='grid grid-cols-2 sm:grid-cols-5 gap-8 text-[20px] font-medium text-gray-400'>
          <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.0, duration: 0.5 }} whileHover={{ scale: 1.1, color: "#ff6600" }}>
            <a href="#">Home</a>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.1, duration: 0.5 }} whileHover={{ scale: 1.1, color: "#ff6600" }}>
            <a href="#services">Services</a>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.2, duration: 0.5 }} whileHover={{ scale: 1.1, color: "#ff6600" }}>
            <a href="#about">About Me</a>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.3, duration: 0.5 }} whileHover={{ scale: 1.1, color: "#ff6600" }}>
            <a href="#portfolio">Portfolio</a>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.4, duration: 0.5 }} whileHover={{ scale: 1.1, color: "#ff6600" }}>
            <a href="#contact">Contact Me</a>
          </motion.li>
        </ul>

        {/* Icons */}
        <div className="icons flex gap-3">
          <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
            <Image src={assests.instagram_icon} alt='Instagram' width={30}/>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
            <Image src={assests.linkdin_icon} alt='LinkedIn' width={30}/>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
            <Image src={assests.internet_icon} alt='Website' width={30}/>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
            <Image src={assests.instagram_icon} alt='Instagram 2' width={30}/>
          </motion.div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-400">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.1 }}>
            Email: graphicdesigner@gmail.com
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.2 }}>
            Phone: +92 3425566890
          </motion.p>
        </div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className='text-gray-400 w-full text-center border-t-2 pt-2'
        >
          Created by: Shakeel Ahmed 
        </motion.p>
      </motion.nav>
    </div>
  )
}
