"use client"
import React, { useState } from 'react'
import Title from './Title'
import Image from 'next/image'
import { portfolio_data } from '@/public/assests/assest'
import { motion } from 'framer-motion'

export default function Portfolio({text1}) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // category handler 
  const handleFilter = (category)=>{
    setSelectedCategory(category)
  }

  const filteredData = selectedCategory === "All" 
    ? portfolio_data 
    : portfolio_data.filter(item => item.category === selectedCategory)

  return (
    <div id='portfolio' className="py-10">
      <Title text1={"Portfolio"}/>

      {/* Filter Buttons */}
      <div className="buttons flex items-center justify-center gap-4 mb-10">
        {["All", "web", "app", "branding"].map((category) => (
          <motion.button
            key={category}
            onClick={()=>handleFilter(category)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`px-6 transition-all duration-300 py-2 cursor-pointer 
              ${selectedCategory === category ? "bg-orange-col" : "bg-gray-col"} 
              text-white rounded-lg`}
          >
            {category === "web" ? "Web Design" : category === "app" ? "App Design" : category === "branding" ? "Branding" : "All"}
          </motion.button>
        ))}
      </div>

      {/* Portfolio Items */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {filteredData.map((item, index)=>(
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className='overflow-hidden rounded-lg cursor-pointer'
          > 
            <Image src={item.image} alt={item.title || ''} className='w-full h-auto object-cover'/>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
