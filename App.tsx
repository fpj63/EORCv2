import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import LanguageSelector from './components/LanguageSelector';
import Home from './pages/Home';
import Presentation from './pages/Presentation';
import CalendarPage from './pages/Calendar';
import Contact from './pages/Contact';
import Clergy from './pages/Clergy';
import ParishLife from './pages/ParishLife';
import Gallery from './pages/Gallery';
import Ortodoxia from './pages/Ortodoxia';
import Biserica from './pages/Biserica';
import { Language } from './types';

function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Simple visual fade effect when changing tabs
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsAnimating(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
  };

  // Render the active content
  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home currentLang={currentLang} onTabChange={handleTabChange} />;
      case 'presentation': return <Presentation currentLang={currentLang} />;
      case 'biserica': return <Biserica currentLang={currentLang} />;
      case 'ortodoxia': return <Ortodoxia currentLang={currentLang} />;
      case 'clergy': return <Clergy currentLang={currentLang} />;
      case 'parish_life': return <ParishLife currentLang={currentLang} />;
      case 'calendar': return <CalendarPage currentLang={currentLang} />;
      case 'gallery': return <Gallery currentLang={currentLang} />;
      case 'contact': return <Contact currentLang={currentLang} />;
      default: return <Home currentLang={currentLang} onTabChange={handleTabChange} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300 font-sans selection:bg-ortho-red selection:text-white">
      
      {/* Sidebar Navigation */}
      <Sidebar 
        currentLang={currentLang}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 transition-all duration-300 md:ml-0 mt-16 md:mt-0">
        
        {/* Top Bar for Language Selection (Sticky on Desktop) */}
        <header className="sticky top-0 z-30 bg-stone-100/90 backdrop-blur-lg border-b border-stone-200 flex justify-end items-center px-4 md:px-8 h-16 shadow-sm">
           <LanguageSelector 
             currentLang={currentLang}
             onLanguageChange={setCurrentLang}
           />
        </header>

        {/* Page Content */}
        <div className="flex-1 p-4 md:p-10 max-w-7xl mx-auto w-full">
          <div className={`transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            {renderContent()}
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;