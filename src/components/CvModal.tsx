import { portfolioData } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#191c1e] text-[#e0e3e5] border border-[#45464d]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header Controls */}
        <div className="flex justify-between items-center px-6 py-4 bg-[#101415] border-b border-[#45464d]/20">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#7bd0ff]">badge</span>
            <h2 className="font-serif text-lg font-bold text-[#e0e3e5]">Curriculum Vitae</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-[#7bd0ff] text-[#001e2c] px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[#c4e7ff] transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-base">print</span>
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1 text-[#c6c6cd] hover:text-[#e0e3e5] hover:bg-[#272a2c] rounded-full transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-8 overflow-y-auto space-y-8 print:p-0 print:bg-white print:text-black">
          {/* Header CV Profile */}
          <div className="border-b border-[#45464d]/20 pb-6">
            <h1 className="font-serif text-3xl font-bold text-[#e0e3e5] mb-2">
              {portfolioData.personal.name}
            </h1>
            <p className="text-[#7bd0ff] font-medium text-sm mb-4">
              {portfolioData.personal.title}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#c6c6cd]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base text-[#7bd0ff]">mail</span>
                {portfolioData.personal.email}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base text-[#7bd0ff]">call</span>
                {portfolioData.personal.phone}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base text-[#7bd0ff]">location_on</span>
                {portfolioData.personal.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-[#7bd0ff] mb-2">
              Professional Summary
            </h3>
            <p className="text-sm text-[#c6c6cd] leading-relaxed">
              {portfolioData.personal.summary}
            </p>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-[#7bd0ff] mb-3">
              Programming &amp; Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.skills.languages.map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#0f172a] text-[#bec6e0] border border-[#7bd0ff]/20 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-[#7bd0ff] mb-4">
              Work Experience
            </h3>
            <div className="space-y-6">
              {portfolioData.experiences.map((exp) => (
                <div key={exp.id} className="border-l-2 border-[#7bd0ff]/40 pl-4 py-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-semibold text-sm text-[#e0e3e5]">{exp.role}</h4>
                    <span className="text-xs text-[#7bd0ff]">{exp.period}</span>
                  </div>
                  <p className="text-xs text-[#bec6e0] font-medium">{exp.company} — {exp.location}</p>
                  <p className="text-xs text-[#c6c6cd] mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-[#7bd0ff] mb-4">
              Education
            </h3>
            <div className="space-y-4">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="bg-[#1d2022] p-4 rounded-xl border border-[#45464d]/20">
                  <h4 className="font-semibold text-sm text-[#e0e3e5]">{edu.degree}</h4>
                  <p className="text-xs text-[#c6c6cd] mt-1">{edu.institution} ({edu.period})</p>
                  <p className="text-xs font-semibold text-[#7bd0ff] mt-1">{edu.grade}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-[#7bd0ff] mb-4">
              Courses &amp; Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {portfolioData.certifications.map((cert) => (
                <div key={cert.id} className="bg-[#1d2022] p-3 rounded-lg border border-[#45464d]/20">
                  <p className="text-xs font-semibold text-[#e0e3e5]">{cert.title}</p>
                  <p className="text-[11px] text-[#c6c6cd] mt-1">{cert.issuer} • {cert.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
