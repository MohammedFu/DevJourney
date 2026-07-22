import React from 'react';
import { motion, AnimatePresence } from '../utils/motion';
import { portfolioData } from '../data/portfolioData';
import { useApp } from '../context/AppContext';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { t } = useApp();

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative w-full max-w-4xl max-h-[85vh] bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-color)] rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 my-auto"
          >
            {/* Header Controls */}
            <div className="flex justify-between items-center px-6 sm:px-8 py-4 bg-[var(--bg-card-sub)] border-b border-[var(--border-color)] shrink-0 z-20">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[var(--text-accent)] text-2xl">badge</span>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[var(--text-main)]">{t.cvModal.title}</h2>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrint}
                  className="flex items-center gap-2 bg-[var(--bg-accent)] text-[var(--text-accent-on)] px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md"
                >
                  <span className="material-symbols-outlined text-base">print</span>
                  {t.cvModal.printBtn}
                </motion.button>
                <button
                  onClick={onClose}
                  className="p-1.5 text-[var(--text-sub)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)] rounded-full transition-colors"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:bg-white print:text-black text-left rtl:text-right flex-1">
              {/* Header CV Profile */}
              <div className="border-b border-[var(--border-color)] pb-6 pt-2">
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-main)] mb-2">
                  {portfolioData.personal.name}
                </h1>
                <p className="text-[var(--text-accent)] font-bold text-sm sm:text-base mb-4">
                  {portfolioData.personal.title}
                </p>
                <div className="flex flex-wrap gap-5 text-xs sm:text-sm text-[var(--text-sub)]">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-[var(--text-accent)]">mail</span>
                    {portfolioData.personal.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-[var(--text-accent)]">call</span>
                    {portfolioData.personal.phone}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-[var(--text-accent)]">location_on</span>
                    {portfolioData.personal.location}
                  </span>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--text-accent)] mb-3">
                  {t.cvModal.summary}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-sub)] leading-relaxed">
                  {t.hero.summary}
                </p>
              </div>

              {/* Skills Grid */}
              <div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--text-accent)] mb-4">
                  {t.cvModal.skills}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.languages.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-[var(--bg-card-sub)] text-[var(--text-sub)] border border-[var(--border-color)] px-3.5 py-1.5 rounded-full text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--text-accent)] mb-5">
                  {t.cvModal.experience}
                </h3>
                <div className="space-y-6">
                  {portfolioData.experiences.map((exp) => (
                    <div key={exp.id} className="border-l-2 rtl:border-r-2 rtl:border-l-0 border-[var(--bg-accent)] pl-5 rtl:pr-5 rtl:pl-0 py-1">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-1">
                        <h4 className="font-bold text-base text-[var(--text-main)]">{exp.role}</h4>
                        <span className="text-xs text-[var(--text-accent)] font-bold">{exp.period}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--text-sub)] font-semibold">{exp.company} — {exp.location}</p>
                      <p className="text-xs sm:text-sm text-[var(--text-sub)] mt-2 leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--text-accent)] mb-4">
                  {t.cvModal.education}
                </h3>
                <div className="space-y-4">
                  {portfolioData.education.map((edu) => (
                    <div key={edu.id} className="bg-[var(--bg-card-sub)] p-5 rounded-2xl border border-[var(--border-color)]">
                      <h4 className="font-bold text-base text-[var(--text-main)]">{edu.degree}</h4>
                      <p className="text-xs sm:text-sm text-[var(--text-sub)] mt-1">{edu.institution} ({edu.period})</p>
                      <p className="text-xs font-bold text-[var(--text-accent-on)] mt-2 inline-block bg-[var(--bg-accent)] px-3 py-1 rounded-md shadow-sm">{edu.grade}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--text-accent)] mb-4">
                  {t.cvModal.certifications}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {portfolioData.certifications.map((cert) => (
                    <div key={cert.id} className="bg-[var(--bg-card-sub)] p-4 rounded-xl border border-[var(--border-color)]">
                      <p className="text-xs sm:text-sm font-bold text-[var(--text-main)]">{cert.title}</p>
                      <p className="text-xs text-[var(--text-sub)] mt-1">{cert.issuer} • {cert.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
