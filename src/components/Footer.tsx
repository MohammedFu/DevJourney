import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useApp } from '../context/AppContext';

interface FooterProps {
  onNavigate: (page: 'home' | 'experience' | 'projects' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useApp();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-app)] py-12 transition-colors duration-300">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg font-bold text-[var(--text-main)]">{t.nav.brand}</span>
          <span className="text-xs text-[var(--text-sub)]">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs text-[var(--text-sub)] font-medium">
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-[var(--text-main)] transition-colors"
          >
            {t.nav.overview}
          </button>
          <button
            onClick={() => {
              onNavigate('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-[var(--text-main)] transition-colors"
          >
            {t.nav.projects}
          </button>
          <button
            onClick={() => {
              onNavigate('experience');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-[var(--text-main)] transition-colors"
          >
            {t.nav.experience}
          </button>
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-[var(--text-main)] transition-colors"
          >
            {t.nav.contact}
          </button>
        </div>
      </div>
    </footer>
  );
};
