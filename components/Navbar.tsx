import React, { useState, useEffect } from 'react';
import { Screen } from '../types';

interface NavbarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentScreen, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference or localStorage
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNav = (screen: Screen) => {
    onNavigate(screen);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const linkClass = (screen: Screen) => 
    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-primary dark:hover:text-secondary cursor-pointer
    ${currentScreen === screen ? 'text-primary dark:text-secondary' : 'text-slate-600 dark:text-slate-300'}`;

  const mobileLinkClass = (screen: Screen) =>
    `block px-4 py-3 text-base font-medium rounded-lg transition-colors
    ${currentScreen === screen 
      ? 'bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary' 
      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`;

  return (
    <header className="sticky top-4 z-50 px-4 mb-4">
      <div className="glass container mx-auto rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20">
        <div className="flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <a className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNav('home')}>
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-2.5 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
              <span className="material-icons-outlined text-2xl">ac_unit</span>
            </div>
            <div>
              <span className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">CLIMATEC</span>
              <p className="text-[10px] font-bold tracking-[0.2em] text-primary dark:text-secondary uppercase">Ar Condicionado</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              <a className={linkClass('home')} onClick={() => handleNav('home')}>
                INÍCIO
                {currentScreen === 'home' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary dark:bg-secondary rounded-full animate-fade-in"></span>}
              </a>
              <a className={linkClass('products')} onClick={() => handleNav('products')}>
                PRODUTOS
                {currentScreen === 'products' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary dark:bg-secondary rounded-full animate-fade-in"></span>}
              </a>
              <a className={linkClass('services')} onClick={() => handleNav('services')}>
                SERVIÇOS
                {currentScreen === 'services' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary dark:bg-secondary rounded-full animate-fade-in"></span>}
              </a>
              <a className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-secondary cursor-pointer transition-colors" onClick={scrollToContact}>
                CONTATO
              </a>
            </nav>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>

            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              <span className="material-icons-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            >
              <span className="material-icons-outlined text-xl">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button 
              className="text-slate-800 dark:text-white p-1"
              onClick={toggleMenu}
            >
              <span className="material-icons-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'} overflow-hidden transition-all duration-300 ease-in-out md:hidden border-t border-slate-100 dark:border-slate-800 px-4`}>
          <nav className="flex flex-col gap-2">
            <a className={mobileLinkClass('home')} onClick={() => handleNav('home')}>INÍCIO</a>
            <a className={mobileLinkClass('products')} onClick={() => handleNav('products')}>PRODUTOS</a>
            <a className={mobileLinkClass('services')} onClick={() => handleNav('services')}>SERVIÇOS</a>
            <a className="block px-4 py-3 text-base font-medium text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer" onClick={scrollToContact}>CONTATO</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;