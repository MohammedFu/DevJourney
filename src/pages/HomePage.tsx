import React from 'react';
import { motion } from '../utils/motion';
import { portfolioData } from '../data/portfolioData';
import { TypewriterText } from '../components/TypewriterText';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { useApp } from '../context/AppContext';

interface HomePageProps {
  onNavigate: (page: 'home' | 'experience' | 'projects' | 'contact') => void;
  onOpenCvModal: () => void;
}

const projectLanguageDefinitions = [
  { name: 'TypeScript', shortName: 'TS', aliases: ['typescript'] },
  { name: 'JavaScript', shortName: 'JS', aliases: ['javascript', 'vue.js'] },
  { name: 'Kotlin', shortName: 'KT', aliases: ['kotlin'] },
  { name: 'Dart', shortName: 'DART', aliases: ['dart'] },
  { name: 'PHP', shortName: 'PHP', aliases: ['php'] },
  { name: 'Go', shortName: 'GO', aliases: ['go'] },
  { name: 'SQL', shortName: 'SQL', aliases: ['mysql', 'postgresql', 'sqlite'] },
  { name: 'HTML & CSS', shortName: 'WEB', aliases: ['html', 'css', 'tailwind'] },
];

const projectLanguageStats = projectLanguageDefinitions.map((language) => ({
  ...language,
  projectCount: portfolioData.projects.filter((project) => {
    const projectStack = [project.language, ...project.technologies].join(' ').toLowerCase();
    return language.aliases.some((alias) => projectStack.includes(alias));
  }).length,
}));

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenCvModal }) => {
  const { t, isRtl, language } = useApp();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="pt-24 pb-20 relative">
      {/* Signature background blur accents */}
      <div className="portfolio-blur top-[-100px] left-[-100px]"></div>
      <div className="portfolio-blur bottom-[10%] right-[-100px] opacity-70"></div>

      {/* Hero Section */}
      <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-gutter items-center lg:min-h-[75vh] py-6 sm:py-10">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-copy min-w-0 lg:col-span-7 order-1 text-left rtl:text-right"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-label-sm font-label-sm uppercase tracking-widest">{t.hero.status}</span>
          </motion.div>

          {/* Line 1: Main Headline with Smaller Greeting & Prominent Animated Name (Extra Bottom Spacing for Arabic Descenders) */}
          <motion.h1 variants={itemVariants} className="font-headline-xl mb-2 tracking-tight leading-relaxed flex flex-wrap items-baseline gap-x-3 pb-3 min-w-0">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-[26px] text-on-surface-variant font-medium">
              {t.hero.hi}
            </span>
            <span
              className={`font-bold pb-2 inline-block max-w-full ${
                language === 'en'
                  ? 'hero-name-single-line'
                  : 'text-3xl sm:text-4xl md:text-5xl lg:text-[52px]'
              }`}
            >
              <TypewriterText key={language} words={[t.hero.name]} />
            </span>
          </motion.h1>

          {/* Line 2: Separate Line for Title / Building Text */}
          <motion.div variants={itemVariants} className="text-on-surface-variant text-2xl sm:text-headline-lg lg:text-[32px] font-headline font-semibold mb-6">
            {t.hero.building}
          </motion.div>

          {/* Intro Description */}
          <motion.p variants={itemVariants} className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mb-10">
            {t.hero.summary}
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenCvModal}
              className="primary-btn-gradient w-full sm:w-auto justify-center text-on-primary px-6 sm:px-8 py-4 rounded-lg font-bold text-label-md font-label-md shadow-lg shadow-primary/20 hover:brightness-110 hover:shadow-primary/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              {t.hero.downloadCv}
              <span className="material-symbols-outlined text-xl">download</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('projects')}
              className="border border-outline-variant w-full sm:w-auto justify-center px-6 sm:px-8 py-4 rounded-lg font-bold text-label-md font-label-md text-primary hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer"
            >
              {t.hero.viewWork}
              <span className={`material-symbols-outlined text-xl ${isRtl ? 'rotate-180' : ''}`}>
                arrow_forward
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Profile Portrait with Bento Accent Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lg:col-span-5 order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group w-full max-w-[420px]">
            {/* Glassy Frame Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl rounded-[40px] group-hover:opacity-100 transition-opacity"></div>
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 3, rotateX: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative glass-card p-4 rounded-[40px] overflow-hidden"
            >
              <img
                src="/images/profile.jpg"
                alt={portfolioData.personal.name}
                className="hero-portrait w-full md:h-[460px] object-cover rounded-[32px]"
              />
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="absolute -bottom-6 -left-6 rtl:-right-6 rtl:left-auto glass-card p-6 rounded-2xl border border-white/10 shadow-2xl z-20 hidden sm:block text-left rtl:text-right"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    deployed_code
                  </span>
                </div>
                <div>
                  <div className="text-headline-md font-headline-md text-primary leading-tight">
                    {t.hero.expYears}
                  </div>
                  <div className="text-label-sm font-label-sm text-on-surface-variant">
                    {t.hero.expTitle}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Repository-backed Programming Languages */}
      <section className="mt-14 sm:mt-20 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
          className="glass-card rounded-3xl p-6 md:p-8 relative overflow-hidden text-left rtl:text-right"
        >
          <div className="absolute -top-24 -right-24 rtl:-left-24 rtl:right-auto w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-7">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-secondary text-label-sm font-label-sm uppercase tracking-widest mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
                </svg>
                {t.expertise.languageEvidenceBadge}
              </div>
              <h2 className="text-headline-lg font-headline-lg text-on-surface mb-2 break-words">
                {t.expertise.projectLanguagesTitle}
              </h2>
              <p className="text-on-surface-variant text-body-md font-body-md leading-relaxed">
                {t.expertise.projectLanguagesSubtitle}
              </p>
            </div>

            <div className="flex items-baseline gap-2 shrink-0">
              <span className="text-headline-xl font-headline-xl text-primary leading-none">
                {projectLanguageStats.length}
              </span>
              <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">
                {t.expertise.languagesInUse}
              </span>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-3">
            {projectLanguageStats.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.045 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-outline-variant/30 bg-surface-container/70 px-4 py-4 min-h-28 flex flex-col justify-between transition-colors hover:border-primary/50 hover:bg-surface-container-high"
              >
                <span className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-primary/12 border border-primary/20 text-primary text-label-sm font-label-sm font-bold tracking-tight">
                  {language.shortName}
                </span>
                <div className="mt-4">
                  <h3 className="text-body-md font-bold text-on-surface leading-tight">
                    {language.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-label-sm text-on-surface-variant uppercase tracking-wide">
                    {language.projectCount}{' '}
                    {language.projectCount === 1
                      ? t.expertise.repositorySingular
                      : t.expertise.repositoryPlural}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Core Expertise Bento Grid */}
      <section className="mt-20 sm:mt-28 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-left rtl:text-right"
        >
          <h2 className="text-headline-lg font-headline-lg mb-2">{t.expertise.sectionTitle}</h2>
          <p className="text-on-surface-variant text-body-md font-body-md">
            {t.expertise.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-gutter"
        >
          {portfolioData.skills.categories.map((cat, index) => {
            const localizedCat = t.expertise.categories[index] || cat;
            const isWide = index === 0 || index === 3;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400 } }}
                className={`${
                  isWide ? 'md:col-span-8' : 'md:col-span-4'
                } glass-card p-5 sm:p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between text-left rtl:text-right`}
              >
                <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                  <span className="material-symbols-outlined text-7xl">{cat.icon}</span>
                </div>

                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary mb-4 text-4xl block">
                    {cat.icon}
                  </span>
                  <h3 className="text-headline-md font-headline-md mb-4 text-on-surface group-hover:text-primary transition-colors">
                    {localizedCat.title}
                  </h3>
                  <p className="text-on-surface-variant text-body-md font-body-md max-w-md mb-6 leading-relaxed">
                    {localizedCat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-variant/30 relative z-10">
                  {cat.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-surface-container rounded-full text-label-sm font-label-sm border border-outline-variant/30 text-on-surface-variant"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Dynamic Stat Section */}
      <section className="mt-20 sm:mt-32 border-y border-white/10 py-12 sm:py-16 bg-surface-container-lowest/50 relative overflow-hidden">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <p className="text-headline-xl font-headline-xl text-primary leading-tight">
              <AnimatedCounter targetValue={portfolioData.personal.stats.projectsShipped} />
            </p>
            <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">
              {t.stats.projectsShipped}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-2"
          >
            <p className="text-headline-xl font-headline-xl text-secondary leading-tight">
              <AnimatedCounter targetValue={portfolioData.personal.stats.systemUptime} />
            </p>
            <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">
              {t.stats.systemUptime}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2"
          >
            <p className="text-headline-xl font-headline-xl text-primary leading-tight">
              <AnimatedCounter targetValue={portfolioData.personal.stats.commitsMade} />
            </p>
            <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">
              {t.stats.commitsPushed}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
