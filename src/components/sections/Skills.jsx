import { motion } from 'framer-motion';
import { skills } from '../../data/index';

const skillCategories = [
  {
    title: "Frontend Development",
    items: skills.frontend,
    icon: "💻",
    borderGlow: "hover:border-[#34D399]/50 hover:shadow-[0_10px_30px_rgba(52,211,153,0.2)]",
    barColor: "bg-gradient-to-r from-[#12544F] via-[#2A835F] to-[#34D399]",
    badgeAccent: "text-[#34D399] bg-[#34D399]/15 border-[#34D399]/40"
  },
  {
    title: "Backend & Systems",
    items: skills.backend,
    icon: "⚙️",
    borderGlow: "hover:border-[#FF5A79]/50 hover:shadow-[0_10px_30px_rgba(255,90,121,0.2)]",
    barColor: "bg-gradient-to-r from-[#2A835F] via-[#FF5A79] to-[#34D399]",
    badgeAccent: "text-[#FF5A79] bg-[#FF5A79]/15 border-[#FF5A79]/40"
  },
  {
    title: "Data Science & AI",
    items: skills.dataScience,
    icon: "🧠",
    borderGlow: "hover:border-[#34D399]/50 hover:shadow-[0_10px_30px_rgba(52,211,153,0.2)]",
    barColor: "bg-gradient-to-r from-[#12544F] via-[#34D399] to-[#FF5A79]",
    badgeAccent: "text-[#34D399] bg-[#34D399]/15 border-[#34D399]/40"
  },
  {
    title: "Tools & DevOps",
    items: skills.tools,
    icon: "🛠️",
    borderGlow: "hover:border-[#FF5A79]/50 hover:shadow-[0_10px_30px_rgba(255,90,121,0.2)]",
    barColor: "bg-gradient-to-r from-[#2A835F] to-[#34D399]",
    badgeAccent: "text-white bg-white/10 border-white/20"
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 max-w-6xl mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-[#34D399] bg-[#34D399]/10 px-4 py-1.5 rounded-full border border-[#34D399]/40 shadow-sm inline-flex items-center gap-1.5">
          Core Capabilities
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
          Skills & <span className="text-[#34D399]">Expertise</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-[#2A835F] via-[#34D399] to-[#FF5A79] mx-auto mt-4 rounded-full shadow-sm" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-7 rounded-3xl border border-[#2A835F]/40 bg-[#0c1824]/90 backdrop-blur-xl shadow-xl transition-all duration-500 space-y-6 ${cat.borderGlow}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl filter drop-shadow-sm">{cat.icon}</span>
                <h3 className="text-xl font-extrabold text-white">{cat.title}</h3>
              </div>
              <span className={`text-xs font-mono font-extrabold px-3 py-1 rounded-full border ${cat.badgeAccent}`}>
                {cat.items.length} Skills
              </span>
            </div>

            <div className="space-y-4">
              {cat.items.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5">
                  <div className="flex justify-between text-xs sm:text-sm font-extrabold">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="text-[#34D399] font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#060d14] rounded-full overflow-hidden border border-[#2A835F]/30">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + sIdx * 0.05 }}
                      className={`h-full rounded-full ${cat.barColor}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}