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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 cv-modal-overlay">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md cv-modal-backdrop"
          />

          {/* Modal Dialog Container - Responsive Full Screen Fit with Edge Clearance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative w-full max-w-5xl h-[92vh] sm:h-[90vh] bg-surface text-on-surface border border-outline-variant/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-10 backdrop-blur-xl cv-modal-container"
          >
            {/* Modal Header Controls Bar (Hidden during Print) */}
            <div className="flex justify-between items-center px-6 md:px-8 py-4 bg-transparent border-b border-outline-variant/30 shrink-0 z-20 cv-modal-header">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">badge</span>
                <h2 className="font-headline text-lg sm:text-xl font-bold text-on-surface">
                  {t.cvModal.title}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handlePrint}
                  className="flex items-center gap-2 primary-btn-gradient px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shadow-md"
                >
                  <span className="material-symbols-outlined text-base">print</span>
                  {t.cvModal.printBtn}
                </motion.button>
                <button
                  onClick={onClose}
                  className="p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
            </div>

            {/* Scrollable CV Document Canvas */}
            <div className="p-6 sm:p-10 md:p-12 overflow-y-auto space-y-8 text-left rtl:text-right flex-1 cv-modal-scroll">
              {/* Profile Header */}
              <div className="border-b border-outline-variant/30 pb-6 pt-2">
                <h1 className="font-headline-xl text-headline-xl sm:text-[40px] font-bold text-on-surface mb-2">
                  {t.hero.name || portfolioData.personal.name}
                </h1>
                <p className="text-primary font-headline-md text-base sm:text-lg font-bold mb-4">
                  {t.hero.title || portfolioData.personal.title}
                </p>
                <div className="flex flex-wrap gap-5 text-label-sm font-label-sm text-on-surface-variant">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-primary">mail</span>
                    {portfolioData.personal.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-secondary">call</span>
                    {portfolioData.personal.phone}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-primary">location_on</span>
                    {t.hero.location || portfolioData.personal.location}
                  </span>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h3 className="font-headline text-[20px] sm:text-[22px] font-bold text-primary mb-3 border-b border-outline-variant/20 pb-2">
                  {t.cvModal.summary}
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                  {t.hero.summary}
                </p>
              </div>

              {/* Programming & Technical Skills */}
              <div>
                <h3 className="font-headline text-[20px] sm:text-[22px] font-bold text-primary mb-4 border-b border-outline-variant/20 pb-2">
                  {t.cvModal.skills}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.skills.languages.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-transparent text-on-surface-variant border border-outline-variant/30 px-3.5 py-1.5 rounded-full text-label-sm font-label-sm font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="font-headline text-[20px] sm:text-[22px] font-bold text-primary mb-6 border-b border-outline-variant/20 pb-2">
                  {t.cvModal.experience}
                </h3>
                <div className="space-y-6">
                  {portfolioData.experiences.map((exp) => {
                    const locExp = t.experiencesData?.[exp.id] || exp;
                    return (
                      <div
                        key={exp.id}
                        className="border-l-2 rtl:border-r-2 rtl:border-l-0 border-primary pl-5 rtl:pr-5 rtl:pl-0 py-1 cv-section-block"
                      >
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-1">
                          <h4 className="text-headline-md font-headline-md text-on-surface">{locExp.role}</h4>
                          <span className="text-label-sm font-label-sm text-primary font-bold">{locExp.period}</span>
                        </div>
                        <p className="text-body-md font-bold text-on-surface-variant">{locExp.company} — {locExp.location}</p>
                        <p className="text-body-md text-on-surface-variant mt-2 leading-relaxed">{locExp.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Academic Education */}
              <div>
                <h3 className="font-headline text-[20px] sm:text-[22px] font-bold text-primary mb-4 border-b border-outline-variant/20 pb-2">
                  {t.cvModal.education}
                </h3>
                <div className="space-y-4">
                  {portfolioData.education.map((edu) => {
                    const locEdu = t.educationData?.[edu.id] || edu;
                    return (
                      <div key={edu.id} className="bg-transparent p-5 rounded-2xl border border-outline-variant/30 cv-section-block">
                        <h4 className="text-headline-md font-headline-md text-on-surface">{locEdu.degree}</h4>
                        <p className="text-body-md text-on-surface-variant mt-1">{locEdu.institution} ({locEdu.period})</p>
                        {locEdu.grade && (
                          <p className="text-label-sm font-label-sm text-primary font-bold mt-2 inline-block bg-transparent px-3 py-1 rounded-md border border-primary/40">
                            {locEdu.grade}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Courses & Certifications */}
              <div>
                <h3 className="font-headline text-[20px] sm:text-[22px] font-bold text-primary mb-4 border-b border-outline-variant/20 pb-2">
                  {t.cvModal.certifications}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {portfolioData.certifications.map((cert) => {
                    const locCert = t.certificationsData?.[cert.id] || cert;
                    return (
                      <div key={cert.id} className="bg-transparent p-4 rounded-xl border border-outline-variant/30 cv-section-block">
                        <p className="text-body-md font-bold text-on-surface">{locCert.title}</p>
                        <p className="text-label-sm text-on-surface-variant mt-1 font-mono">{locCert.issuer} • {locCert.period}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
