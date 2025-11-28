import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { fetchProducts } from '../services/supabase';

const staticProducts: Product[] = [
  {
    id: 1,
    name: 'Climatizador Portátil Manual Y-5500',
    price: 1089.90,
    dimensions: '0,50 X 0,97 X 0,31',
    capacity: '40L',
    power: '150W',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3o8pFJpNacmtrg9Mb_q6AMSLGU3fGZjs1edbk7vYjxKSjawEW-r7XEfbrobxdcVbzAXomCy8ZRZokJGdHuwNSM-fJo5lLZxwivJbgImb8kPVvzUr5AN3SzgcuN2ISY7vzU3nmqKOpsdnZI6zSLm2n_ZNil_b10WIp8wUO1KOqd_VyffGkJag-Zq2uaNmdQ4wCjVxy6dOwv80QSsZZWZajZ0IRCNJ7Z4EMBKVm9SWnej0k1AdX-jlRab2A5ffEtI0RDPOmWixizYVb'
  },
  {
    id: 2,
    name: 'Climatizador Portátil Manual Y-12000',
    price: 1779.90,
    dimensions: '0,60 X 1,20 X 0,40',
    capacity: '60L',
    power: '380W',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIEHM9OiRX6H-1a7fkXKz_5zBN6npsU5hWIrqQ9WtCl03M6RQ1grfwkDfeFcHLbK78hHR9ePUxitB5nrdfzD94ryS2WbVePUCPeHXU91FaDVTTTZiZKDqo0njxKkTENMwjScYaqEmQD4dIfeBe0LZlOqQ7bEfJx6RVAocKGi835dSgFAg1VoiFOzfYJu6J89Vjt4S4WXllvxCKSYYVWj_rVyGEoZMVa7-_8EEKmNQTk6hgk6Nkp5tIzr8o8Dq6UqedZHBdYVkXG3Gh'
  },
  {
    id: 3,
    name: 'Climatizador Portátil Manual Y-16000',
    price: 2499.90,
    dimensions: '0,72 X 1,32 X 0,48',
    capacity: '100L',
    power: '480W',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3K9lNEytMm8A04unr4jLca1JpRp4-J03TRDmJMgXpZ9rMKON3p_S-vMIdoT20enRlwzS9aw146ndidTSG04lOCoGH9XotIZgvhBAqwhd6RcZG3RWsXDCFOmpGlt8vb7_vt9AGxIj5VLKBN2FwAW0a13rzR-nQYUzc7M-ILOfyCJQeccoPgVnMe62YMAfPvzoLSRHyT0uh_QLtdQTt1p79sr8w20yCkIaYl4dAOsB6yxSEAKXGHcd6EekflC4yefFqAaimmX_Evylr'
  }
];

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(staticProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProducts();
      if (data && data.length > 0) {
        setProducts(data);
      }
      setLoading(false);
    };
    loadData();
  }, []);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-background-dark/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Destaques da <span className="text-primary dark:text-secondary">Loja</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400">Os produtos mais vendidos e recomendados</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Ver catálogo completo <span className="material-icons-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {loading ? (
           <div className="flex justify-center py-20">
             <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
           </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col"
              >
                <div className="relative mb-6 overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800/50 aspect-square flex items-center justify-center">
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">OFERTA</span>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 line-clamp-2">{product.name}</h3>
                  
                  <div className="mt-auto pt-4">
                    <p className="text-xs text-slate-400 mb-1">A vista no PIX</p>
                    <div className="flex items-end gap-2 mb-4">
                      <span className="text-2xl font-bold text-primary dark:text-secondary">{formatPrice(product.price)}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6 bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                       <div className="text-center">
                         <span className="block font-bold text-slate-700 dark:text-slate-200">{product.capacity}</span>
                         Capacidade
                       </div>
                       <div className="text-center border-l border-slate-200 dark:border-slate-700">
                         <span className="block font-bold text-slate-700 dark:text-slate-200">{product.power.replace(/\D/g,'')}W</span>
                         Potência
                       </div>
                       <div className="text-center border-l border-slate-200 dark:border-slate-700">
                          <span className="block font-bold text-slate-700 dark:text-slate-200">Bivolt</span>
                          Tensão
                       </div>
                    </div>

                    <button className="w-full bg-slate-900 dark:bg-primary text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                      <span className="material-icons-outlined text-sm">shopping_cart</span>
                      Comprar Agora
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center md:hidden">
          <button className="text-primary font-semibold">Ver todos os produtos</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;