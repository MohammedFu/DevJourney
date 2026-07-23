import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import type { PageTab } from '../App';

interface FooterProps {
  onNavigate?: (page: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const { t } = useApp();

  return (
    <footer className="w-full py-12 px-margin-mobile md:px-margin-desktop border-t border-outline-variant/30 bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-center gap-base max-w-container-max-width mx-auto">
        <div className="text-label-md font-label-md font-bold text-on-surface mb-4 md:mb-0">
          {t.nav.brand}
        </div>
        <div className="text-body-md font-body-md text-on-tertiary-fixed-variant text-center md:text-left">
          © {new Date().getFullYear()} Aurora Portfolio. All rights reserved.
        </div>
        <div className="flex gap-6 mt-6 md:mt-0">
          <a
            href={portfolioData.personal.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="text-on-tertiary-fixed-variant hover:text-secondary transition-colors duration-200 font-label-sm text-label-sm"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.personal.gitHub}
            target="_blank"
            rel="noreferrer"
            className="text-on-tertiary-fixed-variant hover:text-secondary transition-colors duration-200 font-label-sm text-label-sm"
          >
            GitHub
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="text-on-tertiary-fixed-variant hover:text-secondary transition-colors duration-200 font-label-sm text-label-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
