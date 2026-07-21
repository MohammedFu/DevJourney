import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectsPageProps {
  onNavigate: (page: 'home' | 'experience' | 'projects' | 'contact') => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | 'Mobile Apps' | 'Web Systems' | 'Full Stack'
  >('All');

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
    <div className="animate-in fade-in duration-300 pt-12 pb-24 max-w-[1120px] mx-auto px-6 text-left">
      {/* Hero Header */}
      <section className="mb-14">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#e0e3e5] mb-4">
          Interactive Project Gallery
        </h1>
        <p className="text-base sm:text-lg text-[#c6c6cd] max-w-2xl leading-relaxed">
          A curated showcase of engineering solutions built across Flutter, React Native, Go, PHP/Laravel, and TypeScript, extracted directly from public GitHub repositories.
        </p>
      </section>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-[#45464d]/20 pb-6">
        <span className="text-xs uppercase tracking-widest text-[#c6c6cd] font-semibold mr-2">
          Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 focus:outline-none ${
              selectedCategory === cat
                ? 'bg-[#7bd0ff] text-[#001e2c] shadow-lg shadow-[#7bd0ff]/20'
                : 'bg-[#191c1e] text-[#c6c6cd] hover:bg-[#272a2c] hover:text-[#e0e3e5] border border-[#45464d]/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project: ProjectItem) => (
          <div
            key={project.id}
            className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full border border-[#45464d]/20 bg-[#191c1e]/60"
          >
            {/* Project Image Header */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#1d2022]">
              <img
                src={project.imageUrl}
                alt={project.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-[#0b0f10]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#7bd0ff]/30 text-[11px] font-semibold text-[#7bd0ff]">
                {project.language}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-7 flex flex-col flex-grow">
              <h3 className="font-serif text-xl font-bold text-[#e0e3e5] mb-2 group-hover:text-[#7bd0ff] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[#c6c6cd] leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#272a2c] text-[#bec6e0] px-2.5 py-1 rounded-md text-[11px] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Footer Links */}
              <div className="flex justify-between items-center border-t border-[#45464d]/20 pt-5 mt-auto">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#7bd0ff] font-semibold text-xs hover:underline"
                >
                  View Code Repository
                  <span className="material-symbols-outlined text-base">
                    arrow_outward
                  </span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Source Code"
                  className="text-[#c6c6cd] hover:text-[#e0e3e5] transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Conversation Section */}
      <section className="mt-24 text-center border-t border-[#45464d]/20 pt-16">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#e0e3e5]">
            Have a project or role in mind?
          </h2>
          <p className="text-base text-[#c6c6cd] leading-relaxed">
            I am currently open for full-time engineering roles, software development opportunities, and selective tech consulting. Let's build robust systems together.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 bg-[#7bd0ff] text-[#001e2c] px-8 py-4 rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-[#c4e7ff] transition-all duration-300 shadow-xl shadow-[#7bd0ff]/20 active:scale-95"
          >
            Start a Conversation
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>
      </section>
    </div>
  );
};
