import { useState } from 'react';
import { motion, AnimatePresence } from './utils/motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { ParticleBackground } from './components/ParticleBackground';
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

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-app)] text-[var(--text-main)] font-sans selection:bg-[#b794f4]/30 selection:text-[var(--text-accent)] relative transition-colors duration-300">
      {/* Interactive Particle Constellation Canvas */}
      <ParticleBackground />

      {/* Sticky Header Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Page Content Area with Animated Page Switching */}
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HomePage
                onNavigate={handleNavigate}
                onOpenCvModal={() => setIsCvModalOpen(true)}
              />
            </motion.div>
          )}

          {activePage === 'experience' && (
            <motion.div
              key="experience"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ExperiencePage />
            </motion.div>
          )}

          {activePage === 'projects' && (
            <motion.div
              key="projects"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ProjectsPage onNavigate={handleNavigate} />
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
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
