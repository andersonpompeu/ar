import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';
import { Package, Users, DollarSign, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
    const [stats, setStats] = useState({
        productsCount: 0,
        totalValue: 0,
    });

    useEffect(() => {
        const fetchStats = async () => {
            if (!supabase) return;

            const { count } = await supabase
                .from('products')
                .select('*', { count: 'exact', head: true });

            // For demo purposes, we'll just use the count
            setStats({
                productsCount: count || 0,
                totalValue: 0, // Calculate if you have price data
            });
        };

        fetchStats();
    }, []);

    const statCards = [
        {
            title: 'Total de Produtos',
            value: stats.productsCount,
            icon: Package,
            color: 'bg-blue-500',
        },
        {
            title: 'Vendas (Mês)',
            value: 'R$ 0,00',
            icon: DollarSign,
            color: 'bg-green-500',
        },
        {
            title: 'Visitantes',
            value: '0',
            icon: Users,
            color: 'bg-purple-500',
        },
        {
            title: 'Crescimento',
            value: '+0%',
            icon: TrendingUp,
            color: 'bg-orange-500',
        },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statCards.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{stat.title}</p>
                                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</h3>
                                </div>
                                <div className={`${stat.color} p-3 rounded-full text-white`}>
                                    <Icon size={24} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Atividade Recente</h2>
                <p className="text-slate-500 dark:text-slate-400">Nenhuma atividade recente para mostrar.</p>
            </div>
        </div>
    );
};

export default Dashboard;
