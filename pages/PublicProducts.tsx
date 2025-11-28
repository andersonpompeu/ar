import React from 'react';
import FeaturedProducts from '../components/FeaturedProducts';
import BTUCalculator from '../components/BTUCalculator';

const PublicProducts: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <div className="bg-slate-50 dark:bg-background-dark py-12 text-center">
                <h1 className="text-4xl font-bold text-slate-800 dark:text-white">Catálogo de Produtos</h1>
                <p className="text-slate-500 mt-2">Tecnologia e eficiência para sua climatização</p>
            </div>
            <FeaturedProducts />
            <BTUCalculator />
        </div>
    );
};

export default PublicProducts;
