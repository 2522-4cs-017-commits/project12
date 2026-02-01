'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-80 h-80 mx-auto relative">
            <Image
              src="/profile.jpg" // Placeholder, replace with actual image
              alt="Usman Ahmed"
              width={320}
              height={320}
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute -top-4 -right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              E-Commerce Expert
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <p className="text-teal-400 text-sm mb-2">HELLO EVERYONE</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            I'm <span className="text-teal-400">Usman Ahmed</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-400 mb-6">
            E-Commerce & Digital Marketing Specialist
          </h2>
          <div className="space-y-2 mb-8">
            <div className="flex items-center justify-center md:justify-start text-slate-400">
              <Phone className="w-5 h-5 mr-2" />
              +92 334 330 3759
            </div>
            <div className="flex items-center justify-center md:justify-start text-slate-400">
              <Mail className="w-5 h-5 mr-2" />
              usmanahmedq30@gmail.com
            </div>
            <div className="flex items-center justify-center md:justify-start text-slate-400">
              <MapPin className="w-5 h-5 mr-2" />
              Karachi, Pakistan
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
              HIRE ME
            </button>
            <button className="border border-teal-500 text-teal-400 px-6 py-3 rounded-lg hover:bg-teal-500 hover:text-white transition-colors">
              VIEW PROJECTS
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;