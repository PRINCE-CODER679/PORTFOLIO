import { motion } from 'framer-motion';
import { personalInfo } from '../../data/index';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#060d14]">
      {/* Background Lighting Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#12544F]/20 rounded-full blur-[140px] pointer-events-none -z-5" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-[#34D399] bg-[#34D399]/10 px-4 py-1.5 rounded-full border border-[#34D399]/40 shadow-sm inline-flex items-center gap-1.5">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Driven by curiosity, <span className="text-[#34D399]">focused on impact</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#2A835F] via-[#34D399] to-[#FF5A79] mx-auto rounded-full shadow-sm" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch relative z-10">
          {/* Left Column: Biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="p-8 sm:p-10 rounded-3xl border border-[#2A835F]/40 bg-[#060d14]/90 backdrop-blur-xl shadow-xl space-y-6 hover:border-[#34D399]/50 transition-all duration-500">
              <h3 className="text-2xl font-extrabold text-white flex items-center gap-3">
                <span className="w-2.5 h-7 rounded-full bg-gradient-to-b from-[#34D399] to-[#FF5A79]" />
                Building Software that Matters
              </h3>

              <div className="space-y-4 text-slate-200 font-medium text-sm sm:text-base leading-relaxed">
                <p>
                  I'm Asrar, a full-stack and AI developer passionate about creating scalable, high-performance web applications and intelligent systems. I bridge the gap between complex AI algorithms and intuitive user interfaces.
                </p>
                <p>
                  With expertise spanning modern frontend frameworks, robust backend infrastructure, and computer vision / deep learning models, I approach every project with engineering rigor and attention to aesthetic detail.
                </p>
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { text: 'Full-Stack Web Development', icon: '⚡' },
                  { text: 'AI & ML System Integration', icon: '🧠' },
                  { text: 'Computer Vision & Deep Learning', icon: '👁️' },
                  { text: 'Responsive UI/UX Engineering', icon: '🎨' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#092328]/60 border border-[#2A835F]/30 hover:border-[#34D399]/50 transition-colors"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-xs font-bold text-white">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Expertise & Capability Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="h-full p-8 rounded-3xl border border-[#2A835F]/40 bg-[#060d14]/90 backdrop-blur-xl shadow-xl space-y-6 hover:border-[#34D399]/50 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#D81B60]/20 border border-[#D81B60]/40 flex items-center justify-center text-2xl font-bold shadow-sm text-white">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">Full-Stack & AI</h3>
                    <p className="text-xs text-[#34D399] font-extrabold font-mono">Modern Architecture</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-[#092328]/60 border border-[#2A835F]/30 space-y-1 hover:border-[#34D399]/50 transition-colors">
                    <div className="flex justify-between items-center text-xs font-extrabold">
                      <span className="text-white">Frontend Engineering</span>
                      <span className="text-[#34D399] font-mono">React • Tailwind • UI/UX</span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-semibold">High-performance web apps, responsive design systems & dynamic micro-interactions.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#092328]/60 border border-[#2A835F]/30 space-y-1 hover:border-[#34D399]/50 transition-colors">
                    <div className="flex justify-between items-center text-xs font-extrabold">
                      <span className="text-white">Backend & Cloud Systems</span>
                      <span className="text-[#34D399] font-mono">Node.js • Python • REST</span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-semibold">Scalable RESTful services, database architectures & cloud API integrations.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#092328]/60 border border-[#2A835F]/30 space-y-1 hover:border-[#34D399]/50 transition-colors">
                    <div className="flex justify-between items-center text-xs font-extrabold">
                      <span className="text-white">AI & Deep Learning</span>
                      <span className="text-[#34D399] font-mono">ML • CV • PyTorch</span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-semibold">Computer vision gesture recognition, NLP, predictive analytics & anomaly detection.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}