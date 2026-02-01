'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const services = [
    {
      number: '01',
      title: 'E-Commerce Management',
      description: 'Complete e-commerce solutions from setup to optimization.',
    },
    {
      number: '02',
      title: 'Digital Marketing',
      description: 'PPC, SEO, social media marketing strategies.',
    },
    {
      number: '03',
      title: 'Shopify Development',
      description: 'Custom themes, apps, and store optimization.',
    },
    {
      number: '04',
      title: 'Analytics & Reporting',
      description: 'Data-driven insights and performance reporting.',
    },
  ];

  const technologies = [
    'Shopify E-Commerce',
    'Google Ads',
    'Facebook Ads',
    'SEO Optimization',
    'Email Marketing',
    'Analytics',
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm mb-2">EXPERTISE</p>
          <h2 className="text-4xl font-bold">Skills & Services</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-slate-800 p-6 rounded-lg"
            >
              <div className="text-slate-500 text-2xl font-bold mb-4">{service.number}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-slate-700 text-slate-300 px-4 py-2 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;