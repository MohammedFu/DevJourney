import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
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
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="animate-in fade-in duration-300 pt-12 pb-24 max-w-[1120px] mx-auto px-6 text-left relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 ambient-glow"></div>
      <div className="absolute top-1/2 -left-48 w-96 h-96 ambient-glow"></div>

      {/* Hero Header */}
      <header className="mb-16">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#e0e3e5] mb-4 leading-tight">
          Let's build something <span className="text-[#7bd0ff] italic">extraordinary</span> together.
        </h1>
        <p className="text-base sm:text-lg text-[#c6c6cd] max-w-2xl leading-relaxed">
          Open for full-time engineering roles, custom application development, and tech collaborations. Reach out directly or send a message below.
        </p>
      </header>

      {/* Contact Grid (Form + Direct Connections) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        {/* Left Form */}
        <div className="lg:col-span-7 bg-[#191c1e] p-8 sm:p-10 rounded-2xl border border-[#45464d]/20 shadow-xl">
          <h2 className="font-serif text-2xl font-bold text-[#e0e3e5] mb-6">
            Send a Direct Message
          </h2>

          {submitted ? (
            <div className="p-6 bg-[#0f172a] border border-[#7bd0ff]/40 rounded-xl text-center space-y-3 animate-in fade-in">
              <span className="material-symbols-outlined text-[#7bd0ff] text-4xl">
                check_circle
              </span>
              <h3 className="font-serif text-xl font-bold text-[#e0e3e5]">
                Message Received!
              </h3>
              <p className="text-sm text-[#c6c6cd]">
                Thank you for reaching out, {formData.name}. I will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group relative">
                <label className="text-xs uppercase font-semibold tracking-wider text-[#c6c6cd] mb-2 block group-focus-within:text-[#7bd0ff] transition-colors">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-transparent border-0 border-b border-[#45464d] py-3 text-sm text-[#e0e3e5] focus:ring-0 focus:border-[#7bd0ff] transition-all placeholder:text-[#909097]/40 outline-none"
                />
              </div>

              <div className="group relative">
                <label className="text-xs uppercase font-semibold tracking-wider text-[#c6c6cd] mb-2 block group-focus-within:text-[#7bd0ff] transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@company.com"
                  className="w-full bg-transparent border-0 border-b border-[#45464d] py-3 text-sm text-[#e0e3e5] focus:ring-0 focus:border-[#7bd0ff] transition-all placeholder:text-[#909097]/40 outline-none"
                />
              </div>

              <div className="group relative">
                <label className="text-xs uppercase font-semibold tracking-wider text-[#c6c6cd] mb-2 block group-focus-within:text-[#7bd0ff] transition-colors">
                  Message Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, role, or collaboration idea..."
                  className="w-full bg-transparent border-0 border-b border-[#45464d] py-3 text-sm text-[#e0e3e5] focus:ring-0 focus:border-[#7bd0ff] transition-all placeholder:text-[#909097]/40 resize-none outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center gap-3 bg-[#7bd0ff] text-[#001e2c] font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-[#c4e7ff] transition-all duration-300 shadow-lg shadow-[#7bd0ff]/20 active:scale-95"
              >
                Send Message
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </form>
          )}
        </div>

        {/* Right Direct Connections */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#c6c6cd] mb-4">
            Direct Connections
          </h2>

          <div className="flex flex-col gap-4">
            {/* Email Card */}
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="group flex items-center justify-between p-5 bg-[#191c1e] border border-[#45464d]/20 rounded-2xl hover:bg-[#0f172a] hover:border-[#7bd0ff]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#0f172a] rounded-xl border border-[#7bd0ff]/20">
                  <span className="material-symbols-outlined text-[#7bd0ff] text-2xl">mail</span>
                </div>
                <div>
                  <p className="text-xs text-[#c6c6cd]">Email</p>
                  <p className="font-semibold text-sm text-[#e0e3e5] group-hover:text-[#7bd0ff] transition-colors">
                    {portfolioData.personal.email}
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#c6c6cd] group-hover:text-[#7bd0ff] transition-colors">
                north_east
              </span>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
              className="group flex items-center justify-between p-5 bg-[#191c1e] border border-[#45464d]/20 rounded-2xl hover:bg-[#0f172a] hover:border-[#7bd0ff]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#0f172a] rounded-xl border border-[#7bd0ff]/20">
                  <span className="material-symbols-outlined text-[#7bd0ff] text-2xl">call</span>
                </div>
                <div>
                  <p className="text-xs text-[#c6c6cd]">Phone</p>
                  <p className="font-semibold text-sm text-[#e0e3e5] group-hover:text-[#7bd0ff] transition-colors">
                    {portfolioData.personal.phone}
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#c6c6cd] group-hover:text-[#7bd0ff] transition-colors">
                north_east
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={portfolioData.personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 bg-[#191c1e] border border-[#45464d]/20 rounded-2xl hover:bg-[#0f172a] hover:border-[#7bd0ff]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#0f172a] rounded-xl border border-[#7bd0ff]/20">
                  <span className="material-symbols-outlined text-[#7bd0ff] text-2xl">link</span>
                </div>
                <div>
                  <p className="text-xs text-[#c6c6cd]">LinkedIn</p>
                  <p className="font-semibold text-sm text-[#e0e3e5] group-hover:text-[#7bd0ff] transition-colors">
                    mohammed-al-sanhani
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#c6c6cd] group-hover:text-[#7bd0ff] transition-colors">
                north_east
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={portfolioData.personal.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 bg-[#191c1e] border border-[#45464d]/20 rounded-2xl hover:bg-[#0f172a] hover:border-[#7bd0ff]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#0f172a] rounded-xl border border-[#7bd0ff]/20">
                  <span className="material-symbols-outlined text-[#7bd0ff] text-2xl">terminal</span>
                </div>
                <div>
                  <p className="text-xs text-[#c6c6cd]">GitHub</p>
                  <p className="font-semibold text-sm text-[#e0e3e5] group-hover:text-[#7bd0ff] transition-colors">
                    MohammedFu
                  </p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#c6c6cd] group-hover:text-[#7bd0ff] transition-colors">
                north_east
              </span>
            </a>
          </div>

          {/* Local Time Widget */}
          <div className="p-6 bg-[#191c1e] rounded-2xl border border-[#45464d]/20">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#c6c6cd] mb-1">
              LOCAL TIME (Sana'a, Yemen)
            </p>
            <p className="font-serif text-2xl font-bold text-[#7bd0ff]">
              {sanaaTime || 'Calculating...'}
            </p>
          </div>
        </div>
      </div>

      {/* Beyond the Code: Bento Section */}
      <section className="mt-20">
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-bold text-[#e0e3e5] mb-2">
            Beyond the Code
          </h2>
          <p className="text-sm text-[#c6c6cd]">
            Soft skills, leadership qualities, and personal values that drive successful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Leadership & Project Management Card */}
          <div className="md:col-span-8 bg-[#191c1e] border border-[#45464d]/20 p-8 rounded-2xl flex flex-col justify-between hover:border-[#7bd0ff]/40 transition-all duration-300 shadow-xl">
            <div className="max-w-xl">
              <span className="material-symbols-outlined text-[#7bd0ff] text-4xl mb-4">
                groups
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#e0e3e5] mb-3">
                Leadership &amp; Project Management
              </h3>
              <p className="text-sm text-[#c6c6cd] leading-relaxed">
                Project Manager for enterprise mobile apps, combining technical oversight with clear communication, strategic planning, teamwork, and agility under pressure.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {portfolioData.skills.softSkills.slice(0, 6).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#0f172a] text-[#7bd0ff] font-medium text-xs rounded-full border border-[#7bd0ff]/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages & Adaptability Card */}
          <div className="md:col-span-4 bg-[#191c1e] border border-[#45464d]/20 p-8 rounded-2xl flex flex-col justify-between hover:border-[#7bd0ff]/40 transition-all duration-300 shadow-xl">
            <div>
              <span className="material-symbols-outlined text-[#7bd0ff] text-4xl mb-4">
                translate
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#e0e3e5] mb-3">
                Languages
              </h3>
              <div className="space-y-3 mt-4">
                {portfolioData.skills.spokenLanguages.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="font-medium text-[#e0e3e5]">{lang.name}</span>
                    <span className="text-xs text-[#7bd0ff] font-semibold bg-[#0f172a] px-2.5 py-1 rounded">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#45464d]/20">
              <p className="text-xs text-[#c6c6cd]">
                Adaptable to multicultural team environments and technical documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
