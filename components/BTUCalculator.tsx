import React, { useState } from 'react';

const BTUCalculator: React.FC = () => {
  const [area, setArea] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);
  const [sunExposure, setSunExposure] = useState<'morning' | 'afternoon'>('morning');
  const [result, setResult] = useState<number | null>(null);

  const calculateBTU = () => {
    // Basic calculation rule:
    // 600 BTU/m² (morning sun) or 800 BTU/m² (afternoon sun)
    // + 600 BTU per additional person
    
    const baseBTU = sunExposure === 'morning' ? 600 : 800;
    const peopleBTU = Math.max(0, people - 1) * 600;
    
    const total = (area * baseBTU) + peopleBTU;
    
    // Round to nearest common unit (9000, 12000, 18000, 24000, etc)
    setResult(total);
  };

  return (
    <section className="py-20 bg-white dark:bg-surface-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              Calculadora de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">BTUs</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Não sabe qual potência escolher? Use nossa calculadora inteligente para descobrir o ar condicionado ideal para o seu ambiente, garantindo eficiência energética e conforto térmico.
            </p>
            
            {result !== null && (
              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl shadow-lg text-white animate-fade-in transform hover:scale-105 transition-transform">
                <p className="text-sm uppercase tracking-wider opacity-90 mb-2">Potência Recomendada</p>
                <div className="flex items-baseline gap-2">
                   <span className="text-5xl font-extrabold">{Math.ceil(result / 1000) * 1000}</span>
                   <span className="text-xl font-medium">BTUs</span>
                </div>
                <p className="mt-4 text-sm opacity-80 border-t border-white/20 pt-4">
                  *Estimativa baseada em padrões médios. Para ambientes com muitos eletrônicos ou pé-direito alto, consulte nossos especialistas.
                </p>
              </div>
            )}
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="glass rounded-2xl p-8 shadow-xl dark:shadow-none">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Área do ambiente (m²)</label>
                  <input 
                    type="number" 
                    value={area || ''} 
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Ex: 20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Número de Pessoas</label>
                  <input 
                    type="number" 
                    value={people} 
                    onChange={(e) => setPeople(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Incidência Solar</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setSunExposure('morning')}
                      className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${sunExposure === 'morning' ? 'border-primary bg-primary/10 text-primary' : 'border-slate-200 dark:border-slate-600 text-slate-500 hover:border-primary/50'}`}
                    >
                      <span className="material-icons-outlined">wb_twilight</span>
                      <span className="text-sm font-semibold">Sol da Manhã</span>
                    </button>
                    <button 
                      onClick={() => setSunExposure('afternoon')}
                      className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${sunExposure === 'afternoon' ? 'border-orange-500 bg-orange-500/10 text-orange-500' : 'border-slate-200 dark:border-slate-600 text-slate-500 hover:border-orange-500/50'}`}
                    >
                      <span className="material-icons-outlined">wb_sunny</span>
                      <span className="text-sm font-semibold">Sol da Tarde</span>
                    </button>
                  </div>
                </div>

                <button 
                  onClick={calculateBTU}
                  className="w-full bg-slate-900 dark:bg-primary text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg mt-4"
                >
                  Calcular Potência
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BTUCalculator;