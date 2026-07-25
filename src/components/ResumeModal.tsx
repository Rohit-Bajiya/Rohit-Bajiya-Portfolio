import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, EXPERIENCE_DATA, PROJECTS_DATA, EDUCATION_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadFake = () => {
    // Generate text/markdown or trigger print as PDF
    const resumeText = `ROHIT BAJIYA - DEVOPS ENGINEER
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY:
${PERSONAL_INFO.summary.join(' ')}

EXPERIENCE:
${EXPERIENCE_DATA[0].role} - ${EXPERIENCE_DATA[0].company} (${EXPERIENCE_DATA[0].location})
${EXPERIENCE_DATA[0].responsibilities.map(r => '- ' + r).join('\n')}

PROJECTS:
${PROJECTS_DATA.map(p => `${p.title}: ${p.description}`).join('\n\n')}

EDUCATION:
${EDUCATION_DATA[0].degree} in ${EDUCATION_DATA[0].field} - ${EDUCATION_DATA[0].institution}`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Rohit_Bajiya_DevOps_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0F0F0F] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col"
        >
          {/* Modal Top Control Bar */}
          <div className="p-4 sm:p-6 bg-[#141414] border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-mono border border-purple-500/20">
                OFFICIAL RESUME
              </span>
              <h3 className="font-serif text-lg font-bold text-white hidden sm:block">
                Rohit Bajiya — Curriculum Vitae
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-medium transition-colors"
                title="Print Resume"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print</span>
              </button>

              <button
                onClick={handleDownloadFake}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8B5CF6] hover:bg-purple-600 text-white text-xs font-semibold transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body Container */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0B0B0B] font-sans text-gray-200 text-sm print:bg-white print:text-black">
            
            {/* Header / Contact Info */}
            <div className="border-b border-white/10 pb-6 print:border-black">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white print:text-black">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base font-medium text-purple-400 mt-1 print:text-purple-800">
                {PERSONAL_INFO.role} — Cloud Infrastructure & Automation
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 mt-4 print:text-gray-700">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#8B5CF6]" /> {PERSONAL_INFO.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#8B5CF6]" /> {PERSONAL_INFO.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" /> {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 print:text-purple-900">
                // PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed print:text-black">
                {PERSONAL_INFO.summary.join(' ')}
              </p>
            </div>

            {/* Key Technical Skills */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 print:text-purple-900">
                // TECHNICAL TOOLCHAIN
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SKILLS_DATA.map((skill) => (
                  <div key={skill.name} className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-xs print:border-gray-300 print:text-black">
                    <span className="font-semibold text-white print:text-black">{skill.name}</span>
                    <span className="block text-[10px] text-gray-400 print:text-gray-600">{skill.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-4 print:text-purple-900">
                // WORK EXPERIENCE
              </h2>
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.company} className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-base text-white print:text-black">
                      {exp.role} <span className="text-purple-300 font-normal">@ {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-gray-400 print:text-gray-600">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5 pl-4 list-disc text-xs text-gray-300 print:text-black">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-4 print:text-purple-900">
                // FEATURED DEVOPS PROJECTS
              </h2>
              <div className="space-y-4">
                {PROJECTS_DATA.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 print:border-gray-300">
                    <h3 className="font-bold text-sm text-white print:text-black">{proj.title}</h3>
                    <p className="text-xs text-gray-300 mt-1 print:text-black">{proj.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {proj.techStack.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-purple-300 print:text-black print:border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10 print:border-black">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 print:text-purple-900">
                  // EDUCATION
                </h2>
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.institution} className="text-xs">
                    <p className="font-bold text-white print:text-black">{edu.degree} - {edu.field}</p>
                    <p className="text-gray-400 print:text-gray-700">{edu.institution}, {edu.period}</p>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-3 print:text-purple-900">
                  // ACHIEVEMENTS
                </h2>
                <ul className="text-xs space-y-1 text-gray-300 print:text-black">
                  {ACHIEVEMENTS_DATA.map((ach) => (
                    <li key={ach.title} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                      <span>{ach.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Footer Close */}
          <div className="p-4 bg-[#141414] border-t border-white/10 flex justify-end shrink-0">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
            >
              Close Resume View
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
