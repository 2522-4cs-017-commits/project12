'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-teal-400 text-sm mb-2">GET IN TOUCH</p>
          <h2 className="text-4xl font-bold">Let's Connect</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="bg-slate-800 p-4 rounded-lg flex items-center">
                <Phone className="w-5 h-5 text-teal-400 mr-4" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-slate-400">+92 334 330 3759</p>
                </div>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg flex items-center">
                <Mail className="w-5 h-5 text-teal-400 mr-4" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-slate-400">usmanahmedq30@gmail.com</p>
                </div>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg flex items-center">
                <MapPin className="w-5 h-5 text-teal-400 mr-4" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-slate-400">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:border-teal-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:border-teal-400 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:border-teal-400 focus:outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-teal-500 text-white p-3 rounded-md hover:bg-teal-600 transition-colors flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
              {status && <p className="text-center text-teal-400">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;