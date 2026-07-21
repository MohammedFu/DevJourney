import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activePage: 'home' | 'experience' | 'projects' | 'contact';
  onNavigate: (page: 'home' | 'experience' | 'projects' | 'contact') => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenCvModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: Array<{ id: 'home' | 'experience' | 'projects' | 'contact'; label: string }> = [
    { id: 'home', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: 'home' | 'experience' | 'projects' | 'contact') => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#101415]/85 backdrop-blur-md border-b border-[#45464d]/20 h-16 transition-all duration-300">
      <div className="max-w-[1120px] mx-auto px-6 flex justify-between items-center h-full">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="font-[#Playfair Display] font-serif text-2xl font-bold tracking-tight text-[#e0e3e5] hover:text-[#7bd0ff] transition-colors text-left focus:outline-none"
        >
          {portfolioData.personal.brandName}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-1 transition-all duration-200 focus:outline-none ${
                  isActive
                    ? 'text-[#bec6e0] font-semibold border-b-2 border-[#bec6e0]'
                    : 'text-[#c6c6cd] hover:text-[#e0e3e5] hover:text-[#7bd0ff]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenCvModal}
            className="bg-[#7bd0ff] text-[#001e2c] px-6 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 hover:bg-[#c4e7ff] hover:shadow-lg hover:shadow-[#7bd0ff]/20"
          >
            Download CV
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden text-[#e0e3e5] p-2 hover:text-[#7bd0ff] focus:outline-none"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#191c1e] border-b border-[#45464d]/30 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                activePage === item.id
                  ? 'bg-[#0f172a] text-[#7bd0ff] font-semibold'
                  : 'text-[#c6c6cd] hover:bg-[#1d2022] hover:text-[#e0e3e5]'
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
            className="w-full mt-2 bg-[#7bd0ff] text-[#001e2c] py-3 rounded-xl text-center font-sans text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#7bd0ff]/10 active:scale-95"
          >
            Download CV
          </button>
        </div>
      )}
    </nav>
  );
};
