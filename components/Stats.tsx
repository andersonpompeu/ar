import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-cyan-600/50 p-8 rounded-lg backdrop-blur-sm border border-cyan-500/30">
            <span className="material-icons-outlined text-5xl mb-3">groups</span>
            <p className="text-4xl font-bold">+4.032</p>
            <p className="text-sm tracking-wider mt-2 opacity-90">SERVIÇOS PRESTADOS</p>
          </div>
          <div className="bg-cyan-600/50 p-8 rounded-lg backdrop-blur-sm border border-cyan-500/30">
            <span className="material-icons-outlined text-5xl mb-3">business</span>
            <p className="text-4xl font-bold">9</p>
            <p className="text-sm tracking-wider mt-2 opacity-90">ANOS NO MERCADO</p>
          </div>
          <div className="bg-cyan-600/50 p-8 rounded-lg backdrop-blur-sm border border-cyan-500/30">
            <span className="material-icons-outlined text-5xl mb-3">inventory_2</span>
            <p className="text-4xl font-bold">+2.521</p>
            <p className="text-sm tracking-wider mt-2 opacity-90">PRODUTOS VENDIDOS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;