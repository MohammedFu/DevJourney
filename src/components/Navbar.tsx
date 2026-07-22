import { useState } from 'react';
import { motion, AnimatePresence } from '../utils/motion';
import { useApp } from '../context/AppContext';

interface NavbarProps {
  activePage: 'home' | 'experience' | 'projects' | 'contact';
  onNavigate: (page: 'home' | 'experience' | 'projects' | 'contact') => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenCvModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, language, toggleLanguage, t } = useApp();

  const navItems: Array<{ id: 'home' | 'experience' | 'projects' | 'contact'; label: string }> = [
    { id: 'home', label: t.nav.overview },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id: 'home' | 'experience' | 'projects' | 'contact') => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-color)] h-16 transition-colors duration-300">
      <div className="max-w-[1120px] mx-auto px-6 flex justify-between items-center h-full">
        {/* Brand Logo */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleNavClick('home')}
          className="font-serif text-2xl font-bold tracking-tight text-[var(--text-main)] hover:text-[var(--bg-accent)] transition-colors flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--bg-accent)] shadow-[0_0_10px_var(--glow-color)]"></span>
          {t.nav.brand}
        </motion.button>

        {/* Desktop Navigation Links with Animated Pill */}
        <div className="hidden md:flex items-center gap-1 font-sans text-sm tracking-wide bg-[var(--bg-card)]/80 p-1.5 rounded-full border border-[var(--border-color)]">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-5 py-1.5 rounded-full transition-colors text-xs font-bold focus:outline-none ${
                  isActive ? 'text-[var(--text-accent-on)]' : 'text-[var(--text-sub)] hover:text-[var(--text-main)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-[var(--bg-accent)] rounded-full z-0 shadow-md shadow-[var(--glow-color)]/20"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Controls: Language Toggle + Theme Toggle + Action Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            title="Toggle Language (English / العربية)"
            className="flex items-center gap-1.5 bg-[var(--bg-card)] text-[var(--text-main)] px-3.5 py-1.5 rounded-full border border-[var(--border-color)] text-xs font-bold transition-all hover:border-[var(--bg-accent)]"
          >
            <span className="material-symbols-outlined text-base text-[var(--bg-accent)]">translate</span>
            <span>{language === 'en' ? 'عربي' : 'EN'}</span>
          </motion.button>

          {/* Theme Toggle Button (Sun / Moon) */}
          <motion.button
            whileHover={{ scale: 1.05, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Daylight Light Mode' : 'Switch to Nocturne Dark Mode'}
            className="p-2 bg-[var(--bg-card)] text-[var(--text-main)] rounded-full border border-[var(--border-color)] flex items-center justify-center transition-all hover:border-[var(--bg-accent)] shadow-sm"
          >
            <span className="material-symbols-outlined text-lg">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </motion.button>

          {/* Download CV Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(0, 85, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenCvModal}
            className="bg-[var(--bg-accent)] text-[var(--text-accent-on)] px-5 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            {t.nav.downloadCv}
          </motion.button>
        </div>

        {/* Mobile Toggle Group */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1 text-xs font-bold bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-color)] rounded-lg"
          >
            {language === 'en' ? 'عربي' : 'EN'}
          </button>

          <button
            onClick={toggleTheme}
            className="p-1.5 text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg"
          >
            <span className="material-symbols-outlined text-xl">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="text-[var(--text-main)] p-2 hover:text-[var(--bg-accent)] focus:outline-none"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[var(--bg-card)] border-b border-[var(--border-color)] px-6 py-6 flex flex-col gap-3 shadow-2xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left rtl:text-right py-2.5 px-4 rounded-xl text-sm font-medium transition-colors ${
                  activePage === item.id
                    ? 'bg-[var(--bg-accent)] text-[var(--text-accent-on)] font-bold shadow-lg'
                    : 'text-[var(--text-sub)] hover:bg-[var(--bg-card-sub)] hover:text-[var(--text-main)]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full mt-2 bg-[var(--bg-accent)] text-[var(--text-accent-on)] py-3 rounded-xl text-center font-sans text-xs font-bold uppercase tracking-wider shadow-lg active:scale-95"
            >
              {t.nav.downloadCv}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
