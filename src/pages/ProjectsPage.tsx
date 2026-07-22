import { useState } from 'react';
import { motion, AnimatePresence } from '../utils/motion';
import { portfolioData } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';
import { useApp } from '../context/AppContext';

interface ProjectsPageProps {
  onNavigate: (page: 'home' | 'experience' | 'projects' | 'contact') => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const { t, isRtl } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | 'Mobile Apps' | 'Web Systems' | 'Full Stack'
  >('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories: Array<'All' | 'Mobile Apps' | 'Web Systems' | 'Full Stack'> = [
    'All',
    'Mobile Apps',
    'Web Systems',
    'Full Stack',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-6 pb-24 max-w-[1120px] mx-auto px-6 text-left rtl:text-right">
      {/* Hero Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-main)] mb-4">
          {t.projectsPage.title}
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-sub)] max-w-2xl leading-relaxed">
          {t.projectsPage.subtitle}
        </p>
      </motion.section>

      {/* Category Filter Pills with Layout Animation */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap items-center gap-3 mb-10 border-b border-[var(--border-color)] pb-6"
      >
        <span className="text-xs uppercase tracking-widest text-[var(--text-sub)] font-bold mr-2 rtl:ml-2 rtl:mr-0">
          {t.projectsPage.filter}
        </span>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const label = t.projectsPage.categories[cat] || cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-5 py-2 rounded-full text-xs font-bold transition-colors focus:outline-none ${
                isActive
                  ? 'text-[var(--text-accent-on)]'
                  : 'text-[var(--text-sub)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryPill"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  className="absolute inset-0 bg-[var(--bg-accent)] rounded-full z-0 shadow-lg shadow-[var(--glow-color)]/20"
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          );
        })}
      </motion.div>

      {/* Projects Grid with AnimatePresence */}
      <motion.section layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: ProjectItem) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveModalProject(project)}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full border border-[var(--border-color)] bg-[var(--bg-card)] shadow-xl cursor-pointer"
            >
              {/* Project Image Header */}
              <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-card-sub)]">
                <img
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 rtl:left-3 rtl:right-auto bg-[var(--bg-card)]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--border-color)] text-[11px] font-bold text-[var(--text-accent)] shadow-sm">
                  {project.language}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-[var(--bg-accent)] text-[var(--text-accent-on)] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <span className="material-symbols-outlined text-base">visibility</span> {t.projectsPage.quickView}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-[var(--text-main)] mb-2 group-hover:text-[var(--text-accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-sub)] leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[var(--bg-card-sub)] text-[var(--text-sub)] px-2.5 py-1 rounded-md text-[11px] font-medium border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Footer Links */}
                <div className="flex justify-between items-center border-t border-[var(--border-color)] pt-4 mt-auto">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                    }}
                    className="flex items-center gap-1.5 text-[var(--text-accent)] font-bold text-xs hover:underline"
                  >
                    {t.projectsPage.repoCode}
                    <span className={`material-symbols-outlined text-base ${isRtl ? 'rotate-180' : ''}`}>
                      arrow_outward
                    </span>
                  </span>
                  <span className="text-[var(--text-sub)] group-hover:text-[var(--text-accent)] transition-colors">
                    <span className="material-symbols-outlined text-xl">code</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

      {/* CTA Conversation Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 text-center border-t border-[var(--border-color)] pt-16"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--text-main)]">
            {t.projectsPage.ctaTitle}
          </h2>
          <p className="text-base text-[var(--text-sub)] leading-relaxed">
            {t.projectsPage.ctaSubtitle}
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 25px rgba(0, 85, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 bg-[var(--bg-accent)] text-[var(--text-accent-on)] px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg"
          >
            {t.projectsPage.ctaButton}
            <span className={`material-symbols-outlined text-base ${isRtl ? 'rotate-180' : ''}`}>arrow_forward</span>
          </motion.button>
        </div>
      </motion.section>

      {/* Project Modal Preview */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
};
