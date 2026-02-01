'use client';

import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'SV Bazaar',
      description: 'Shopify E-Commerce Website',
      category: 'E-Commerce',
    },
    // Add more projects
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm mb-2">PORTFOLIO</p>
          <h2 className="text-4xl font-bold">Recent Projects</h2>
          <p className="text-slate-400 mt-4">A showcase of my work in e-commerce and digital marketing.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-slate-800 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs mb-4 w-fit">
                {project.category}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;