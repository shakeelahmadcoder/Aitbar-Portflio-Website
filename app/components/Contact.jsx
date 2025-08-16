"use client"
import React from 'react'
import Title from './Title'
import { motion } from 'framer-motion'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e7586466-5664-47de-8bd3-cd3d06eb2623");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error("❌ " + data.message);
    }
  };

  return (
    <div className='my-40' id='contact'>
      <Title text1={"Contact Me"} text2={"Contact me to discuss your project"} />

      {/* Contact Form */}
      <motion.form onSubmit={onSubmit}
        className='w-full sm:max-w-[60vw] mx-auto'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        action="/api/contact"
        method="POST"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <input 
              type="text" 
              name="name"
              placeholder="Name" 
              className='bg-gray-col w-full text-gray-400 rounded-md px-4 py-2 outline-none' 
              required 
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              className='bg-gray-col w-full text-gray-400 rounded-md px-4 py-2 outline-none' 
              required 
            />
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <input 
              type="number" 
              name="phone"
              placeholder="Phone" 
              className='bg-gray-col w-full text-gray-400 rounded-md px-4 py-2 outline-none' 
            />
          </motion.div>

          {/* Service Select */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <select 
              name="service"
              className='bg-gray-col w-full text-gray-400 rounded-md px-4 py-2 outline-none'
            >
              <option value="">Select Service</option>
              <option value="Website Design">Website Design</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Figma">Figma</option>
            </select>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="sm:col-span-2"
          >
            <input 
              type="text" 
              name="timeline"
              placeholder="Timeline" 
              className='bg-gray-col w-full text-gray-400 rounded-md px-4 py-2 outline-none' 
            />
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="sm:col-span-2"
          >
            <textarea 
              name="details"
              placeholder="Project Details" 
              rows={5}
              className='bg-gray-col w-full text-gray-400 rounded-md px-4 py-2 outline-none'
            ></textarea>
          </motion.div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-5">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            className='border border-gray-400 text-gray-400 px-4 py-2 rounded-md'
          >
            Send
          </motion.button>
        </div>
      </motion.form>

      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default Contact
