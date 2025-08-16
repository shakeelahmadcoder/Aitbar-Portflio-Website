"use client";
import { assests } from '@/public/assests/assest';
import { motion } from 'framer-motion';
import { K2D } from 'next/font/google';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const k2d = K2D({ subsets: ['latin'], weight: ['400', '700'] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "About me", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact me", href: "#contact" }
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className={`
          px-6 sm:px-20 mx-auto hidden sm:flex items-center justify-between py-4 fixed top-0 left-0 w-full z-50 transition-colors duration-500
          ${scrolled
            ? "bg-gray-800/40 backdrop-blur-md text-white shadow-md"
            : "bg-transparent text-gray-400"}
        `}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className={`${k2d.className} cursor-pointer text-[30px] text-orange-col font-bold`}
        >
          AITBAR ALI
        </motion.h1>

        {/* Links */}
        <ul className='flex gap-8 text-[20px] font-medium'>
          {navLinks.map(link => (
            <motion.li
              key={link.label}
              whileHover={{ scale: 1.1, color: "#ff6600" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a onClick={() => setIsOpen(false)} href={link.href}>
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Hire Button */}
        <motion.button
          whileHover={{ scale: 1.09 }}
          transition={{ type: "spring", stiffness: 300 }}
          className='px-8 py-1 bg-orange-col text-white rounded-md cursor-pointer'
        >
          Hire Me
        </motion.button>
      </motion.nav>

      {/* Mobile Navbar Top Bar */}
      <div
        className={`
          flex sm:hidden items-center justify-between py-4 px-4 fixed top-0 left-0 w-full z-50 transition-colors duration-500
          ${scrolled
            ? "bg-gray-800/40 backdrop-blur-md text-white shadow-md"
            : "bg-transparent text-gray-400"}
        `}
      >
        {/* Hamburger Icon */}
        <Image
          onClick={() => setIsOpen(!isOpen)}
          src={assests.ham_burger}
          alt='Menu'
          width={32}
          className="cursor-pointer"
        />

        {/* Logo */}
        <h1 className={`${k2d.className} text-[26px] text-orange-col font-bold`}>
          AITBAR ALI
        </h1>

        {/* Hire Me Button */}
        <button className='px-5 py-1 bg-orange-col text-white rounded-md cursor-pointer text-sm'>
          Hire Me
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className='flex sm:hidden flex-col items-center justify-center gap-10 fixed top-0 right-0 bg-black text-white w-full h-screen z-[100]'
        >
          {/* Close Button */}
          <Image
            className='absolute top-6 right-6 cursor-pointer'
            onClick={() => setIsOpen(false)}
            src={assests.ham_burger}
            alt='Close'
            width={36}
          />

          {/* Links */}
          <ul className='flex flex-col gap-6 text-[26px] font-medium'>
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  onClick={() => setIsOpen(false)}
                  className='hover:text-orange-col transition-colors duration-300'
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250 }}
            className='px-6 py-2 bg-orange-col text-white rounded-md mt-6'
          >
            Hire Me
          </motion.button>
        </motion.nav>
      )}
    </>
  );
}
