import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/index';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 px-6 max-w-5xl mx-auto scroll-mt-20">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FF5A79]/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-[#34D399] bg-[#34D399]/10 px-4 py-1.5 rounded-full border border-[#34D399]/40 shadow-md inline-flex items-center gap-1.5">
          Reach Out
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
          Get In <span className="text-[#34D399]">Touch</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-[#2A835F] via-[#34D399] to-[#FF5A79] mx-auto mt-4 rounded-full shadow-sm" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="p-8 rounded-3xl border border-[#2A835F]/40 bg-[#0c1824]/90 backdrop-blur-xl shadow-xl space-y-5 hover:border-[#34D399]/60 transition-all duration-300">
            <h3 className="text-xl font-extrabold text-white">Let's build something exceptional</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-semibold">
              Have an innovative project, AI integration, or collaboration opportunity? Let's connect and discuss how we can engineer impactful solutions.
            </p>

            <div className="space-y-4 pt-3">
              <a
                href={`mailto:${personalInfo.contactInfo.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#060d14] border border-[#2A835F]/40 text-sm text-white hover:border-[#34D399] transition-all duration-200 font-extrabold group"
              >
                <span className="w-9 h-9 rounded-lg bg-[#FF5A79]/20 border border-[#FF5A79]/40 flex items-center justify-center text-[#FF5A79] font-extrabold">
                  ✉
                </span>
                <span className="font-mono text-xs sm:text-sm truncate group-hover:text-[#34D399] transition-colors">{personalInfo.contactInfo.email}</span>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#060d14] border border-[#2A835F]/40 text-sm text-white font-extrabold">
                <span className="w-9 h-9 rounded-lg bg-[#2A835F]/25 border border-[#2A835F]/40 flex items-center justify-center text-[#34D399] font-extrabold">
                  📍
                </span>
                <span className="text-xs sm:text-sm">{personalInfo.contactInfo.location}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl border border-[#2A835F]/40 bg-[#0c1824]/90 backdrop-blur-xl shadow-xl space-y-5 hover:border-[#34D399]/60 transition-all duration-300"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="e.g. Asrar"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#2A835F]/50 bg-[#060d14] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#34D399] focus:border-transparent transition-all text-sm font-semibold"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="asrar@example.com"
                  className="w-full px-4 py-3.5 rounded-xl border border-[#2A835F]/50 bg-[#060d14] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#34D399] focus:border-transparent transition-all text-sm font-semibold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                placeholder="Share your thoughts or project requirements..."
                className="w-full px-4 py-3.5 rounded-xl border border-[#2A835F]/50 bg-[#060d14] text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#34D399] focus:border-transparent transition-all text-sm resize-none font-semibold"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-[#12544F] via-[#2A835F] to-[#FF5A79] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Send Message 🚀
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-[#34D399]/20 border border-[#34D399]/40 text-[#34D399] text-xs text-center font-extrabold"
              >
                ✓ Message received! Thank you for reaching out.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}