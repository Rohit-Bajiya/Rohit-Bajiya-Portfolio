import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar, CheckCircle2, Award, Zap } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-950/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>CAREER TRACK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Work <span className="text-gradient-purple">Experience</span>
          </motion.h2>

          <p className="text-gray-400 text-sm max-w-xl mt-3">
            Hands-on experience delivering enterprise-grade cloud automation and Kubernetes management.
          </p>
        </div>

        {/* Premium Animated Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8B5CF6] via-purple-500/30 to-transparent -translate-x-1/2 hidden sm:block" />

          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-2xl bg-[#0B0B0B] border-2 border-[#8B5CF6] shadow-xl shadow-purple-900/50 hidden sm:flex items-center justify-center z-20">
                <div className="w-3 h-3 rounded-full bg-[#8B5CF6] animate-ping" />
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-2xl relative">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
                      <Zap className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-white">
                      {exp.role}
                    </h3>

                    <p className="text-lg font-semibold text-purple-300 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-gray-300 w-fit">
                    <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Responsibilities List */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">
                    Key Responsibilities & Achievements
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-300 leading-relaxed">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Metrics Row */}
                <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
                  {exp.impactMetrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-2xl bg-purple-500/5 border border-purple-500/20 text-center">
                      <span className="font-serif text-xl sm:text-2xl font-bold text-white block">
                        {m.value}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 block mt-0.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
