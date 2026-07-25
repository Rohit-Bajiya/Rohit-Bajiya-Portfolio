import { motion } from 'motion/react';
import { Trophy, Users, Award, Star } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export default function AchievementsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'Users': return <Users className="w-6 h-6 text-indigo-400" />;
      case 'Award': return <Award className="w-6 h-6 text-purple-400" />;
      default: return <Star className="w-6 h-6 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="achievements" className="relative py-24 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      {/* Background Ambient */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3"
          >
            <Trophy className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>LEADERSHIP & RECOGNITION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Key <span className="text-gradient-purple">Achievements</span>
          </motion.h2>

          <p className="text-gray-400 text-sm max-w-xl mt-3">
            Demonstrated resilience, sportsmanship, and strategic athletic leadership.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-bl-full pointer-events-none group-hover:bg-purple-500/20 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-purple-500/30 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {item.highlight}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block mb-1">
                  {item.category}
                </span>

                <h3 className="font-serif text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>Rohit Bajiya</span>
                <span className="text-purple-400">Verified Leadership</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
