import { motion } from 'framer-motion';
import { projects } from '../../data/index';

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 max-w-6xl mx-auto scroll-mt-20">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#2A835F]/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF5A79]/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-[#34D399] bg-[#34D399]/10 px-4 py-1.5 rounded-full border border-[#34D399]/40 shadow-md inline-flex items-center gap-1.5">
          Featured Work
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
          AI & Software <span className="text-[#34D399]">Projects</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mt-3 font-semibold">
          Handcrafted production-grade systems engineered with modern AI, deep learning, and intuitive interfaces.
        </p>
        <div className="w-20 h-1.5 bg-gradient-to-r from-[#2A835F] via-[#34D399] to-[#FF5A79] mx-auto mt-4 rounded-full shadow-sm" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id || index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group rounded-3xl border border-[#2A835F]/40 bg-[#0c1824]/90 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 hover:border-[#34D399]/60"
          >
            {/* Graphic Banner */}
            <div className="h-44 p-6 flex flex-col justify-between relative overflow-hidden border-b border-[#2A835F]/30 bg-gradient-to-br from-[#060d14] via-[#092328] to-[#12544F]">
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-[#060d14]/80 backdrop-blur-md text-[#34D399] border border-[#2A835F]/40">
                  {project.tag || project.category || 'AI System'}
                </span>
                <span className="text-3xl filter drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                  🚀
                </span>
              </div>
              <h3 className="relative z-10 text-xl font-extrabold text-white group-hover:text-[#34D399] transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Body Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {(project.techStack || project.technologies || []).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-[#12544F]/40 text-[#34D399] border border-[#2A835F]/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-3 border-t border-[#2A835F]/30">
                {(project.liveUrl || project.githubUrl || project.repoUrl) && (
                  <>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 px-3 rounded-xl text-xs font-extrabold text-white transition-all duration-300 bg-gradient-to-r from-[#D81B60] to-[#FF5A79] hover:from-[#FF5A79] hover:to-[#D81B60] shadow-md border border-[#FF5A79]/40 flex items-center justify-center gap-1.5 hover:scale-[1.02]"
                      >
                        <span>View Live App</span>
                        <span>↗</span>
                      </a>
                    )}
                    {(project.githubUrl || project.repoUrl) && (
                      <a
                        href={project.githubUrl || project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2.5 px-3 rounded-xl text-xs font-extrabold text-slate-200 border border-[#2A835F]/40 bg-[#060d14]/80 hover:bg-[#12544F]/40 hover:text-[#34D399] hover:border-[#34D399]/60 transition-all duration-300 shadow-sm flex items-center justify-center gap-1.5 hover:scale-[1.02]"
                      >
                        <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        <span>GitHub Repo</span>
                        <span>↗</span>
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}