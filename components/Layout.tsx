
import React, { useState, useEffect } from 'react';
import { TabType, Theme } from '../types';
import { PawPrint, Phone, Mail, Instagram, Twitter, Facebook, Menu, X, Sun, Moon } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as Theme;
      return saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const navItems = [
    { id: 'home', label: 'About Us' },
    { id: 'dogs', label: 'Dogs' },
    { id: 'cats', label: 'Cats' },
    { id: 'other', label: 'Other Animals' }
  ];

  const handleTabClick = (id: TabType) => {
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Top Banner */}
      <div className="bg-emerald-900 dark:bg-emerald-950 text-white py-2 px-4 text-[10px] md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 md:gap-4">
            <span className="flex items-center gap-1"><Phone size={12} className="md:w-3.5" /> (555) 123-4567</span>
            <span className="hidden sm:flex items-center gap-1"><Mail size={12} className="md:w-3.5" /> hello@pawsandwhiskers.com</span>
          </div>
          <div className="flex gap-3 items-center">
            <Facebook size={14} className="cursor-pointer hover:text-emerald-300 transition-colors md:w-4" />
            <Twitter size={14} className="cursor-pointer hover:text-emerald-300 transition-colors md:w-4" />
            <Instagram size={14} className="cursor-pointer hover:text-emerald-300 transition-colors md:w-4" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => handleTabClick('home')}
            >
              <div className="p-1.5 md:p-2 bg-emerald-600 rounded-lg md:rounded-xl text-white transform group-hover:rotate-12 transition-transform">
                <PawPrint size={20} fill="currentColor" className="md:w-6" />
              </div>
              <span className="text-lg md:text-2xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                Paws <span className="text-emerald-600">&</span> Whiskers
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id as TabType)}
                  className={`text-sm font-semibold transition-all duration-200 hover:text-emerald-600 relative py-2 ${
                    activeTab === tab.id ? 'text-emerald-600' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </button>
              ))}
              
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-700" />

              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 dark:shadow-emerald-900/20">
                Book Visit
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
              </button>
              <button 
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 top-[calc(44px+16px)] md:hidden z-40 bg-white dark:bg-slate-900 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          <div className="p-6 flex flex-col gap-4">
            {navItems.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id as TabType)}
                className={`text-left px-6 py-4 rounded-2xl text-lg font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600' 
                    : 'text-slate-600 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-8">
              <button className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-emerald-100 dark:shadow-emerald-900/20">
                Book Appointment
              </button>
              <div className="flex justify-center gap-8 mt-10">
                <Facebook className="text-slate-400 hover:text-emerald-600" />
                <Twitter className="text-slate-400 hover:text-emerald-600" />
                <Instagram className="text-slate-400 hover:text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-white pt-12 md:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-emerald-500 rounded-lg">
                  <PawPrint size={20} fill="currentColor" />
                </div>
                <span className="text-xl md:text-2xl font-bold">Paws & Whiskers</span>
              </div>
              <p className="text-slate-400 max-w-sm mb-6 leading-relaxed text-sm md:text-base">
                Dedicated to providing compassionate, world-class veterinary care for the pets you love. Our team of experts is here for every paw and whisker.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3 md:space-y-4 text-slate-400 text-sm md:text-base">
                <li className="hover:text-emerald-400 cursor-pointer transition-colors" onClick={() => setActiveTab('dogs')}>Our Services</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors" onClick={() => setActiveTab('home')}>Meet the Vets</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors" onClick={() => setActiveTab('other')}>Patient Stories</li>
                <li className="hover:text-emerald-400 cursor-pointer transition-colors">Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-3 md:space-y-4 text-slate-400 text-sm md:text-base">
                <li>123 Pet Lane, Health City</li>
                <li>(555) 123-4567</li>
                <li>Mon - Fri: 8am - 8pm</li>
                <li>Sat - Sun: 10am - 4pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] md:text-sm text-center">
            <p>© 2025 Paws & Whiskers Wellness. All rights reserved.</p>
            <div className="flex gap-4 md:gap-6">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
