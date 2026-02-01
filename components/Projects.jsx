'use client';

import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'SV BAZAAR',
      description: 'A modern e-commerce platform built with Shopify, featuring responsive design and seamless user experience.',
      category: 'E-Commerce',
    },
    {
      title: 'DUKHTER',
      description: 'Fashion brand website showcasing collections with high-quality visuals and interactive product galleries.',
      category: 'Fashion',
    },
    {
      title: 'TECH STARTUP',
      description: 'Landing page for a tech startup with animated components and conversion-focused design.',
      category: 'Web Development',
    },
    {
      title: 'PORTFOLIO SITE',
      description: 'Personal portfolio website with dark theme, smooth animations, and project showcases.',
      category: 'Portfolio',
    },
    {
      title: 'MOBILE APP',
      description: 'UI/UX design for a mobile application with intuitive navigation and modern aesthetics.',
      category: 'Mobile Design',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#0B0E11]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#00D1C1] text-sm uppercase tracking-wider mb-4">PORTFOLIO</p>
          <h2 className="text-5xl font-bold text-white mb-4">Recent Projects</h2>
          <p className="text-slate-400 text-lg">A showcase of my work in e-commerce, fashion, and digital design.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#111821] border border-slate-700 rounded-xl p-8 hover:border-[#00D1C1] transition-colors"
            >
              <div className="bg-[#00D1C1] text-[#0B0E11] px-3 py-1 rounded-full text-xs font-semibold mb-6 w-fit uppercase">
                {project.category}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;