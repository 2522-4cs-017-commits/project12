'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-8 px-6 border-t border-slate-700"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-teal-400">
          UA<span className="text-teal-500">Q</span>
        </div>
        <p className="text-slate-400 text-sm">© 2026 Usman Ahmed Qureshi. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;