import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Stats from './components/Stats';
import Footer from './components/Footer';
import BTUCalculator from './components/BTUCalculator';
import WhatsAppButton from './components/WhatsAppButton';
import FAQ from './components/FAQ';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-display selection:bg-primary selection:text-white">
      <Navbar currentScreen={currentScreen} onNavigate={navigateTo} />
      
      <main className="flex-grow">
        {currentScreen === 'home' && (
          <div className="animate-fade-in">
            <Hero />
            <Categories />
            <FeaturedProducts />
            <BTUCalculator />
            <About />
            <Stats />
            <FAQ />
            <div className="bg-primary py-16 px-6 text-center text-white relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
               <div className="relative z-10 max-w-2xl mx-auto">
                 <h3 className="text-3xl font-bold mb-6">Pronto para transformar seu ambiente?</h3>
                 <p className="mb-8 opacity-90">Fale com nossos especialistas e solicite um orçamento personalizado hoje mesmo.</p>
                 <button className="bg-white text-primary px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                   Solicitar Orçamento
                 </button>
               </div>
            </div>
          </div>
        )}

        {currentScreen === 'products' && (
          <div className="animate-fade-in">
            <div className="bg-slate-50 dark:bg-background-dark py-12 text-center">
               <h1 className="text-4xl font-bold text-slate-800 dark:text-white">Catálogo de Produtos</h1>
               <p className="text-slate-500 mt-2">Tecnologia e eficiência para sua climatização</p>
            </div>
            <FeaturedProducts />
            <BTUCalculator />
          </div>
        )}

        {currentScreen === 'services' && (
          <div className="animate-fade-in">
             <div className="bg-slate-50 dark:bg-background-dark py-12 text-center">
               <h1 className="text-4xl font-bold text-slate-800 dark:text-white">Nossos Serviços</h1>
               <p className="text-slate-500 mt-2">Instalação, manutenção e muito mais</p>
            </div>
            <Services />
            <Testimonials />
            <FAQ />
          </div>
        )}
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;