import React, { useState } from 'react';
import { motion, AnimatePresence } from '../utils/motion';
import { portfolioData, type ProjectItem } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import type { PageTab } from '../App';

interface ProjectsPageProps {
  onSelectProject?: (project: ProjectItem) => void;
  onNavigate: (page: PageTab) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectProject,
  onNavigate,
}) => {
  const { t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { id: 'All', label: t.projectsPage.categories.All },
    { id: 'Mobile Apps', label: t.projectsPage.categories['Mobile Apps'] },
    { id: 'Web Systems', label: t.projectsPage.categories['Web Systems'] },
    { id: 'Full Stack', label: t.projectsPage.categories['Full Stack'] },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="relative pt-24 pb-24">
      {/* Background Aurora Glow */}
      <div className="aurora-glow top-[-200px] left-[-200px]"></div>
      <div className="aurora-glow bottom-[-200px] right-[-200px]"></div>

      {/* Hero Section */}
      <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop mb-12 text-left rtl:text-right">
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="text-secondary font-label-sm uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-[1px] bg-secondary"></span> {t.projectsPage.showcaseBadge}
          </span>
          <h1 className="text-headline-lg-mobile md:text-headline-xl font-headline-xl leading-tight text-on-surface">
            {t.projectsPage.title}
          </h1>
          <p className="text-on-surface-variant text-body-lg max-w-2xl mt-2">
            {t.projectsPage.subtitle}
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-label-sm font-label-sm transition-all focus:outline-none cursor-pointer ${
                  isActive
                    ? 'primary-btn-gradient text-on-primary font-bold shadow-lg shadow-primary/20 scale-105'
                    : 'text-on-surface-variant hover:text-on-surface bg-surface-container border border-outline-variant/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Project Grid (Bento Style) */}
      <section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isLarge = index % 3 === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className={`${
                    isLarge ? 'md:col-span-8' : 'md:col-span-4'
                  } group cursor-pointer text-left rtl:text-right`}
                >
                  <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col hover:shadow-[0_0_40px_rgba(142,205,255,0.15)] transition-all duration-500">
                    {/* Image Thumbnail Header */}
                    <div className="relative h-64 md:h-80 w-full overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.imageAlt || project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-70"></div>
                      <div className="absolute top-6 left-6 rtl:right-6 rtl:left-auto flex gap-2">
                        <span className="bg-primary/20 text-primary text-label-sm px-3 py-1 rounded-full backdrop-blur-md border border-primary/20">
                          {t.projectsPage.categories[project.category] || project.category}
                        </span>
                        {project.featured && (
                          <span className="bg-secondary/20 text-secondary text-label-sm px-3 py-1 rounded-full backdrop-blur-md border border-secondary/20">
                            {t.projectsPage.featuredBadge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4 gap-4">
                        <div>
                          <h3 className="text-headline-md font-headline-md text-on-surface group-hover:text-primary transition-colors mb-2">
                            {project.title}
                          </h3>
                          <p className="text-on-surface-variant text-body-md line-clamp-2 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="material-symbols-outlined text-secondary text-3xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0"
                        >
                          arrow_outward
                        </a>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-outline-variant/20">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="text-label-sm font-label-sm text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Conversation Banner */}
      <section className="mt-28 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-10 md:p-14 text-center relative overflow-hidden bg-gradient-to-br from-surface-container to-surface-container-lowest"
        >
          <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">
            {t.projectsPage.ctaTitle}
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
            {t.projectsPage.ctaSubtitle}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('contact')}
            className="primary-btn-gradient text-on-primary px-8 py-4 rounded-lg font-bold text-label-md font-label-md shadow-lg hover:brightness-110 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            {t.projectsPage.ctaButton}
            <span className="material-symbols-outlined text-xl">send</span>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};
