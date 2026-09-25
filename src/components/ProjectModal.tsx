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
            aria-label="Close project details"
            className="absolute top-4 right-4 rtl:left-4 rtl:right-auto p-2 text-white bg-black/60 hover:bg-black/90 rounded-full backdrop-blur-md transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-left rtl:text-right">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="project-image-tag px-3 py-1 rounded-full text-xs font-headline font-bold uppercase tracking-wider inline-block shadow-md">
                {t.projectsPage.categories[project.category] || project.category}
              </span>
              {project.visibility === 'private' && (
                <span className="project-image-tag project-image-tag--private px-3 py-1 rounded-full text-xs font-headline font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-md">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="4" y="10" width="16" height="11" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>
                  {t.projectsPage.privateBadge}
                </span>
              )}
              {project.collaboration && (
                <span className="project-image-tag project-image-tag--collaboration px-3 py-1 rounded-full text-xs font-headline font-bold uppercase tracking-wider inline-block shadow-md">
                  {t.projectsPage.collaborationBadge}
                </span>
              )}
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[var(--text-main)]">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-left rtl:text-right flex-1">
          <div>
            <h3 className="font-mono-code text-xs uppercase font-bold tracking-widest text-[var(--text-accent)] mb-2">
              {t.projectModal.overview}
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-sub)] leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          <div>
            <h3 className="font-mono-code text-xs uppercase font-bold tracking-widest text-[var(--text-accent)] mb-3">
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
            <div className="flex items-center gap-2 text-xs text-[var(--text-sub)] font-mono-code">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--text-accent)]" aria-hidden="true">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="m7 9 3 3-3 3M13 15h4" />
              </svg>
              <span>{t.projectModal.primaryLanguage}: <strong className="text-[var(--text-main)]">{project.language}</strong></span>
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 primary-btn-gradient text-on-primary px-6 py-3 rounded-full text-xs font-headline font-bold uppercase tracking-wider transition-all active:scale-95"
            >
              {project.visibility === 'private' ? t.projectModal.viewPrivateGithub : t.projectModal.viewGithub}
              {project.visibility === 'private' ? (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 5h5v5M10 14 19 5M19 14v5H5V5h5" />
                </svg>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
