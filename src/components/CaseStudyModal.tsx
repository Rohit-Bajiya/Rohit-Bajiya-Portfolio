import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight, Layers, Workflow, ShieldCheck, Zap } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0F0F0F] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header Bar */}
          <div className="p-6 bg-[#141414] border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">
                  DEVOPS CASE STUDY
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scrollable Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Image & Summary Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 rounded-2xl overflow-hidden border border-white/10 aspect-video relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="md:col-span-5 flex flex-col gap-4">
                <h4 className="font-serif text-lg font-bold text-white">
                  {project.subtitle}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {project.caseStudy.overview}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-[11px] font-mono text-purple-300"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>

                {/* CTA Links */}
                <div className="flex items-center gap-3 pt-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Code</span>
                  </a>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B5CF6] hover:bg-purple-600 text-white text-xs font-semibold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Architecture</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Pipeline Step Execution Diagram */}
            <div>
              <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#8B5CF6]" />
                <span>Automated Pipeline Flow</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.caseStudy.pipelineSteps.map((step, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 relative overflow-hidden"
                  >
                    <span className="text-[10px] font-mono text-purple-400 font-bold block mb-1">
                      STAGE 0{index + 1}
                    </span>
                    <h5 className="font-semibold text-sm text-white mb-1">
                      {step.title}
                    </h5>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>Infrastructure Architecture</span>
                </h4>
                <ul className="space-y-2">
                  {project.caseStudy.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <ArrowRight className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Technical Challenges Solved</span>
                </h4>
                <ul className="space-y-2">
                  {project.caseStudy.challenges.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Business Impact Results */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-purple-900/20 to-indigo-950/40 border border-purple-500/30">
              <h4 className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-3">
                Measurable Impact & Production Results
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.caseStudy.keyResults.map((result, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                    <span className="text-xs font-medium text-white">{result}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Close */}
          <div className="p-4 bg-[#141414] border-t border-white/10 flex justify-end shrink-0">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
