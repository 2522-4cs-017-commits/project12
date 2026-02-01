'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Languages, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm mb-2">ABOUT ME</p>
          <h2 className="text-4xl font-bold">My Story</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-slate-400 mb-8">
              Passionate e-commerce specialist with expertise in digital marketing, Shopify development, and online business growth strategies.
            </p>
            <div className="space-y-6">
              <div className="bg-slate-800 p-6 rounded-lg">
                <GraduationCap className="w-8 h-8 text-teal-400 mb-4" />
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-slate-400">Bachelor's in Business Administration</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg">
                <Award className="w-8 h-8 text-teal-400 mb-4" />
                <h3 className="font-semibold mb-2">Certification</h3>
                <p className="text-slate-400">Google Ads, Facebook Blueprint, Shopify Expert</p>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg">
                <Languages className="w-8 h-8 text-teal-400 mb-4" />
                <h3 className="font-semibold mb-2">Languages</h3>
                <p className="text-slate-400">English, Urdu</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800 p-6 rounded-lg"
          >
            <Briefcase className="w-8 h-8 text-teal-400 mb-4" />
            <h3 className="font-semibold mb-4">Work Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Digital Marketing & E-commerce Specialist</h4>
                <p className="text-slate-400">Crescentic Digital</p>
                <p className="text-slate-500 text-sm">2022 - Present</p>
              </div>
              {/* Add more experiences as needed */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;