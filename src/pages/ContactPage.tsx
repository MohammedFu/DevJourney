import React, { useState, useEffect } from 'react';
import { motion } from '../utils/motion';
import confetti from '../utils/confetti';
import { portfolioData } from '../data/portfolioData';
import { useApp } from '../context/AppContext';

export const ContactPage: React.FC = () => {
  const { t, isRtl } = useApp();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sanaaTime, setSanaaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Aden',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setSanaaTime(formatter.format(new Date()) + ' (GMT+3)');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);

      // Trigger Confetti Explosion
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0055ff', '#7bd0ff', '#ffffff', '#181919'],
        });
      } catch (err) {
        console.error('Confetti error:', err);
      }

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 6000);
    }
  };

  return (
    <div className="pt-6 pb-24 max-w-[1120px] mx-auto px-6 text-left rtl:text-right relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute -top-24 -right-24 rtl:-left-24 rtl:right-auto w-96 h-96 ambient-glow"></div>
      <div className="absolute top-1/2 -left-48 rtl:-right-48 rtl:left-auto w-96 h-96 ambient-glow"></div>

      {/* Hero Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-main)] mb-4 leading-tight">
          {t.contactPage.titlePrefix}
          <span className="text-[var(--text-accent)] italic">{t.contactPage.titleItalic}</span>
          {t.contactPage.titleSuffix}
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-sub)] max-w-2xl leading-relaxed">
          {t.contactPage.subtitle}
        </p>
      </motion.header>

      {/* Contact Grid (Form + Direct Connections) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        {/* Left Form */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-[var(--bg-card)] p-8 sm:p-10 rounded-2xl border border-[var(--border-color)] shadow-2xl relative"
        >
          <h2 className="font-serif text-2xl font-bold text-[var(--text-main)] mb-6">
            {t.contactPage.formTitle}
          </h2>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 bg-[var(--bg-card-sub)] border border-[var(--border-color)] rounded-xl text-center space-y-4 shadow-xl"
            >
              <span className="material-symbols-outlined text-[var(--text-accent)] text-5xl animate-bounce">
                check_circle
              </span>
              <h3 className="font-serif text-2xl font-bold text-[var(--text-main)]">
                {t.contactPage.messageReceivedTitle}
              </h3>
              <p className="text-sm text-[var(--text-sub)]">
                {t.contactPage.messageReceivedText}
                <strong className="text-[var(--text-accent)]">{formData.name}</strong>
                {t.contactPage.messageReceivedEnd}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group relative">
                <label className="text-xs uppercase font-bold tracking-wider text-[var(--text-sub)] mb-2 block group-focus-within:text-[var(--text-accent)] transition-colors">
                  {t.contactPage.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contactPage.namePlaceholder}
                  className="w-full bg-transparent border-0 border-b border-[var(--border-color)] py-3 text-sm text-[var(--text-main)] focus:ring-0 focus:border-[var(--bg-accent)] transition-all placeholder:text-[var(--text-sub)]/50 outline-none"
                />
              </div>

              <div className="group relative">
                <label className="text-xs uppercase font-bold tracking-wider text-[var(--text-sub)] mb-2 block group-focus-within:text-[var(--text-accent)] transition-colors">
                  {t.contactPage.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t.contactPage.emailPlaceholder}
                  className="w-full bg-transparent border-0 border-b border-[var(--border-color)] py-3 text-sm text-[var(--text-main)] focus:ring-0 focus:border-[var(--bg-accent)] transition-all placeholder:text-[var(--text-sub)]/50 outline-none"
                />
              </div>

              <div className="group relative">
                <label className="text-xs uppercase font-bold tracking-wider text-[var(--text-sub)] mb-2 block group-focus-within:text-[var(--text-accent)] transition-colors">
                  {t.contactPage.messageLabel}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contactPage.messagePlaceholder}
                  className="w-full bg-transparent border-0 border-b border-[var(--border-color)] py-3 text-sm text-[var(--text-main)] focus:ring-0 focus:border-[var(--bg-accent)] transition-all placeholder:text-[var(--text-sub)]/50 resize-none outline-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0px 0px 25px rgba(0, 85, 255, 0.4)' }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="group flex items-center justify-center gap-3 bg-[var(--bg-accent)] text-[var(--text-accent-on)] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg transition-all"
              >
                {t.contactPage.sendButton}
                <span className={`material-symbols-outlined transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                  arrow_forward
                </span>
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Right Direct Connections */}
        <motion.div
          initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--text-sub)] mb-4">
            {t.contactPage.directConn}
          </h2>

          <div className="flex flex-col gap-4">
            {/* Email Card */}
            <motion.a
              whileHover={{ y: -3 }}
              href={`mailto:${portfolioData.personal.email}`}
              className="group flex items-center justify-between p-5 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--bg-accent)] rounded-2xl transition-all shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[var(--bg-accent-sub)] rounded-xl border border-[var(--border-color)]">
                  <span className="material-symbols-outlined text-[var(--bg-accent)] text-2xl">mail</span>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-sub)]">{t.contactPage.email}</p>
                  <p className="font-bold text-sm text-[var(--text-main)] group-hover:text-[var(--text-accent)] transition-colors">
                    {portfolioData.personal.email}
                  </p>
                </div>
              </div>
              <span className={`material-symbols-outlined text-[var(--text-sub)] group-hover:text-[var(--text-accent)] transition-colors ${isRtl ? 'rotate-90' : ''}`}>
                north_east
              </span>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              whileHover={{ y: -3 }}
              href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
              className="group flex items-center justify-between p-5 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--bg-accent)] rounded-2xl transition-all shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[var(--bg-accent-sub)] rounded-xl border border-[var(--border-color)]">
                  <span className="material-symbols-outlined text-[var(--bg-accent)] text-2xl">call</span>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-sub)]">{t.contactPage.phone}</p>
                  <p className="font-bold text-sm text-[var(--text-main)] group-hover:text-[var(--text-accent)] transition-colors">
                    {portfolioData.personal.phone}
                  </p>
                </div>
              </div>
              <span className={`material-symbols-outlined text-[var(--text-sub)] group-hover:text-[var(--text-accent)] transition-colors ${isRtl ? 'rotate-90' : ''}`}>
                north_east
              </span>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              whileHover={{ y: -3 }}
              href={portfolioData.personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--bg-accent)] rounded-2xl transition-all shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[var(--bg-accent-sub)] rounded-xl border border-[var(--border-color)]">
                  <span className="material-symbols-outlined text-[var(--bg-accent)] text-2xl">link</span>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-sub)]">{t.contactPage.linkedIn}</p>
                  <p className="font-bold text-sm text-[var(--text-main)] group-hover:text-[var(--text-accent)] transition-colors">
                    mohammed-al-sanhani
                  </p>
                </div>
              </div>
              <span className={`material-symbols-outlined text-[var(--text-sub)] group-hover:text-[var(--text-accent)] transition-colors ${isRtl ? 'rotate-90' : ''}`}>
                north_east
              </span>
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              whileHover={{ y: -3 }}
              href={portfolioData.personal.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--bg-accent)] rounded-2xl transition-all shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[var(--bg-accent-sub)] rounded-xl border border-[var(--border-color)]">
                  <span className="material-symbols-outlined text-[var(--bg-accent)] text-2xl">terminal</span>
                </div>
                <div>
                  <p className="text-xs text-[var(--text-sub)]">{t.contactPage.gitHub}</p>
                  <p className="font-bold text-sm text-[var(--text-main)] group-hover:text-[var(--text-accent)] transition-colors">
                    MohammedFu
                  </p>
                </div>
              </div>
              <span className={`material-symbols-outlined text-[var(--text-sub)] group-hover:text-[var(--text-accent)] transition-colors ${isRtl ? 'rotate-90' : ''}`}>
                north_east
              </span>
            </motion.a>
          </div>

          {/* Local Time Widget */}
          <div className="p-6 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-sub)]">
                {t.contactPage.localTime}
              </p>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--bg-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--bg-accent)]"></span>
              </span>
            </div>
            <p className="font-serif text-2xl font-bold text-[var(--text-accent)]">
              {sanaaTime || 'Calculating...'}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Beyond the Code: Bento Section */}
      <section className="mt-20">
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-bold text-[var(--text-main)] mb-2">
            {t.contactPage.beyondTitle}
          </h2>
          <p className="text-sm text-[var(--text-sub)]">
            {t.contactPage.beyondSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Leadership & Project Management Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 bg-[var(--bg-card)] border border-[var(--border-color)] p-8 rounded-2xl flex flex-col justify-between hover:border-[var(--bg-accent)] transition-all shadow-xl"
          >
            <div className="max-w-xl">
              <span className="material-symbols-outlined text-[var(--text-accent)] text-4xl mb-4">
                groups
              </span>
              <h3 className="font-serif text-2xl font-bold text-[var(--text-main)] mb-3">
                {t.contactPage.leadershipTitle}
              </h3>
              <p className="text-sm text-[var(--text-sub)] leading-relaxed">
                {t.contactPage.leadershipDesc}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {portfolioData.skills.softSkills.slice(0, 6).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[var(--bg-card-sub)] text-[var(--text-sub)] font-semibold text-xs rounded-full border border-[var(--border-color)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages & Adaptability Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-4 bg-[var(--bg-card)] border border-[var(--border-color)] p-8 rounded-2xl flex flex-col justify-between hover:border-[var(--bg-accent)] transition-all shadow-xl"
          >
            <div>
              <span className="material-symbols-outlined text-[var(--text-accent)] text-4xl mb-4">
                translate
              </span>
              <h3 className="font-serif text-2xl font-bold text-[var(--text-main)] mb-3">
                {t.contactPage.languagesTitle}
              </h3>
              <div className="space-y-3 mt-4">
                {portfolioData.skills.spokenLanguages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="font-bold text-[var(--text-main)]">{lang.name}</span>
                    <span className="text-xs text-[var(--text-accent-on)] font-bold bg-[var(--bg-accent)] px-2.5 py-1 rounded">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-color)]">
              <p className="text-xs text-[var(--text-sub)]">
                {t.contactPage.languagesDesc}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
