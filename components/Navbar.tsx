'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-slate-900/70 backdrop-blur-sm z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-400">
          UA<span className="text-teal-500">Q</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="#home" className="hover:text-teal-400 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-teal-400 transition-colors">About</Link>
          <Link href="#projects" className="hover:text-teal-400 transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-teal-400 transition-colors">Skills</Link>
          <Link href="#contact" className="hover:text-teal-400 transition-colors">Contact</Link>
        </div>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors">
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;