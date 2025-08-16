"use client"
import React from 'react'
import Title from './Title'
import { services_data } from '@/public/assests/assest'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div className='my-40' id='services'>
      {/* Section Title */}
      <Title 
        text1={"Services"} 
        text2={"I design modern and user-friendly UI/UX interfaces along with creative graphic designs, making your brand stand out with style and functionality."}
      />

      {/* Grid Layout */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8'>
        {services_data.map((item, index) => (
          
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index === 0 ? -50 : index === 2 ? 50 : 0 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: index * 0.2 }} 
            viewport={{ once: false, amount: 0.3 }} 
            className='flex flex-col gap-4 items-center justify-center text-center bg-gray-col px-8 rounded-xl py-8'
          >
            <Image src={item.image} width={40} alt='Image'/>
            <h1 className='text-xl font-bold text-orange-col'>{item.title}</h1>
            <p className='text-sm text-gray-500'>{item.description}</p>
          </motion.div>

        ))}
      </div>
    </div>
  )
}
