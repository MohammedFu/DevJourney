import React from 'react';
import type { ProjectItem } from '../data/portfolioData';
import { useApp } from '../context/AppContext';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useApp();
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--border-color)] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 my-auto">
        {/* Top Header / Close Button */}
        <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-card-sub)] shrink-0">
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-black/50"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rtl:left-4 rtl:right-auto p-2 text-white bg-black/60 hover:bg-black/90 rounded-full backdrop-blur-md transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-left rtl:text-right">
            <span className="bg-[var(--bg-accent)] text-[var(--text-accent-on)] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block shadow-md">
              {project.category}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-left rtl:text-right flex-1">
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--text-accent)] mb-2">
              {t.projectModal.overview}
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-sub)] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-[var(--text-accent)] mb-3">
              {t.projectModal.techUsed}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-[var(--bg-card-sub)] text-[var(--text-sub)] border border-[var(--border-color)] px-3.5 py-1.5 rounded-lg text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--border-color)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-[var(--text-sub)]">
              <span className="material-symbols-outlined text-[var(--text-accent)]">terminal</span>
              <span>{t.projectModal.primaryLanguage}: <strong className="text-[var(--text-main)]">{project.language}</strong></span>
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--bg-accent)] text-[var(--text-accent-on)] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all shadow-lg active:scale-95"
            >
              {t.projectModal.viewGithub}
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
