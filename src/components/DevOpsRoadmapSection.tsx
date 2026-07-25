import { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, CheckCircle2, ArrowRight, Zap, Layers, Sparkles } from 'lucide-react';
import { ROADMAP_STEPS, RoadmapStep } from '../data/portfolioData';

export default function DevOpsRoadmapSection() {
  const [selectedStep, setSelectedStep] = useState<RoadmapStep>(ROADMAP_STEPS[0]);

  return (
    <section id="roadmap" className="relative py-24 bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3"
          >
            <Compass className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>LEARNING & ENGINEERING PATHWAY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            DevOps <span className="text-gradient-purple">Roadmap</span>
          </motion.h2>

          <p className="text-gray-400 text-sm max-w-xl mt-3">
            The sequential evolution of tools, protocols, and methodologies mastered to reach production readiness.
          </p>
        </div>

        {/* Horizontal & Grid Animated Nodes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Node List */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {ROADMAP_STEPS.map((step, index) => {
              const isSelected = selectedStep.id === step.id;
              return (
                <motion.button
                  key={step.id}
                  onClick={() => setSelectedStep(step)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative p-4 rounded-2xl text-left border transition-all duration-300 interactive ${
                    isSelected
                      ? 'bg-[#8B5CF6]/20 border-[#8B5CF6] shadow-xl shadow-purple-950/60 scale-[1.02]'
                      : 'bg-white/[0.02] border-white/10 hover:border-purple-500/30 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-purple-400 font-bold">
                      STEP 0{step.id}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white">
                    {step.name}
                  </h3>

                  <p className="text-[11px] font-mono text-gray-400 mt-0.5">
                    {step.category}
                  </p>

                  {/* Connecting Arrow Indicator */}
                  {index < ROADMAP_STEPS.length - 1 && (
                    <div className="absolute -bottom-2 right-4 text-purple-500/40 hidden sm:block">
                      ↓
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Active Node Insight Card */}
          <div className="lg:col-span-5">
            <motion.div
              key={selectedStep.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8 rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden sticky top-28"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block">
                    STAGE {selectedStep.id} OF {ROADMAP_STEPS.length}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-white mt-1">
                    {selectedStep.name}
                  </h3>
                </div>

                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                  {selectedStep.status}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                  Category Focus
                </h4>
                <p className="text-sm font-semibold text-purple-300">
                  {selectedStep.category}
                </p>

                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-6 mb-2">
                  Summary & Expertise
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {selectedStep.description}
                </p>

                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-6 mb-3">
                  Key Engineering Concepts Mastered
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedStep.keyConcepts.map((concept) => (
                    <div
                      key={concept}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                <span>Rohit Bajiya DevOps Stack</span>
                <span className="text-purple-300">Production Ready</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
