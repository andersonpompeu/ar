import React from 'react';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const ServicesPage: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <div className="bg-slate-50 dark:bg-background-dark py-12 text-center">
                <h1 className="text-4xl font-bold text-slate-800 dark:text-white">Nossos Serviços</h1>
                <p className="text-slate-500 mt-2">Instalação, manutenção e muito mais</p>
            </div>
            <Services />
            <Testimonials />
            <FAQ />
        </div>
    );
};

export default ServicesPage;
