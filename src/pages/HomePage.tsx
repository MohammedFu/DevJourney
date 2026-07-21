import { portfolioData } from '../data/portfolioData';

interface HomePageProps {
  onNavigate: (page: 'home' | 'experience' | 'projects' | 'contact') => void;
  onOpenCvModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenCvModal }) => {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Hero Section */}
      <section className="max-w-[1120px] mx-auto px-6 min-h-[85vh] flex flex-col md:flex-row items-center gap-12 py-16 md:py-24">
        {/* Text Content */}
        <div className="flex-1 space-y-8 order-2 md:order-1 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0f172a] border border-[#bec6e0]/20">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7bd0ff] animate-pulse"></span>
            <span className="text-xs font-semibold text-[#7bd0ff] uppercase tracking-widest">
              {portfolioData.personal.status}
            </span>
          </div>

          {/* Main Serif Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#e0e3e5] leading-tight">
            Hi, I'm <span className="text-[#7bd0ff]">{portfolioData.personal.name}</span>, a Software Developer building enterprise solutions.
          </h1>

          {/* Intro Description */}
          <p className="text-lg text-[#c6c6cd] max-w-xl leading-relaxed">
            {portfolioData.personal.summary}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={onOpenCvModal}
              className="group flex items-center justify-center gap-2 bg-[#7bd0ff] text-[#001e2c] px-8 py-4 rounded-full font-semibold text-sm transition-all hover:bg-[#c4e7ff] active:scale-95 shadow-xl shadow-[#7bd0ff]/10"
            >
              Download CV
              <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-y-0.5">
                download
              </span>
            </button>

            <button
              onClick={() => onNavigate('projects')}
              className="flex items-center justify-center gap-2 border border-[#45464d] hover:border-[#7bd0ff]/50 hover:bg-[#7bd0ff]/10 px-8 py-4 rounded-full font-semibold text-sm text-[#e0e3e5] transition-all active:scale-95"
            >
              View My Work
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Headshot / Visual Card Area */}
        <div className="flex-1 w-full md:w-auto flex justify-center order-1 md:order-2">
          <div className="relative w-full aspect-square max-w-[440px]">
            {/* Background Accent Glow */}
            <div className="absolute -inset-4 bg-[#0f172a]/50 rounded-full blur-3xl pointer-events-none"></div>

            {/* Image Container */}
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-[#45464d]/30 shadow-2xl bg-[#191c1e]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Mohammed Fuad Al_Sanhani Professional Software Engineer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-[#1d2022] border border-[#45464d]/30 shadow-xl z-20 hidden sm:block text-left">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#7bd0ff]/10 rounded-xl">
                  <span className="material-symbols-outlined text-[#7bd0ff]">
                    terminal
                  </span>
                </div>
                <div>
                  <p className="text-xs text-[#c6c6cd] font-medium uppercase tracking-wider">Experience</p>
                  <p className="font-serif text-xl font-bold text-[#e0e3e5]">
                    {portfolioData.personal.stats.experienceYears}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section (Bento Grid) */}
      <section className="max-w-[1120px] mx-auto px-6 py-20">
        <div className="mb-14 text-left">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e0e3e5] font-semibold mb-3">
            Core Expertise
          </h2>
          <div className="h-1 w-20 bg-[#7bd0ff]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.skills.categories.map((cat, index) => (
            <div
              key={index}
              className="tech-card group relative p-8 rounded-2xl bg-[#191c1e] border border-[#45464d]/20 hover:border-[#7bd0ff]/40 transition-all duration-300 hover:-translate-y-2 text-left"
            >
              <div className="icon-glow absolute top-8 left-8 w-12 h-12 bg-[#7bd0ff] opacity-0 transition-opacity rounded-full"></div>
              <div className="relative z-10">
                <div className="mb-6 inline-block p-3 bg-[#0f172a] rounded-xl border border-[#7bd0ff]/20">
                  <span className="material-symbols-outlined text-3xl text-[#7bd0ff]">
                    {cat.icon}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-[#e0e3e5]">
                  {cat.title}
                </h3>
                <p className="text-sm text-[#c6c6cd] leading-relaxed mb-6">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="bg-[#272a2c] text-[#bec6e0] text-[11px] px-2.5 py-1 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Stat Section (Atmospheric) */}
      <section className="w-full bg-[#0b0f10] py-20 relative overflow-hidden border-y border-[#45464d]/10">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(123,208,255,0.15)_0%,_transparent_60%)]"></div>
        </div>
        <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap justify-center gap-12 sm:gap-24 text-center relative z-10">
          <div className="space-y-2">
            <p className="text-[#7bd0ff] font-serif text-4xl sm:text-5xl font-bold">
              {portfolioData.personal.stats.projectsShipped}
            </p>
            <p className="text-xs text-[#c6c6cd] font-semibold uppercase tracking-widest">
              Projects Shipped
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[#7bd0ff] font-serif text-4xl sm:text-5xl font-bold">
              {portfolioData.personal.stats.systemUptime}
            </p>
            <p className="text-xs text-[#c6c6cd] font-semibold uppercase tracking-widest">
              System Uptime
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[#7bd0ff] font-serif text-4xl sm:text-5xl font-bold">
              {portfolioData.personal.stats.commitsMade}
            </p>
            <p className="text-xs text-[#c6c6cd] font-semibold uppercase tracking-widest">
              Commits Pushed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
