import { portfolioData } from '../data/portfolioData';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-300 pt-12 pb-24 max-w-[1120px] mx-auto px-6 text-left">
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#e0e3e5] mb-4">
          Journey of Excellence.
        </h1>
        <p className="text-base sm:text-lg text-[#c6c6cd] max-w-2xl leading-relaxed">
          Building high-performance software applications, managing server proxies, and delivering technical solutions across enterprise environments.
        </p>
      </header>

      {/* Experience Timeline */}
      <section className="relative my-16">
        {/* Timeline Center/Side Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] timeline-line -translate-x-1/2"></div>

        <div className="space-y-12">
          {portfolioData.experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
              >
                {/* Date Label (Desktop) */}
                <div
                  className={`hidden md:block pt-3 ${
                    isEven ? 'text-right pr-12' : 'order-2 pl-12'
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#7bd0ff]">
                    {exp.period}
                  </span>
                </div>

                {/* Card Container */}
                <div
                  className={`pl-10 md:pl-0 relative ${
                    isEven ? 'md:pl-12' : 'order-1 md:pr-12 md:text-right'
                  }`}
                >
                  {/* Glowing Marker Dot */}
                  <div
                    className={`absolute top-4 w-3.5 h-3.5 rounded-full z-10 ${
                      exp.isCurrent
                        ? 'bg-[#7bd0ff] ring-4 ring-[#7bd0ff]/20 shadow-[0_0_15px_rgba(123,208,255,0.6)] left-2.5 md:left-auto md:left-1/2 -translate-x-1/2'
                        : 'bg-[#909097] left-2.5 md:left-auto md:left-1/2 -translate-x-1/2'
                    }`}
                  ></div>

                  {/* Mobile Date Tag */}
                  <div className="md:hidden mb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#7bd0ff]">
                      {exp.period}
                    </span>
                  </div>

                  {/* Experience Card */}
                  <div className="impact-card-hover border border-[#45464d]/20 bg-[#191c1e] p-6 sm:p-8 rounded-2xl group shadow-lg">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#e0e3e5] mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-[#7bd0ff] mb-3">
                      {exp.company} • <span className="text-[#c6c6cd] font-normal">{exp.location}</span>
                    </p>
                    <p className="text-sm text-[#c6c6cd] leading-relaxed mb-6">
                      "{exp.description}"
                    </p>

                    {/* Tech Pills */}
                    <div
                      className={`flex flex-wrap gap-2 ${
                        !isEven ? 'md:justify-end' : ''
                      }`}
                    >
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-[#272a2c] text-[#bec6e0] px-3 py-1 rounded-full text-xs font-medium border border-[#45464d]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education & Certifications Bento Grid */}
      <section className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Education Card */}
        <div className="lg:col-span-2 border border-[#45464d]/20 rounded-2xl p-8 bg-[#191c1e] flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-[#45464d]/20 pb-4">
              <span className="material-symbols-outlined text-[#7bd0ff] text-3xl">
                school
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#e0e3e5]">
                Academic Education
              </h2>
            </div>

            <div className="space-y-6">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                    <h3 className="font-serif text-lg font-semibold text-[#e0e3e5]">
                      {edu.degree}
                    </h3>
                    <span className="text-xs text-[#7bd0ff] font-semibold">{edu.period}</span>
                  </div>
                  <p className="text-sm text-[#bec6e0] font-medium">{edu.institution}</p>
                  <p className="text-xs font-semibold text-[#7bd0ff] inline-block bg-[#0f172a] px-2.5 py-0.5 rounded border border-[#7bd0ff]/30 mt-1">
                    {edu.grade}
                  </p>
                  {edu.details && (
                    <p className="text-xs text-[#c6c6cd] mt-2 leading-relaxed">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="h-1 w-24 bg-[#7bd0ff]/40 rounded-full"></div>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="border border-[#45464d]/20 rounded-2xl p-8 bg-[#191c1e] flex flex-col shadow-xl">
          <div className="flex items-center gap-3 mb-8 border-b border-[#45464d]/20 pb-4">
            <span className="material-symbols-outlined text-[#7bd0ff] text-3xl">
              verified
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#e0e3e5]">
              Certifications
            </h2>
          </div>

          <ul className="space-y-6">
            {portfolioData.certifications.map((cert) => (
              <li key={cert.id} className="flex items-start gap-3.5">
                <div className="w-2 h-2 bg-[#7bd0ff] rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-[#e0e3e5]">{cert.title}</p>
                  <p className="text-xs text-[#c6c6cd] mt-1">{cert.issuer} • {cert.period}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visual Interest Banner */}
      <section className="mt-20">
        <div className="w-full h-[320px] rounded-2xl overflow-hidden border border-[#45464d]/20 shadow-2xl relative">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
            alt="Modern Software Engineering Environment"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101415] via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-8 right-8 flex justify-between items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#7bd0ff] mb-1">
                Engineering Philosophy
              </p>
              <h3 className="font-serif text-2xl font-bold text-[#e0e3e5]">
                Continuous Integration &amp; Scalable Clean Code.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
