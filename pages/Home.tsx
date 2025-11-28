import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import BTUCalculator from '../components/BTUCalculator';
import About from '../components/About';
import Stats from '../components/Stats';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
    return (
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
    );
};

export default Home;
