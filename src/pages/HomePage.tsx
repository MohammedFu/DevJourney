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

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenCvModal }) => {
  const { t, isRtl } = useApp();

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
    <div className="pt-6 pb-16">
      {/* Hero Section */}
      <section className="max-w-[1120px] mx-auto px-6 min-h-[82vh] flex flex-col md:flex-row items-center gap-12 py-12 md:py-20">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 space-y-7 order-2 md:order-1 text-left rtl:text-right"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--bg-accent-sub)] border border-[var(--border-color)] shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--bg-accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--bg-accent)]"></span>
            </span>
            <span className="text-xs font-bold text-white uppercase tracking-widest">
              {t.hero.status}
            </span>
          </motion.div>

          {/* Main Serif Headline with Dynamic Typewriter */}
          <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-main)] leading-[1.15]">
            {t.hero.hi} <span className="text-[var(--text-accent)]">{t.hero.name}</span>, {t.hero.building} <br />
            <TypewriterText words={t.hero.typewriter} />
          </motion.h1>

          {/* Intro Description */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-[var(--text-sub)] max-w-xl leading-relaxed">
            {t.hero.summary}
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0px 0px 25px rgba(0, 85, 255, 0.4)' }}
              whileTap={{ scale: 0.96 }}
              onClick={onOpenCvModal}
              className="group flex items-center justify-center gap-2.5 bg-[var(--bg-accent)] text-[var(--text-accent-on)] px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              {t.hero.downloadCv}
              <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-y-0.5">
                download
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onNavigate('projects')}
              className="flex items-center justify-center gap-2.5 border border-[var(--border-color)] hover:border-[var(--bg-accent)] bg-[var(--bg-card)] px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-[var(--text-main)] transition-all shadow-sm"
            >
              {t.hero.viewWork}
              <span className={`material-symbols-outlined text-xl transition-transform ${isRtl ? 'rotate-180' : 'group-hover:translate-x-1'}`}>
                arrow_forward
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Headshot / Visual Card Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex-1 w-full md:w-auto flex justify-center order-1 md:order-2"
        >
          <div className="relative w-full aspect-square max-w-[420px]">
            {/* Background Accent Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-[var(--bg-accent)]/20 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"></div>

            {/* Image Container */}
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 3, rotateX: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-[var(--border-color)] shadow-2xl bg-[var(--bg-card)] group"
            >
              <img
                src="/images/profile.jpg"
                alt="Mohammed Fuad Al_Sanhani Professional Software Engineer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-app)] via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity"></div>
            </motion.div>

            {/* Experience Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="absolute -bottom-6 -right-4 rtl:-left-4 rtl:right-auto p-5 rounded-2xl bg-[var(--bg-card)] backdrop-blur-md border border-[var(--border-color)] shadow-2xl z-20 hidden sm:block text-left rtl:text-right"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[var(--bg-accent-sub)] rounded-xl border border-[var(--border-color)]">
                  <span className="material-symbols-outlined text-[var(--bg-accent)] text-2xl">
                    terminal
                  </span>
                </div>
                <div>
                  <p className="text-[11px] text-[var(--text-sub)] font-bold uppercase tracking-wider">{t.hero.expTitle}</p>
                  <p className="font-serif text-xl font-bold text-[var(--text-main)]">
                    {t.hero.expYears}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Core Expertise Section (Bento Grid) */}
      <section className="max-w-[1120px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-left rtl:text-right"
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-main)] font-semibold mb-3">
            {t.expertise.sectionTitle}
          </h2>
          <div className="h-1 w-20 bg-[var(--bg-accent)] rounded-full shadow-[0_0_10px_var(--glow-color)]"></div>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portfolioData.skills.categories.map((cat, index) => {
            const localizedCat = t.expertise.categories[index] || cat;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 400 } }}
                className="tech-card group relative p-7 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--bg-accent)] transition-colors shadow-xl text-left rtl:text-right flex flex-col justify-between"
              >
                <div className="icon-glow absolute top-6 left-6 rtl:right-6 rtl:left-auto w-12 h-12 bg-[var(--bg-accent)] opacity-0 transition-opacity rounded-full blur-xl pointer-events-none"></div>

                <div>
                  <div className="mb-5 inline-block p-3 bg-[var(--bg-accent-sub)] rounded-xl border border-[var(--border-color)] shadow-inner">
                    <span className="material-symbols-outlined text-3xl text-[var(--bg-accent)]">
                      {cat.icon}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-[var(--text-main)] group-hover:text-[var(--text-accent)] transition-colors">
                    {localizedCat.title}
                  </h3>
                  <p className="text-xs text-[var(--text-sub)] leading-relaxed mb-6">
                    {localizedCat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border-color)]">
                  {cat.skills.map((s, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.08 }}
                      className="bg-[var(--bg-card-sub)] text-[var(--text-sub)] text-[11px] font-medium px-2.5 py-1 rounded-md border border-[var(--border-color)]"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Dynamic Stat Section (Atmospheric & Animated Counter) */}
      <section className="w-full bg-[var(--bg-surface-lowest)] py-16 relative overflow-hidden border-y border-[var(--border-color)] my-8">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(0,85,255,0.15)_0%,_transparent_70%)]"></div>
        </div>
        <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap justify-around gap-10 sm:gap-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <p className="text-[var(--text-accent)] font-serif text-4xl sm:text-5xl font-bold tracking-tight">
              <AnimatedCounter targetValue={portfolioData.personal.stats.projectsShipped} />
            </p>
            <p className="text-xs text-[var(--text-sub)] font-bold uppercase tracking-widest">
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
            <p className="text-[var(--text-accent)] font-serif text-4xl sm:text-5xl font-bold tracking-tight">
              <AnimatedCounter targetValue={portfolioData.personal.stats.systemUptime} />
            </p>
            <p className="text-xs text-[var(--text-sub)] font-bold uppercase tracking-widest">
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
            <p className="text-[var(--text-accent)] font-serif text-4xl sm:text-5xl font-bold tracking-tight">
              <AnimatedCounter targetValue={portfolioData.personal.stats.commitsMade} />
            </p>
            <p className="text-xs text-[var(--text-sub)] font-bold uppercase tracking-widest">
              {t.stats.commitsPushed}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
