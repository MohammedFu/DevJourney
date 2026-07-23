import React, { useState } from 'react';
import { motion, AnimatePresence } from '../utils/motion';
import { useApp } from '../context/AppContext';
import type { PageTab } from '../App';

interface NavbarProps {
  activePage: PageTab;
  onNavigate: (page: PageTab) => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenCvModal,
}) => {
  const { theme, toggleTheme, language, toggleLanguage, t } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: t.nav.overview || 'Overview' },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (page: PageTab) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/10 shadow-xl transition-colors duration-300">
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max-width mx-auto">
        {/* Brand Logo */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleNavClick('home')}
          className="text-headline-md font-headline-md font-bold tracking-tighter text-primary flex items-center gap-2.5"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
          <span>{t.nav.brand}</span>
        </motion.button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative font-label-md text-label-md transition-colors focus:outline-none ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
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
            className="flex items-center gap-1.5 bg-surface-container text-on-surface px-3.5 py-2 rounded-lg border border-outline-variant/30 text-label-sm font-label-sm font-bold transition-all hover:border-primary shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-base text-primary">translate</span>
            <span>{language === 'en' ? 'عربي' : 'EN'}</span>
          </motion.button>

          {/* Theme Toggle Button (Sun / Moon) */}
          <motion.button
            whileHover={{ scale: 1.05, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 bg-surface-container text-on-surface rounded-lg border border-outline-variant/30 flex items-center justify-center transition-all hover:border-primary shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg text-primary">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </motion.button>

          {/* Download CV Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenCvModal}
            className="primary-btn-gradient text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all shadow-lg cursor-pointer"
          >
            {t.nav.downloadCv}
          </motion.button>
        </div>

        {/* Mobile Toggle Group */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1 text-label-sm font-label-sm font-bold bg-surface-container text-on-surface border border-outline-variant/30 rounded-lg"
          >
            {language === 'en' ? 'عربي' : 'EN'}
          </button>

          <button
            onClick={toggleTheme}
            className="p-1.5 text-on-surface bg-surface-container border border-outline-variant/30 rounded-lg"
          >
            <span className="material-symbols-outlined text-xl text-primary">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="text-on-surface p-2 hover:text-primary focus:outline-none"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface/90 border-b border-outline-variant/30 px-margin-mobile py-6 flex flex-col gap-3 shadow-2xl backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left rtl:text-right py-2.5 px-4 rounded-lg text-body-md font-body-md transition-colors ${
                  activePage === item.id
                    ? 'primary-btn-gradient text-on-primary font-bold shadow-lg'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
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
              className="w-full mt-2 primary-btn-gradient text-on-primary py-3 rounded-lg text-center font-label-md text-label-md font-bold shadow-lg active:scale-95"
            >
              {t.nav.downloadCv}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
