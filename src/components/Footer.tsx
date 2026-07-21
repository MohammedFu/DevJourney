import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (page: 'home' | 'experience' | 'projects' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 bg-[#0b0f10] border-t border-[#45464d]/10">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-serif text-xl font-bold text-[#e0e3e5]">
            {portfolioData.personal.brandName}
          </span>
          <p className="text-xs text-[#c6c6cd] text-center md:text-left">
            © {currentYear} {portfolioData.personal.name}. Built with precision, React &amp; Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-[#c6c6cd]">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-[#7bd0ff] transition-colors focus:outline-none"
          >
            Overview
          </button>
          <button
            onClick={() => onNavigate('experience')}
            className="hover:text-[#7bd0ff] transition-colors focus:outline-none"
          >
            Experience
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="hover:text-[#7bd0ff] transition-colors focus:outline-none"
          >
            Projects
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-[#7bd0ff] transition-colors focus:outline-none"
          >
            Contact
          </button>
          <a
            href={portfolioData.personal.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7bd0ff] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.personal.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7bd0ff] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
