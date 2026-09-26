import React, { useState, useEffect } from 'react';
import { motion } from '../utils/motion';
import { portfolioData } from '../data/portfolioData';
import { useApp } from '../context/AppContext';

export const ContactPage: React.FC = () => {
  const { t, isRtl } = useApp();
  const [sanaaTime, setSanaaTime] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Collaboration',
    message: '',
  });

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
      setSanaaTime(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const honeypot = new FormData(e.currentTarget).get('_honey');
    if (honeypot) return;

    setIsSubmitting(true);
    setSubmissionError(false);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${portfolioData.personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
          _subject: `Portfolio contact: ${formData.subject}`,
          _template: 'table',
          _honey: '',
        }),
      });

      const result: { success?: boolean | string } = await response.json();
      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error('Contact form service rejected the message');
      }

      setFormSubmitted(true);
    } catch {
      setSubmissionError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative pt-24 pb-24 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Background Atmospheric Glow */}
      <div className="portfolio-glow bg-primary w-[500px] h-[500px] -top-40 -left-40"></div>
      <div className="portfolio-glow bg-secondary w-[400px] h-[400px] top-1/2 -right-20"></div>

      {/* Hero Header */}
      <section className="mb-12 text-left rtl:text-right">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-label-sm font-label-sm text-primary">
            {t.contactPage.badge}
          </span>
        </div>
        <h1 className="text-headline-xl font-headline-xl text-on-surface mb-4 leading-tight max-w-2xl">
          {t.contactPage.titlePrefix}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            {t.contactPage.titleItalic}
          </span>{' '}
          {t.contactPage.titleSuffix}
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          {t.contactPage.subtitle}
        </p>
      </section>

      {/* Bento Layout Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch text-left rtl:text-right">
        {/* Contact Form Section (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glass-card p-5 sm:p-8 md:p-10 rounded-2xl relative overflow-hidden group flex flex-col justify-between"
        >
          <div className="relative z-10">
            <h2 className="text-headline-lg font-headline-lg mb-6 sm:mb-8 text-on-surface">
              {t.contactPage.formTitle}
            </h2>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                role="status"
                className="p-5 sm:p-8 rounded-xl bg-primary/10 border border-primary/30 text-center space-y-4 my-auto"
              >
                <span className="material-symbols-outlined text-primary text-5xl">
                  check_circle
                </span>
                <h3 className="text-headline-md font-headline-md text-on-surface">
                  {t.contactPage.messageReceivedTitle}
                </h3>
                <p className="text-body-md text-on-surface-variant">
                  {t.contactPage.messageReceivedText}
                  {formData.name}
                  {t.contactPage.messageReceivedEnd}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ name: '', email: '', subject: 'Project Collaboration', message: '' });
                    setFormSubmitted(false);
                  }}
                  className="text-primary font-bold underline underline-offset-4"
                >
                  {t.contactPage.sendAnother}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="_honey"
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-px w-px opacity-0"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-label-sm font-label-sm text-on-surface-variant uppercase block">
                      {t.contactPage.nameLabel}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      maxLength={120}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contactPage.namePlaceholder}
                      className="w-full bg-surface-variant/40 border border-outline-variant/30 rounded-xl px-4 py-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-on-surface text-body-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-label-sm font-label-sm text-on-surface-variant uppercase block">
                      {t.contactPage.emailLabel}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      maxLength={254}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contactPage.emailPlaceholder}
                      className="w-full bg-surface-variant/40 border border-outline-variant/30 rounded-xl px-4 py-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-on-surface text-body-md"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant uppercase block">
                    {t.contactPage.subjectLabel}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-surface-variant/40 border border-outline-variant/30 rounded-xl px-4 py-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-on-surface text-body-md appearance-none"
                  >
                    <option value="Project Collaboration">{t.contactPage.subjectOptions.collab}</option>
                    <option value="General Inquiry">{t.contactPage.subjectOptions.inquiry}</option>
                    <option value="Speaking Engagement">{t.contactPage.subjectOptions.speaking}</option>
                    <option value="Other">{t.contactPage.subjectOptions.other}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-label-sm font-label-sm text-on-surface-variant uppercase block">
                    {t.contactPage.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    required
                    maxLength={5000}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contactPage.messagePlaceholder}
                    className="w-full bg-surface-variant/40 border border-outline-variant/30 rounded-xl px-4 py-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-on-surface text-body-md resize-none"
                  ></textarea>
                </div>

                {submissionError && (
                  <p role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-on-surface">
                    {t.contactPage.sendError}{' '}
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="font-bold text-primary underline underline-offset-2"
                    >
                      {t.contactPage.emailFallback}
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="primary-gradient-btn w-full py-4 rounded-xl font-bold text-headline-md flex items-center justify-center gap-3 shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 disabled:hover:scale-100"
                >
                  <span>{isSubmitting ? t.contactPage.sendingButton : t.contactPage.sendButton}</span>
                  {isSubmitting ? (
                    <span aria-hidden="true" className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  ) : (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 shrink-0"
                      style={{ transform: isRtl ? 'scaleX(-1)' : undefined }}
                    >
                      <path d="M3 20V14L11 12L3 10V4L22 12L3 20Z" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Right Column: Direct Connections & Sana'a Clock (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col justify-between gap-6"
        >
          {/* Direct Connections Card */}
          <div className="glass-card-raised p-5 sm:p-8 rounded-2xl flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-headline-md font-headline-md mb-6 text-on-surface">
                {t.contactPage.directConn}
              </h2>

              <div className="flex flex-col gap-3">
                {/* LinkedIn */}
                <a
                  href={portfolioData.personal.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-outline-variant/20 hover:border-primary/40 group min-w-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl">alternate_email</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-label-sm font-label-sm text-on-surface-variant">{t.contactPage.linkedIn}</p>
                    <p className="text-body-md font-body-md font-medium text-on-surface truncate">
                      {portfolioData.personal.name}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-xl transition-transform rtl:rotate-180 flex-shrink-0">
                    arrow_forward
                  </span>
                </a>

                {/* GitHub */}
                <a
                  href={portfolioData.personal.gitHub}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-outline-variant/20 hover:border-primary/40 group min-w-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl">terminal</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-label-sm font-label-sm text-on-surface-variant">{t.contactPage.gitHub}</p>
                    <p className="text-body-md font-body-md font-medium text-on-surface truncate">
                      @MohammedFu
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-xl transition-transform rtl:rotate-180 flex-shrink-0">
                    arrow_forward
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-outline-variant/20 hover:border-primary/40 group min-w-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-label-sm font-label-sm text-on-surface-variant">
                      {t.contactPage.email}
                    </p>
                    <p className="text-body-md font-body-md font-medium text-on-surface truncate">
                      {portfolioData.personal.email}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-xl transition-transform rtl:rotate-180 flex-shrink-0">
                    arrow_forward
                  </span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-outline-variant/20 hover:border-primary/40 group min-w-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-label-sm font-label-sm text-on-surface-variant">
                      {t.contactPage.phone}
                    </p>
                    <p className="text-body-md font-body-md font-medium text-on-surface truncate">
                      {portfolioData.personal.phone}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary text-xl transition-transform rtl:rotate-180 flex-shrink-0">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Sana'a Local Time Widget */}
          <div className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                {t.contactPage.localTime}
              </p>
              <div className="text-headline-md font-headline-md text-primary font-mono">
                {sanaaTime || '12:00:00 PM'}
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-2xl">schedule</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
