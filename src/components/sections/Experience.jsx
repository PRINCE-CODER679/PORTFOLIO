import { motion } from 'framer-motion';
import { experience } from '../../data/index';

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-[#060d14]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-[#34D399] bg-[#34D399]/10 px-4 py-1.5 rounded-full border border-[#34D399]/40 shadow-sm inline-flex items-center gap-1.5">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Experience & <span className="text-[#34D399]">Milestones</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#2A835F] via-[#34D399] to-[#FF5A79] mx-auto rounded-full shadow-sm" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#2A835F]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id || idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Dot Node */}
              <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#060d14] border-4 border-[#34D399] group-hover:border-[#FF5A79] group-hover:scale-125 transition-all shadow-md" />

              {/* Card Container */}
              <div className="p-5 sm:p-7 rounded-3xl border border-[#2A835F]/40 bg-[#0c1824]/90 backdrop-blur-xl shadow-xl hover:border-[#34D399]/60 hover:shadow-2xl transition-all duration-300 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-extrabold text-white group-hover:text-[#34D399] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-extrabold text-[#34D399]">
                      {exp.company}
                    </p>
                  </div>
                  <span className="self-start sm:self-auto text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#12544F]/40 text-[#34D399] border border-[#2A835F]/40">
                    {exp.period || exp.duration}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights / Responsibilities */}
                {(exp.highlights || exp.responsibilities) && (
                  <ul className="space-y-1.5 pt-1">
                    {(exp.highlights || exp.responsibilities).map((item, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-200 font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Pills */}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-[#2A835F]/30">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-3 py-1 rounded-lg bg-[#12544F]/40 text-[#34D399] border border-[#2A835F]/40 font-mono font-extrabold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}