import React from 'react';

const Hero: React.FC = () => {
  const categories = [
    { icon: 'fitness_center', label: 'Academias' },
    { icon: 'desktop_windows', label: 'Escritórios' },
    { icon: 'shopping_cart', label: 'Supermercados' },
    { icon: 'celebration', label: 'Eventos' },
    { icon: 'warehouse', label: 'Indústrias' },
    { icon: 'precision_manufacturing', label: 'Produção' },
  ];

  return (
    <section className="relative pt-10 pb-20 lg:pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[100px] -z-10 animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-wide mb-6 animate-fade-in">
          CLIMATIZAÇÃO INTELIGENTE
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight animate-slide-up">
          Onde é possível <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">instalar climatizadores?</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Soluções versáteis para qualquer ambiente. Da sua casa à sua empresa, garantimos a temperatura ideal com eficiência e economia.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center p-4 min-w-[120px] bg-white dark:bg-surface-dark rounded-2xl shadow-sm hover:shadow-xl dark:shadow-none border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent rounded-full mb-3 group-hover:scale-110 transition-transform">
                <span className="material-icons-outlined text-2xl">{cat.icon}</span>
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;