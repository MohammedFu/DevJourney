import React from 'react';
import { motion } from '../utils/motion';
import { portfolioData, type ExperienceItem, type EducationItem, type CertificationItem } from '../data/portfolioData';
import { useApp } from '../context/AppContext';

export const ExperiencePage: React.FC = () => {
  const { t } = useApp();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative pt-24 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
      {/* Background Aurora Glow Blobs */}
      <div className="aurora-glow top-20 -left-20"></div>
      <div className="aurora-glow bottom-20 -right-20"></div>

      {/* Header Section */}
      <header className="mb-16 text-left rtl:text-right">
        <span className="text-primary font-label-sm uppercase tracking-widest block mb-4">
          {t.experiencePage.badge}
        </span>
        <h1 className="text-headline-xl font-headline-xl mb-6 max-w-2xl leading-tight text-on-surface">
          {t.experiencePage.title}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {t.experiencePage.titleHighlight}
          </span>
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-xl">
          {t.experiencePage.subtitle}
        </p>
      </header>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Career Timeline (Col Span 7) */}
        <section className="lg:col-span-7 glass-card p-8 md:p-12 rounded-xl relative overflow-hidden text-left rtl:text-right">
          <h2 className="text-headline-lg font-headline-lg mb-12 flex items-center gap-3 text-on-surface">
            <span
              className="material-symbols-outlined text-primary text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              work
            </span>
            {t.experiencePage.timelineTitle}
          </h2>

          <div className="relative pl-8 rtl:pr-8 rtl:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-[3px] rtl:right-[3px] rtl:left-auto top-2 bottom-8 w-px timeline-line"></div>

            {/* Timeline Items */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-16"
            >
              {portfolioData.experiences.map((job: ExperienceItem, index: number) => {
                const isCurrent = job.isCurrent || index === 0;
                const locJob = t.experiencesData?.[job.id] || job;

                return (
                  <motion.div
                    key={job.id || index}
                    variants={itemVariants}
                    className={`relative ${!isCurrent ? 'opacity-90' : ''}`}
                  >
                    {/* Glowing Marker Dot */}
                    <div
                      className={`absolute -left-[33px] rtl:-right-[33px] rtl:left-auto top-1.5 w-4 h-4 rounded-full ${
                        isCurrent
                          ? 'bg-primary ring-4 ring-primary/20'
                          : 'bg-surface-variant border-2 border-primary'
                      }`}
                    ></div>

                    {/* Job Header */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <h3 className="text-headline-md font-headline-md text-on-surface">
                          {locJob.role}
                        </h3>
                        <p className="text-primary font-label-md">
                          {locJob.company} • {locJob.period}
                        </p>
                      </div>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-label-sm border border-primary/20 self-start">
                        {t.experiencePage.fullTime}
                      </span>
                    </div>

                    {/* Job Highlights */}
                    <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">
                      {locJob.description}
                    </p>

                    {/* Technologies Used */}
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-surface-variant/50 border border-outline-variant rounded-full text-label-sm text-on-surface-variant"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Sidebar: Education & Certs (Col Span 5) */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-8 text-left rtl:text-right">
          {/* Education Card */}
          <section className="glass-card p-8 rounded-xl relative group">
            <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <span
                className="material-symbols-outlined text-[64px] text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                school
              </span>
            </div>

            <h2 className="text-headline-md font-headline-md mb-8 flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-primary text-2xl">history_edu</span>
              {t.experiencePage.academicTitle}
            </h2>

            <div className="space-y-8">
              {portfolioData.education.map((edu: EducationItem, index: number) => {
                const locEdu = t.educationData?.[edu.id] || edu;

                return (
                  <div
                    key={edu.id || index}
                    className={index > 0 ? 'pt-6 border-t border-outline-variant/30' : ''}
                  >
                    <p className="text-label-sm text-primary mb-1">{locEdu.period}</p>
                    <h4 className="text-body-lg font-bold text-on-surface">
                      {locEdu.degree}
                    </h4>
                    <p className="text-body-md text-on-surface-variant">
                      {locEdu.institution}
                    </p>
                    {locEdu.grade && (
                      <p className="text-label-sm text-on-surface-variant mt-2 italic">
                        {locEdu.grade}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Certifications Card */}
          <section className="glass-card p-8 rounded-xl">
            <h2 className="text-headline-md font-headline-md mb-8 flex items-center gap-3 text-on-surface">
              <span className="material-symbols-outlined text-primary text-2xl">verified</span>
              {t.experiencePage.certificationsTitle}
            </h2>

            <div className="grid grid-cols-1 gap-4">
              {portfolioData.certifications.map((cert: CertificationItem, index: number) => {
                const locCert = t.certificationsData?.[cert.id] || cert;

                return (
                  <div
                    key={cert.id || index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors border border-outline-variant/20"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary">workspace_premium</span>
                    </div>
                    <div>
                      <h4 className="text-body-md font-bold text-on-surface">{locCert.title}</h4>
                      <p className="text-label-sm text-on-surface-variant">
                        {locCert.issuer} • {locCert.period}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Dynamic Achievement Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-headline-lg font-headline-lg text-primary mb-1">
                {portfolioData.personal.stats.projectsShipped}+
              </div>
              <p className="text-label-sm uppercase tracking-wider text-on-surface-variant">
                {t.experiencePage.projectsDone}
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl text-center">
              <div className="text-headline-lg font-headline-lg text-secondary mb-1">
                {portfolioData.experiences.length * 3}+
              </div>
              <p className="text-label-sm uppercase tracking-wider text-on-surface-variant">
                {t.experiencePage.milestones}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
