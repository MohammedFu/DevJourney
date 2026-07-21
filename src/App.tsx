import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { HomePage } from './pages/HomePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

export type PageTab = 'home' | 'experience' | 'projects' | 'contact';

export function App() {
  const [activePage, setActivePage] = useState<PageTab>('home');
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  // Scroll to top on page switch
  const handleNavigate = (page: PageTab) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#101415] text-[#e0e3e5] font-sans selection:bg-[#7bd0ff] selection:text-[#001e2c]">
      {/* Sticky Header Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Page Content Area */}
      <main className="flex-1 mt-16">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenCvModal={() => setIsCvModalOpen(true)}
          />
        )}
        {activePage === 'experience' && <ExperiencePage />}
        {activePage === 'projects' && (
          <ProjectsPage onNavigate={handleNavigate} />
        )}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Shared Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* CV Download / Preview Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}

export default App;
