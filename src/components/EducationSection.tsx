import { motion } from 'motion/react';
import { GraduationCap, Award, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>ACADEMIC FOUNDATION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Education & <span className="text-gradient-purple">Academics</span>
          </motion.h2>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-bl-full pointer-events-none group-hover:bg-purple-500/20 transition-colors" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span>{edu.field}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {edu.degree}
                  </h3>

                  <p className="text-lg font-semibold text-purple-300 mt-1">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-gray-300 w-fit">
                  <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-4">
                  Academic Milestones & Highlights
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {edu.achievements.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-[#8B5CF6] mb-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-xs font-mono font-bold text-purple-300">Highlight 0{i + 1}</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
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
