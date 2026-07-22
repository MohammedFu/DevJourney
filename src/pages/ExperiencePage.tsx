import React from 'react';
import { motion } from '../utils/motion';
import { portfolioData } from '../data/portfolioData';
import { useApp } from '../context/AppContext';

export const ExperiencePage: React.FC = () => {
  const { t, isRtl } = useApp();

  return (
    <div className="pt-6 pb-24 max-w-[1120px] mx-auto px-6 text-left rtl:text-right">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-main)] mb-4">
          {t.experiencePage.title}
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-sub)] max-w-2xl leading-relaxed">
          {t.experiencePage.subtitle}
        </p>
      </motion.header>

      {/* Experience Timeline */}
      <section className="relative my-16">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 rtl:left-auto rtl:right-4 rtl:md:right-1/2 top-0 bottom-0 w-[2px] timeline-line -translate-x-1/2 rtl:translate-x-1/2"></div>

        <div className="space-y-14">
          {portfolioData.experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isEven ? (isRtl ? 40 : -40) : (isRtl ? -40 : 40), y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
              >
                {/* Date Label (Desktop) */}
                <div
                  className={`hidden md:block pt-3 ${
                    isEven
                      ? 'text-right rtl:text-left pr-12 rtl:pr-0 rtl:pl-12'
                      : 'order-2 pl-12 rtl:pl-0 rtl:pr-12'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-accent)] bg-[var(--bg-accent-sub)] text-white px-3.5 py-1.5 rounded-full border border-[var(--border-color)] shadow-md">
                    {exp.period}
                  </span>
                </div>

                {/* Card Container */}
                <div
                  className={`pl-10 rtl:pl-0 rtl:pr-10 md:pl-0 rtl:md:pr-0 relative ${
                    isEven
                      ? 'md:pl-12 rtl:md:pl-0 rtl:md:pr-12'
                      : 'order-1 md:pr-12 rtl:md:pr-0 rtl:md:pl-12 md:text-right rtl:md:text-left'
                  }`}
                >
                  {/* Glowing Marker Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 500, delay: 0.2 }}
                    className={`absolute top-4 w-4 h-4 rounded-full z-10 ${
                      exp.isCurrent
                        ? 'bg-[var(--bg-accent)] ring-4 ring-[var(--bg-accent)]/30 shadow-[0_0_20px_var(--glow-color)] left-2 rtl:left-auto rtl:right-2 md:left-auto md:left-1/2 -translate-x-1/2'
                        : 'bg-[var(--text-sub)] left-2 rtl:left-auto rtl:right-2 md:left-auto md:left-1/2 -translate-x-1/2'
                    }`}
                  ></motion.div>

                  {/* Mobile Date Tag */}
                  <div className="md:hidden mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-white bg-[var(--bg-accent-sub)] px-3 py-1 rounded-full border border-[var(--border-color)]">
                      {exp.period}
                    </span>
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="impact-card-hover border border-[var(--border-color)] bg-[var(--bg-card)] p-6 sm:p-8 rounded-2xl group shadow-xl hover:border-[var(--bg-accent)] transition-all"
                  >
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-main)] mb-1 group-hover:text-[var(--text-accent)] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--text-accent)] mb-3">
                      {exp.company} • <span className="text-[var(--text-sub)] font-normal">{exp.location}</span>
                    </p>
                    <p className="text-sm text-[var(--text-sub)] leading-relaxed mb-6">
                      "{exp.description}"
                    </p>

                    {/* Tech Pills */}
                    <div
                      className={`flex flex-wrap gap-2 ${
                        !isEven ? 'md:justify-end rtl:md:justify-start' : ''
                      }`}
                    >
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-[var(--bg-card-sub)] text-[var(--text-sub)] px-3 py-1 rounded-full text-xs font-medium border border-[var(--border-color)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Education & Certifications Bento Grid */}
      <section className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 border border-[var(--border-color)] rounded-2xl p-8 bg-[var(--bg-card)] flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
              <span className="material-symbols-outlined text-[var(--text-accent)] text-3xl">
                school
              </span>
              <h2 className="font-serif text-2xl font-bold text-[var(--text-main)]">
                {t.experiencePage.academicTitle}
              </h2>
            </div>

            <div className="space-y-6">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                    <h3 className="font-serif text-lg font-bold text-[var(--text-main)]">
                      {edu.degree}
                    </h3>
                    <span className="text-xs text-[var(--text-accent)] font-bold">{edu.period}</span>
                  </div>
                  <p className="text-sm text-[var(--text-sub)] font-medium">{edu.institution}</p>
                  <p className="text-xs font-bold text-[var(--text-accent-on)] bg-[var(--bg-accent)] px-2.5 py-0.5 rounded shadow-sm mt-1 inline-block">
                    {edu.grade}
                  </p>
                  {edu.details && (
                    <p className="text-xs text-[var(--text-sub)] mt-2 leading-relaxed">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="h-1 w-24 bg-[var(--bg-accent)] rounded-full shadow-[0_0_10px_var(--glow-color)]"></div>
          </div>
        </motion.div>

        {/* Certifications Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="border border-[var(--border-color)] rounded-2xl p-8 bg-[var(--bg-card)] flex flex-col shadow-xl"
        >
          <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
            <span className="material-symbols-outlined text-[var(--text-accent)] text-3xl">
              verified
            </span>
            <h2 className="font-serif text-2xl font-bold text-[var(--text-main)]">
              {t.experiencePage.certificationsTitle}
            </h2>
          </div>

          <ul className="space-y-6">
            {portfolioData.certifications.map((cert) => (
              <li key={cert.id} className="flex items-start gap-3.5">
                <div className="w-2.5 h-2.5 bg-[var(--bg-accent)] rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_var(--glow-color)]"></div>
                <div>
                  <p className="text-sm font-bold text-[var(--text-main)]">{cert.title}</p>
                  <p className="text-xs text-[var(--text-sub)] mt-1">{cert.issuer} • {cert.period}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Visual Interest Banner */}
      <section className="mt-20">
        <div className="w-full h-[320px] rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl relative">
          <img
            src="/images/engineering-environment-banner.png"
            alt="Modern Software Engineering Environment"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-app)] via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-accent)] mb-1">
                {t.experiencePage.philosophySub}
              </p>
              <h3 className="font-serif text-2xl font-bold text-[var(--text-main)]">
                {t.experiencePage.philosophyTitle}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
