import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import DevOpsRoadmapSection from './components/DevOpsRoadmapSection';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import HireMeModal from './components/HireMeModal';
import EditPhotoModal from './components/EditPhotoModal';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [isEditPhotoOpen, setIsEditPhotoOpen] = useState(false);

  const [profileImage, setProfileImage] = useState<string>(() => {
    return localStorage.getItem('rohit_profile_image') || PERSONAL_INFO.profileImage;
  });

  const handleSaveImage = (newImage: string) => {
    setProfileImage(newImage);
    localStorage.setItem('rohit_profile_image', newImage);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#8B5CF6] selection:text-white font-sans bg-noise relative">
      {/* Custom Precision Magnetic Cursor */}
      <CustomCursor />

      {/* Navigation Top Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenHireMe={() => setIsHireMeOpen(true)}
        onOpenEditPhoto={() => setIsEditPhotoOpen(true)}
      />

      {/* Main Page Content */}
      <main className="relative z-10">
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenHireMe={() => setIsHireMeOpen(true)}
          profileImage={profileImage}
          onOpenEditPhoto={() => setIsEditPhotoOpen(true)}
        />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <DevOpsRoadmapSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <HireMeModal
        isOpen={isHireMeOpen}
        onClose={() => setIsHireMeOpen(false)}
      />

      <EditPhotoModal
        isOpen={isEditPhotoOpen}
        onClose={() => setIsEditPhotoOpen(false)}
        currentImage={profileImage}
        onSaveImage={handleSaveImage}
      />
    </div>
  );
}
