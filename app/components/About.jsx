"use client";
import React from 'react';
import Title from './Title';
import Image from 'next/image';
import { assests } from '@/public/assests/assest';
import { motion } from 'framer-motion'; 

const About = () => {
  return (
    <div className='my-40' id='about'>
      {/* Title section */}
      <Title
        text1={"About Me"}
        text2={"I’m a passionate UI/UX designer focused on creating intuitive, user-friendly, and visually engaging digital experiences that bring ideas to life."}

      />

      {/* Main content - Image + Text */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-between">

        {/* Image with scroll animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }} // har baar scroll par chale
          className='h-[400px] w-[350px] sm:h-[500px] sm:w-[350px] rounded-t-full rounded-b-xl bg-gray-col flex justify-center items-end my-10 sm:my-0'
        >
          <Image
            className='w-64 sm:h-[600px] sm:w-[400]'
            src={assests.Man}
            alt=''
            width={330}
          />
        </motion.div>

        {/* Text + Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="about w-full sm:w-[50vw]"
        >
           {/* about content  */}
<p className='text-gray-400'>
  As a dedicated UI/UX designer, I specialize in crafting digital experiences that not only look visually appealing but also feel intuitive and effortless for users. My design philosophy revolves around understanding user needs, solving real-world problems, and blending creativity with functionality. Every project I take on starts with thorough research and user analysis, which allows me to create designs that are both user-centered and business-driven. From wireframes and prototypes to polished interfaces, I ensure that each stage of the design process is carefully structured to deliver maximum impact. 

  Over the years, I have worked on projects ranging from websites and mobile applications to dashboards and interactive platforms, giving me a broad perspective on design challenges across industries. I pay special attention to typography, color harmony, and visual hierarchy to guide users naturally through a product. Collaboration with developers and stakeholders is equally important to me, as I believe design succeeds only when it seamlessly integrates with technology and business goals. My ultimate aim is to design products that inspire trust, engage users, and create lasting value in the digital world. 
</p>

          {/* Button with hover bounce animation */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className='px-8 py-2 mt-10 bg-orange-col text-white rounded-md cursor-pointer'
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>

      {/* Skills icons with stagger animation */}
      <div className="grid grid-cols-5 my-10 w-full mx-auto gap-6">
        {[
          assests.figma_icon,
          assests.adobe_icon,
          assests.photoshop_icon,
          assests.illustrator_icon,
          assests.prem_icon
        ].map((icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} // neeche se aayega
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image src={icon} width={150} alt='' />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
