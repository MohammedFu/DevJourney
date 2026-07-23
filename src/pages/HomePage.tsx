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
    <div className="pt-24 pb-20 relative">
      {/* Background Aurora Blur Blobs */}
      <div className="aurora-blur top-[-100px] left-[-100px]"></div>
      <div className="aurora-blur bottom-[10%] right-[-100px] opacity-70"></div>

      {/* Hero Section */}
      <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[75vh] py-10">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 order-2 lg:order-1 text-left rtl:text-right"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-label-sm font-label-sm uppercase tracking-widest">{t.hero.status}</span>
          </motion.div>

          {/* Line 1: Main Headline with Smaller Greeting & Prominent Animated Name (Extra Bottom Spacing for Arabic Descenders) */}
          <motion.h1 variants={itemVariants} className="font-headline-xl mb-2 tracking-tight leading-relaxed flex flex-wrap items-baseline gap-x-3 pb-3">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-[26px] text-on-surface-variant font-medium">
              {t.hero.hi}
            </span>
            <span className="hero-gradient text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold pb-2 inline-block">
              <TypewriterText words={[t.hero.name]} />
            </span>
          </motion.h1>

          {/* Line 2: Separate Line for Title / Building Text */}
          <motion.div variants={itemVariants} className="text-on-surface-variant text-headline-lg lg:text-[32px] font-headline font-semibold mb-6">
            {t.hero.building}
          </motion.div>

          {/* Intro Description */}
          <motion.p variants={itemVariants} className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mb-10">
            {t.hero.summary}
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenCvModal}
              className="primary-btn-gradient text-on-primary px-8 py-4 rounded-lg font-bold text-label-md font-label-md shadow-lg shadow-primary/20 hover:brightness-110 hover:shadow-primary/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              {t.hero.downloadCv}
              <span className="material-symbols-outlined text-xl">download</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('projects')}
              className="border border-outline-variant px-8 py-4 rounded-lg font-bold text-label-md font-label-md text-primary hover:bg-white/5 transition-all flex items-center gap-2 cursor-pointer"
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
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
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
                className="w-full h-[400px] md:h-[460px] object-cover rounded-[32px]"
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

      {/* Core Expertise Bento Grid */}
      <section className="mt-32 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
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
                } glass-card p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between text-left rtl:text-right`}
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
      <section className="mt-32 border-y border-white/10 py-16 bg-surface-container-lowest/50 relative overflow-hidden">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-wrap justify-around gap-10 sm:gap-16 text-center relative z-10">
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
